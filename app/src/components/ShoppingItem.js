import React, {Component} from 'react';

export default class ShoppingItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity,
      notes: this.props.notes,
      purchased: this.props.purchased
    }
  }
  // Currently Unknown if needed
  // componentWillReceiveProps(props){
  //   console.log('hello?');
  //   this.setState({
  //     name: this.props.name,
  //     price: this.props.price,
  //     quantity: this.props.quantity,
  //     notes: this.props.notes,
  //     purchased: this.props.purchased
  //   })
  //   console.log('hello??');
  // }
  render(){
    return(
      //<span>{this.state.name} {this.state.price} {this.state.quantity} {this.state.notes} {this.state.purchased}</span>
      <li>{this.state.name} {'$'+(this.state.price/100).toFixed(2)} {this.state.quantity} {this.state.notes} {this.state.purchased?<input type="checkbox"/>:<input type="checkbox" checked/>}<button>Click Here</button></li>
    );
  }
};
