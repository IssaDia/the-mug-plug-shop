import React from "react";
import { reduxForm, Field } from "redux-form";
import { postUser } from "../actions/userAction";
import { connect } from "react-redux";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="field-wrap">
    <label>
      {label}
      <span className="req">*</span>
    </label>
   
      <input {...input} name={name} type={type} autoComplete="off" />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    
  </div>
);

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Minimum be 2 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.lastName) {
      errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
      errors.lastName = 'Minimum be 2 characters or more'
    }
  return errors
}

let SignUp = ({
  postUser,
  fields: { firstName, lastName, email, password },
  handleSubmit
}) => {
  return (
    <>
      <div id="signup">
        <h1>Sign Up for Free</h1>
      </div>
      <form onSubmit={handleSubmit(postUser)}>
        <div className="top-row">
          
            <Field
              component={renderField}
              required
              
              label="First Name"
              name="firstName"
            ></Field>
          
         
            <Field
              component={renderField}
              required
              
              label="Last Name"
              name="lastName"
            ></Field>
         
        </div>
       
          <Field
            component={renderField}
            required
            
            label="Email Adress"
            name="email"
          ></Field>
       

       
          <Field
            component={renderField}
            required
            
            label="Set a password"
            name="password"
          ></Field>
       
        <button className='form-btn btn' type="submit">Submit</button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postUser: values => {
      dispatch(postUser(values));
    }
  };
};

SignUp = connect(null, mapDispatchToProps)(SignUp);

export default reduxForm({
  form: "signUp form",
  fields: ["firstName", "lastName", "email", "password"],
  postUser: () => {},
  validate
})(SignUp);
