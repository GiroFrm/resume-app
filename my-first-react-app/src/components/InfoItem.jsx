import React from 'react';
import { InfosDisplay } from './InfosDisplay';
import { ItemActions } from './ItemActions';

export function InfoItem({
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
    <div key={item.id} style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {!item.flag ? (
          <InfosDisplay info={item} excludeKeys={["id", "flag"]} />
        ) : (
          <UpdateComponent
            infos={updateItem}
            onUpdateInfos={(event) => onUpdateInfos(event, setUpdateItem)}
          />
        )}
      </div>
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
