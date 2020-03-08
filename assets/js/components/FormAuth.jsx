import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import $ from "jquery";
import Login from "./Login";
import SignUp from "./SignUp";


const FormAuth = () => {

    const [login, setLogin] = useState('signUp');

    console.log(login);


    const handleClick =(formType) =>  {

        setLogin(formType);
         
    }

  return (
      <Container>
    <div className="form">
      <ul className="tab-group">
        <li className="tab active"><a onClick={()=>handleClick('signUp')}>Sign Up</a></li>
        <li className="tab"><a onClick={()=>handleClick('login')}>Log In</a></li>
      </ul>
      
      <div className="tab-content">
        
          {login == 'signUp' ? <SignUp></SignUp> : <Login></Login>}

    
        
      </div>
      
</div> 
</Container>
  );
};

export default FormAuth;
