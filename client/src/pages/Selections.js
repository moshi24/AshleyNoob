import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
let wineAtr = []
console.log(wineAtr);

class WineList extends Component {
  state = {
    wines: [],
    Arr: []
  
   
  };

  componentDidMount() {
    this.loadWines();
  }
  loadWines = () => {
    API.getWines()
      .then(res =>{
        
        
for (let i = 0; i < res.data.length; i++){
        const a = [res.data[i].red1_white0, res.data[i].alcoNum,res.data[i].acidNum,res.data[i].bodyNum,res.data[i].fruity1_savory5,res.data[i].sweetNum,res.data[i].tannNum]
        wineAtr.push(a)
        // console.log(a); 
}
      
       
        
        this.setState({ wines: res.data,})
      })
      .catch(err => console.log(err));
  };

    
    
    
    
  render() {
    return (
      <Container fluid>
       <Row>
            
       <Col size="md-6 sm-12">
            <Jumbotron>
              {this.state.wines}
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.wines.length ? (
              <List>
                {this.state.wines.map(wine => (
                  <ListItem key={wine._id}>
                    <Link to={"/wines/" + wine._id}>
                      <strong>
                        {wine.name}
                      </strong>
                    </Link>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
        
      
    );
  }
}

export default WineList;
