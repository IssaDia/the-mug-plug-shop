import React, { useEffect } from "react";
import $ from "jquery";
import { Navbar, Nav } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ButtonToolbar from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import MugPlugLogo from "../../images/MugPlugLogo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

var FontAwesome = require("react-fontawesome");

const NavigationBar = props => {
  useEffect(() => {
    const navSlide =() => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

      burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index /7+0.5}s`;
        });

        burger.classList.toggle('toggle')
      })
     

    }

    navSlide();
  }, []);

  return (
    <>
    {/*
      <Navbar expand="lg" className="nav">
        <Link to="/" className="navbar-brand">
          <img height="60" width="60" src={MugPlugLogo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
                    
            <ButtonToolbar>
              <OverlayTrigger
                trigger="click"
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover id="popover-positioned-bottom">
                    <Popover.Title as="h3"></Popover.Title>
                    <Popover.Content>
                      <h5>
                        <strong>Déja client?</strong>
                      </h5>
                      <Link to="/connexion" className="nav-link btn btn-dark">
                        se connecter
                      </Link>
                      <hr></hr>
                      <h5>
                        <strong>Nouveau client?</strong>
                      </h5>
                      <Link to="/connexion" className="nav-link btn btn-dark">
                        s'enregistrer
                      </Link>
                    </Popover.Content>
                  </Popover>
                }
              >
                <FontAwesome className="nav-link" name="fas fa-user" />
              </OverlayTrigger>
            </ButtonToolbar>

             
            <Link to="/products" className="nav-link">
              Produits
            </Link>
            <Link to="/cart" className="nav-link">
              <FontAwesome name="fas fa-shopping-cart" />
              <span> ({props.basketProps.upBasket}) </span>
            </Link>
            <a href='http://127.0.0.1:8000/contact' className="nav-link">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="home"></section>

       */}
       <div className='bg-img'>
         <div>
         <nav >
         <div className='logo'>
           <h6>The Mug Shop</h6>
         </div>
         <ul className='nav-links'>
           <li className='nav-link'><Link to="/#">
              Home
            </Link></li>
           <li className='nav-link'><Link to="/products">
              Produits
            </Link></li>
           <li><Link to="/cart" className="nav-link">
              <FontAwesome name="fas fa-shopping-cart" />
              <span> ({props.basketProps.upBasket}) </span>
            </Link></li>
           <li> <a href='http://127.0.0.1:8000/contact' className="nav-link">
              Contact
            </a></li>        
         </ul>
         <div className='burger'>
           <div className='line1'></div>
           <div className='line2'></div>
           <div className='line3'></div>
         </div>
       </nav>
         </div>
      
       </div>
      
    </>
  );
};

const mapStateToProps = state => ({
  basketProps: state.productState
});

export default connect(mapStateToProps)(NavigationBar);
