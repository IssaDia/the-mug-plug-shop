import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products?pagination=true&count=${itemsPerPage}&page=${currentPage}`)
      .then(response => response.data["hydra:member"])
      .then(data => setProducts(data))
      .catch(error=>console.log(error.response));
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then(response => response.data["hydra:member"])
      .then(data => setCategories(data));
  }, []);

  const start = currentPage * itemsPerPage - itemsPerPage;
  const paginatedProducts = products.slice(start, start + itemsPerPage);

  const handleChangePage = page => {
    setCurrentPage(page);

  };

    return (  
        <>
        <Row>
        <Col sm={4}>
          {categories.map(category => (
            <Card body>{category.title}</Card>
          ))}
        </Col>
        <Col sm={8}>
          <CardDeck>
            {paginatedProducts.map(product => (
              <Col sm={4}>
                <Card key={product.id}>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                  <Card.Title><Link to={`/products/${product.id}`}>{product.name}</Link></Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{product.price} $</small>
                    <a href=' 'className='btn btn-success'>ajouter au panier</a>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </CardDeck>
         <Pagination itemsPerPage={itemsPerPage} length={products.length} handleChangePage={handleChangePage} currentPage={currentPage}></Pagination>
        </Col>
      </Row>
      </>
    );
}
 
export default ProductList;