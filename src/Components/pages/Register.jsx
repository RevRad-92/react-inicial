import React, { useState } from "react";
import './Register.css';

const Register = () => {

    const [toggle, setToggle] = useState(false);
    const [person, setPerson] = useState({
        username: '',
        age: '',
        country: '',
        terms: false,
    });

    const handleButtonClick = () => {
        // this.setState({
        //     toggle: !this.state.toggle
        // })
        setToggle(!toggle);
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setPerson({
            ...person, // para que no se pierdan los datos ya cargados
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value //acceder a key del objeto y asignar valor 

        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log({ e })
        if (!person.username) {
            alert('el campo de usuario está vacío')
        }
        // si todo ok:

        console.log(person)
        // interacción con backend/servidor
        // ...
    }


    return (
        <>
            <div>
                <form onSubmit={handleOnSubmit} action="/" method="post" className="form-register">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        placeholder="ingrese su usuario" name="username"
                        onChange={handleChange}
                        value={person.username} />

                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        placeholder="Ingrese su edad"
                        name="age"
                        onChange={handleChange}
                        value={person.age} />
                    <label htmlFor="terms">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={person.terms}
                            onChange={handleChange} />

                        Terms and conditions
                    </label>
                    <label htmlFor="country">Country</label>
                    <select
                        name="country"
                        onChange={handleChange}
                        value={person.country}>
                        <option value="Argentina">Argentina</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Peru">Peru</option>
                    </select>
                    <button type="submit" onClick={() => handleButtonClick()}>Registrarse</button>
                </form>
            </div>

            <p>Eventos...</p>
            <p>Button: {person.toggle ? 'ON' : 'OFF'} </p>
            <p>Username: {person.username}</p>
            <p>Age: {person.age}</p>
            <p>Country: {person.country}</p>
            <p>Checkbox checked?: {person.terms ? 'YES' : 'NO'}</p>

        </>
    )
}

export default Register
