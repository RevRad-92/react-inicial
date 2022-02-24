import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { setAllProducts } from "../redux/reducers/productReducer.js"
import { setAllProducts } from "../../redux/reducers/productReducer";

class Home extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         products: []
    //     }
    // }

    componentDidMount(){

        if(!this.props.productReducer.all.length) {

            fetch('https://fakestoreapi.com/products')
            .then((response)=> response.json())
            .then(data => {
                this.props.setAllProducts(data)
                // this.setState({
                //     products: data
                // })
            })
        }
    }

    render() {
        return <>
                <h1>Home</h1>
                 <div>
                    { 
                        // this.state.products.length ? (
                        this.props.productReducer.all.length ? (
                        <ul>
                            {
                                this.props.productReducer.all.map((product) => {
                                    return <li
                                                key={`${product.id}-$
                                                {product.category}`}
                                            >
                                            <Link to={`/product/${product.id}`}>{product.title}</Link>
                                        </li>
                                })
                            }
                        </ul>
                        ) : ( <p>Cargando...</p> )
                    }
                 </div>
        </>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAllProducts: (products) => dispatch(setAllProducts(products))
    }
}

const mapStateToProps = (state) => {
    return {
        productReducer: state.productReducer 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)