

export function handlePersonalInfos(event, setPersonalInfos) {
  const { name, value } = event.target;
  setPersonalInfos((prev) => ({ ...prev, [name]: value }));
}

export function handleDeleteInfo(eduId, setInfos, Infos){
    const newEduInfo = Infos.filter(item => item.id!=eduId);
    setInfos(newEduInfo);
  }

 export function handleEditInfos(infoId, infos, setInfos, setUpdateInfos) {
    const item = infos.find(item => item.id === infoId);
     const updatedEducationInfos = infos.map(item => {
       if (item.id === infoId) {
          // Toggle the flag property 
          return { ...item, flag: !item.flag };
 
       } return item; 
     });
     setInfos(updatedEducationInfos);
     setUpdateInfos(item);
   }


   export function handleSaveInfos(infoId, infos, setInfos, newInfos) {
    const updatedInfos = infos.map(item => {
      if (item.id === infoId) {
         // Toggle the flag property 
         return {
           ...item,
            flag: !item.flag,
            schoolName: newInfos.schoolName,
            title: newInfos.title,
            startStudyDate: newInfos.startStudyDate,
            endStudyDate: newInfos.endStudyDate};
      } return item; 
    });
    setInfos(updatedInfos);
   }


   export function handleUpdateInfos(event, setUpdateInfos){
    const {name, value} =event.target;
    setUpdateInfos((prevEdu)=>({...prevEdu, [name]:value}))
   }

