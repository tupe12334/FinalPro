import { Airport, Terminal } from ".prisma/client";
import { Icon } from "leaflet";
import React from "react";
import { Marker, SVGOverlay } from "react-leaflet";
interface props {
  airport: Airport;
  terminal: Terminal;
}
const TerminalMarker = (props: props) => {
  // console.log(props.terminal);

  return (
    // <Marker
    //   position={{ lat: props.terminal.lat, lng: props.terminal.lng }}
    //   title={props.airport.ICAO + " terminal: " + props.terminal.terminalName}
    //   icon={
    //     new Icon({
    //       iconUrl: require("../../assets/terminal.svg"),
    //       iconRetinaUrl: require("../../assets/terminal.svg"),
    //       iconSize: [50, 50],
    //       className: "leaflet-div-icon",
    //     })
    //   }
    // ></Marker>
    <SVGOverlay
      attributes={{}}
      bounds={[
        [props.terminal.lat - 0.003, props.terminal.lng - 0.003],
        [props.terminal.lat + 0.003, props.terminal.lng + 0.003],
      ]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 40 50"
        enable-background="new 0 0 40 40"
      >
        <g>
          <path d="M38.049,21.017L31,21v-3.48c0-0.616-0.529-1.52-1.141-1.52H16.144C15.53,16,15,16.904,15,17.52V21L0.779,21.017   C0.354,21.142,0,21.517,0,21.978V38c0,0.617,0.386,1,1,1h22V26c0-0.615,0.386-1,1-1h15v-3.022   C39,21.36,38.661,21.017,38.049,21.017z M19,31c0,0.613-0.25,1-0.861,1H4.936C4.321,32,4,31.613,4,31v-4c0-0.615,0.386-1,1-1h13   c0.611,0,1,0.385,1,1V31z" />
          <path d="M25,28v10.479C25,39,25.025,39,25.547,39H31V27h-4.975C25.025,27,25,27,25,28z M28,32c0,0,1,0,2,0c0,0,0,0,0,1h-2V32z" />
          <path d="M36.975,27H32v12h5.453C37.975,39,38,39,38,38.479V28C38,27,37.975,27,36.975,27z M35,33h-2v-1h2V33z" />
          <rect x="5" y="10" width="7" height="10" />
          <path d="M13.231,9L15,5.089L13.231,3H9V0H8v3H4.062L2.296,5.089L4.062,9H13.231z M6,5.683C6,5.306,6.306,5,6.683,5h3.635   C10.694,5,11,5.306,11,5.683v0.635C11,6.694,10.694,7,10.317,7H6.683C6.306,7,6,6.694,6,6.317V5.683z" />
        </g>
      </svg>
    </SVGOverlay>
  );
};

export default TerminalMarker;
