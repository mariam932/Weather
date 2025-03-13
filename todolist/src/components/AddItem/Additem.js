//Add items
import React, { Component } from "react";
import './Additem.css'
class Additem extends Component {
state ={
    name: '',
    age: ''
}
handlecahnge = (e)=>{
    this.setState({
        [e.target.id] : e.target.value
 } )
}
handlesubmit = (e) =>{
    e.preventDefault();
    if(e.target.name.value==='')
        return false;
    else{
    this.props.Additem(this.state)
    this.setState({
        name:'',
        age:''
    })
}
}
render(){
  return (
    <div>
   <form onSubmit={this.handlesubmit}>
        <input type="text" placeholder="Enter name ....." id="name" onChange={this.handlecahnge} value={this.state.name}/>
        <input type="number" placeholder="Enter age ....." id="age" onChange={this.handlecahnge} value={this.state.age}/>
        <input type="submit" value="Add"/>
   </form>
    </div>
  );
};
}

export default Additem;
