import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
  showProductInfo(product) {
    if (product.status) {
      return (
        <div>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      )

    }
  }
  render() {
    let product = {
      id: 1,
      name: "fanta",
      quantity: 100,
      status: false
    }
    let passenger = [
      { id: 1, name: 'abc', age: 32 },
      { id: 2, name: 'bcd', age: 40 },
      { id: 3, name: 'def', age: 50 }
    ]
    let renderPassenger = passenger.map((passenger, index) => {
      return (
        <div key={passenger.id}>
          <p>ID: {passenger.id}</p>
          <p>NAME: {passenger.name}</p>
          <p>AGE: {passenger.age}</p>
        </div>
      )
    })
    return (
      <div>
        <h1>App Component</h1>
        < Header />

        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              < Product />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              < Product />
            </div>
          </div>
        </div>
        {this.showProductInfo(product)}
        {renderPassenger}
      </div>
    );
  }
}

export default App;
