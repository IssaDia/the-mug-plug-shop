import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import axios from "axios";
import Pagination from '../components/Pagination';



const Homepage = props => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products?`)
      .then(response => response.data["hydra:member"])
      .then(data => setProducts(data))
      .catch(error=>console.log(error.response));
  }, [currentPage]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then(response => response.data["hydra:member"])
      .then(data => setCategories(data));
  }, []);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  const addToCart = e => {
    e.preventDefault();
    console.log('working');
  }


  return (
    <Container>
    
      
    </Container>
  );
};

export default Homepage;
