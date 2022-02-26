import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// import ProductCard from './Components/ProductCard/ProductCard.jsx';
import ProductCard from "../ProductCard/ProductCard";


class Product extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            product: undefined
        }
    }


    handleOnClickContact() {
        console.log(this.props.match.params.id); //esta ruta muestra el valor en la url "/product/ESTO"
        this.props.history.push('/contact');
    }
    
    handleGoBack() { // history porque usas withRouter
        this.props.history.goBack();
    }

    /*
        Estrategias:
            - Fetch a producto en especifico /products/50
            - Pasar por props a el componente de Product el objeto entero
            - Pasar el array entero a Redux y en este componente leer el estado
    */

    // - Fetch a producto en especifico /products/50
    componentDidMount() {
        if(this.props.match.params.id) {
            // fetch(`https://fakestoreapi.com/products/${
            //     this.props.match.params.id}`)
            //     .then((response)=> response.json())
            //     .then(data => {
            //         this.setState({
            //             product: data
            //         })
            //     })
            const actualProduct = this.props.productReducer.all.find(
                (item) => {
                    return item.id === parseInt(this.props.match.params.id)
                }
            )
            console.log(this.props)
            console.log({actualProduct})

            this.setState({
                product: actualProduct
            })
        }
    }

    render() {
        const { product } = this.state
        return (
        <>
                <div>
                    <button onClick={() => this.handleGoBack()}>{'< '} Back</button>

                    {/* <p>
                        Usted está visualizando el producto: {
                        this.props.match.params.id}
                    </p>  */}

                    {
                        product ? (
                            <ProductCard product={product} />
                            

                        ) : ( <p>Cargando...</p> )
                    }




                    <button onClick={() => this.handleOnClickContact()}>Go to contact!</button>
                </div>
                </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => {
    return {
        productReducer: state.productReducer
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product)) //funcion withRouter(Product) obtiene id por URL 