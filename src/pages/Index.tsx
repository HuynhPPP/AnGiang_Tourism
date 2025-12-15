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
  Newspaper,
  Bell,
  Sparkles,
  UtensilsCrossed,
  ChefHat,
  Coffee,
  Compass,
  Calendar,
  Car,
  Users,
  Star,
  Award,
  TrendingUp,
  MapPin,
  Check,
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

  // News image slider state
  const [newsImageIndex, setNewsImageIndex] = useState(0);
  const [isNewsLightboxOpen, setIsNewsLightboxOpen] = useState(false);

  // Reset news image index when destination changes
  useEffect(() => {
    setNewsImageIndex(0);
  }, [selectedDestination]);

  // News image navigation functions
  const nextNewsImage = () => {
    if (!selectedDestination) return;
    setNewsImageIndex(
      (prev) => (prev + 1) % selectedDestination.images_news.length
    );
  };

  const prevNewsImage = () => {
    if (!selectedDestination) return;
    setNewsImageIndex(
      (prev) =>
        (prev - 1 + selectedDestination.images_news.length) %
        selectedDestination.images_news.length
    );
  };

  const openNewsLightbox = (index: number) => {
    setNewsImageIndex(index);
    setIsNewsLightboxOpen(true);
  };

  const closeNewsLightbox = () => {
    setIsNewsLightboxOpen(false);
  };

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
          {/* An Giang Introduction Section */}
          <section className='relative overflow-hidden rounded-3xl shadow-2xl'>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className='w-full'
            >
              <CarouselContent>
                {[
                  {
                    image: '/images/Gioi_Thieu_AG/g1_1.jpg',
                    title: 'Chào Mừng Đến An Giang',
                    description:
                      'Vùng đất phù sa màu mỡ, nơi hội tụ của văn hóa đa sắc tộc và thiên nhiên tươi đẹp',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_2.jpg',
                    title: 'Vùng Đất Phù Sa',
                    description:
                      'Nơi sông Hậu uốn lượn, đất phù sa màu mỡ nuôi dưỡng văn hóa đa sắc tộc',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_3.jpg',
                    title: 'Núi Non Hùng Vĩ',
                    description:
                      'Dãy Thất Sơn sừng sững giữa đồng bằng, nơi linh thiêng của tín ngưỡng dân gian',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_4.jpg',
                    title: 'Văn Hóa Đa Dạng',
                    description:
                      'Nơi giao thoa của người Kinh, Khmer, Chăm và Hoa tạo nên bản sắc độc đáo',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_5.jpg',
                    title: 'Thiên Nhiên Tươi Đẹp',
                    description:
                      'Cánh đồng lúa bạt ngàn, rừng tràm xanh mướt và mùa nước nổi đặc sắc',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_6.jpg',
                    title: 'Di Sản Kiến Trúc',
                    description:
                      'Những ngôi chùa cổ kính, miếu thờ linh thiêng mang đậm dấu ấn lịch sử',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_7jpg.jpg',
                    title: 'Cuộc Sống Sông Nước',
                    description:
                      'Nhịp sống bình yên trên dòng sông Hậu với chợ nổi và làng chài truyền thống',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_8.jpg',
                    title: 'Lễ Hội Truyền Thống',
                    description:
                      'Những lễ hội đặc sắc như Bà Chúa Xứ, đua bò và Ok Om Bok của người Khmer',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_9.jpg',
                    title: 'Cảnh Quan Thiên Nhiên',
                    description:
                      'Vẻ đẹp hoang sơ của rừng tràm, cánh đồng sen và hồ nước trong xanh',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_10.jpg',
                    title: 'Ẩm Thực Phong Phú',
                    description:
                      'Hương vị đậm đà của miền sông nước với bún cá, lẩu mắm và đặc sản thốt nốt',
                  },
                  {
                    image: '/images/Gioi_Thieu_AG/gt_11.jpg',
                    title: 'Điểm Đến Hấp Dẫn',
                    description:
                      'Khám phá những địa danh nổi tiếng từ Núi Sam đến rừng tràm Trà Sư',
                  },
                ].map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className='relative h-[550px] overflow-hidden'>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className='w-full h-full object-cover'
                      />
                      {/* Gradient Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>

                      {/* Content */}
                      <div className='absolute bottom-0 left-0 right-0 p-8 md:p-12'>
                        <div className='max-w-3xl'>
                          <div className='flex items-center gap-3 mb-4'>
                            <div className='h-1 w-12 rounded-full bg-[#ffb347]'></div>
                            <p className='text-sm font-semibold uppercase tracking-wider text-white/90'>
                              Khám phá An Giang
                            </p>
                          </div>
                          <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg'>
                            {slide.title}
                          </h2>
                          <p className='text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md'>
                            {slide.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ffb347]/20 to-transparent'></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <CarouselPrevious className='left-4 bg-white/90 hover:bg-white text-[#b25a13] border-none shadow-lg' />
              <CarouselNext className='right-4 bg-white/90 hover:bg-white text-[#b25a13] border-none shadow-lg' />
            </Carousel>
          </section>

          <section className='grid gap-6 lg:grid-cols-[380px,1fr]'>
            <div className='space-y-5'>
              <Card className='overflow-hidden border-2 border-[#ffd8a7] bg-gradient-to-br from-white to-[#fffdf5] shadow-2xl'>
                <CardHeader className='pb-3 bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm'>
                      <MapPin className='h-5 w-5 text-white' />
                    </div>
                    <div>
                      <CardTitle className='text-xl text-white'>
                        Điểm đến gợi ý
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='pt-4 px-3'>
                  <ScrollArea className='pr-2'>
                    <div className='space-y-2'>
                      {destinations.map((dest) => {
                        const isActive = selectedDestination.id === dest.id;
                        const thumbnail =
                          dest.images?.[0] || '/images/placeholder.jpg';
                        return (
                          <button
                            key={dest.id}
                            className={`w-full text-left rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                              isActive
                                ? ''
                                : 'border-transparent bg-[#fff8ec] hover:border-[#ffd8a7] hover:shadow-md'
                            }`}
                            onClick={() => setSelectedDestinationId(dest.id)}
                          >
                            <div className='flex gap-3 p-2'>
                              {/* Thumbnail */}
                              <div className='relative flex-shrink-0'>
                                <div
                                  className={`w-20 h-20 rounded-lg overflow-hidden ${
                                    isActive ? 'ring-2 ring-[#ffb347]' : ''
                                  }`}
                                >
                                  <img
                                    src={thumbnail}
                                    alt={dest.name}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                  />
                                </div>
                                {isActive && (
                                  <div className='absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                                    <Check className='h-3 w-3 text-white' />
                                  </div>
                                )}
                              </div>

                              {/* Content */}
                              <div className='flex-1 min-w-0 py-1'>
                                <p
                                  className={`font-semibold text-sm mb-1 line-clamp-2 transition-colors ${
                                    isActive
                                      ? 'text-[#b25a13]'
                                      : 'text-[#6f4525] group-hover:text-[#b25a13]'
                                  }`}
                                >
                                  {dest.name}
                                </p>
                                <p className='text-xs text-[#a2763f] line-clamp-2'>
                                  {dest.address}
                                </p>
                                {isActive && (
                                  <div className='mt-2 flex items-center gap-1'>
                                    <Sparkles className='h-3 w-3 text-[#ffb347]' />
                                    <span className='text-[0.65rem] font-semibold text-[#ffb347] uppercase tracking-wide'>
                                      Đang xem
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <Card className='border border-[#f6d9ab] bg-white shadow-2xl'>
              <CardContent className='space-y-6 bg-[#fff9ef] p-6 h-full'>
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
                              {selectedDestination.address}
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
                      <div className='space-y-6'>
                        {/* News Description */}
                        {selectedDestination.description_news && (
                          <div className='rounded-2xl border-2 border-[#ffd8a7] bg-gradient-to-br from-[#fff8ec] via-white to-[#fffdf5] p-6 shadow-lg'>
                            <div className='flex items-start gap-4'>
                              <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                                <Newspaper className='h-6 w-6 text-white' />
                              </div>
                              <div className='flex-1'>
                                <h3 className='font-semibold text-lg text-[#b25a13] mb-2'>
                                  Thông tin cập nhật
                                </h3>
                                <p className='text-sm leading-relaxed text-[#6b4525]'>
                                  {selectedDestination.description_news}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Image Slider */}
                        <div className='space-y-4'>
                          <div className='flex items-center gap-2'>
                            <div className='h-1 w-8 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7b54]'></div>
                            <p className='text-sm font-semibold uppercase tracking-wider text-[#b25a13]'>
                              Hình ảnh ({selectedDestination.images_news.length}
                              )
                            </p>
                          </div>

                          {/* Main Image Slider */}
                          <div className='relative group'>
                            <div className='aspect-video overflow-hidden rounded-2xl border-2 border-[#f7d9aa] shadow-xl'>
                              <img
                                src={
                                  selectedDestination.images_news[
                                    newsImageIndex
                                  ]
                                }
                                alt={`${selectedDestination.name} - Ảnh ${
                                  newsImageIndex + 1
                                }`}
                                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer'
                                onClick={() => openNewsLightbox(newsImageIndex)}
                                loading='lazy'
                              />
                            </div>

                            {/* Overlay controls */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-between p-4'>
                              <Button
                                size='sm'
                                className='bg-white/90 text-[#b25a13] hover:bg-white backdrop-blur-sm'
                                onClick={() => openNewsLightbox(newsImageIndex)}
                              >
                                <Maximize2 className='h-4 w-4 mr-2' />
                                Xem toàn màn hình
                              </Button>
                              <div className='text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm'>
                                {newsImageIndex + 1} /{' '}
                                {selectedDestination.images_news.length}
                              </div>
                            </div>

                            {/* Navigation Arrows */}
                            {selectedDestination.images_news.length > 1 && (
                              <>
                                <button
                                  onClick={prevNewsImage}
                                  className='absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
                                >
                                  <ChevronLeft className='h-5 w-5' />
                                </button>
                                <button
                                  onClick={nextNewsImage}
                                  className='absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
                                >
                                  <ChevronRight className='h-5 w-5' />
                                </button>
                              </>
                            )}
                          </div>

                          {/* Thumbnail Grid */}
                          {selectedDestination.images_news.length > 1 && (
                            <div className='grid grid-cols-4 sm:grid-cols-6 gap-2'>
                              {selectedDestination.images_news.map(
                                (image, index) => (
                                  <div
                                    key={index}
                                    onClick={() => setNewsImageIndex(index)}
                                    className={`aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                                      newsImageIndex === index
                                        ? 'ring-3 ring-[#ffb347] shadow-lg scale-105'
                                        : 'ring-2 ring-transparent hover:ring-[#ffd8a7] hover:scale-105 opacity-70 hover:opacity-100'
                                    }`}
                                  >
                                    <img
                                      src={image}
                                      alt={`${
                                        selectedDestination.name
                                      } thumbnail ${index + 1}`}
                                      className='h-full w-full object-cover'
                                      loading='lazy'
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>

                        {/* Lightbox Modal for News Images */}
                        {isNewsLightboxOpen && (
                          <div className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center'>
                            {/* Close Button */}
                            <button
                              onClick={closeNewsLightbox}
                              className='absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-50'
                            >
                              <X className='h-6 w-6' />
                            </button>

                            {/* Image Counter */}
                            <div className='absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold z-50'>
                              {newsImageIndex + 1} /{' '}
                              {selectedDestination.images_news.length}
                            </div>

                            {/* Main Image */}
                            <div className='relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4'>
                              <img
                                src={
                                  selectedDestination.images_news[
                                    newsImageIndex
                                  ]
                                }
                                alt={`${selectedDestination.name} - Ảnh ${
                                  newsImageIndex + 1
                                }`}
                                className='max-w-full max-h-full object-contain rounded-lg'
                              />
                            </div>

                            {/* Navigation Arrows in Lightbox */}
                            {selectedDestination.images_news.length > 1 && (
                              <>
                                <button
                                  onClick={prevNewsImage}
                                  className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 z-50'
                                >
                                  <ChevronLeft className='h-6 w-6' />
                                </button>
                                <button
                                  onClick={nextNewsImage}
                                  className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 z-50'
                                >
                                  <ChevronRight className='h-6 w-6' />
                                </button>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className='relative overflow-hidden rounded-3xl border-2 border-dashed border-[#ffd8a7] bg-gradient-to-br from-[#fffdf5] via-[#fff8ec] to-[#fff4df] p-8 text-center'>
                        {/* Decorative background elements */}
                        <div className='absolute top-0 left-0 h-32 w-32 bg-[#ffb347]/10 rounded-full blur-3xl'></div>
                        <div className='absolute bottom-0 right-0 h-40 w-40 bg-[#ff7b54]/10 rounded-full blur-3xl'></div>

                        <div className='relative z-10 space-y-4'>
                          {/* Icon */}
                          <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-xl'>
                            <Newspaper className='h-10 w-10 text-white' />
                          </div>

                          {/* Message */}
                          <div className='space-y-2'>
                            <h3 className='text-xl font-semibold text-[#b25a13]'>
                              Chưa có tin tức mới
                            </h3>
                            <p className='text-sm text-[#a2763f] max-w-md mx-auto'>
                              Hiện tại chưa có thông tin cập nhật cho địa điểm
                              này. Hãy quay lại sau hoặc khám phá các điểm đến
                              khác!
                            </p>
                          </div>

                          {/* Call to action */}
                          <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4'>
                            <Button
                              variant='outline'
                              size='sm'
                              className='border-[#ffd8a7] text-[#b25a13] hover:bg-[#fff8ec]'
                            >
                              <Bell className='mr-2 h-4 w-4' />
                              Nhận thông báo
                            </Button>
                            <Button
                              size='sm'
                              className='bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white hover:shadow-lg'
                            >
                              <Sparkles className='mr-2 h-4 w-4' />
                              Khám phá thêm
                            </Button>
                          </div>

                          {/* Decorative stars */}
                          <div className='flex justify-center gap-2 pt-4'>
                            {[...Array(3)].map((_, i) => (
                              <Star
                                key={i}
                                className='h-4 w-4 text-[#ffd8a7] fill-[#ffd8a7] animate-pulse'
                                style={{ animationDelay: `${i * 200}ms` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          <section className='space-y-6'>
            {/* Section Header */}
            <div className='flex items-center justify-between'>
              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                  <div className='h-1 w-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500'></div>
                  <p className='text-sm uppercase tracking-[0.2em] text-amber-600 font-semibold'>
                    Nét ẩm thực phù sa
                  </p>
                </div>
                <h2 className='text-3xl font-serif text-amber-900 flex items-center gap-3'>
                  Khám phá món ngon địa phương
                  <UtensilsCrossed className='h-7 w-7 text-amber-600' />
                </h2>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='group cursor-pointer rounded-full border-2 border-amber-200 bg-white px-5 py-2 text-xs uppercase tracking-widest text-amber-700 transition-all hover:border-amber-400 hover:shadow-lg'>
                    <div className='flex items-center gap-2'>
                      <ChefHat className='h-4 w-4 transition-transform group-hover:scale-110' />
                      <span>Local tips</span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>Gợi ý các món ngon địa phương</TooltipContent>
              </Tooltip>
            </div>

            {/* Food Cards Grid */}
            {foodHighlights.length > 0 ? (
              <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {foodHighlights.map((food, index) => {
                  // Rotate through different food icons
                  const foodIcons = [UtensilsCrossed, ChefHat, Coffee];
                  const FoodIcon = foodIcons[index % foodIcons.length];

                  return (
                    <Card
                      key={food.name}
                      className='group relative overflow-hidden border-none bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
                    >
                      {/* Gradient border effect */}
                      <div className='absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                      <div className='absolute inset-[2px] rounded-lg bg-white'></div>

                      {/* Content */}
                      <CardContent className='relative space-y-4 p-6'>
                        {/* Icon & Badge Row */}
                        <div className='flex items-start justify-between'>
                          <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg'>
                            <FoodIcon className='h-6 w-6 text-amber-700' />
                          </div>
                          <Badge className='bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105'>
                            <Star className='mr-1 h-3 w-3 fill-white' />
                            Đặc sản
                          </Badge>
                        </div>

                        {/* Food Name */}
                        <div>
                          <h3 className='text-lg font-bold text-amber-900 transition-colors group-hover:text-orange-600'>
                            {food.name}
                          </h3>
                          <div className='mt-1 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-full'></div>
                        </div>

                        {/* Description */}
                        <p className='text-sm leading-relaxed text-amber-800/90'>
                          {food.description}
                        </p>

                        {/* Bottom decorative element */}
                        <div className='flex items-center gap-2 pt-2'>
                          <div className='flex gap-1'>
                            {[...Array(3)].map((_, i) => (
                              <Star
                                key={i}
                                className='h-3 w-3 fill-amber-400 text-amber-400 transition-all duration-300'
                                style={{
                                  transitionDelay: `${i * 50}ms`,
                                  transform: 'scale(0)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              />
                            ))}
                          </div>
                          <span className='text-xs text-amber-600/70'>
                            Món ăn truyền thống
                          </span>
                        </div>

                        {/* Decorative corner gradient */}
                        <div className='absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-tl from-amber-200/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>

                        {/* Top corner decoration */}
                        <div className='absolute -top-2 -right-2 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                          <div className='h-full w-full rounded-full bg-gradient-to-bl from-orange-300/20 to-transparent'></div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className='relative overflow-hidden rounded-3xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 p-12 text-center'>
                {/* Decorative background */}
                <div className='absolute inset-0 opacity-30'>
                  <div className='absolute top-10 left-10 h-20 w-20 rounded-full bg-amber-300 blur-2xl'></div>
                  <div className='absolute bottom-10 right-10 h-32 w-32 rounded-full bg-orange-300 blur-3xl'></div>
                </div>

                <div className='relative z-10 space-y-5'>
                  {/* Animated food icons */}
                  <div className='flex justify-center gap-4'>
                    {[UtensilsCrossed, ChefHat, Coffee].map((Icon, i) => (
                      <div
                        key={i}
                        className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl animate-bounce'
                        style={{
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s',
                        }}
                      >
                        <Icon className='h-8 w-8 text-white' />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className='space-y-2'>
                    <h3 className='text-2xl font-bold text-amber-900'>
                      Đang cập nhật món ăn
                    </h3>
                    <p className='mx-auto max-w-lg text-sm text-amber-700'>
                      Địa điểm này chưa có dữ liệu món ăn. Hãy khám phá thêm các
                      điểm lân cận để thưởng thức ẩm thực phong phú của An
                      Giang!
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4'>
                    <Button
                      variant='outline'
                      className='border-amber-400 text-amber-700 hover:bg-amber-50'
                    >
                      <UtensilsCrossed className='mr-2 h-4 w-4' />
                      Gợi ý món ăn
                    </Button>
                    <Button className='bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg'>
                      <ChefHat className='mr-2 h-4 w-4' />
                      Khám phá ẩm thực
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className='grid gap-6 lg:grid-cols-2'>
            {/* River Experiences Card */}
            <Card className='group relative overflow-hidden border-none bg-gradient-to-br from-emerald-500/90 to-cyan-600/80 text-white shadow-2xl transition-all duration-500 hover:shadow-emerald-500/50 hover:scale-[1.02]'>
              {/* Animated wave background pattern */}
              <div className='absolute inset-0 opacity-20'>
                <div className='absolute bottom-0 left-0 right-0 h-32'>
                  <svg
                    className='absolute bottom-0 w-full'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                  >
                    <path
                      d='M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z'
                      fill='white'
                      opacity='0.1'
                      className='animate-pulse'
                    />
                  </svg>
                </div>
              </div>

              <CardHeader className='relative z-10'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
                    <Waves className='h-6 w-6' />
                  </div>
                  <div>
                    <CardTitle className='text-2xl font-serif'>
                      Trải nghiệm sông nước
                    </CardTitle>
                    <CardDescription className='text-white/80'>
                      Những hoạt động nên thử để cảm nhận trọn vẹn hơi thở miền
                      Tây.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='relative z-10 space-y-4'>
                <div className='space-y-3'>
                  {[
                    {
                      text: 'Chèo xuồng sáng sớm ở rừng tràm Trà Sư',
                      icon: '🚣',
                    },
                    {
                      text: 'Săn hoàng hôn tại hồ Thủy Liêm - Núi Cấm',
                      icon: '🌅',
                    },
                    {
                      text: 'Ghé làng Chăm, trải nghiệm dệt thổ cẩm',
                      icon: '🧵',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.text}
                      className='group/item flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:translate-x-2'
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 text-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12'>
                        {item.icon}
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm leading-relaxed'>{item.text}</p>
                        <div className='mt-1 h-0.5 w-0 bg-white/50 transition-all duration-300 group-hover/item:w-full'></div>
                      </div>
                      <ChevronRight className='h-5 w-5 opacity-0 transition-all duration-300 group-hover/item:opacity-100' />
                    </div>
                  ))}
                </div>

                {/* Bottom decorative element */}
                <div className='flex items-center justify-between pt-4'>
                  <div className='flex items-center gap-2 text-xs text-white/70'>
                    <Compass className='h-4 w-4' />
                    <span>Khám phá văn hóa miền Tây</span>
                  </div>
                  <Badge className='bg-white/20 text-white backdrop-blur-sm'>
                    <Sparkles className='mr-1 h-3 w-3' />
                    Nổi bật
                  </Badge>
                </div>
              </CardContent>

              {/* Decorative corner */}
              <div className='absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl'></div>
              <div className='absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl'></div>
            </Card>

            {/* Travel Tips Card */}
            <Card className='group relative overflow-hidden border-none bg-white/90 shadow-2xl backdrop-blur transition-all duration-500 hover:shadow-amber-500/30 hover:scale-[1.02]'>
              {/* Decorative background pattern */}
              <div className='absolute inset-0 opacity-5'>
                <div
                  className='absolute inset-0'
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>
              </div>

              <CardHeader className='relative z-10'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
                    <Compass className='h-6 w-6 text-amber-700' />
                  </div>
                  <div>
                    <CardTitle className='text-2xl text-amber-900'>
                      Bí kíp du lịch
                    </CardTitle>
                    <CardDescription>
                      Những mẹo nhỏ để hành trình thuận lợi.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='relative z-10'>
                <Accordion
                  type='single'
                  collapsible
                  className='w-full space-y-3'
                >
                  {[
                    {
                      id: 'season',
                      title: 'Thời điểm lý tưởng',
                      content:
                        'Tháng 12 - 4 trời khô ráo, mây trắng cho ảnh đẹp; mùa nước nổi (9 - 11) lại phù hợp trải nghiệm ghe xuồng và ngắm rừng tràm ngập nước.',
                      icon: Calendar,
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      id: 'transport',
                      title: 'Di chuyển',
                      content:
                        'Kết hợp xe khách đến Long Xuyên/Châu Đốc rồi thuê xe máy hoặc book tour ghe. Nên đặt vé cáp treo Núi Sam/Núi Cấm trước giờ cao điểm.',
                      icon: Car,
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      id: 'culture',
                      title: 'Văn hóa bản địa',
                      content:
                        'Tôn trọng tập tục người Chăm và Khmer: ăn mặc kín đáo khi vào mosque/chùa, giữ im lặng khi tham dự nghi thức Bà Chúa Xứ.',
                      icon: Users,
                      color: 'from-purple-500 to-pink-500',
                    },
                  ].map((tip) => {
                    const TipIcon = tip.icon;
                    return (
                      <AccordionItem
                        value={tip.id}
                        key={tip.id}
                        className='group/accordion overflow-hidden rounded-2xl border-2 border-amber-100 bg-white/90 transition-all duration-300 hover:border-amber-300 hover:shadow-lg'
                      >
                        <AccordionTrigger className='px-4 text-left font-semibold text-amber-900 transition-colors hover:text-orange-600 [&[data-state=open]]:text-orange-600'>
                          <div className='flex items-center gap-3'>
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tip.color} shadow-md transition-all duration-300 group-hover/accordion:scale-110`}
                            >
                              <TipIcon className='h-5 w-5 text-white' />
                            </div>
                            <span>{tip.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className='px-4 pb-4 text-sm text-amber-800'>
                          <div className='ml-13 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4'>
                            <p className='leading-relaxed'>{tip.content}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>

                {/* Bottom tip */}
                <div className='mt-6 flex items-center gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4'>
                  <Award className='h-6 w-6 flex-shrink-0 text-amber-600' />
                  <p className='text-xs text-amber-700'>
                    <span className='font-semibold'>Pro tip:</span> Đặt tour
                    trước để có giá tốt và đảm bảo chỗ trong mùa cao điểm!
                  </p>
                </div>
              </CardContent>

              {/* Decorative corners */}
              <div className='absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-bl from-amber-200/20 to-transparent'></div>
              <div className='absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-orange-200/20 to-transparent'></div>
            </Card>
          </section>
        </main>
      </TooltipProvider>
    </div>
  );
}
