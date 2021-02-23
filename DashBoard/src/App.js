import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import Particles from "react-particles-js";
import Navbar from "./Navbar";
import Header from "./Header";
import AboutMe from "./aboutMe";
import MySkills from "./MySkills";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";


function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              strok: {
                width: 7,
                color: "#00eeff"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <MySkills />
      <Portfolio />     
      <ContactForm />   
    </>
  );
}

export default App;
