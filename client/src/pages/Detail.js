import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, FormBtn } from "../components/Form";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // state = {
  //   q1: "",
  //   q2: "",
  //   q3: "",
  //   q4: "",
  //   q5: "",
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   console.log(value);
  //   console.log(name);
    
    
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let answers = [this.state.q1, this.state.q2, this.state.q3, this.state.q4, this.state.q5, this.state.q6, this.state.q7, this.state.q8]
    console.log(answers);
    
    this.setState({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",

      
    });
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
           <Q1
           name="q1"
           type="number"
           value={this.state.q1}
           onChange={this.handleInputChange}
           />
            <Q2
             name="q2"
             type="number"
             value={this.state.q2}
             onChange={this.handleInputChange}
            />
            <Q3
             name="q3"
             type="number"
             value={this.state.q3}
             onChange={this.handleInputChange}
            />
            <Q4
             name="q4"
             type="number"
             value={this.state.q4}
             onChange={this.handleInputChange}
            />
            <Q5
             name="q5"
             type="number"
             value={this.state.q5}
             onChange={this.handleInputChange}
            />
            <Q6
             name="q6"
             type="number"
             value={this.state.q6}
             onChange={this.handleInputChange}
            />
            <Q7
             name="q7"
             type="number"
             value={this.state.q7}
             onChange={this.handleInputChange}
            />
            <Q8
             name="q8"
             type="number"
             value={this.state.q8}
             onChange={this.handleInputChange}
            />
           <FormBtn
           onClick={this.handleFormSubmit}
            />
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
