import { useState } from 'react';

export function Education({ onAddEducation}){
 
   
    return(
        <div className='education'>
       <h3>Education</h3>
       <form onSubmit={onAddEducation}>
       <p>School Name:</p>
       <input type="text" name="input-school" required/>
       <p>Title of Study:</p>
       <input type="text" name="input-title"  required/>
       <p>Begining Date:</p>
       <input type="date" name="input-startdate"   required/>
       <p>End Date:</p>
       <input type="date" name="input-enddate"    required/>
       <button type="submit">Add</button>
       </form>
       </div>
    )
}