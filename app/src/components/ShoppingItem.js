import React, {Component} from 'react';

export default class ShoppingItem extends Component{
  constructor(name,price,quantity,notes,purchased){
    super();
    this.state = {
      name: name,
      price: price,
      quantity: quantity,
      notes: notes,
      purchased: purchased
    }
  }
  render(){
    return(
      //<span>{this.state.name} {this.state.price} {this.state.quantity} {this.state.notes} {this.state.purchased}</span>
      <li>name price quantity notes purchased</li>
    );
  }
};
