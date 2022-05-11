import { MarkGeocodeEventHandlerFn, MarkGeocodeEvent } from "leaflet-control-geocoder/dist/control";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import Geocoder from "leaflet-control-geocoder";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

export interface Position {
  coords: [number, number],
  desc?: string,
  icon?: L.Icon<L.IconOptions> | L.DivIcon
}

export interface MapParams {
  center: [number, number],
  initialZoom: number,
  marks?: Position[],
  searchable?: boolean,
  onSearch?: MarkGeocodeEventHandlerFn
}

const Map = (props: Readonly<MapParams>) => {
  let count = 0;

  return (
    <MapContainer center={props.center} zoom={props.initialZoom}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.searchable ? <GeocoderMenu onSearch={props.onSearch} /> : ""}
      {props.marks ? props.marks.map(pos => (
        <Marker key={count++} position={pos.coords} icon={pos.icon}>
          {pos.desc ? <Popup>{pos.desc}</Popup> : ""}
        </Marker>
      )) : ""}
    </MapContainer>
  );
};

interface GeocodeParams {
  onSearch?: MarkGeocodeEventHandlerFn
}

const GeocoderMenu = (props: Readonly<GeocodeParams>) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = new Geocoder({
      query: "",
      placeholder: "Szukaj...",
      defaultMarkGeocode: false
    });

    const search = (e: MarkGeocodeEvent) => {
      map.setView(e.geocode.center);
    };

    geocoder.on("markgeocode", props.onSearch ? props.onSearch : search);
    geocoder.addTo(map);

    return () => {
      geocoder.remove();
    };
  }, [map, props.onSearch]);

  return null;
};

export default Map;
