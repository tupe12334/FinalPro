import { Airplane } from ".prisma/client";
import { useLeafletContext } from "@react-leaflet/core";
import L, { LatLng, LatLngBounds } from "leaflet";
import React, { useEffect, useState } from "react";

interface props {
  airplane: Airplane;
}
const AirplaneMarker = (props: props) => {
  const context = useLeafletContext();
  const [dir, setDir] = useState(90);
  useEffect(() => {
    const airplane = new L.SVGOverlay(
      ` <svg
     version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     x="0px"
     y="0px"
     viewBox="0 0 1000 1000"
   >
     <g>
       <path
         d="M584.3,832.5l12.1-193.3l372.8,184.4V711.4l-366-342.8V153c0-57-46.2-143-103.1-143c-57,0-103.1,86.1-103.1,143v215.6l-366,342.8v112.1l366.6-184.4l15,209.2c0,5.1,0.6,9.9,1.1,14.7L347,923.4V990l153.9-50.9l2.4-0.8L650.7,990v-66.6L582,861.2L584.3,832.5z"
         style={{
           transform: rotate(${dir}deg),
           transformOrigin: "50% 50%",
         }}
       />
     </g>
   </svg>`,
      new LatLngBounds(
        new LatLng(props.airplane.lat - 0.003, props.airplane.lng - 0.003),
        new LatLng(props.airplane.lat + 0.003, props.airplane.lng + 0.003)
      )
    );
    airplane.on("click", (e) => {
      console.log(e);
    });
    const container = context.layerContainer || context.map;
    // container.addLayer(airplane);

    return () => {
      container.removeLayer(airplane);
    };
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     const newDir = dir + 10;
  //     console.log(dir);
  //     setDir(newDir);
  //     console.log(newDir);
  //   }, 1000);
  // }, [dir]);
  // console.log(svg.current);
  // const bounds = L.latLng(props.airplane.lat, props.airplane.lng);

  useEffect(() => {
    // const square = new L.Rectangle(
    //   new LatLngBounds(
    //     new LatLng(props.airplane.lat - 0.003, props.airplane.lng - 0.003),
    //     new LatLng(props.airplane.lat + 0.003, props.airplane.lng + 0.003)
    //   )
    // );
    // square.on("click", (e) => {
    //   console.log(e);
    // });
    // return () => {
    //   // container.removeLayer(square);
    // };
  });
  return (
    <>
      {/* <SVGOverlay
        attributes={{}}
        bounds={[
          [props.airplane.lat - 0.003, props.airplane.lng - 0.003],
          [props.airplane.lat + 0.003, props.airplane.lng + 0.003],
        ]}
        ref={svg}
      > */}
      {/* <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        ref={svg}
        onClick={() => {
          console.log("dsaflkhlksah");
        }}
        // enable-background="new 0 0 1000 1000"
      >
        <g>
          <path
            d="M584.3,832.5l12.1-193.3l372.8,184.4V711.4l-366-342.8V153c0-57-46.2-143-103.1-143c-57,0-103.1,86.1-103.1,143v215.6l-366,342.8v112.1l366.6-184.4l15,209.2c0,5.1,0.6,9.9,1.1,14.7L347,923.4V990l153.9-50.9l2.4-0.8L650.7,990v-66.6L582,861.2L584.3,832.5z"
            style={{
              transform: `rotate(${dir}deg)`,
              transformOrigin: "50% 50%",
            }}
          />
        </g>
      </svg> */}
      {/* </SVGOverlay> */}
    </>
  );
};

export default AirplaneMarker;
