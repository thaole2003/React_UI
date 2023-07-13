import React from "react";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Register from './pages/Register';
import ProductList from './pages/Productlist';
import Cart from "./pages/Cart";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products/:category">
        <ProductList />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
 
      <Route path="/login">  <Login /></Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
