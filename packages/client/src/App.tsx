import React from "react";
import "./App.css";
import Page from "./layout/Page";

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
      <Page />
    </div>
  );
}

export default App;
