import React from "react";
import "./navigation.css"


function NavBar () {
    return (
      <div class="topnav">
      <a class="active" href="#home">About</a>
      <a href="#news">Work</a>
      <a href="#contact">Skills</a>
      <a href="#about">Contact</a>
    </div>
    )
}

export default NavBar;