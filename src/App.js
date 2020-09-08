import React from "react";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainItems from "./components/MainItems";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <MainItems />
    </div>
  );
}

export default App;
