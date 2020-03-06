import React from "react";
import { connect} from 'react-redux';
import  pic1  from "../../images/pic1.jpg";
import { addBasket } from "../actions/addAction";


const ProductPage = ({products}) => {

      console.log(products);
      const productList = products.map( product => {
        return <div key={product.id} className='image'>
                <h3 >{product.name}</h3>
                <img src={pic1} alt="" height='150' width='150'></img>
                <h3>{product.price} $</h3>
                <a onClick={()=>props.addBasket('black')} className='addToCart cart1'>Add to cart</a>
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
    products: state.products
  };
};
export default connect(mapStateToProps, {addBasket})(ProductPage);