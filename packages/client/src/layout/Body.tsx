import React from "react";
import Dashboard from "../dashboard/Dashboard";
import MapContainer from "../map/MapContainer";

const Body = () => {
  return (
    <div style={{ flexDirection: "row", flex: 1, display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Dashboard />
      </div>
      <div style={{ flex: 1 }}>
        <MapContainer />
      </div>
    </div>
  );
};

export default Body;
