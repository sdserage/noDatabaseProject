import React, {Component} from 'react';
import EditButton from './EditButton';

export default class ShoppingList extends Component {
  constructor(){
    super();
    this.state={
      list: []
    };
    this.edit=this.edit.bind(this);
  }
  componentWillMount(){
    this.setState({
      list: this.props.list
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      list: nextProps.list
    })
  }

  delete(index){
    this.props.deleteItem(index);
  }

  edit(index,value,propName){
    let newObj = {};
    newObj[propName] = value;
    this.props.editItem(index,newObj);
  }

  render(){
    return(

      <ul>
        {
          this.state.list.map((item, index) => {
            return <li key={index}><span>
              {item.name}
              {'$'+(item.price/100).toFixed(2)}
              <button onClick={() => this.delete(index)}>Remove</button>
              <EditButton index={index} edit={this.edit}/>
            </span></li>
          })
        }
      </ul>
    );
  }
};
