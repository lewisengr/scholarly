import React, { useState } from 'react';

function EditableText({ text, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  function handleBlur() {
    setIsEditing(false);
    onChange(editedText);
  }

  return isEditing ? (
    <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} onBlur={handleBlur} />
  ) : (
    <div contentEditable onClick={() => setIsEditing(true)}>
      {text}
    </div>
  );
};

export default EditableText;