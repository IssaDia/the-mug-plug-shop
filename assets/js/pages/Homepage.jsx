import React, { Component} from "react";
import { connect } from "react-redux";
import  pic1  from "../../images/pic1.jpg";
import { addBasket } from "../actions/addAction";

const Homepage = (props) => {
  return ( 
    <div className='container'>
    <div className='image'>
    <h3>Black tshirt</h3>
    <img src={pic1} alt="" height='150' width='150'></img>
    <h3>$15,00</h3>
    <a onClick={()=>props.addBasket('black')} className='addToCart cart1'>Add to cart</a>
  </div>
  <div className='image'>
  <h3>Grey tshirt</h3>
    <img src={pic1} alt="" height='150' width='150'></img>
    <h3>$15,00</h3>
    <a onClick={()=>props.addBasket('grey')} className='addToCart cart2'>Add to cart</a>
  </div>
  <div className='image'>
  <h3>Blue tshirt</h3>
    <img src={pic1} alt="" height='150' width='150'></img>
    <h3>$15,00</h3>
    <a onClick={()=>props.addBasket('blue')} className='addToCart cart3'>Add to cart</a>
  </div>
  <div className='image'>
  <h3>White tshirt</h3>
    <img src={pic1} alt="" height='150' width='150'></img>
    <h3>$15,00</h3>
    <a onClick={()=>props.addBasket('white')} className='addToCart cart4'>Add to cart</a>
  </div>
  
 </div>
   );
}
 

export default connect(null, {addBasket} )(Homepage);


