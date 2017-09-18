import React, {Component} from 'react';
// Models
import {createNewItem} from '../models/Item';

export default class AddItem extends Component{
  constructor(){
    super();
    this.state={
      inputValue:"",
      counter:4
    }
    this.add=this.add.bind(this);
  }

  handleChange(val){
    this.setState({
      inputValue: val
    })
  }

  add(){
    let newItem = createNewItem(5, this.state.inputValue);
    this.props.addItem(newItem);
  }

  render(){
    return(
      <div className="add-item">
        <input type="text"
        onChange={e=>this.handleChange(e.target.value)}
        />
        <button onClick={this.add}>Add New Item</button>
      </div>
    )
  };
};
