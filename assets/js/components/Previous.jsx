import React from "react";
import { Link, useHistory } from "react-router-dom";

var FontAwesome = require("react-fontawesome");

const Previous = props => {
  {
    /*get url of previous page*/
  }

  let history = useHistory();

  return (
    <div className="previous ">
      <Link to="/" className="disabledCursor" onClick={() => history.goBack()} style={{ textDecoration: 'none' }}>
        <FontAwesome name="fas fa-arrow-left" className="arrow" />
        <span className="previous-text">{props.text}</span>
      </Link>
    </div>
  );
};

export default Previous;
