import React from 'react';

export function ItemActions({ id, flag, onDelete, onEdit, onSave }) {
    return (
        <div style={{ display: "flex", columnGap: "1rem" }}>
            <button onClick={() => onDelete(id)}>delete</button>
            {!flag ? (
                <button onClick={() => onEdit(id)}>Edit</button>
            ) : (
                <button onClick={() => onSave(id)}>Save</button>
            )}
        </div>
    );
}
