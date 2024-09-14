import { useState } from 'react';
import Converter from './component/Converter';
import InfoPortion from './component/InfoPortion';
import Lang from './component/Lang';
import Footer from './component/Footer';
import Effect from './component/Effect';
import { Button } from './components/ui/button';

function App() {
  return (
    <main className='flex flex-col items-center mx-auto min-h-screen p-6'>
      {/* Header Section */}
      <section className='flex flex-col text-center text-lg sm:text-3xl md:text-4xl mt-16 mb-20 gap-8 sm:gap-4 md:gap-12'>
        <h1 className='font-semibold text-3xl md:text-6xl mx-12 lg:mx-32 md:mx-20'>
          Transform Your Code Effortlessly with <span className='custom-rainbow-text'>Eclipse</span> AI
        </h1>
        <p className='text-gray-400 text-sm lg:text-lg px-4'>
        Code conversion made super simple to save you hours of time from learning a completely new language.
        </p>
        
        {/* Benefits Section */}
        <div className='flex flex-col sm:flex-row text-sm lg:text-xl gap-6 text-center justify-center'>
          <h2><i className="fas fa-check-circle mr-2 text-blue-500"></i>High Accuracy</h2>
          <h2><i className="fas fa-check-circle mr-2 text-blue-500"></i>Instant Results</h2>
          <h2><i className="fas fa-check-circle mr-2 text-blue-500"></i>User Friendly</h2>
        </div>
      </section>

      {/* Effect Section */}
      <div className='flex flex-col flex-1 justify-center text-center gap-4 mb-16 lg:mb-32 '>
        <Effect />
        <h2 className='border-color-text font-semibold text-lg sm:text-xl'>In a click of a Button</h2>
      </div>

      {/* Converter Section */}
      <div className='w-full max-w-7xl mx-auto'>
        <Converter />
      </div>

      {/* Information, Languages, Footer Section */}
      <div className='w-full max-w-7xl mx-auto'>
        <InfoPortion />
        <Lang />
        <Footer />
      </div>
    </main>
  );
}

export default App;
