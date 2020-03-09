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
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="home"></section>
    </>
  );
};

const mapStateToProps = state => ({
  basketProps: state.productState
});

export default connect(mapStateToProps)(NavigationBar);
