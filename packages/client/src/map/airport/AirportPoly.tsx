import { Airport } from ".prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AirportRunways from "./AirportRunways";
import AirportsMarker from "./AirportsMarker";
import TerminalsContainer from "./Terminals.Container";

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
      <TerminalsContainer airport={props.airport} />
    </>
  );
};

export default AirportPoly;
