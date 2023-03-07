import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Product from "./Product";
import { Component } from "react";
import AddProduct from "./dashboard/Dashboard";
import Dashboard from "./dashboard/Dashboard";

class NavBar extends Component {
  render() {
    return (
      <Router>
      <div className="flex justify-between h-[1000px]">
          <div className="w-1/6 bg-sky-400">
          
            <ul className="ml-2 text-lg text-left text-white w-11/12">
            <Link to="/">
              <li className="bg-sky-400 hover:bg-sky-500 active:bg-sky-700
              focus:outline-none focus:ring focus:ring-violet-400 w-24">
                 Dashboard 
              </li>
              </Link>

              <hr />
              
              <li className="bg-sky-400 hover:bg-sky-500 active:bg-sky-700
              focus:outline-none focus:ring focus:ring-violet-400 w-24">
                <Link to="/product">Product </Link>
              </li>

              <hr />

              <li className="bg-sky-400 hover:bg-sky-500 active:bg-sky-700
              focus:outline-none focus:ring focus:ring-violet-400 w-24">
                <Link to="/about"> About </Link>
              </li>
              
            </ul>
          </div>
          <div className="ml-2 w-10/12">
            <Switch>
              <Route exact path="/">
                <Dashboard/>
              </Route>
              <Route path="/product">
                <Product/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </div>
        </div>

      </Router>
    );
  }
}

export default NavBar;