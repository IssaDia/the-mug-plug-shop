import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import Title  from "../components/Title";
import Filter  from "../components/Filter";


class ProductList extends Component {

  render() {
    const { products } = this.props;

  const productData = products.length ? (
    products.map(product => {
      return (

            <Col sm={4} key={product.id}>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                <Card.Title><Link to={`/products/${product.id}`}>{product.name}</Link></Card.Title>
                <img src={`/images/${product.images}`} alt={product.name}></img>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{product.price} $</small>
                  <a href=' 'className='btn btn-success' >ajouter au panier</a>
                </Card.Footer>
              </Card>
            </Col>
         
        
      )
    })
  ) : (
    <p>0 produits</p>
  );
  return (
    <>
    <Title name='our' title='products'></Title>
    <Filter></Filter>
      <Row>
      <Col sm={12}>
        <CardDeck>
      { productData}
      </CardDeck>
      </Col>
    </Row>
    </>
  )
}
}

const mapStateToProps = state => {
return {
  products: state.products
};
};

export default connect(mapStateToProps)(ProductList);


