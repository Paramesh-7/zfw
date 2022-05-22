import { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Home from "./components/home";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Introduction } from "./components/intro";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login"
import ChangePassword from "./components/ChangePassword";
import Registration from "./components/Registration";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          </Route>
        <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/changepassword" element={<ChangePassword />}>
          </Route>
          <Route path="/register" element={<Registration />}>
          </Route>
          <Route path="/forgotpassword" element={<Registration />}>
          </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
};

export default App;
