import React from "react";
import "./navigation.css"


function NavBar () {
    return (
      <div class="topnav">
      <a class="active" href="#about">About</a>
      <a href="work">Work</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
    )
}

export default NavBar;