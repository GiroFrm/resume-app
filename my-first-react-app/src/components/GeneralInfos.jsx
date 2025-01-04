
export function GeneralInfos({onChange}) {

     return (
    <div className='general-infos'>
       <h3>General Informations</h3>
       <form>
       <p>name:</p>
       <input type="text"  name="input-name" />
       <p>email:</p>
       <input type="email" name="input-email"/>
       <p>phone</p>
       <input type="tel"   name="input-phone"/>
       </form>
       </div>
     )
}