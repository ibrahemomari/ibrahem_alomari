import React from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Home from "./components/Home/Home";
import { Parallax } from "react-scroll-parallax";
import About from "./components/About/About";
function App() {
  return (
    <>
      {/* <Landing /> */}
      <section>
        {/* <Home /> */}

        <div className="section gray1">
          <About />
        </div>

        <div className="section green"></div>

        <div className="section black"></div>
        <div className="section"></div>
      </section>
    </>
  );
}

export default App;
