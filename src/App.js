import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Productapp from './components/product-app'

class App extends Component {
  onClick(){
    console.log('đây là app-component');
  }
  addProduct=()=>{
    console.log(this.refs.name.value)
  }
  render() {
    let product = [
      {
        name: "IP6",
        id: 1,
        price: 25000,
        image: "https://media3.scdn.vn/img3/2019/5_22/fd3NCN_simg_b5529c_250x250_maxb.jpg",
        status: true
      },
      {
        name: "samsung",
        id: 2,
        price: 35000,
        image: "https://media3.scdn.vn/img3/2019/5_22/fd3NCN_simg_b5529c_250x250_maxb.jpg",
        status: false
      },
      {
        name: "oppo",
        id: 3,
        price: 75000,
        image: "https://media3.scdn.vn/img3/2019/5_22/fd3NCN_simg_b5529c_250x250_maxb.jpg",
        status: true
      },
    ]
    let element = product.map((product, index) => {
      if(product.status===true){
        return (
          < Productapp
            name= {product.name}
            price= {product.price}
            images= {product.image}
          />
        )
      }
    })
    return (
      <div div >
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>

        <div className="container">

          <div className="row">
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input type='text' className="form-control" ref="name"></input>
            </div>
            <button className="btn btn-dangern" onClick={this.addProduct}>Lưu</button>
            <div className="col-xs- col-sm- col-md- col-lg-">
              {element}
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              
              <button type="button" className="btn btn-default" onClick={this.onClick}>Click me</button>
              
            </div>
            

          </div>

        </div>
      </div >

    )
  }
}

export default App;
