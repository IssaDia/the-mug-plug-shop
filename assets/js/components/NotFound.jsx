import React from "react";
import { Link } from "react-router-dom";


{
  /*Special page when url is not found*/
}

const NotFound = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>Page not found</h2>
          </div>
          <Link to="/">Go back to store</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
