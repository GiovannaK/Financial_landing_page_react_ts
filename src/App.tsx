import React from "react";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
