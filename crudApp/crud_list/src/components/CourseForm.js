
import React from "react";
const CourseForm =(props)=>{


    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === ' ') {
            return false;
        } else {
            props.addCourse(e);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter course ...." onChange={props.updateCourse}  value={props.current}/>
            <button className="Add" type="submit" >Add Course</button>
        </form>
        
    )
}

export default CourseForm;