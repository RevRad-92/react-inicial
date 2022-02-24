import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
    
    handleGoBack() {
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
            fetch(`https://fakestoreapi.com/products/${
                this.props.match.params.id}`)
                .then((response)=> response.json())
                .then(data => {
                    this.setState({
                        product: data
                    })
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

export default withRouter(Product) //funcion withRouter(Product) obtiene id por URL 