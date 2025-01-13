import '../resume.css'
import { EducationUpdate } from "./EducationUpdate";
import { WorkUpdate } from "./WorkUpdate";
import { InfoItem } from "./InfoItem";
import { WorkInfoItem } from './workInfoItem';

import { handleUpdateInfos, handleEditInfos, handleSaveInfos,handleDeleteInfo, handleSaveInfosWork } from "../Handlers";


export function Resume(
  {
      personalInfos, 
      educationInfos, 
      setEducationInfos,
      setUpdateEdu, 
      updateEdu,
      setWorkInfos,
      workInfos,
      setUpdateWork,
      upDateWork,
    }) {

       return (
         <div className="right-side">
               <h3>{personalInfos.name}</h3>
               <p>{personalInfos.email}</p>
               <p>{personalInfos.phone}</p>
               
               <div className='wrapperDisplayItems'>
               <h2>Education</h2>
               {educationInfos.map((edu) => (
                 <InfoItem
                   key={edu.id}
                   item={edu}
                   setUpdateItem={setUpdateEdu}
                   updateItem={updateEdu}
                   onUpdateInfos={handleUpdateInfos}
                   handleDeleteInfo={(id) => handleDeleteInfo(id, setEducationInfos, educationInfos)}
                   handleEditInfos={(id) =>handleEditInfos(id, educationInfos, setEducationInfos, setUpdateEdu)}
                   handleSaveInfos={(id) => handleSaveInfos(id, educationInfos, setEducationInfos, updateEdu)}
                   UpdateComponent={EducationUpdate}
                 />
               ))}
                </div>
                <div className='wrapperDisplayItems'>
               <h2>Work Experience</h2>
               {workInfos.map((info) => (
                  <WorkInfoItem
                  key={info.id}
                  item={info}
                  setUpdateItem={setUpdateWork}
                  updateItem={upDateWork}
                  onUpdateInfos={handleUpdateInfos}
                  handleDeleteInfo={(id) =>  handleDeleteInfo(id, setWorkInfos, workInfos)}
                  handleEditInfos={(id) =>handleEditInfos(id, workInfos, setWorkInfos, setUpdateWork)}
                  handleSaveInfos={(id) => handleSaveInfosWork(id, workInfos, setWorkInfos, upDateWork)}
                  UpdateComponent={WorkUpdate}
                />
               ))}
               </div>
             </div>
     

    )
}