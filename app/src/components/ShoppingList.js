import React, {Component} from 'react';

export default class ShoppingList extends Component {
  constructor(){
    super();
    this.state={
      list: []
    };
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
  render(){
    return(

      <ul>
        {
          this.state.list.map(item => {
            return <li><span>{item.name} {'$'+(item.price/100).toFixed(2)}</span></li>
          })
        }
      </ul>
    );
  }
};
