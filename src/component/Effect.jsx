import React, { useState } from 'react';

function Effect() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='mx-4 sm:mx-12 flex flex-col flex-1 '>
    <div className='bg-white rounded-2xl py-3 px-4 '>
      <div
        className="cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='flex items-center'>
          {isHovered ? (
            <div className='flex items-center'>
              <i className="fab fa-python text-3xl sm:text-4xl text-blue-500 mr-2 sm:mr-4"></i>
              <h1 className='text-black font-semibold text-sm sm:text-lg'>
                print(<span className='text-green-500'>"converts code"</span>);
              </h1>
            </div>
          ) : (
            <div className='flex items-center'>
              <i className="fab fa-js text-3xl sm:text-4xl text-yellow-500 mr-2 sm:mr-4"></i>
              <h1 className='text-black font-semibold text-sm sm:text-lg'>
                console.log(<span className='text-green-500'>"converts code"</span>);
              </h1>
            </div>
          )}
        </span>
      </div>
    </div>
  </div>
  );
}

export default Effect;
