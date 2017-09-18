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
    let total = 0;
    return(

      <ul className="shopping-list">
        {
          this.state.list.map((item, index) => {
            total+= item.price;
            return <li key={index} className="shopping-item">
              <p>{item.name}</p>
              <p>{'$'+(item.price/100).toFixed(2)}</p>
              <EditButton placeholderVal={item.name} index={index} edit={this.edit}/>
              <div className="delete-icon" onClick={() => this.delete(index)}></div>
            </li>
          })
        }
        <li className="total"><p>Estimated Total:</p><p>${(total/100).toFixed(2)}</p></li>
      </ul>
    );
  }
};
