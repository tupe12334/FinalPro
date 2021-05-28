import { Terminal } from ".prisma/client";
import { Airport } from ".prisma/client";
import axios from "axios";
import { Icon, LatLngBounds, Point } from "leaflet";
import React, { useEffect, useState } from "react";
import { Marker, SVGOverlay } from "react-leaflet";
interface props {
  airport: Airport;
  terminal: Terminal;
}
const TerminalMarker = (props: props) => {
  // console.log(props.terminal);

  return (
    <Marker
      position={{ lat: props.terminal.lat, lng: props.terminal.lng }}
      title={props.airport.ICAO + " terminal: " + props.terminal.terminalName}
      icon={
        new Icon({
          iconUrl: require("../../assets/terminal.svg"),
          iconRetinaUrl: require("../../assets/terminal.svg"),
          iconSize: [50, 50],
          className: "leaflet-div-icon",
        })
      }
    ></Marker>
    // <SVGOverlay
    //   attributes={{ stroke: "red" }}
    //   bounds={new LatLngBounds([[props.terminal.lat, props.terminal.lng]])}
    // >
    //   {require("../../assets/terminal.svg")}
    // </SVGOverlay>
  );
};

export default TerminalMarker;
