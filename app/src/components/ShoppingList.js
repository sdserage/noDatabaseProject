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
  }

  componentWillReceiveProps(props){

  }

  addItem(name){
    let newItem = createNewItem(name);
    let itemListCopy = this.state.itemList;
    itemListCopy.push(newItem);
    this.setState({
      itemList: itemListCopy
    })
  }

  render(){
    return(
      <div>
        <h1>My Shopping List</h1>
        <ul>
          {
            this.state.itemList.map(item=>{
              return (<ShoppingItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                notes={item.notes}
                purchased={item.purchased}/>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
