import { Airport, Terminal } from ".prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TerminalMarker from "./Terminal.Marker";
interface props {
  airport: Airport;
}
const TerminalsContainer = (props: props) => {
  const [terminals, setTerminals] = useState<Terminal[]>([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/terminal/icao/${props.airport.ICAO}`
      )
      .then((res) => res.data)
      .then((data: Terminal[]) => {
        // console.log(data);

        setTerminals(data);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      {terminals.map((terminal) => (
        <TerminalMarker
          airport={props.airport}
          terminal={terminal}
          key={terminal.terminalName}
        />
      ))}
    </>
  );
};

export default TerminalsContainer;
