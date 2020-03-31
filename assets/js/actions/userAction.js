import { USER_SIGNUP } from './type';
import axios from 'axios';

{
  /*action to post User when form is submitted */
}

export const postUserSuccess =  (data) => {
  return {
    type: USER_SIGNUP,
    payload: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
  }
};

export const postUser = (data) => {
  return (dispatch) => {
     axios.post("http://127.0.0.1:8000/api/users",data, {
      headers: {
          'Content-Type': 'application/json',
      }})
      .then(response => {
        dispatch(postUserSuccess(response.data))
      })
      .catch(error => {
        throw(console.log(error));
      });     

  };
    

};

