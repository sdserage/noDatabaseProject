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
import testList from './components/testList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      shoppingList: testList
    }
    this.addItem=this.addItem.bind(this);
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

  render() {
    return (
      <div className="app-wrapper">
        <h1>My Shopping List</h1>
        <ShoppingList list={this.state.shoppingList}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
