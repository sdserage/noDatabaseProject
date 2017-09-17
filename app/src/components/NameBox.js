import React, {Component} from 'react';

export default class NameBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      tempName: this.props.name,
      editActive: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  };

  // componentWillReceiveProps(props){
  //   this.setState({
  //     name: this.props.name,
  //     tempName: this.props.name,
  //     editActive: false
  //   })
  // }
  componentWillMount(){
    this.setState({
      name: this.props.name,
      tempName: this.props.name
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.name,
      tempName: nextProps.name
    })
  }

  handleChange(val){
    this.setState({
      tempName: val
    });
    this.props.getUpdatedName('name', this.state.name);
  }

  toggleEdit(){
    if(this.state.editActive){ // Cancel Edit
      this.setState({
        editActive: false,
        tempName: this.state.name // Original name is restored to tempName
      });
    } else {
      this.setState({ // Start Edit
        editActive: true,
        tempName: this.state.name
      })
    }
  };

  saveEdit(){
    if(this.state.editActive){
      this.setState({
        editActive: false,
        name: this.state.tempName,
        tempName: this.state.tempName
      })
    }
  };

  render(){
    return (
      <span>
        {this.state.name}
        <input
          type="text"
          placeholder={this.state.name}
          disabled={this.state.editActive ? false : true}
          onChange={e=>this.handleChange(e.target.value)}
        />
        <button onClick={this.toggleEdit}>{this.state.editActive ? "Cancel" : "Edit"}</button>
        <button onClick={this.saveEdit} disabled={this.state.editActive ? false : true}>Save</button>
      </span>
    );
  };
};
