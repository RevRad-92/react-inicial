import React, { Component } from "react";
import Product from "../pages/Product";


export default class ProductCard extends Component {
    render () {
        const { product } = this.props
        return (
            <div>
                <img src={product.image} alt="productPic" />
                <h4>{product.title}</h4>
                <h5>{product.category}</h5>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
            </div>
        )
    } 
}

