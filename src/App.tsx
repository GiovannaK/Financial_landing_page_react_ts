import React from "react";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { Home } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
