import { Airplane } from ".prisma/client";
import React from "react";
import { Marker, Rectangle, SVGOverlay } from "react-leaflet";
import airplane from "../../../public/assets/airplane.svg";

interface props {
  airplane: Airplane;
}
const AirplaneMarker = (props: props) => {
  return (
    <div>
      {/* <Rectangle></Rectangle> */}
      {/* <SVGOverlay ></SVGOverlay> */}
      {/* <Marker></Marker> */}
    </div>
  );
};

export default AirplaneMarker;
