import { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Maximize2, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Download } from 'lucide-react';

// ImageGallery Component with Lightbox
interface ImageGalleryProps {
  images: string[];
  destinationName: string;
}

export function ImageGallery({ images, destinationName }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoomLevel(1);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[selectedImageIndex];
    link.download = `${destinationName}-${selectedImageIndex + 1}.jpg`;
    link.click();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeLightbox();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
      }
    };

    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isLightboxOpen]);

  return (
    <div className='space-y-6'>
      {/* Main Featured Image */}
      <div className='relative group'>
        <div className='aspect-[16/9] overflow-hidden rounded-3xl border-2 border-white shadow-2xl'>
          <img
            src={images[selectedImageIndex]}
            alt={`${destinationName} - ${selectedImageIndex + 1}`}
            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer'
            onClick={() => openLightbox(selectedImageIndex)}
          />
        </div>

        {/* Overlay controls on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-end justify-between p-6'>
          <div className='flex items-center gap-3'>
            <Button
              size='sm'
              className='bg-white/90 text-[#b25a13] hover:bg-white backdrop-blur-sm'
              onClick={() => openLightbox(selectedImageIndex)}
            >
              <Maximize2 className='h-4 w-4 mr-2' />
              Xem toàn màn hình
            </Button>
          </div>
          <div className='text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm'>
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
        >
          <ChevronLeft className='h-6 w-6' />
        </button>
        <button
          onClick={nextImage}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
        >
          <ChevronRight className='h-6 w-6' />
        </button>
      </div>

      {/* Thumbnail Grid */}
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <p className='text-sm font-semibold text-[#b25a13]'>
            Tất cả hình ảnh ({images.length})
          </p>
          <div className='flex gap-2'>
            <Button
              size='sm'
              variant='outline'
              className='text-xs border-[#ffd8a7] text-[#b25a13] hover:bg-[#fff8ec]'
              onClick={() => openLightbox(selectedImageIndex)}
            >
              <Maximize2 className='h-3 w-3 mr-1' />
              Xem toàn màn hình
            </Button>
          </div>
        </div>

        <ScrollArea className='w-full'>
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 pb-2'>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedImageIndex === index
                    ? 'ring-4 ring-[#ffb347] shadow-lg scale-105'
                    : 'ring-2 ring-transparent hover:ring-[#ffd8a7] hover:scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`${destinationName} thumbnail ${index + 1}`}
                  className='h-full w-full object-cover'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center'>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className='absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-50'
          >
            <X className='h-6 w-6' />
          </button>

          {/* Image Counter */}
          <div className='absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold z-50'>
            {selectedImageIndex + 1} / {images.length}
          </div>

          {/* Zoom Controls */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full p-2 z-50'>
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              className='text-white hover:bg-white/20 rounded-full p-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <ZoomOut className='h-5 w-5' />
            </button>
            <span className='text-white text-sm font-semibold min-w-[60px] text-center'>
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
              className='text-white hover:bg-white/20 rounded-full p-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <ZoomIn className='h-5 w-5' />
            </button>
            <div className='w-px h-6 bg-white/30 mx-1'></div>
            <button
              onClick={handleDownload}
              className='text-white hover:bg-white/20 rounded-full p-2 transition-all'
            >
              <Download className='h-5 w-5' />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 z-50'
          >
            <ChevronLeft className='h-8 w-8' />
          </button>
          <button
            onClick={nextImage}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 z-50'
          >
            <ChevronRight className='h-8 w-8' />
          </button>

          {/* Main Image */}
          <div className='relative max-w-7xl max-h-[90vh] overflow-auto p-8'>
            <img
              src={images[selectedImageIndex]}
              alt={`${destinationName} - ${selectedImageIndex + 1}`}
              className='w-full h-full object-contain transition-transform duration-300'
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          {/* Thumbnail Strip */}
          <div className='absolute bottom-20 left-1/2 -translate-x-1/2 max-w-4xl w-full px-4 z-50'>
            <ScrollArea className='w-full'>
              <div className='flex gap-2 justify-center pb-2'>
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedImageIndex(index);
                      setZoomLevel(1);
                    }}
                    className={`flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedImageIndex === index
                        ? 'ring-4 ring-white scale-110'
                        : 'ring-2 ring-white/30 hover:ring-white/60 hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className='h-full w-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}

