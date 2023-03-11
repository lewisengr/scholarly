import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
  Button,
} from "react-bootstrap";

export const Notes = () => {
  const [notes, setNotes] = useState("test");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("1.2rem");
  const [fontColor, setFontColor] = useState("white");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  const textAreaRef = useRef(null);

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleTabKeyPress = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      setNotes(notes.substring(0, start) + "     " + notes.substring(end));
      event.target.selectionStart = event.target.selectionEnd = start + 5;
    }
  };

  const handleFontFamilyChange = (family) => {
    setFontFamily(family);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size + "rem");
  };

  const handleFontColorClick = (color) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = notes.substring(start, end);
    const beforeSelectedText = notes.substring(0, start);
    const afterSelectedText = notes.substring(end);
    const newSelectedText = `<span style="color: ${color}">${selectedText}</span>`;
    const newNotes = beforeSelectedText + newSelectedText + afterSelectedText;
    setNotes(newNotes);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderlined(!isUnderlined);
  };

  const handleFontStyleChange = (style) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;

    let newNotes = notes.substring(0, start);
    const selectedText = notes.substring(start, end);
    const restOfText = notes.substring(end);

    switch (style) {
      case "bold":
        newNotes += `<strong>${selectedText}</strong>`;
        break;
      case "italic":
        newNotes += `<em>${selectedText}</em>`;
        break;
      case "underline":
        newNotes += `<u>${selectedText}</u>`;
        break;
      default:
        break;
    }

    newNotes += restOfText;
    setNotes(newNotes);
  };

  const fontStyle = {
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: fontColor,
  };

  return (
    <Container
      fluid
      className="d-flex flex-column bg-dark justify-content-center align-items-center"
    >
      <h1 className="text-light my-4 text-center">Notes</h1>
      <Form.Control
        ref={textAreaRef}
        as="textarea"
        className="flex-grow-1 mx-auto"
        style={{
          fontSize: "1.2rem",
          // ...fontStyle,
          height: "80vh",
          maxWidth: "900px",
          width: "60%",
          backgroundColor: "#22222296",
          border: "3px solid #3e6e74fb",
          color: fontColor,
          ...fontStyle,
        }}
        placeholder="Begin your notes here!"
        value={notes}
        onChange={handleNotesChange}
        onKeyDown={handleTabKeyPress}
      ></Form.Control>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ButtonGroup>
          <Button variant="secondary" onClick={handleBoldClick}>
            <strong>B</strong>
          </Button>
          <Button variant="secondary" onClick={handleItalicClick}>
            <em>I</em>
          </Button>
          <Button variant="secondary" onClick={handleUnderlineClick}>
            <u>U</u>
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleFontColorClick("red")}
          >
            <span style={{ color: "red" }}>A</span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleFontColorClick("green")}
          >
            <span style={{ color: "green" }}>A</span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleFontColorClick("blue")}
          >
            <span style={{ color: "blue" }}>A</span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleFontFamilyChange("Arial")}
          >
            Arial
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleFontFamilyChange("Times New Roman")}
          >
            Times New Roman
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleFontFamilyChange("Courier New")}
          >
            Courier New
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};
