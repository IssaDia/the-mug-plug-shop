import React from "react";

var FontAwesome = require("react-fontawesome");

{
  /*Footer Widget*/
}

const Footer = () => {
  return (
    <footer className='footer row'>
        <div className="copyright col-md-6">
          <p>2020 - The Mug Plug</p>
        </div>
        <div className="social col-md-6">
          <div className='row'>
            
            <a
            href="https://fathomless-sea-60039.herokuapp.com/contact"
            className="contact col-md-4"
            height="352"
            width="470"
          >
            <div className=''>
          <span>
              <FontAwesome name="fas fa-envelope" />
            </span>
            </div>
          </a>
            
          <a href="https://github.com/IssaDia/" className="git col-md-4">
            Git
          </a>
          <a
            href="https://www.linkedin.com/in/issa-dia-4352b174/"
            className="linkedin col-md-4"
          >
            in
          </a>

          </div>
         
        </div>
     
    </footer>
  );
};

export default Footer;
