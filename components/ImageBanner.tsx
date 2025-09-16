// Fix: Replaced placeholder content with the ImageBanner component implementation.
import React from 'react';

const images = [
  // 'https://images.unsplash.com/photo-1626702919365-96504a29a73b?q=80&w=800&auto=format&fit=crop', // Gyro
  // 'https://images.unsplash.com/photo-1592417817038-d13fd7342605?q=80&w=800&auto=format&fit=crop', // Greek Salad
  // 'https://images.unsplash.com/photo-1606720359032-1cb2a0279653?q=80&w=800&auto=format&fit=crop', // Dips with pita
  // 'https://images.unsplash.com/photo-1599114610141-00243e861e63?q=80&w=800&auto=format&fit=crop', // Halloumi
];

const ImageBanner: React.FC = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={src} 
              alt={`Pita Paradise food item ${index + 1}`} 
              className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBanner;