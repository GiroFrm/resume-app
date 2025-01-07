
export function EducationUpdate({infos, onUpdateInfos}) {

    return(
        <div style={{display: "flex", flexDirection: "column",alignItems:"start"}}>
        <input type="text" name='schoolName' value={infos.schoolName} onChange={onUpdateInfos}/>
        <input type="text" name='title' value={infos.title}   onChange={onUpdateInfos}/>
        <input type="date" name='startStudyDate' value={infos.startStudyDate}  onChange={onUpdateInfos}/>
        <input type="date" name='endStudyDate' value={infos.endStudyDate}  onChange={onUpdateInfos}/>
        </div>
    )
}