import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game/:id"} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
