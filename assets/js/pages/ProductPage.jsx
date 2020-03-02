import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const ProductPage = props => {

    const [product, setProduct] = useState('Issa');

    useEffect(() => {
        axios 
          .get("http://127.0.0.1:8000/api/products/" + props.match.params.id)
          .then(response => response.data)
          .then(data => setProduct(data))
          .catch(error=>console.log(error.response));
      }, []);
      
    return ( 
        <>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        </>
     );
}
 
export default ProductPage;