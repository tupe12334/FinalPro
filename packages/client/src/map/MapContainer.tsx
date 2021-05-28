import React from "react";
import { MapContainer as MC, TileLayer } from "react-leaflet";
import InsideMap from "./InsideMap";
const MapContainer = () => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <MC
        center={[51.505, -0.09]}
        zoom={1}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100vh" }}
      >
        <InsideMap />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MC>
    </div>
  );
};

export default MapContainer;
