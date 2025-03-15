import React ,{Component}from 'react'
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
class App extends Component {
    
  state = {
    courses : [
    {name:"html" },
    {name:"Css" },
    {name:"js" },
    {name:"jquery" }
  ],
  current:''
}
  updateCourse=(e)=>
  {
  this.setState({
    current:e.target.value
  })
  }
  addCourse=(e)=>
  {
    e.preventDefault();
  let current=this.state.current;
  let courses=this.state.courses;
  courses.push({name:current})
  this.setState({courses,current:''})
  }
  deleteCourse=(index)=>{
    let Courses=this.state.courses;
    Courses.splice(index,1)
    this.setState({Courses})
  }
  editCourse=(index,value)=>{
    let Courses=this.state.courses;
    let Course=Courses[index];
    Course['name']=value;
    this.setState({Courses})
  }
 render(){

  const {courses}=this.state;
const Courseslist=courses.map((course,index)=>
{
  return <CourseList deleteCourse={this.deleteCourse} key={index} index={index} details={course} editCourse={this.editCourse}/>;
});
  return (
 
    <section className="App">
      <h2>Add Courses</h2>
     <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
    <ul> {Courseslist}</ul>
    
    </section>
  );
}
}

export default App;
