import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

{
  /*Jumbotron component to custom */
}

const Jumbotron = props => {
  return (
    <Jumbo className={props.className}>
      <h6>{props.title}</h6>
      <p>{props.text}</p>
      <button className="btn btn-dark disabled">
        <Link to={{ pathname: `/${props.link}` }}>{props.buttonText}</Link>
      </button>
      <div className="signal">
        <span>{props.signal}</span>
      </div>
    </Jumbo>
  );
};

export default Jumbotron;
