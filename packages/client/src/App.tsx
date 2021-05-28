import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import MapContainer from "./map/MapContainer";
import "leaflet/dist/leaflet.css";

require("dotenv").config();

function App() {
  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_SERVER_URL + "/airport/all")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="App">
      <MapContainer />
    </div>
  );
}

export default App;
