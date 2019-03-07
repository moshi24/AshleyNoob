import React from "react";
import "./index.css";
function Jumbotron() {
  return (
    <div>
        <div className="jumbotron jumbotron-fluid text-center" style={{marginTop:"200px", backgroundColor:"#eee0"}}>
          <h1 className="display-4" style={{color:"white"}}>Intuitive Sommelier</h1>
          <p className="lead" style={{color:"white"}}>Personalized Taste Profiler and Food Pairing</p>
          <a className="btn btn-lg btn-primary1" href="/form">FIND YOUR PREFERNCE</a>
          <a className="btn btn-lg btn-primary2" href="login">MEMBER</a>
        </div>
    </div>
  );
}

export default Jumbotron;

