import React, { useState } from 'react'
import CodeEditor from './CodeEditor'



function Converter() {
  
  const [answer, setAnswer] = useState('null')

  
   
  return (
    <div className='flex flex-col sm:flex-row gap-20 p-20 lg:mb-24'>
      
      <div>
        
        <div className='w-[444px] h-[548px] gradient-border p-1 '>
        <div className='flex justify-between p-1 px-4  opacity-[51%]'>
            <span className='font-semibold text-black '>Select Language</span>
            <button >
            <i className="fa-solid fa-caret-down text-black text-xl"></i>
            </button >
          </div>

          <CodeEditor defaultValue="// Write your code here" />
        </div >
        <div className='flex justify-center  sm:justify-end p-2 mt-8'>
        <button className=' border-color rounded-lg font-semibold p-3'>Convert</button>
        </div>
      </div>
      <div>
        
        <div className='w-[444px] h-[548px] gradient-border overflow-auto p-1'>
        <div className='flex justify-between p-1 px-4  opacity-[51%]'>
            <span className='font-semibold text-black '>Select Language</span>
            <button >
            <i className="fa-solid fa-caret-down text-black text-xl"></i>
            </button >
          </div>

          <CodeEditor defaultValue="// Your Converted code " />
        </div >
        
      </div>
      
    </div>
  )
}

export default Converter
