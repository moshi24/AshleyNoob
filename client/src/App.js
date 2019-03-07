import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wines from "./pages/Wines";
import Detail from "./pages/Detail";
import About from "./pages/About"
import WineList from "./pages/Selections"
import Contact from "./pages/contact"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import  './App.css'


function App() {
  return (
 
    <Router>
      <div> 
        
        <Nav />
        
        <Switch>
          <Route exact path="/" component={Wines} />
          <Route exact path="/wines" component={Wines} />
          <Route exact path="/form" component={Detail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/selection" component={WineList} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
