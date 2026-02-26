import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDistrictsData } from '@/hooks/useData';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Video,
  Flame,
  Sparkles,
  Star,
} from 'lucide-react';

const useDistricts = () => {
  const { items } = useDistrictsData();
  return items;
};

// Image Gallery Component
interface ImageGalleryProps {
  images: string[];
  name: string;
  badge?: string;
}

function ImageGallery({ images, name, badge }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getBadgeStyles = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('hot') || t.includes('nóng')) {
      return 'from-[#ff4d4d] to-[#f9cb28] shadow-[#ff4d4d]/30';
    }
    if (t.includes('trending') || t.includes('xu hướng')) {
      return 'from-[#8e2de2] to-[#4a00e0] shadow-[#8e2de2]/30';
    }
    if (t.includes('new') || t.includes('mới')) {
      return 'from-[#11998e] to-[#38ef7d] shadow-[#11998e]/30';
    }
    return 'from-[#ffb347] to-[#ff7b54] shadow-[#ffb347]/30';
  };

  const getBadgeIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('hot') || t.includes('nóng'))
      return <Flame className='w-3 h-3 mr-1 animate-pulse' />;
    if (t.includes('trending') || t.includes('xu hướng'))
      return <Sparkles className='w-3 h-3 mr-1' />;
    if (t.includes('new') || t.includes('mới'))
      return <Star className='w-3 h-3 mr-1 fill-white' />;
    return null;
  };

  return (
    <div className='relative h-80 overflow-hidden group'>
      {badge && (
        <div
          className={cn(
            'absolute top-4 left-4 z-20 flex items-center px-3 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider shadow-lg bg-gradient-to-r backdrop-blur-sm',
            getBadgeStyles(badge)
          )}
        >
          {getBadgeIcon(badge)}
          {badge}
        </div>
      )}
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

// Video Player Component
interface VideoPlayerProps {
  videoUrl?: string;
  districtName: string;
  className?: string;
}

function VideoPlayer({ videoUrl, districtName, className }: VideoPlayerProps) {
  if (!videoUrl) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center h-64 md:h-96 bg-gradient-to-br from-[#fff8ec] to-[#ffe6c9] rounded-lg border-2 border-dashed border-[#ffd8a7]',
          className
        )}
      >
        <Play className='h-16 w-16 text-[#ffb347] mb-4 opacity-50' />
        <p className='text-[#6b4525] text-lg font-medium'>
          Chưa có video giới thiệu
        </p>
      </div>
    );
  }

  // Helper to format embed URLs for external providers
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      if (url.includes('embed/')) return url;
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes('drive.google.com')) {
      // Convert standard Drive share links to preview embed links
      return url
        .replace(/\/view.*$/, '/preview')
        .replace(/\/edit.*$/, '/preview');
    }

    return url;
  };

  const isExternal =
    videoUrl.includes('youtube.com') ||
    videoUrl.includes('youtu.be') ||
    videoUrl.includes('drive.google.com');

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg shadow-2xl bg-black',
        className
      )}
      style={
        !className?.includes('h-') ? { paddingBottom: '56.25%' } : undefined
      }
    >
      {isExternal ? (
        <iframe
          className='absolute top-0 left-0 w-full h-full border-0'
          src={embedUrl}
          title={`Video giới thiệu ${districtName}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      ) : (
        <video
          className='absolute top-0 left-0 w-full h-full object-contain'
          controls
          preload='metadata'
        >
          <source src={videoUrl} type='video/mp4' />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      )}
    </div>
  );
}

export default function DistrictsPage() {
  const districts = useDistricts();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get active district ID from URL or default to first
  const districtIdFromUrl = searchParams.get('id');
  const selectedDistrict = useMemo(() => {
    return districts?.find((d) => d.id === districtIdFromUrl) || districts[0];
  }, [districts, districtIdFromUrl]);

  // Get active tab from URL or default to 'attractions'
  const activeTab = searchParams.get('tab') || 'attractions';

  if (!selectedDistrict) return null;

  const handleDistrictSelect = (district: any) => {
    setSearchParams(
      (prev) => {
        prev.set('id', district.id);
        return prev;
      },
      { replace: true }
    );
  };

  const handleTabChange = (value: string) => {
    setSearchParams(
      (prev) => {
        prev.set('tab', value);
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      {/* Main content */}
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mb-10'>
          <h2 className='text-3xl font-display font-bold text-[#b25a13] mb-4'>
            Các Huyện, Thị Xã và Thành Phố của An Giang (trước 1/7/2025)
          </h2>
          <p className='text-lg text-[#6b4525] leading-relaxed'>
            An Giang gồm 11 đơn vị hành chính cấp huyện: 2 thành phố (Long
            Xuyên, Châu Đốc), 2 thị xã (Tân Châu, Tịnh Biên) và 7 huyện (An Phú,
            Châu Phú, Châu Thành, Phú Tân, Thoại Sơn, Tri Tôn, Chợ Mới). Mỗi địa
            phương đều có nét văn hóa, ẩm thực và cảnh quan riêng biệt.
          </p>
        </div>

        {/* Districts selection grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12'>
          {districts.map((district) => (
            <Card
              key={district.id}
              className={`group cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
                selectedDistrict.id === district.id
                  ? 'ring-2 ring-[#ffb347] border-transparent shadow-xl shadow-[#ffb347]/20 scale-105'
                  : 'border-[#ffd8a7] hover:border-[#ffb347] hover:shadow-lg'
              }`}
              onClick={() => handleDistrictSelect(district)}
            >
              <div className='relative aspect-[16/10] overflow-hidden bg-[#fff8ec]'>
                <img
                  src={district.image}
                  alt={district.name}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>
              <CardContent className='p-3 bg-white'>
                <h3
                  className={`text-xs sm:text-sm font-bold text-center truncate transition-colors duration-300 ${
                    selectedDistrict.id === district.id
                      ? 'text-[#ff7b54]'
                      : 'text-[#b25a13]'
                  }`}
                >
                  {district.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected district detail */}
        {selectedDistrict && (
          <Card className='mb-12 shadow-2xl bg-white border border-[#f7d9aa] overflow-hidden rounded-[2rem]'>
            <div className='relative h-[300px] md:h-[450px] overflow-hidden'>
              {/* Blurred background layer to handle low-res images */}
              <div
                className='absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-40'
                style={{ backgroundImage: `url(${selectedDistrict.image})` }}
              />

              {/* Main Image */}
              <div className='relative w-full h-full flex items-center justify-center p-4 md:p-8'>
                <img
                  src={selectedDistrict.image}
                  alt={selectedDistrict.name}
                  className='w-full h-full object-cover rounded-2xl shadow-2xl border border-white/20'
                  loading='lazy'
                />

                {/* Overlay Text Content */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#6b4525]/90 via-[#6b4525]/20 to-transparent pointer-events-none' />

                <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10 pointer-events-none'>
                  <h2 className='text-3xl md:text-5xl font-display font-bold text-white mb-3 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700'>
                    {selectedDistrict.name}
                  </h2>
                  <p className='text-white/90 text-sm md:text-xl max-w-3xl leading-relaxed drop-shadow-lg line-clamp-2 md:line-clamp-none animate-in fade-in slide-in-from-bottom-6 duration-1000'>
                    {selectedDistrict.description}
                  </p>
                </div>
              </div>
            </div>

            <CardContent className='p-8'>
              <Tabs
                key={`${selectedDistrict.id}-${activeTab}`}
                value={activeTab}
                onValueChange={handleTabChange}
                className='w-full'
              >
                <TabsList className='grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-[#ffd8a7] rounded-xl p-1 shadow-lg'>
                  <TabsTrigger
                    value='attractions'
                    className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft text-xs sm:text-sm px-2 sm:px-4 py-2'
                  >
                    <span className='hidden sm:inline'>🏛️ </span>Điểm Du Lịch
                  </TabsTrigger>
                  <TabsTrigger
                    value='cuisine'
                    className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft text-xs sm:text-sm px-2 sm:px-4 py-2'
                  >
                    <span className='hidden sm:inline'>🍽️ </span>Ẩm Thực
                  </TabsTrigger>
                  <TabsTrigger
                    value='video'
                    className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft text-xs sm:text-sm px-2 sm:px-4 py-2'
                  >
                    <span className='hidden sm:inline'>🎬 </span>Video giới
                    thiệu
                  </TabsTrigger>
                </TabsList>

                <TabsContent value='attractions' className='pt-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {selectedDistrict.attractions.map((attraction, index) => (
                      <Card
                        key={index}
                        className='group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-[#f7d9aa] shadow-lg hover:shadow-[#ffb347]/30'
                      >
                        <ImageGallery
                          images={attraction.images || []}
                          name={attraction.name}
                          badge={attraction.badge}
                        />
                        <CardHeader className='pb-4'>
                          <div className='flex justify-between items-start gap-4'>
                            <CardTitle className='text-xl font-display text-[#b25a13] group-hover:text-[#ff7b54] transition-colors duration-300'>
                              {attraction.name}
                            </CardTitle>
                            {attraction.video && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant='outline'
                                    size='sm'
                                    className='flex items-center gap-2 border-[#ffb347] text-[#b25a13] hover:bg-[#ffb347] hover:text-white transition-all duration-300'
                                  >
                                    <Video className='h-5 w-5' />
                                    <span className='hidden sm:inline'>
                                      Video giới thiệu
                                    </span>
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className='max-w-4xl bg-white/95 backdrop-blur-md border-[#ffd8a7]'>
                                  <DialogHeader>
                                    <DialogTitle className='text-2xl font-display text-[#b25a13]'>
                                      Video giới thiệu: {attraction.name}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className='mt-4'>
                                    {activeTab === 'attractions' && (
                                      <VideoPlayer
                                        className='w-full h-[600px]'
                                        videoUrl={attraction.video}
                                        districtName={attraction.name}
                                      />
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                          <CardDescription className='text-[#6b4525] leading-relaxed pt-5'>
                            {attraction.description}
                          </CardDescription>
                          {attraction.location && (
                            <div className='mt-3 p-3 bg-gradient-to-r from-[#fff8ec] to-white rounded-lg border border-[#ffd8a7]'>
                              <p className='text-sm text-[#6b4525] font-medium'>
                                📍{' '}
                                <span className='font-semibold text-[#b25a13]'>
                                  Địa chỉ:
                                </span>{' '}
                                {attraction.location}
                              </p>
                            </div>
                          )}
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value='cuisine' className='pt-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {selectedDistrict.cuisine.map((dish, index) => (
                      <Card
                        key={index}
                        className='group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-[#f7d9aa] shadow-lg hover:shadow-[#ffb347]/30'
                      >
                        <ImageGallery
                          images={dish.images || []}
                          name={dish.name}
                          badge={dish.badge}
                        />
                        <CardHeader className='pb-4'>
                          <div className='flex justify-between items-start gap-4'>
                            <CardTitle className='text-xl font-display text-[#b25a13] group-hover:text-[#ff7b54] transition-colors duration-300'>
                              {dish.name}
                            </CardTitle>
                            {dish.video && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant='outline'
                                    size='sm'
                                    className='flex items-center gap-2 border-[#ffb347] text-[#b25a13] hover:bg-[#ffb347] hover:text-white transition-all duration-300'
                                  >
                                    <Video className='h-5 w-5' />
                                    <span className='hidden sm:inline'>
                                      Video giới thiệu
                                    </span>
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className='max-w-4xl bg-white/95 backdrop-blur-md border-[#ffd8a7]'>
                                  <DialogHeader>
                                    <DialogTitle className='text-2xl font-display text-[#b25a13]'>
                                      Video giới thiệu: {dish.name}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className='mt-4'>
                                    {activeTab === 'cuisine' && (
                                      <VideoPlayer
                                        className='w-full h-[600px]'
                                        videoUrl={dish.video}
                                        districtName={dish.name}
                                      />
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                          <CardDescription className='text-[#6b4525] leading-relaxed pt-5'>
                            {dish.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value='video' className='pt-8'>
                  <div className='max-w-5xl mx-auto'>
                    {activeTab === 'video' && (
                      <VideoPlayer
                        videoUrl={selectedDistrict.video}
                        districtName={selectedDistrict.name}
                      />
                    )}
                    {selectedDistrict.video && (
                      <div className='mt-6 p-4 bg-gradient-to-r from-[#fff8ec] to-white rounded-lg border border-[#ffd8a7]'>
                        <p className='text-sm text-[#6b4525] leading-relaxed'>
                          Video giới thiệu về {selectedDistrict.name} giúp bạn
                          hiểu rõ hơn về vẻ đẹp và nét văn hóa đặc trưng của địa
                          phương.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
