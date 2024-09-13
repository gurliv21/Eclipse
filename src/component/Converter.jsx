import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages } from './Languages';


function Converter() {
  const [inputCode, setInputCode] = useState('// Write your code here'); // Input code
  const [convertedCode, setConvertedCode] = useState('// Your Converted code'); // Converted code
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [selectedLanguage1, setSelectedLanguage1] = useState("Select Language");
  
  const prompt = `convert the given code: ${inputCode} which is in ${selectedLanguage} into ${selectedLanguage1} and give no explanation, just code.`;

  console.log(prompt);
  const handleConvertClick = async () => {

    console.log(prompt);
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: prompt
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const apiResponse = await fetch('http://localhost:3002/gemini', options);
      let data = await apiResponse.text();
      data = data.replace(/```[a-z]*\n?/, '').replace(/\n?```$/, '');

      setConvertedCode(data); // Set converted code from the API response
    } catch (error) {
      console.error("Error during conversion:", error);
      setConvertedCode('Error during conversion');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row gap-20 p-20 lg:mb-24'>
      <div>
        <div className='w-[444px] h-[552px] gradient-border p-1'>
          <div className=' opacity-[51%]'>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
       
        <Button className="bg-none">{selectedLanguage}</Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56">
        
        <DropdownMenuRadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
          {languages.map((language) => (
            <DropdownMenuRadioItem key={language.id} value={language.lang} className="">
              {language.lang}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  
          </div>

          <CodeEditor value={inputCode} onCodeChange={setInputCode} /> {/* Input editor */}
        </div>
        <div className='flex justify-center sm:justify-end p-2 mt-8 '>
          <button className='border-color rounded-lg font-semibold p-3' onClick={handleConvertClick}>
            Convert
          </button>
        </div>
      </div>

      <div>
        <div className='w-[444px] h-[552px] gradient-border overflow-auto p-1'>
          <div className=' opacity-[51%] flex justify-between'>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        
        <Button className="bg-none">{selectedLanguage1}</Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56">
        
        <DropdownMenuRadioGroup value={selectedLanguage1} onValueChange={setSelectedLanguage1}>
          {languages.map((language) => (
            <DropdownMenuRadioItem key={language.id} value={language.lang} className="">
              {language.lang}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    
          </div>

          <CodeEditor value={convertedCode} readOnly /> {/* Converted code editor */}
        </div>
      </div>
    </div>
  );
}

export default Converter;
