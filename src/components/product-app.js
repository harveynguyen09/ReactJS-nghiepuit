import React, { Component } from 'react';

class Productapp extends Component {
  render() {
    return (
        
        <div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    
                        <img src={this.props.images} alt={this.props.name} />
                        <div className="caption">
                            <h3>
                                {this.props.name}
                            </h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                <a className="btn btn-primary">Mua ngay</a>
                            </p>
                        </div>
                </div>   
            </div>
        </div>
    )
  }
}

export default Productapp;
