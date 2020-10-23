import React, { Component } from 'react';

class Product extends Component{
  render () {
    return (
      
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <a href="#" class="thumbnail">
              <img src="./logo512.png"/>
              <div className="caption">
                <h3>Iphone 6</h3>
                <p>
                    16,000,000
                </p>
                <p>
                    <a className="btn btn-danger">Mua hàng</a>
                </p>
              </div>
          </a>
      </div>
      
    );
  }
}

export default Product;
