import { Airport } from ".prisma/client";
import React from "react";
import AirportPoly from "./airport/AirportPoly";

interface props {
  airports: Airport[];
}
const AirportsContainer = (props: props) => {
  return (
    <>
      {props.airports.map((airport) => (
        <AirportPoly airport={airport} key={airport.id} />
      ))}
    </>
  );
};

export default AirportsContainer;
