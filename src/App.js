import React from "react";
import "./App.css";
import datas from "./data/data.json";
import Collapsible from "./components/collapsible";

function App() {
  return (
    <ul className="App">
      {datas.map(data => {
        return <Collapsible data={data} key={data.id} />;
      })}
    </ul>
  );
}

export default App;


  