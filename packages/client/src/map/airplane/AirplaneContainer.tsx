import { Airplane } from ".prisma/client";
import React from "react";
interface props {
  airplane: Airplane;
}
const AirplaneContainer = (props: props) => {
  return <div>{/* <AirplaneMarker /> */}</div>;
};

export default AirplaneContainer;
