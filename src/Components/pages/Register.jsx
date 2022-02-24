import React, { Component } from "react";
import './Register.css';

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false,
            username: '',
            age: '',
            country: '',
            terms: false,
        }
        this.handleButtonClick = this.handleButtonClick.bind(this) // con hooks no hace falta hacer este bindeado
        // this.handleUserChange = this.handleUserChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleButtonClick(){
        this.setState({
            toggle: !this.state.toggle
        })
    }

    // handleUserChange(event){
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handleAgeChange(event){
    //     this.setState({
    //         age: event.target.value
    //     })
    // }

    handleChange(event){
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            // genérico:
            [event.target.name]: 
                event.target.type === 'checkbox' 
                ? event.target.checked 
                : event.target.value //acceder a key del objeto y asignar valor 
            
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        console.log({event})
        //validaciones (usar librería: yup readme (github))
        if(!this.state.username) {
            alert('el campo de usuario está vacío')
        }
        // si todo ok:
        const {username, age, terms, country} = this.state
        console.log({
            username, age, terms, country
        })
        // interacción con backend/servidor
        // ...
    }

    render() {
        return (<>
            <div>
                <form onSubmit={this.handleOnSubmit} action="/" method="post" className="form-register">
                    <label htmlFor="username">Usuario</label>
                    <input 
                        type="text" 
                        placeholder="ingrese su usuario" name="username"
                        onChange={this.handleChange}
                        value={this.state.username} />

                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        placeholder="Ingrese su edad" 
                        name="age"
                        onChange={this.handleChange}
                        value={this.state.age} />
                    <label htmlFor="terms">
                        <input 
                            type="checkbox"
                            name="terms"
                            checked={this.state.terms}
                            onChange={this.handleChange}/>
                            
                        Terms and conditions
                    </label>
                    <label htmlFor="country">Country</label>
                    <select 
                        name="country" 
                        onChange={this.handleChange}
                        value={this.state.country}>
                        <option value="Argentina">Argentina</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Peru">Peru</option>
                    </select>
                    <button type="submit" onClick={() => this.handleButtonClick()}>Registrarse</button>
                </form>
            </div>
            
            <p>Eventos...</p>
            <p>Button: {this.state.toggle ? 'ON' : 'OFF'} </p>
            <p>Username: {this.state.username}</p>
            <p>Age: {this.state.age}</p>
            <p>Country: {this.state.country}</p>
            <p>Checkbox checked?: {this.state.terms ? 'YES' : 'NO'}</p>

        </>
        )
    }

}