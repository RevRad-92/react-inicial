import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { setLoggedUser } from '../../redux/reducers/userReducer';
import './Register.css';

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMessage: false,
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)


    }
    
    handleOnSubmit(event) {
        event.preventDefault()
        // console.log('submit')

        // fetch("https://fakestoreapi.com/auth/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         username: this.state.username, 
        //         password: this.state.password,
        //     }),
        // })
        
        // .then((res) => res.json())
        // .then((json) => {
        //     console.log('hola')
        //     console.log(json)
        // })
        // .catch((e) => console.log(e))

        // SIMULANDO BACKEND
        const fakeUsername = "nico"
        const fakePassword = "1234"
        const fakeToken = "TRX-TOKEN-1234"
        const fakeFirstName = "Nico"

        if (
            fakePassword === this.state.password &&
            fakeUsername === this.state.username
        ) {
            this.setState({
                errorMessage: false,
            })

            this.props.login({
                username: fakeUsername,
                token: fakeToken,
                fakeFirstName: fakeFirstName
            })

            // REDIRECCION A HOME  
            this.props.history.push("/")
        } else {
            this.setState({
                errorMessage: true,
            })
        }
    }

    handleOnChange(event) {
        // console.log(event)
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
  
  
    render() {

        return (
            <> 
                <div>
                    <form 
                        onSubmit={this.handleOnSubmit}
                        action="/"
                        method="post"
                        className="form-register"
                    >
                        <label htmlFor="username">Nombre de usuario</label>
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Ingrese su nombre de usuario"
                            onChange={this.handleOnChange}
                        />
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Ingrese su password"
                            onChange={this.handleOnChange}
                        />
                        <button type="submit">Log In</button>
                    </form>
                    
                    { // sentencia + && (si sentencia true, ejecutar lo de despues de &&)
                        this.state.errorMessage  &&  ( 
                        <small>Credenciales inválidas...</small> 
                    )}
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(setLoggedUser(user)),
    }

}

const mapStateToProps = (state) => {
    return {
        userProducer: state.userProducer
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))