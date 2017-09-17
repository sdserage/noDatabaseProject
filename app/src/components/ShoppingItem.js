import React, {Component} from 'react';

// Components
import NameBox from './NameBox';

// Models
import Item from '../models/Item';

export default class ShoppingItem extends Component{
  constructor(){
    super();
    this.state = {
      name: '',//this.props.name,
      price: null,//this.props.price,
      quantity: null,//this.props.quantity,
      notes: '',//this.props.notes,
      purchased: false,//this.props.purchased
      id: null
    }
    this.getUpdatedValue = this.getUpdatedValue.bind(this);
  }

  componentWillMount(){
    this.setState({
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity,
      notes: this.props.notes,
      purchased: this.props.purchased,
      id: this.props.id
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.name,
      price: nextProps.price,
      quantity: nextProps.quantity,
      notes: nextProps.notes,
      purchased: nextProps.purchased,
      id: nextProps.id
    })
  }

  getUpdatedValue(prop,newValue){
    console.log("test");
    let updatedValue = {prop: newValue};
    this.setState(updatedValue);
    let newItem = new Item(null,"");
    let {id, name, price, quantity, notes, purchased} = this.state;
    newItem = {id, name, price, quantity, notes, purchased};
    this.props.updateItem(newItem);
    this.setState(this.state);
  }

  render(){
    return(
      //<span>{this.state.name} {this.state.price} {this.state.quantity} {this.state.notes} {this.state.purchased}</span>
      <li><NameBox name={this.state.name} getUpdatedName={(prop, name) => this.getUpdatedValue(prop, name)}/> {'$'+(this.state.price/100).toFixed(2)} {this.state.quantity} {this.state.notes} {this.state.purchased?<input type="checkbox"/>:<input type="checkbox" checked/>} {/*Should be upgraded to a Toggle Component*/}<button>Click Here</button></li>
    );
  }
};



// return (this.state.editActive ?
//   (<span>
//     <input type="text" placeholder={this.state.name} onChange={e => this.handleChange(e.targe.value)}/>
//     <button onClick={this.toggleEdit}>Cancel</button>
//     <button onClick={this.saveEdit}>Save</button>
//   </span>)
//   :
//   (<span>
//     {this.state.name} <button onClick={this.toggleEdit}>Edit</button>
//   </span>)
// );
