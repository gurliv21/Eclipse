import React, { useState } from 'react';

function Effect() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
    <div  className='mx-12 flex flex-col flex-1'>
       
    <div className='bg-white rounded-2xl py-2 px-4'>
    <div
      className=" cursor-pointer  transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <span>
        {isHovered ? 
        <div><h1 className='text-black font-semibold'><i className="fab fa-python text-4xl text-blue-500 mr-4 sm:p-2"></i>print(<span className='text-green-500'>"converts code"</span>);</h1></div>: 
        <div><h1 className='text-black font-semibold'><i className="fab fa-js text-4xl text-yellow-500 mr-4 sm:p-2"></i>console.log(<span className='text-green-500'>"converts code"</span>);</h1></div>}
      </span>
    </div>
    </div>
    
    </div>
    
    
    </div>
  );
}

export default Effect;
