import { Runway } from ".prisma/client";
import { Airport } from ".prisma/client";
import React from "react";
import { Polyline } from "react-leaflet";

interface props {
  airport: Airport;
  runways: Runway[];
}
const AirportRunways = (props: props) => {
  return (
    <>
      {props.runways.map((runway) => {
        const cor = runway.coordinates!.split("/");
        return (
          <Polyline
            key={runway.airportId + runway.direction}
            pathOptions={{}}
            positions={[
              { lat: Number(cor[0]), lng: Number(cor[1]) },
              // { lat: 32.0143, lng: 34.8668 },

              { lat: 31.9995, lng: 34.895 },
            ]}
          />
        );
      })}
    </>
  );
};

export default AirportRunways;
