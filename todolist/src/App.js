import React,{Component} from 'react';
import TodoList from './components/TodoItem/Todolist';
import Additem from './components/AddItem/Additem';
class App extends Component {
  state ={
    items:[
      {id:1,name:'mariam',age:23},
      {id:2,name:'Abanoub',age:30},
      {id:3,name:'michael',age:37}
    ]
  }

deleteitem=(id)=>{
  let items=this.state.items;
  let i=items.findIndex(item => item.id===id)
  items.splice(i,1)
  this.setState({items})
}
Additem=(item)=>{
  item.id=Math.random();
  let items=this.state.items;
  items.push(item);
  this.setState({items})
}
//Another solution قي حالة انه ال id مش بيساؤي ال item.id فمش هيعل حاجة 
//لو هو ترو سيبه في ال Array
//لو false امسحه
//deleteitem=(id)=>{
// let items=this.state.items.filter(item =>{
// return item.id !== id});
// this.setState({items})
//}
  render(){
  return (
    <div className="App">
     <h1 className="text-center">ToDoList</h1>
     <TodoList items={this.state.items} deleteitem={this.deleteitem}/>
     <Additem Additem={this.Additem}/>
    </div>
  );
}

}

export default App;
