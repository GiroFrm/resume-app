import { useState } from 'react'
export function Education({ onAddEducation}){
 
    function handleSubmit(event){
        event.preventDefault(); 

        const schoolNameInput = event.target['input-school'].value; 
        const titleInput = event.target['input-title'].value; 
        const startStudyDate = event.target['input-startdate'].value; 
        const endStudyDate = event.target['input-enddate'].value; 

        const newEducationInfo = {
            id: schoolNameInput + startStudyDate, 
            schoolName: schoolNameInput, 
            title: titleInput, 
            startStudyDate: startStudyDate, 
            endStudyDate: endStudyDate 
        };
         onAddEducation(newEducationInfo);
        // Clear form fields 
         event.target.reset(); 
    }



    return(
        <div className='education'>
       <h3>Education</h3>
       <form onSubmit={handleSubmit}>
       <p>School Name:</p>
       <input type="text" name="input-school"  required/>
       <p>Title of Study:</p>
       <input type="text" name="input-title"  required/>
       <p>Begining Date:</p>
       <input type="date" name="input-startdate"  required/>
       <p>End Date:</p>
       <input type="date" name="input-enddate"   required/>
       <button type="submit">Add</button>
       </form>
       </div>
    )
}