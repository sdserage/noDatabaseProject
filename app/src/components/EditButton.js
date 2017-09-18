import React, {Component} from 'react';

export default class EditButton extends Component {
  constructor(){
    super();
    this.state={
      inputValue:"",
      index: null,
      placeholderVal:""
    }
  }

  componentWillMount(){
    this.setState({
      index: this.props.index,
      placeholderVal: this.props.placeholderVal
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      placeholderVal: nextProps.placeholderVal
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
        <input className="hidden" placeholder={this.state.placeholderVal} type="text" onChange={e=>this.handleChange(e.target.value)}/>
        <button className="hidden" onClick={()=>this.updateName(this.state.inputValue)}>Update Name</button>
      </div>
    );
  }
};
