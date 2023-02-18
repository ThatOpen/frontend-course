import { MapScene } from "./map-scene";

export const mapHandler = {
  viewer: null as MapScene | null,

  start(container: HTMLDivElement) {
    if (!this.viewer) {
      console.log(container);
      this.viewer = new MapScene(container);
    }
  },

  remove() {
    if (this.viewer) {
      console.log("Hei");
      this.viewer.dispose();
      this.viewer = null;
    }
  },
};
