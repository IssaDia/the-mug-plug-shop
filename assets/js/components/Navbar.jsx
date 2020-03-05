import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { getNumbers } from "../actions/getAction";
import { connect } from "react-redux";

var FontAwesome = require('react-fontawesome');

const Navbar = (props) => {
  useEffect(() => {
    getNumbers();
  }, []);
    return ( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link to="/" className="navbar-brand"><img height="100" width="100" src={logo} alt="Logo" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/cart" className="btn btn-success">Panier<FontAwesome name="fas fa-cart-plus"/><span>{props.basketProps.basketNumbers}</span></Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  
     );
}

const mapStateToProps = state => ({
  
    basketProps: state.basketState
  })

export default connect(mapStateToProps, { getNumbers })(Navbar);
