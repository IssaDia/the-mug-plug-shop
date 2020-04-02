import React from "react";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Products from "../components/Products";
import { useState } from "react";
import Previous from "../components/Previous";


{
  /*Page with Product List Component*/
}

const ProductPage = () => {
  {
    /*get value from select*/
  }

  const [value, setValue] = useState('creasing');

  console.log(value);


  let handleChange = (event) => {

    setValue(event.target.value)

    
  
    
  }



  return (
    <>
      <Previous text='Previous'></Previous>

      <Breadcrumb>
        <Breadcrumb.Item href="/#">HOME</Breadcrumb.Item>
        <Breadcrumb.Item active>PRODUCTS</Breadcrumb.Item>
      </Breadcrumb>
      <div className="category-title">
        <h2>
          <span>Our Mugs</span>
        </h2>
      </div>
      <label>
          Sort :
          <select onChange={handleChange}>
            <option defaultValue value="increasing">Increasing price</option>
            <option value="decreasing">Decreasing price</option>
          </select>
        </label>
      <Products selectedValue={value}></Products>
    </>
  );
};

export default ProductPage;
