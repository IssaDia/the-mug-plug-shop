import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Row";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from 'react-router-dom';
import Title  from "../components/Title";
import Filter  from "../components/Filter";
import  pic1  from "../../images/pic1.jpg";
import { addBasket } from "../actions";

const Homepage = (props) => {
console.log(props);

  
  return ( 

  
    <Container className='container'>
      <Title name='our' title='products'></Title>
      <Row>
    <Col sm={12} className="image">
              <img src={pic1} height="200" width="200" className='img_homepage'></img>
              <h3>Poster 1</h3>
              <h3>15 $</h3>
              <a onClick={props.addBasket} className="addToCart cart">Add to cart</a>      
          </Col>
          </Row>
    </Container>
  
   );
}
 
export default connect(null, {addBasket})(Homepage);


