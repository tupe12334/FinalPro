import { Airplane } from ".prisma/client";
import React from "react";
import AirplaneMarker from "./AirplaneMarker";
interface props {
  airplane: Airplane;
}
const AirplaneContainer = (props: props) => {
  return (
    <div>
      <AirplaneMarker airplane={props.airplane} />
    </div>
  );
};

export default AirplaneContainer;
