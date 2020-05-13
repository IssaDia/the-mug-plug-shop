import React, { useEffect } from "react";
import MugPlugLogo from "../../images/MugPlugLogo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

var FontAwesome = require("react-fontawesome");


const NavigationBar = props => {
  useEffect(() => {
    const navSlide = () => {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");

      burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.7}s`;
        });

        burger.classList.toggle("toggle");
      });
    };

    navSlide();
  }, []);

  return (
    <>
      <div className="bg-img">
        <div className="background-text">
          <h5>The Mug Plug</h5>
          <p>selling orignals et personalized mugs</p>
        </div>
        <div>
        <div className="logo">
                <Link to="/" className="d-flex flex-row">
                  <img src={MugPlugLogo} alt="" height="100" width="100"></img>
                </Link>
              </div>
          <nav>      
            <ul className="nav-links">
              <li className="nav-link">
                <Link to="/#">HOME</Link>
              </li>
              <li className="nav-link">
                <Link to="/products">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">
                  <FontAwesome name="fas fa-shopping-cart" />
                  <span> ({props.basketProps.upBasket}) </span>
                </Link>
              </li>
              <li>
                <a href="http://localhost:8000/contact" className="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
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
