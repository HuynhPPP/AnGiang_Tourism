import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMemo, useState } from 'react';
import { useDistrictsData } from '@/hooks/useData';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const useDistricts = () => {
  const { items } = useDistrictsData();
  return items;
};

// Image Gallery Component
interface ImageGalleryProps {
  images: string[];
  name: string;
}

function ImageGallery({ images, name }: ImageGalleryProps) {
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

// Video Player Component
interface VideoPlayerProps {
  videoUrl?: string;
  districtName: string;
}

function VideoPlayer({ videoUrl, districtName }: VideoPlayerProps) {
  if (!videoUrl) {
    return (
      <div className='flex flex-col items-center justify-center h-64 md:h-96 bg-gradient-to-br from-[#fff8ec] to-[#ffe6c9] rounded-lg border-2 border-dashed border-[#ffd8a7]'>
        <Play className='h-16 w-16 text-[#ffb347] mb-4 opacity-50' />
        <p className='text-[#6b4525] text-lg font-medium'>
          Chưa có video giới thiệu
        </p>
      </div>
    );
  }

  // Check if it's a YouTube URL
  const isYouTube =
    videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

  return (
    <div
      className='relative w-full overflow-hidden rounded-lg shadow-2xl bg-black'
      style={{ paddingBottom: '56.25%' }}
    >
      {isYouTube ? (
        <iframe
          className='absolute top-0 left-0 w-full h-full border-0'
          src={videoUrl}
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
  const first = useMemo(() => districts[0], [districts]);
  const [selectedDistrict, setSelectedDistrict] = useState(first);
  if (!first) return null;

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

        {/* Districts selection */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10'>
          {districts.map((district) => (
            <Card
              key={district.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedDistrict.id === district.id
                  ? 'border-[#ffb347] border-2 shadow-lg shadow-[#ffb347]/30'
                  : 'border-[#ffd8a7]'
              }`}
              onClick={() => setSelectedDistrict(district)}
            >
              <div className='h-24 overflow-hidden rounded-t-lg'>
                <img
                  src={district.image}
                  alt={district.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <CardContent className='p-3'>
                <h3 className='text-sm font-semibold text-center truncate text-[#b25a13]'>
                  {district.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected district detail */}
        {selectedDistrict && (
          <Card className='mb-8 shadow-2xl bg-white border border-[#f7d9aa] overflow-hidden'>
            <div className='relative h-96 overflow-hidden'>
              <img
                src={selectedDistrict.image}
                alt={selectedDistrict.name}
                className='object-cover w-full h-full'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
              <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                <h2 className='text-4xl font-display font-bold mb-2 drop-shadow-lg'>
                  {selectedDistrict.name}
                </h2>
                <p className='text-lg opacity-90 drop-shadow-md leading-relaxed'>
                  {selectedDistrict.description}
                </p>
              </div>
            </div>

            <CardContent className='p-8'>
              <Tabs defaultValue='attractions' className='w-full'>
                <TabsList className='grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-[#ffd8a7] rounded-xl p-1 shadow-lg'>
                  <TabsTrigger
                    value='attractions'
                    className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft'
                  >
                    🏛️ Điểm Du Lịch
                  </TabsTrigger>
                  <TabsTrigger
                    value='cuisine'
                    className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft'
                  >
                    🍽️ Ẩm Thực
                  </TabsTrigger>
                  <TabsTrigger
                    value='video'
                    className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft'
                  >
                    🎬 Video Giới Thiệu
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
                          images={attraction.image ? [attraction.image] : []}
                          name={attraction.name}
                        />
                        <CardHeader className='pb-4'>
                          <CardTitle className='text-xl font-display text-[#b25a13] group-hover:text-[#ff7b54] transition-colors duration-300'>
                            {attraction.name}
                          </CardTitle>
                          <CardDescription className='text-[#6b4525] leading-relaxed'>
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
                          images={dish.image ? [dish.image] : []}
                          name={dish.name}
                        />
                        <CardHeader className='pb-4'>
                          <CardTitle className='text-xl font-display text-[#b25a13] group-hover:text-[#ff7b54] transition-colors duration-300'>
                            {dish.name}
                          </CardTitle>
                          <CardDescription className='text-[#6b4525] leading-relaxed'>
                            {dish.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value='video' className='pt-8'>
                  <div className='max-w-5xl mx-auto'>
                    <VideoPlayer
                      videoUrl={selectedDistrict.video}
                      districtName={selectedDistrict.name}
                    />
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
