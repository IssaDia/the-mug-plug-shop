import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

var FontAwesome = require("react-fontawesome");

{
  /*Footer Widget*/
}

const Footer = () => {
  return (
    <footer>
      <Row className="footer">
        <Col className="copyright">
          <p>2020 - The Mug Plug</p>
        </Col>
        <Col className="social">
          <a
            href="http://127.0.0.1:8000/contact"
            className="contact"
            height="352"
            width="470"
          >
            <span>
              <FontAwesome name="fas fa-envelope" />
            </span>
          </a>
          <a href="https://github.com/IssaDia/" className="git">
            Git
          </a>
          <a
            href="https://www.linkedin.com/in/issa-dia-4352b174/"
            className="linkedin"
          >
            in
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
