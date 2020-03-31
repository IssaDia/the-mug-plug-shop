
import { GET_NUMBERS_BASKET } from './type';

{
  /* action to get number of products added to basket */
}

export const getNumbers = () => {
  return (dispatch) => {
      console.log("Getting all basket");
      dispatch({
          type : GET_NUMBERS_BASKET  
      });
    }
}



  


