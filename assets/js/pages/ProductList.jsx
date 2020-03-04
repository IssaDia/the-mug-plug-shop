import React, { Component} from "react";
import { connect } from "react-redux";



class ProductList extends Component {

  render() {
    const { products } = this.props;
    console.log(products);

  
      return (
        <h1>Liste des produits</h1>
      )
}
}

const mapStateToProps = state => {
return {
  products: state.products
};
};

export default connect(mapStateToProps)(ProductList);


