import { useState } from 'react'
import Converter from './component/Converter'

import InfoPortion from './component/InfoPortion'
import Lang from './component/Lang'
import Footer from './component/Footer'
import Effect from './component/Effect'
import { Button } from './components/ui/button'




function App() {
  
  

  return (
    <main className='flex flex-col items-center mx-auto min-h-screen p-6 '>
  <section className='flex flex-col text-center text-lg sm:text-3xl md:text-4xl mt-16 mb-20 gap-8 md:gap-12'>
    <h1 className='font-semibold text-4xl md:text-6xl mx-6 md:mx-20'>
      Transform Your Code Effortlessly with <span className='custom-rainbow-text'>Eclipse</span> AI
    </h1>
    <div className='justify-center px-11 sm:px-96'>
      <h3 className='text-gray-300 text-xs md:text-lg max-w-3xl'>
        Code conversion made super simple to save you hours of time from learning a completely new language.
      </h3>
      
    </div>
    <div className='flex flex-row text-sm lg:text-xl gap-6 text-center justify-center '>
      <h2> <i className="fas fa-check-circle mr-2 text-blue-500"></i>High Accuracy</h2>
      <h2><i className="fas fa-check-circle mr-2 text-blue-500"></i>Instant Results </h2>
      <h2><i className="fas fa-check-circle mr-2 text-blue-500"></i>User Friendly </h2>
    </div>
    
    
    
    
  </section>
  <div className='flex flex-col flex-1 justify-center text-center gap-4 my-6'>
  <Effect/>
  <h2 className='border-color-text font-semibold text-xl'>In a click of a Button</h2>
  </div>
  <Converter/>
  
  <InfoPortion/>
  <Lang/>
  <Footer/>
  
</main>

  )
}

export default App
