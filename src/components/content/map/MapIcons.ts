import L from "leaflet";

const small: [number, number] = [25, 41];
const big: [number, number] = [35, 41];
const smallAnchor: [number, number] = [13, 41];
const bigAnchor: [number, number] = [17, 41];
const smallPopup: [number, number] = [0, -40];
const bigPopup: [number, number] = [1, -40];
const bigShadow: [number, number] = [5, 41];
const shadow = "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png";

export const accidentIcon = L.icon({
  iconSize: small,
  iconAnchor: smallAnchor,
  popupAnchor: smallPopup,
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1504px-Map_pin_icon.svg.png",
  shadowUrl: shadow
});

export const ambulanceIcon = L.icon({
  iconSize: small,
  iconAnchor: smallAnchor,
  popupAnchor: smallPopup,
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: shadow
});

export const facilityIcon = L.icon({
  iconSize: big,
  iconAnchor: bigAnchor,
  popupAnchor: bigPopup,
  shadowAnchor: bigShadow,
  iconUrl: "https://cdn-icons-png.flaticon.com/512/8/8115.png?w=826&t=st=1666208765~exp=1666209365~hmac=e2449742142cbe00032697d49c7d236b48769e71bb872561825ba786688ddfc3",
  shadowUrl: shadow
});

export const terroristIcon = L.icon({
  iconSize: big,
  iconAnchor: bigAnchor,
  popupAnchor: bigPopup,
  shadowAnchor: bigShadow,
  iconUrl: "https://freesvg.org/img/Map-Warning-Icon.png",
  shadowUrl: shadow
});

export const fireIcon = L.icon({
  iconSize: big,
  iconAnchor: bigAnchor,
  popupAnchor: bigPopup,
  shadowAnchor: bigShadow,
  iconUrl: "https://cdn3.iconfinder.com/data/icons/map-markers-2-1/512/danger-512.png",
  shadowUrl: shadow
});

export const alertIcon = L.icon({
  iconSize: big,
  iconAnchor: bigAnchor,
  popupAnchor: bigPopup,
  shadowAnchor: bigShadow,
  iconUrl: "https://cdn2.iconfinder.com/data/icons/danger-problems-2/512/xxx013-512.png",
  shadowUrl: shadow
});

export const policeIcon = L.icon({
  iconSize: big,
  iconAnchor: bigAnchor,
  popupAnchor: bigPopup,
  shadowAnchor: bigShadow,
  iconUrl: "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-20-512.png",
  shadowUrl: shadow
});

export const covidIcon = L.icon({
  iconSize: big,
  iconAnchor: bigAnchor,
  popupAnchor: bigPopup,
  shadowAnchor: bigShadow,
  iconUrl: "https://img.icons8.com/cotton/344/coronavirus-hospital-map-pin--v2.png",
  shadowUrl: shadow
});
