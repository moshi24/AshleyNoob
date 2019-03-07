import React from "react";
import "./index.css";


const searchStyle = {
  lineHeight:"45px"
}

function Nav() {
  return (
    <div className="container-fullwidth">
 <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
  <a className="navbar-brand" href="#"><h1 className="brand">iSOM</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/selection">SELECTION</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">CONTACT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">SIGN UP</a>
      </li>
      <div style={searchStyle}>
      <i className="fas fa-search"></i>
      </div>
    </ul>
  </div>
</nav>
</div>
  );
}

export default Nav;
