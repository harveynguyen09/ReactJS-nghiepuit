import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [
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
      ],
    isActive: true
    }
  }
  onSetState=()=>{
    // if(this.state.isActive===true){
    //   this.setState({
    //     isActive: false
    //   })
    // }else{
    //   this.setState({
    //     isActive:true
    //   })
    // }
    this.setState({
      isActive: !this.state.isActive
    })
  }
  onClick() {
    console.log('đây là app-component');
  }
  addProduct = () => {
    console.log(this.refs.name.value)
  }
  render() {
    let element = this.state.product.map((product, index) => {
      if (product.status === true) {
        return (
          // < Productapp
          //   name={product.name}
          //   price={product.price}
          //   images={product.image}
          // />
          <tr>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
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
            {/* <div className="col-xs- col-sm- col-md- col-lg-">
              {element}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-default" onClick={this.onClick}>Click me</button>
            </div> */}
          </div>
        </div>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { element }
          </tbody>
        </table>
        <button type="button" className="btn btn-danger" onClick={this.onSetState}>
          Active: {this.state.isActive===true?'true':'false'}
        </button>
      </div >

    )
  }
}

export default App;
