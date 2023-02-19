export interface GisParameters {
  container: HTMLDivElement;
  accessToken: string;
  zoom: number;
  center: [number, number];
  pitch: number;
  bearing: number;
  buildings: Building[];
}

export interface Building {
  uid: string;
  userID: string;
  lat: number;
  lng: number;
  name: string;
}

export interface LngLat {
  lng: number;
  lat: number;
}
