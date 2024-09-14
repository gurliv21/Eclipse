import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ value, onCodeChange, readOnly = false }) => {
  const handleEditorChange = (newValue) => {
    if (onCodeChange) {
      onCodeChange(newValue); // Update code in parent if onCodeChange is passed
    }
  };

  return (
    <div>
      <MonacoEditor
        height="506px"
        width="100%"
        defaultLanguage="java" // Set language based on use case
        value={value} // Display the value passed from parent
        theme="vs-dark"
        onChange={handleEditorChange}
        options={{ readOnly: readOnly }} // Make editor read-only for converted code
      />
    </div>
  );
};

export default CodeEditor;