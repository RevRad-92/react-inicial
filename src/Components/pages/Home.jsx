import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

const Home = () => {

    // pasado a useProduct (custom Hook):
    // componentDidMount(){

    //     if(!this.props.productReducer.all.length) {

    //         fetch('https://fakestoreapi.com/products')
    //         .then((response)=> response.json())
    //         .then(data => {
    //             this.props.setAllProducts(data)
    //             // this.setState({
    //             //     products: data
    //             // })
    //         })
    //     }
    // }

    const [products] = useProduct(); // custom hook

    return <>
        <h1>Home</h1>
        <div>
            {
                // this.state.products.length ? (
                products.all.length ? (
                    <ul>
                        {
                            products.all.map((product) => {
                                return <li
                                    key={`${product.id}-$
                                                {product.category}`}
                                >
                                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                                </li>
                            })
                        }
                    </ul>
                ) : (<p>Cargando...</p>)
            }
        </div>
    </>
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         setAllProducts: (products) => dispatch(setAllProducts(products))
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         productReducer: state.productReducer 
//     }
// }

export default Home