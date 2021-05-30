import { Waypoint } from ".prisma/client";
import React from "react";
import { Marker } from "react-leaflet";
interface props {
  waypoint: Waypoint;
}
const WaypointContainer = (props: props) => {
  console.log(props);

  return (
    <Marker
      position={{ lat: props.waypoint.lat, lng: props.waypoint.lng }}
    ></Marker>
  );
};

export default WaypointContainer;
