import React from 'react';
import { InfosDisplay } from './InfosDisplay';
import { ItemActions } from './ItemActions';

export function WorkInfoItem({
  item,
  updateItem,
  setUpdateItem,
  onUpdateInfos,
  handleDeleteInfo,
  handleEditInfos,
  handleSaveInfos,
  UpdateComponent,
}) {
  return (
    <div key={item.id} className='entry'>
      
        {!item.flag ? (
          <div className='educationWrapper'>
           <p>{item.startWorkDate}<span style={{marginLeft:"1rem"}}>{item.endWorkDate}</span></p>
           <h4>{item.companyName}</h4>
           <p>{item.jobTitle}</p>
          </div>
        ) : (
          <UpdateComponent
            infos={updateItem}
            onUpdateInfos={(event) => onUpdateInfos(event, setUpdateItem)}
          />
        )}
      
      <ItemActions
        id={item.id}
        flag={item.flag}
        onDelete={() => handleDeleteInfo(item.id)}
        onEdit={() => handleEditInfos(item.id)}
        onSave={() => handleSaveInfos(item.id)}
      />
    </div>
  );
}
