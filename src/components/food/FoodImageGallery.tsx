import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Image Gallery Component
interface ImageGalleryProps {
  images: string[];
  name: string;
}

export function FoodImageGallery({ images, name }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='relative h-80 overflow-hidden group'>
      <img
        src={images[currentIndex]}
        alt={`${name} - ${currentIndex + 1}`}
        className='object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500'
        loading='lazy'
      />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            onClick={nextImage}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
          >
            <ChevronRight className='h-5 w-5' />
          </button>

          {/* Image Counter */}
          <div className='absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold'>
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Dots */}
          <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

