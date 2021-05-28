import { Airport } from ".prisma/client";
import React from "react";
import { Marker } from "react-leaflet";
interface props {
  airport: Airport;
}
const TerminalMarker = (props: props) => {
  return <Marker></Marker>;
};

export default TerminalMarker;
