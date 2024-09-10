import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    
    <div className='w-full px-12'>
        <hr className='border-white my-4 mb-12   '></hr>
        <div className='flex justify-between  '>
        <p className="text-lg text-white">
        © {currentYear}  Gurliv kaur bajwa
      </p>
      <button className='text-xl'>Code <i className ="fa-solid fa-arrow-up-right-from-square "></i></button>
      </div>
      
    </div>
  )
}

export default Footer
