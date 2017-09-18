import React, { Component } from 'react';
import './App.css';

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

  addItem(item){
    let shoppingListCopy = this.state.shoppingList;
    shoppingListCopy.push(item);
    this.setState({
      shoppingList: shoppingListCopy
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
