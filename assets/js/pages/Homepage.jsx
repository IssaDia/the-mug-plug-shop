import React, { Component} from "react";
import { connect } from "react-redux";
import Title  from "../components/Title";
import  pic1  from "../../images/pic1.jpg";
import { addBasket } from "../actions/addAction";

class Homepage extends Component {

  render() {
    const { products } = this.props;
    console.log(this.props);

    const productlist = products.map((product, index) => {
      return (
        
     
    <div className="image" key={index}>
              <img src={pic1} height="200" width="200" className='img_homepage'></img>
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
              <a onClick={()=>addBasket(product.name)}className="addToCart cart">Add to cart</a>      
    </div>
    
         
      )
        
    })

  
      return (
        <div className='container'>
        <Title name='our' title='products'></Title>
         {productlist}
       </div>
      )
}
}


const mapStateToProps = state => {
  return {
    products: state.products
  };
  };


 
export default connect(mapStateToProps, { addBasket })(Homepage);


