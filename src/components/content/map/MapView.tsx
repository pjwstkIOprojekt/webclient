import { useLoadScript } from "@react-google-maps/api"
import Map from "./Map"

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"]
  });

  return isLoaded ? <Map /> : <div>Loading...</div>;
};

export default MapView;