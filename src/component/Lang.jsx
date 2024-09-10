import React from 'react';

function Lang() {
  return (
    <div className='mb-28'>
      <div className="container mx-auto p-8 ">
        <div className="flex flex-col sm:px-60">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-8">
            More than <span className="custom-rainbow-text"> 21+</span> languages available
          </h1>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transform lg:scale-[0.8]">
          <div className="flex sm:flex-col items-center justify-center p-8  rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-python text-4xl text-blue-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">Python</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-js text-4xl text-yellow-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">JavaScript</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-java text-4xl text-red-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">Java</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-html5 text-4xl text-orange-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">HTML</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-css3-alt text-4xl text-blue-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">CSS</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-node text-4xl text-green-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">Node.js</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-react text-4xl text-cyan-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">React</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-php text-4xl text-purple-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">PHP</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
          <i className="fa-solid fa-r text-4xl text-blue-600 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">R</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-swift text-4xl text-orange-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">Swift</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-golang text-4xl text-teal-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">Go</span>
          </div>

          <div className="flex sm:flex-col items-center justify-center p-8 rounded-lg shadow-xl transition-all duration-500 ease-in-out hover:border-2 border-gray-400" style={{ backgroundColor: 'rgba(232, 234, 237, 0.1)' }}>
            <i className="fab fa-cuttlefish text-4xl text-gray-500 mr-4 sm:p-2"></i>
            <span className="text-lg font-medium">C++</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lang;
