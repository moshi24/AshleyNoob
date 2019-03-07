import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Q1(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 1</strong></h3>
    <h4>Red or White?</h4>
    {/* (red 1, white 0) */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Red</option>
      <option value="5">White</option>
      </select>
      </div>
   
  );
}

export function Q2(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 2</strong></h3>
    <h4>Contemporary or Old School?</h4>
    {/* (oakNum 0 = unoaked, 1 = oaked) */}
      <select className="choosen-select" id="q2" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Contemporary</option>
      <option value="5">Old School</option>
      </select>
    </div>

  );
}

export function Q3(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 3</strong></h3>
    <h4>Plum or Olive?</h4>
    {/* (savNum 0 = fruity, 1 = savory) */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Plum</option>
      <option value="5">Olive</option>
      </select>
    </div>
  );
}

export function Q4(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 4</strong></h3>
    <h4>Sweet or Not Sweet?</h4>
    {/* sweetNum */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Sweet</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">Not Sweet(dry)</option>
      </select>
    </div>
  );
}

export function Q5(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 5</strong></h3>
    <h4>Orange or Fresh Squeezed Lemon?</h4>
    {/* acidNum */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Orange</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">Fresh Squeezed Lemon</option>
      </select>
    </div>
  );
}

export function Q6(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 6</strong></h3>
    <h4>Firm or Soft?</h4>
    {/* tannNum */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Firm</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">Soft</option>
      </select>
    </div>
  );
}

export function Q7(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 7</strong></h3>
    <h4>Chill and Mellow or Strong and Bold?</h4>
    {/* alcoNum */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Chillout</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">Energetic</option>
      </select>
    </div>
  );
}

export function Q8(props) {
  return (
    <div className="form-group">
    <h3><strong>Question 8</strong></h3>
    <h4>Simple or Complicated?</h4>
    {/* bodyNum */}
      <select className="choosen-select" id="q1" rows="20" {...props}>
      <option value=""></option>
      <option value="1">Simple</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">Complicated</option>
      </select>
    </div>
  );
}

export function FormBtn(props) {
  console.log(props);
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
      {props.children}
      <p>SUBMIT</p>
    </button>
  );
}
