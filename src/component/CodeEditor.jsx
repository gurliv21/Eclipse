import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useState } from 'react';


const CodeEditor = ({ defaultValue }) => {
  const [getCode, setGetCode] =useState('')
  const handleEditorChange = (value) =>{
    setGetCode(value);
  }
  console.log(getCode);
  const sendCodeToAPI = async () => {
    console.log("Sending code to API:", getCode); // Log the code being sent
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: 'java program for sum of two number', // Send the user's code
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const apiResponse = await fetch('http://localhost:3002/gemini', options);

      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }

      const data = await apiResponse.text();
      setApiResponse(data); // Set the API response to state for rendering or further use
      console.log("API Response:", data);
    } catch (error) {
      console.error('Error fetching from API:', error);
      setApiResponse('Error fetching from API');
    }
  };
  
  
  return (
    <div>
    <div className="">
      <MonacoEditor
        height="506px"
        width="438px"
        defaultLanguage="javascript"
        defaultValue={defaultValue}
        theme="vs-dark"
        value={getCode}
        onChange={handleEditorChange}
        
        
        
      />
    </div>
    </div>
  );
};

export default CodeEditor;
