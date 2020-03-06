import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Row className='footer'>
        <Col className="copyright">
          <p>2020 - The Mug Plug</p>
        </Col>
        <Col className="logo-footer">
          <p>Logo</p>
        </Col>
        <Col className="social">
          <a href="#" className="contact">
            Contactez-moi
          </a>
          <a href="#" className="git">
            Git
          </a>
          <a href="#" className="linkedin">
            in
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
