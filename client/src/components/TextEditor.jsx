import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill CSS for styling

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content, delta, source, editor) => {
    // console.log("content :", content);
    setEditorContent(content); // Update the state with the editor content
  };

  // Define the custom button functionality
  const insertImage = () => {
    const quill = quillRef.current.getEditor();
    const cursorPosition = quill.getSelection().index;
    quill.insertText(
      cursorPosition,
      `Timestamp: ${new Date().toLocaleString()}`
    );
    quill.setSelection(cursorPosition + 18); // Move the cursor after the inserted text
  };

  return (
    <div>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        placeholder="Start typing here..."
        modules={TextEditor.modules}
        formats={TextEditor.formats}
      />
    </div>
  );
};

// You can customize the modules and formats as per your requirement
TextEditor.modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
      ["customTimestamp"], // Custom button
    ],
    handlers: {
      customTimestamp: function () {
        insertImage(); // Call the custom function
      },
    },
  },
};

TextEditor.formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

export default TextEditor;
