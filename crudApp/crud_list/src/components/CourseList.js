import React ,{Fragment,Component}from 'react'
class CourseList extends Component {
 
    state={
        isEdit:false
    };
     
 togglestate=()=>{
    let {isEdit}=this.state;
    this.setState({
        isEdit:!isEdit
    })
 }
 //show courses
    rendercourse=()=>{
       
          
            return(
        <li>
              <span> {this.props.details.name}</span>
        <button onClick={() => {this.togglestate()}}>Edit Course</button>
        <button onClick={()=> this.props.deleteCourse(this.props.index)} > DeleteCourse</button>
    </li>
   ) }
    //show courses after update
   updateCourseItem=(e)=>
   {
    e.preventDefault();
    {this.props.editCourse(this.props.index,this.input.value)}
    this.togglestate();
   }
   //show me input to edit it
    renderUpdatecourse=()=>{
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type='text' ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
                <button type='submit'>UpdateCourse</button>
            </form>
    )
    }

 render(){
     let { isEdit } = this.state;
  return (
    <Fragment className="container">
     {isEdit? this.renderUpdatecourse():this.rendercourse()}
    </Fragment>
  );
}
}

export default CourseList;
