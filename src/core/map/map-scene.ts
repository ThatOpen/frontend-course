import * as THREE from "three";
import * as OBC from "openbim-components";
import * as MAPBOX from "mapbox-gl";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { GisParameters, Building, LngLat } from "./types";
import { MAPBOX_KEY } from "../../config";
import { User } from "firebase/auth";
import { MapDatabase } from "./map-database";
import { Events } from "../../middleware/event-handler";

export class MapScene {
  private components = new OBC.Components();
  private readonly style = "mapbox://styles/mapbox/light-v10";
  private map: MAPBOX.Map;
  private clickedCoordinates: LngLat = { lat: 0, lng: 0 };
  private center: LngLat = { lat: 0, lng: 0 };
  private labels: { [id: string]: CSS2DObject } = {};
  private database = new MapDatabase();
  private events: Events;

  constructor(container: HTMLDivElement, events: Events) {
    this.events = events;
    const config = this.getConfig(container);
    this.map = this.createMap(config);
    this.initializeComponent(config);
    this.createScene();
  }

  dispose() {
    this.components.dispose();
    (this.map as any) = null;
    (this.components as any) = null;
    for (const id in this.labels) {
      const label = this.labels[id];
      label.removeFromParent();
      label.element.remove();
    }
    this.labels = {};
  }

  async getAllBuildings(user: User) {
    const buildings = await this.database.getBuildings(user);
    if (!this.components) return;
    this.addToScene(buildings);
  }

  async addBuilding(user: User) {
    const { lat, lng } = this.clickedCoordinates;
    const userID = user.uid;
    const building = { userID, lat, lng, uid: "" };
    building.uid = await this.database.add(building);
    this.addToScene([building]);
  }

  private addToScene(buildings: Building[]) {
    for (const building of buildings) {
      const { uid, lng, lat } = building;

      const htmlElement = this.createHTMLElement(uid);

      const label = new CSS2DObject(htmlElement);

      const center = MAPBOX.MercatorCoordinate.fromLngLat(
        { ...this.center },
        0
      );

      const units = center.meterInMercatorCoordinateUnits();

      const model = MAPBOX.MercatorCoordinate.fromLngLat({ lng, lat }, 0);
      model.x /= units;
      model.y /= units;
      center.x /= units;
      center.y /= units;

      label.position.set(model.x - center.x, 0, model.y - center.y);

      this.components.scene.get().add(label);
      this.labels[uid] = label;
    }
  }

  private createHTMLElement(id: string) {
    const div = document.createElement("div");
    div.textContent = "🏢";
    div.onclick = () => {
      this.events.trigger({ type: "OPEN_BUILDING", payload: id });
    };
    div.classList.add("thumbnail");
    return div;
  }

  private initializeComponent(config: GisParameters) {
    this.components.scene = new OBC.SimpleScene(this.components);
    this.components.camera = new OBC.MapboxCamera();
    this.components.renderer = this.createRenderer(config);
    this.components.init();
  }

  private getCoordinates(config: GisParameters) {
    const merc = MAPBOX.MercatorCoordinate;
    return merc.fromLngLat(config.center, 0);
  }

  private createRenderer(config: GisParameters) {
    const coords = this.getCoordinates(config);
    return new OBC.MapboxRenderer(this.components, this.map, coords);
  }

  private createMap(config: GisParameters) {
    const map = new MAPBOX.Map({
      ...config,
      style: this.style,
      antialias: true,
    });
    map.on("contextmenu", this.storeMousePosition);
    return map;
  }

  private storeMousePosition = (event: MAPBOX.MapMouseEvent) => {
    this.clickedCoordinates = { ...event.lngLat };
  };

  private createScene() {
    const scene = this.components.scene.get();
    scene.background = null;
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    scene.add(directionalLight);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    scene.add(directionalLight2);
  }

  private getConfig(container: HTMLDivElement) {
    const center = [7.730277288470006, 63.110047455818375] as [number, number];
    this.center = { lng: center[0], lat: center[1] };
    return {
      container,
      accessToken: MAPBOX_KEY,
      zoom: 15.35,
      pitch: 60,
      bearing: -40,
      center,
      buildings: [],
    };
  }
}
