import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducers/userReducer"; // acción del userReducer
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

    // hooks:
    // en vez de usar mapStateToProps y connect
    const { token, firstName } = useSelector((state) => state.userReducer);
    // en vez de usar mapDispatchToProps y connect
    const dispatch = useDispatch();
    // por medio de hook dispatch, utilizas la acción del userReducer

    return (
        <>
            <div className="navbar-container">
                <p>Navbar desde Hooks branch</p>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="navbar-item">
                        {token ? (
                            <>
                                <p>Bienvenid@ {firstName}</p>
                                {/* acción del userReducer como argumento de dispatch */}
                                <button onClick={() => dispatch(logoutUser())}>
                                    Logout
                                </button>

                            </>
                        ) : (
                            <Link to="/login">Login</Link>
                        )
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
