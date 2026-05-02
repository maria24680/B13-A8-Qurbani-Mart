"use client";
import Image from 'next/image';
import Lottie from "lottie-react";





const Hero = () => {

  return (
    <div className="relative w-full overflow-hidden min-h-100 md:min-h-150">
      
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9" 
          alt="Qurbani background"
          fill
          className="object-cover opacity-60"
        />
       
        
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-full">
        
      
        <div className="relative flex-1 flex flex-col justify-center px-8 py-12 md:px-20 z-20">
          
         
          

          {/* Text Content */}
          <div className="relative z-10 text-center md:text-left text-white">
            <span className="bg-green-900 text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-4 inline-block">
              Trusted by Thousands of Customer
            </span>
            <h1 className="text-5xl md:text-4xl font-black text-black mb-4 leading-tight drop-shadow-md">
              Find Your Perfect <br /> <span className="text-green-900">Qurbani Animal</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-black mb-8 opacity-95 max-w-md drop-shadow">
              Explore a wide range of healty & quality cows & goats for your Qurbani.
            </p>
            <button className="btn btn-lg bg-green-900 border-none hover:bg-green-900 text-white px-10 shadow-xl transition-all hover:scale-105">
            Browse Animals
            </button>
          </div>
        </div>

       
        <div className="flex-1 flex items-center justify-center py-10 md:py-0">
          <div className="relative">
             
             

              
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Hero;