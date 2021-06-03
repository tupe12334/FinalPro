import { Airplane } from ".prisma/client";
import { Prisma } from ".prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AirplaneMarker from "./AirplaneMarker";

const AirplanesContainer = () => {
  const [airplanes, setAirplanes] = useState<Airplane[]>([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/${Prisma.ModelName.Airplane}/all`
      )
      .then((res) => res.data)
      .then((data) => {
        setAirplanes(data);
      });
  }, []);
  return (
    <>
      {airplanes.map((airplane) => {
        if (airplane.lat) {
          return (
            <>
              <AirplaneMarker airplane={airplane} key={airplane.id} />
            </>
          );
        }
      })}
    </>
  );
};

export default AirplanesContainer;
