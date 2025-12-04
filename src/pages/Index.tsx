import { useMemo, useState, useEffect } from 'react';
import type { Destination } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useDestinationsData } from '@/hooks/useData';
import {
  Waves,
  ZoomIn,
  ZoomOut,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

// ImageGallery Component with Lightbox
interface ImageGalleryProps {
  images: string[];
  destinationName: string;
}

function ImageGallery({ images, destinationName }: ImageGalleryProps) {
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
              Slideshow
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

const useDestinations = () => {
  const { items } = useDestinationsData();
  return items;
};

const travelTips = [
  {
    id: 'season',
    title: 'Thời điểm lý tưởng',
    content:
      'Tháng 12 - 4 trời khô ráo, mây trắng cho ảnh đẹp; mùa nước nổi (9 - 11) lại phù hợp trải nghiệm ghe xuồng và ngắm rừng tràm ngập nước.',
  },
  {
    id: 'transport',
    title: 'Di chuyển',
    content:
      'Kết hợp xe khách đến Long Xuyên/Châu Đốc rồi thuê xe máy hoặc book tour ghe. Nên đặt vé cáp treo Núi Sam/Núi Cấm trước giờ cao điểm.',
  },
  {
    id: 'culture',
    title: 'Văn hóa bản địa',
    content:
      'Tôn trọng tập tục người Chăm và Khmer: ăn mặc kín đáo khi vào mosque/chùa, giữ im lặng khi tham dự nghi thức Bà Chúa Xứ.',
  },
];

export default function HomePage() {
  const destinations = useDestinations();
  const [selectedDestinationId, setSelectedDestinationId] = useState<
    number | null
  >(null);

  const selectedDestination = useMemo<Destination | null>(() => {
    if (!destinations.length) return null;
    if (selectedDestinationId) {
      const match = destinations.find(
        (destination) => destination.id === selectedDestinationId
      );
      if (match) return match;
    }
    return destinations[0];
  }, [destinations, selectedDestinationId]);

  const signatureExperiences = useMemo(() => {
    if (!selectedDestination) return [];
    const mainImageFallback =
      selectedDestination.images?.[0] ??
      '/images/TriTonImgs/thotnottraitim01.jpg';

    const galleryExperiences =
      selectedDestination.images?.slice(0, 3).map((image, index) => ({
        title: `${selectedDestination.name} góc nhìn ${index + 1}`,
        description: selectedDestination.description,
        image,
      })) ?? [];

    const foodExperiences =
      selectedDestination.foods?.slice(0, 5).map((food) => ({
        title: food.name,
        description: food.description,
        image: mainImageFallback,
      })) ?? [];

    return [...galleryExperiences, ...foodExperiences].slice(0, 3);
  }, [selectedDestination]);

  if (!selectedDestination) {
    return null;
  }

  const foodHighlights = selectedDestination.foods ?? [];
  const hasNews =
    !!selectedDestination.description_news &&
    !!selectedDestination.images_news.length;

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      <TooltipProvider>
        <main className='mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8'>
          <section className='grid gap-6 lg:grid-cols-[320px,1fr]'>
            <div className='space-y-5'>
              <Card className='overflow-hidden border border-[#f7d9aa] bg-white shadow-xl'>
                <CardHeader className='pb-0'>
                  <CardTitle className='text-xl text-[#b25a13]'>
                    Điểm đến gợi ý
                  </CardTitle>
                  <CardDescription className='text-sm text-[#a2763f]'>
                    Chọn địa danh để xem câu chuyện nổi bật.
                  </CardDescription>
                </CardHeader>
                <CardContent className='pt-4'>
                  <ScrollArea className='h-[420px] pr-3'>
                    <div className='space-y-3'>
                      {destinations.map((dest) => {
                        const isActive = selectedDestination.id === dest.id;
                        return (
                          <Button
                            key={dest.id}
                            variant='ghost'
                            className={`w-full justify-start rounded-2xl border text-left text-sm transition-all ${
                              isActive
                                ? 'border-transparent bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white shadow-lg'
                                : 'border-transparent bg-[#fff8ec] text-[#6f4525] hover:border-[#ffd8a7]'
                            }`}
                            onClick={() => setSelectedDestinationId(dest.id)}
                          >
                            <div className='flex w-full items-center gap-3'>
                              <div className='flex-1'>
                                <p className='font-semibold'>{dest.name}</p>
                              </div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <Card className='border border-[#f6d9ab] bg-white shadow-2xl'>
              <CardContent className='space-y-6 bg-[#fff9ef] p-6'>
                <Tabs defaultValue='overview' className='w-full'>
                  <TabsList className='grid w-full grid-cols-3 rounded-2xl bg-[#fef3d4] p-1 text-[#c26a1f]'>
                    {[
                      { value: 'overview', label: 'Câu chuyện' },
                      { value: 'gallery', label: 'Thư viện' },
                      { value: 'news', label: 'Thông tin' },
                    ].map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className='rounded-2xl text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-[#d45b16] data-[state=active]:shadow'
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsContent value='overview' className='pt-6'>
                    <div className='space-y-6'>
                      {/* Decorative header */}
                      <div className='flex items-center gap-3'>
                        <div className='h-1 w-12 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7b54]'></div>
                        <p className='text-sm font-semibold uppercase tracking-wider text-[#b25a13]'>
                          Câu chuyện
                        </p>
                      </div>

                      {/* Main story content with improved readability */}
                      <div className='space-y-5'>
                        {selectedDestination.story
                          .split('\n\n')
                          .map((paragraph, index) => {
                            // Check if paragraph looks like a quote (starts with quotes or is short and impactful)
                            const isQuote =
                              paragraph.trim().startsWith('"') ||
                              paragraph.trim().startsWith('"');

                            if (isQuote) {
                              return (
                                <div
                                  key={index}
                                  className='relative my-6 rounded-2xl border-l-4 border-[#ffb347] bg-gradient-to-r from-[#fff8ec] to-[#fffdf5] p-6 shadow-sm'
                                >
                                  <svg
                                    className='absolute left-4 top-4 h-8 w-8 text-[#ffd8a7] opacity-50'
                                    fill='currentColor'
                                    viewBox='0 0 32 32'
                                  >
                                    <path d='M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z' />
                                  </svg>
                                  <p className='relative z-10 text-lg italic leading-relaxed text-[#6b4525]'>
                                    {paragraph}
                                  </p>
                                </div>
                              );
                            }

                            return (
                              <div
                                key={index}
                                className='group rounded-xl bg-white/40 p-5 transition-all hover:bg-white/60 hover:shadow-md'
                              >
                                <p className='leading-loose text-[#6b4525] text-justify'>
                                  {paragraph
                                    .split('. ')
                                    .map((sentence, sIndex, arr) => (
                                      <span key={sIndex}>
                                        {sentence}
                                        {sIndex < arr.length - 1 && '. '}
                                        {sIndex < arr.length - 1 &&
                                          sIndex % 2 === 1 && (
                                            <span className='inline-block w-2'></span>
                                          )}
                                      </span>
                                    ))}
                                </p>
                              </div>
                            );
                          })}
                      </div>

                      {/* Key highlights section */}
                      <div className='mt-8 grid gap-3 sm:grid-cols-2'>
                        <div className='flex items-start gap-3 rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-4 shadow-sm'>
                          <div className='mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ffb347]'>
                            <svg
                              className='h-4 w-4 text-white'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                              />
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                            </svg>
                          </div>
                          <div>
                            <p className='font-semibold text-[#b25a13]'>
                              Vị trí
                            </p>
                            <p className='text-sm text-[#825126]'>
                              {selectedDestination.name}
                            </p>
                          </div>
                        </div>

                        <div className='flex items-start gap-3 rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-4 shadow-sm'>
                          <div className='mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ff7b54]'>
                            <svg
                              className='h-4 w-4 text-white'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                              />
                            </svg>
                          </div>
                          <div>
                            <p className='font-semibold text-[#b25a13]'>
                              Điểm nhấn
                            </p>
                            <p className='text-sm text-[#825126]'>
                              {selectedDestination.description.slice(0, 50)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value='gallery' className='pt-6'>
                    <ImageGallery
                      images={selectedDestination.images}
                      destinationName={selectedDestination.name}
                    />
                  </TabsContent>

                  <TabsContent value='news' className='pt-6'>
                    {hasNews ? (
                      <>
                        <Carousel className='w-full'>
                          <CarouselContent>
                            {selectedDestination.images_news.map(
                              (image, index) => (
                                <CarouselItem
                                  key={index}
                                  className='basis-full'
                                >
                                  <div className='p-1'>
                                    <div className='aspect-[16/9] overflow-hidden rounded-3xl border border-white shadow-lg'>
                                      <img
                                        src={image}
                                        alt={`${
                                          selectedDestination.name
                                        } tin tức ${index + 1}`}
                                        className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                                        loading='lazy'
                                      />
                                    </div>
                                  </div>
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselPrevious className='bg-white text-[#c4631c] hover:bg-[#fff3e2] ' />
                          <CarouselNext className='bg-white text-[#c4631c] hover:bg-[#fff3e2]' />
                        </Carousel>
                        <CardDescription className='mt-4 text-base text-[#7c4a1f]'>
                          {selectedDestination.description_news}
                        </CardDescription>
                      </>
                    ) : (
                      <p className='rounded-2xl border border-[#f8e0b8] bg-white p-4 text-sm text-[#a16934]'>
                        Chưa có tin tức mới cho địa điểm này. Hãy quay lại sau
                        nhé!
                      </p>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          <section className='space-y-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm uppercase tracking-[0.2em] text-amber-600'>
                  Nét ẩm thực phù sa
                </p>
                <h2 className='text-2xl font-serif text-amber-900'>
                  Khám phá món ngon địa phương
                </h2>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='rounded-full border border-amber-200 px-4 py-1 text-xs uppercase tracking-widest text-amber-700'>
                    Local tips
                  </div>
                </TooltipTrigger>
                <TooltipContent>Gợi ý các món ngon địa phương</TooltipContent>
              </Tooltip>
            </div>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {foodHighlights.map((food) => (
                <Card
                  key={food.name}
                  className='border-none bg-white/80 shadow-lg backdrop-blur'
                >
                  <CardContent className='space-y-3 p-5'>
                    <div className='flex items-center justify-between'>
                      <p className='font-semibold text-amber-900'>
                        {food.name}
                      </p>
                      <Badge className='bg-amber-100 text-amber-700'>
                        Đặc sản
                      </Badge>
                    </div>
                    <p className='text-sm text-amber-800'>{food.description}</p>
                  </CardContent>
                </Card>
              ))}
              {!foodHighlights.length && (
                <p className='text-sm text-amber-700'>
                  Địa điểm này chưa có dữ liệu món ăn. Hãy khám phá thêm các
                  điểm lân cận để thưởng thức ẩm thực phong phú.
                </p>
              )}
            </div>
          </section>

          <section className='grid gap-6 lg:grid-cols-2'>
            <Card className='border-none bg-gradient-to-br from-emerald-500/90 to-cyan-600/80 text-white shadow-2xl'>
              <CardHeader>
                <CardTitle className='text-2xl font-serif'>
                  Trải nghiệm sông nước
                </CardTitle>
                <CardDescription className='text-white/80'>
                  Những hoạt động nên thử để cảm nhận trọn vẹn hơi thở miền Tây.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-3'>
                  {[
                    'Chèo xuồng sáng sớm ở rừng tràm Trà Sư',
                    'Săn hoàng hôn tại hồ Thủy Liêm - Núi Cấm',
                    'Ghé làng Chăm, trải nghiệm dệt thổ cẩm',
                  ].map((item) => (
                    <div
                      key={item}
                      className='flex items-start gap-3 rounded-2xl bg-white/10 p-3'
                    >
                      <Waves className='mt-1 h-5 w-5' />
                      <p className='text-sm'>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className='border-none bg-white/80 shadow-2xl backdrop-blur'>
              <CardHeader>
                <CardTitle className='text-2xl text-amber-900'>
                  Bí kíp du lịch
                </CardTitle>
                <CardDescription>
                  Những mẹo nhỏ để hành trình thuận lợi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion
                  type='single'
                  collapsible
                  className='w-full space-y-3'
                >
                  {travelTips.map((tip) => (
                    <AccordionItem
                      value={tip.id}
                      key={tip.id}
                      className='rounded-2xl border border-amber-100 bg-white/90 px-4'
                    >
                      <AccordionTrigger className='text-left font-semibold text-amber-900'>
                        {tip.title}
                      </AccordionTrigger>
                      <AccordionContent className='text-sm text-amber-800'>
                        {tip.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </main>
      </TooltipProvider>
    </div>
  );
}
