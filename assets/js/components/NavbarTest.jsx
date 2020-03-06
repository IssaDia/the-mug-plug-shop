import React, { useEffect } from "react";
import $ from "jquery";
import { Navbar, Nav } from "react-bootstrap";
import MugPlugLogo from '../../images/MugPlugLogo.png';
import { Link } from 'react-router-dom';
import { getNumbers } from "../actions/getAction";
import { connect } from "react-redux";

var FontAwesome = require('react-fontawesome');



const NavbarTest = (props) => {
  useEffect(() => {
    getNumbers();
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
      } else {
        $(".nav").removeClass("affix");
      }
    });

    $(".navTrigger").click(function() {
      $(this).toggleClass("active");
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
  }, []);

  return (
    <>
      <Navbar expand="lg" className="nav">
      <Link to="/" className="navbar-brand"><img height="60" width="60" src={MugPlugLogo} alt="Logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link to="/produits" className="nav-link">Produits</Link>
            <Link to="/cart" className="nav-link"><FontAwesome name="fas fa-shopping-cart"/><span> ({props.basketProps.basketNumbers}) </span></Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="home"></section>
      
    </>
  );
};

const mapStateToProps = state => ({
  
    basketProps: state.basketState
  })

export default connect(mapStateToProps, { getNumbers })(NavbarTest);
