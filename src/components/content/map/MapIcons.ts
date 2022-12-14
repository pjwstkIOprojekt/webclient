import L from "leaflet";

const createIcon = (url: string) => L.icon({
  iconSize: [35, 41],
  iconAnchor: [16, 21],
  popupAnchor: [2, -10],
  iconUrl: url
});

export const ambulanceIcon = createIcon("/img/map/ambulance_icon.svg");
export const accidentIcon = createIcon("/img/map/accident_icon.svg");
export const floodIcon = createIcon("/img/map/flood_icon.svg");
export const fireIcon = createIcon("/img/map/fire_icon.svg");
export const placeholderIcon = createIcon("/img/map/placeholder_icon.svg");
export const heartIcon = createIcon("/img/map/heart_icon.svg");
export const suicideIcon = createIcon("/img/map/suicide_icon.svg");
export const covidIcon = createIcon("/img/map/covid_icon.svg");
export const hospitalIcon = createIcon("/img/map/hospital_icon.svg");
export const policeIcon = createIcon("/img/map/police_icon.svg");
export const fireUnitIcon = createIcon("/img/map/fire_department_icon.svg");
export const guardIcon = createIcon("/img/map/guard_icon.svg");
export const aedIcon = createIcon("/img/map/aed_icon.svg");
