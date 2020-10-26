import React, { Component } from 'react';

class Productapp extends Component {
    constructor(){
        super()
        this.onAddtoCart1 = this.onAddtoCart1.bind(this);
    }
    onAddtoCart(text){
        alert(text)
    }
    onAddtoCart1(){
        alert(this.props.name+'-'+this.props.price)
    }
    onAddtoCart2= ()=>{
        alert(this.props.name+'-'+this.props.price)
    }
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
                                <a className="btn btn-primary" onClick={()=>{this.onAddtoCart(this.props.name)}}>Mua ngay</a>
                                <a className="btn btn-primary" onClick={this.onAddtoCart1}>Mua ngay 1</a>
                                <a className="btn btn-primary" onClick={this.onAddtoCart2}>Mua ngay 2</a>
                            </p>
                        </div>
                </div>   
            </div>
        </div>
    )
  }
}

export default Productapp;
