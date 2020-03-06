import React, {useEffect} from "react";
import { connect} from 'react-redux';
import  pic1  from "../../images/pic1.jpg";
import { addBasket } from '../actions/addBasket';


const ProductPage = ({productProps}) => {

    useEffect(() => {
     addBasket()
    }, []);

      console.log(productProps.products);
      let products = productProps.products;
      
      const productList = products.map( product => {
        return <div key={product.id} className='image'>
                <h3 >{product.name}</h3>
                <img src={pic1} alt="" height='150' width='150'></img>
                <h3>{product.price} $</h3>
                <a  onClick={addBasket(product.id)}className='addToCart cart1'>Add to cart</a>
              </div>
      })
    return ( 
       
        <div className='container'>
       {productList}
       </div>
        
     );
}
 
const mapStateToProps = state => {
  return {
    productProps: state.productState
    
  };
};
export default connect(mapStateToProps)(ProductPage);