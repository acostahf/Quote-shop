import React, { Component } from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import Button from "./components/button";
import "./App.css";
import { store, cart } from "./data/index";
import Store from "./views/Store";

class App extends Component {
  state = {
    storeData: [],
    cartData: []
  };

  componentDidMount() {
    this.setState({
      storeData: store,
      cartData: cart
    });
  }

  render() {
    return (
      <div className="App">
        <Store store={this.state.storeData} />
      </div>
    );
  }
}

export default App;
