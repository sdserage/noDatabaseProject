import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import url from './api';
// Models
//import {createNewItem} from './models/Item';

// Components
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';

// Test Data
//import testList from './components/testList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      shoppingList: []
    }
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.editItem=this.editItem.bind(this);
  }

  componentDidMount(){
    axios.get(url).then(response=>{
      this.setState({shoppingList:response.data})
    });
  }

  addItem(item){
    axios.post(url,item).then(response=>{
      this.setState({shoppingList: response.data})
    });
  }

  deleteItem(index){
    axios.delete(url+`/${index}`).then(response=>{
      this.setState({shoppingList: response.data});
    });
  }

  editItem(index, item){
    let itemToEdit = this.state.shoppingList[index];
    Object.assign(itemToEdit, item);
    axios.put(url+`/${index}`,itemToEdit).then(response=>{
      this.setState({shoppingList: response.data});
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>My Shopping List</h1>
        <ShoppingList list={this.state.shoppingList} deleteItem={this.deleteItem} editItem={this.editItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
