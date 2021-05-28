import React, { useEffect, useState } from "react";
import { Airport } from ".prisma/client";
import AirportsMarker from "./AirportsMarker";
import AirportRunways from "./AirportRunways";
import axios from "axios";
import TerminalMarker from "./TerminalMarker";

interface props {
  airport: Airport;
}
const AirportPoly = (props: props) => {
  const [runways, setRunways] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/airport/runways/icao/${props.airport.ICAO}`
      )
      .then((res) => res.data)
      .then((data) => {
        setRunways(data);
        // console.log(data);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <AirportsMarker airport={props.airport} />
      <AirportRunways airport={props.airport} runways={runways} />
      <TerminalMarker airport={props.airport} />
    </>
  );
};

export default AirportPoly;
