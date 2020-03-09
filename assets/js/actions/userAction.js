import { USER_SIGNUP } from './type';
import axios from 'axios'

export const postUserSuccess = (products) => {
    return {
      type: USER_SIGNUP,
      data
    }
  };

export const postUser = () => {
  return (dispatch) => {
      axios 
      .post("http://127.0.0.1:8000/api/products",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
      .then(response => {
        dispatch(postUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
    
    }
    
}

