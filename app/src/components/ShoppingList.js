import React, {Component} from 'react';

// Models
import {createNewItem} from '../models/Item';

// Components
import ShoppingItem from './ShoppingItem';

// Test Data
import testList from './testList.js';

class ShoppingList extends Component {
  constructor(){
    super();
    this.state = {
      itemList:testList
    }
    this.updateItem=this.updateItem.bind(this);
  }

  addItem(name){
    let newItem = createNewItem(name);
    let itemListCopy = this.state.itemList;
    itemListCopy.push(newItem);
    this.setState({
      itemList: itemListCopy
    })
  }

  updateItem(updatedItem){
    let copyItemList = this.state.itemList;
    let itemIndex = copyItemList.findIndex(item => item.id === updatedItem.id);
    copyItemList.splice(itemIndex, 1, updatedItem);
    this.setState({
      itemList:copyItemList
    })
  }

  render(){
    return(
      <div>
        <h1>My Shopping List</h1>
        <ul>
          {
            this.state.itemList.map(item =>{
              return (<ShoppingItem
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                notes={item.notes}
                purchased={item.purchased}
                updateItem={this.updateItem}/>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
