import React from "react";
import bgImage from "../assets/photo-1486406146926-c627a92ad1ab.avif";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      
      <div className="absolute inset-0 bg-blue-900/70"></div>

    
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
         
         
          
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-2 text-sm font-medium">
              • Trusted by 500+ Businesses
            </span>
          </div>

         
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Precision Accounting for
            <span className="block text-blue-300">Growing Businesses</span>
          </h1>

     
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-blue-100 leading-8">
            We handle the numbers so you can handle the business. Expert tax
            strategy, bookkeeping, and CFO services tailored to your goals.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white hover:bg-blue-700 transition">
              Schedule Consultation
            </button>

            <button className="rounded-xl border border-blue-300/50 px-7 py-4 text-base font-semibold text-white hover:bg-white hover:text-blue-700 transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;