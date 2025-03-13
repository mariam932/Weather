//show items , in line 14 i used () to prevent do action before i click 
import React from 'react';
import './Todoitem.css'

const TodoList = (props) => {

    const {items,deleteitem}=props;
    const length=items.length;
    //لو في length اعرض 
    //لو لا اعرض المسدج ديه
    const listItems= length ?(
    items.map( item => {
       return(
        <div key={item.id} className='list-item'>
           <span className='name'> {item.name}</span>
           <span  className='age'>  {item.age}</span>
            <span  className='action icon' onClick={()=> deleteitem(item.id)}> &times;</span>
        </div>
       );
    } 
)):
(
    <p>there is no items to show</p>
)
  return (
    <div>
        <div className='list-item'>
            <span  className='name title'>Name</span>
            <span  className='age title'>Age</span>
            <span className='action title'>Action</span>
        </div>
     {listItems}
    </div>
  );
};

export default TodoList;
