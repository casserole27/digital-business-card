import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="main-container">
      <Info />
      <About />
      <Interests />
    </div>
  )
}

export default App;