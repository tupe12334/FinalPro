import axios from "axios";
import { LatLng, LatLngBounds } from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import AirplanesMarkers from "./AirplanesMarkers";
import AirportsMarker from "./airport/AirportsMarker";
import AirportRunways from "./airport/AirportRunways";
import AirportsContainer from "./AirportsContainer";
import AirplanesContainer from "./AirplanesContainer";
const InsideMap = () => {
  const [airports, setAirports] = useState<any[]>([]);
  const map = useMap();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/airport/all")
      .then((res) => res.data)
      .then((data: { Coordinates: string }[]) => {
        setAirports(data);
        const mainAirport = data[0];
        const latLog = mainAirport.Coordinates.split("/");
        map.flyTo(
          {
            lat: Number(latLog[0]),
            lng: Number(latLog[1]),
          },
          13
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <AirportsContainer airports={airports} />
      <AirplanesContainer />
    </>
  );
};

export default InsideMap;
