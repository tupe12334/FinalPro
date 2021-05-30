import { Prisma, Waypoint } from ".prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WaypointContainer from "./Waypoint.Container";

const WaypointsContainer = () => {
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/${Prisma.ModelName.Waypoint}/all`
      )
      .then((res) => res.data)
      .then((data) => {
        setWaypoints(data);
      });
  }, []);
  return (
    <>
      {waypoints.map((waypoint) => (
        <WaypointContainer waypoint={waypoint} key={waypoint.name} />
      ))}
    </>
  );
};

export default WaypointsContainer;
