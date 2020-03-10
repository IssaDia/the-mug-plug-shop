import React from "react";
import { reduxForm, Field } from 'redux-form'; 
import { postUser } from "../actions/userAction";
import { connect } from "react-redux";



let SignUp = ({postUser,fields : {firstName,lastName, email, password},handleSubmit}) => {

  return (
      <>
    <div id="signup">
    <h1>Sign Up for Free</h1>
  </div>
  <form onSubmit={handleSubmit(postUser)}>
   
    <div className="top-row">
      <div className="field-wrap">
        <label>
          First Name<span className="req">*</span>
        </label>
        <Field name='firstName' type="text" component="input" required autoComplete="off"></Field>
      </div>

      <div className="field-wrap">
        <label>
          Last Name<span className="req">*</span>
        </label>
        <Field name='lastName' type="text" component="input" required></Field>
      </div>
    </div>
<div className="field-wrap">
      <label>
        Email Address<span className="req">*</span>
      </label>
      <Field name='email' type="email" component="input" required autoComplete="off"></Field>
    </div>

   <div className="field-wrap">
      <label>
        Set A Password<span className="req">*</span>
      </label>
      <Field name='password' type="password" component="input" required autoComplete="off"></Field>
    </div>
  
    <button type="submit">Submit</button>
  </form>
  </>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    postUser : values => {
      dispatch(postUser(values));
    }
  };
};

SignUp = connect(null,
 mapDispatchToProps
)(SignUp)

export default reduxForm({
  form : 'signUp form',
  fields:['firstName','lastName', 'email','password'],
  postUser: ()=> {}
})(SignUp)