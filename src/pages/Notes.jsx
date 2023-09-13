// import "../index.css";
import React from "react";
import JoditEditor from "jodit-react";

export const Notes = () => {
  const [content, setContent] = React.useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const editorConfig = {
    readonly: false,
    height: 500,
    allowResizeX: true,
    allowResizeY: true,
  };

  return (
    <div className="container">
      <h1 className="text-light my-4 text-center">Notes</h1>
      <JoditEditor
        value={content}
        config={{
          height: 500,
          allowResizeX: true,
          allowResizeY: true,
          allowTabNavigation: false,
          theme: "dark",
        }}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};
