import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/pages/Home.jsx';
import About from './Components/pages/About.jsx';
import Product from './Components/pages/Product.jsx';
import NotFound from './Components/pages/NotFound.jsx';
import Contact from './Components/pages/Contact';
import Register from './Components/pages/Register';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>

          <Route exact path='/about'>
              <About />
          </Route>

          <Route exact path='/contact'>
              <Contact />
          </Route>

          <Route exact path='/product/:id'>
              <Product />
          </Route>

          <Route>
              <Register />
          </Route>

          <Route path='*'>
              <NotFound />
          </Route>

        </Switch>
      </Router>
    </>
    
  );
}

export default App;
