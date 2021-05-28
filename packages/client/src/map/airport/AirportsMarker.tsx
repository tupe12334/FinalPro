import { Airport } from ".prisma/client";
import { DivIcon, Icon } from "leaflet";
import React from "react";
import { Marker } from "react-leaflet";
import airplane from "../../assets/airplane.svg";

interface props {
  airport: Airport;
}
const AirportsMarker = (props: props) => {
  const cor = props.airport.Coordinates.split("/");
  return (
    <Marker
      position={{ lat: Number(cor[0]), lng: Number(cor[1]) }}
      title={props.airport.ICAO}
    ></Marker>
  );
};

export default AirportsMarker;
