import React from "react";
import {Jumbotron as Jumbo} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Jumbotron = (props) => {
  return (
    <Jumbo className= {props.className}>
      <h1>{props.title}</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">{ props.buttonText}</Button>
      </p>
    </Jumbo>
  );
};

export default Jumbotron;
