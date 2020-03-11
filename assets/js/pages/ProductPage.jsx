import React from "react";
import { connect} from 'react-redux';
import  pic1  from "../../images/pic1.jpg";
import { addBasket } from '../actions/addBasket';


const ProductPage = ({productProps, addBasket}) => {


      let products = productProps.products;
      
      const productList = products.map( product => {
        
        
        return <div key={product.id} className='image card'>
              
              <img src={require(`../../images/${product.images}.jpeg`)} alt="" height='300' width='300'></img>
              <h3 >{product.name}</h3>
                <h3>{product.price} $</h3>
                <a  onClick={()=>addBasket(product.id -1)}className='addToCart cart'>Add to cart</a>
              </div>
      })
    return ( 
       
        <div className='container'>
       {productList}
       </div>
        
     );
}

const mapDispatchToProps = dispatch => {
  return {
    addBasket: id => {
      dispatch(addBasket(id));
    }
  };
};
 
const mapStateToProps = state => {
  return {
    productProps: state.productState }
    
  };

  
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);