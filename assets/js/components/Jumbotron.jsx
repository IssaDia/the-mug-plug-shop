import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Jumbotron = props => {
  return (
    <Jumbo className={props.className}>
      <h1>{props.title}</h1>
      <p>
        {props.text}
      </p>  
        <button className='btn btn-dark'>
        <Link to={{pathname: `/${props.link}`}}>{props.buttonText}</Link>
        </button>
      
    </Jumbo>
  );
};

export default Jumbotron;