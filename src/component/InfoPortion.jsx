import React from 'react';

function InfoPortion() {
  return (
    <div className="min-h-screen flex justify-center items-center sm:p-6 my-20 md:my-0 lg:my-32">
      <div className="
    flex flex-col 
    border-0 border-solid  p-12 sm:p-16 lg:p-24 lg:m-4 
    md:border border-gray-300 rounded-3xl
    lg:border-2 lg:border-gray-400 rounded-3xl
  "
  style={{ backgroundColor: 'rgba(232, 234, 237, 0.08)' }}
>
        <div className="flex flex-col text-center mb-20">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
            Why use <span className="custom-rainbow-text">Eclipse</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto lg:mb-4">
            With automated code conversion, you don't have to spend hours manually rewriting code in a different language.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 mb-12">
          <div className="text-left flex-1">
            <h2 className="text-xl font-semibold mb-2">
              <i className="fas fa-check-circle mr-2 text-green-500"></i>
              High Quality Conversion
            </h2>
            <p className="text-gray-600">
              We use advanced AI models to ensure that your code is converted with the highest accuracy and quality.
            </p>
          </div>
          <div className="text-left flex-1">
            <h2 className="text-xl font-semibold mb-2">
              <i className="fas fa-cogs mr-2 text-blue-500"></i>
              No Setup Required
            </h2>
            <p className="text-gray-600">
              No need to download or install any software. Simply paste your code and click a button to convert it to your desired language.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="text-left flex-1">
            <h2 className="text-xl font-semibold mb-2">
              <i className="fas fa-infinity mr-2 text-purple-500"></i>
              Unlimited Usage
            </h2>
            <p className="text-gray-600">
              All our plans come with unlimited usage. Convert as much code as you want using our web tool.
            </p>
          </div>
          <div className="text-left flex-1">
            <h2 className="text-xl font-semibold mb-2">
              <i className="fas fa-lock mr-2 text-red-300"></i>
              Privacy and Security
            </h2>
            <p className="text-gray-600">
              We take privacy and security seriously. We do not retain the user’s input code and/or the generated output code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPortion;
