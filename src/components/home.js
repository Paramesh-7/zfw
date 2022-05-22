import React from 'react'
import { useState, useEffect } from "react";
import Navigation  from './navigation'
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import { Introduction } from "./intro";
import JsonData from "../data/data.json";
const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  
  return (
      <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Introduction data={landingPageData.Introduction}/>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
          <Contact data={landingPageData.Contact} />
          </div>
  )
}

export default Home