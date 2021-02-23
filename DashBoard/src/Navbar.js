import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";


export default function Navbar() {
  return (
    <Nav style={{ position: "fixed", width: "100vw" }} className="navbar navbar-expand-lg navbar-light bg-dark pos">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">BO<span className="logo-color">LD</span>MAX</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">MY SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">ABOUT ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}
