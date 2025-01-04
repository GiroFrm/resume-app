
export function WorkExperience({onChange}) {

    return (
        <div className='work-experience'>
            <h3>Work Experience</h3>
            <p>Company Name:</p>
            <input type="text" name="input-company" onChange={onChange} />
            <p>Position Title:</p>
            <input type="text" name="input-jobtitle" onChange={onChange} />
            <p>Begining Date:</p>
            <input type="date" name="input-startdate" onChange={onChange} />
            <p>End Date:</p>
            <input type="date" name="input-enddate" onChange={onChange} />
        </div>
    )
}