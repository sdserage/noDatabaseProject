import React, {Component} from 'react';

export default class EditButton extends Component {
  constructor(){
    super();
    this.state={
      inputValue:"",
      index: null
    }
  }

  componentWillMount(){
    this.setState({
      index: this.props.index
    })
  }

  handleChange(val){
    this.setState({
      inputValue: val
    })
  }

  updateName(newName){
    this.props.edit(this.state.index,newName,"name");
  }

  render(){
    return(
      <div>
        <input type="text" onChange={e=>this.handleChange(e.target.value)}/>
        <button onClick={()=>this.updateName(this.state.inputValue)}>Update Name</button>
      </div>
    );
  }
};
