import { useMemo, useState } from 'react';
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
import { useDestinationsData } from '@/hooks/useData';

const useDestinations = () => {
  const { items } = useDestinationsData();
  return items;
};

export default function HomePage() {
  const destinations = useDestinations();
  const first = useMemo(() => destinations[0], [destinations]);
  const [selectedDestination, setSelectedDestination] = useState(first);
  if (!first) return null;

  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'>
      {/* Main content */}
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-amber-900 text-center mb-4'>
            Điểm Đến Nổi Bật
          </h2>
          <p className='text-base md:text-lg text-amber-700 text-center max-w-3xl mx-auto'>
            Khám phá những địa điểm du lịch tuyệt vời và nét văn hóa đặc sắc của
            An Giang
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8'>
          {/* Sidebar with destination list */}
          <div className='lg:col-span-1 space-y-4'>
            <h3 className='text-lg md:text-xl font-bold text-amber-800 mb-4'>
              🏛️ Điểm Tham Quan Nổi Bật
            </h3>
            <div className='flex flex-col space-y-3'>
              {destinations.map((dest) => (
                <Button
                  key={dest.id}
                  variant={
                    selectedDestination.id === dest.id ? 'default' : 'outline'
                  }
                  className={`justify-start h-auto py-3 px-4 text-left transition-all duration-300 ${
                    selectedDestination.id === dest.id
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg transform scale-105'
                      : 'hover:bg-amber-100 hover:text-amber-900 border-amber-200 hover:border-amber-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedDestination(dest)}
                >
                  <span className='text-sm md:text-base leading-relaxed'>
                    {dest.name}
                  </span>
                </Button>
              ))}
            </div>

            {/* Thot Not tree image */}
            <div className='hidden lg:block mt-8'>
              <Card className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='relative overflow-hidden'>
                  <img
                    src='/images/TriTonImgs/thotnottraitim01.jpg'
                    alt='Rừng Thốt nốt An Giang'
                    className='w-full h-48 object-cover hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
                </div>
                <CardContent className='p-4 bg-gradient-to-r from-amber-50 to-orange-50'>
                  <p className='text-amber-900 text-sm font-medium leading-relaxed'>
                    🌳 Cây thốt nốt hình trái tim - điểm đến thú vị ở An Giang
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Selected destination details */}
          <div className='lg:col-span-3'>
            <Card className='shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm'>
              <CardHeader className='bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6'>
                <CardTitle className='text-2xl md:text-3xl font-bold'>
                  {selectedDestination.name}
                </CardTitle>
                <CardDescription className='text-base md:text-lg text-amber-100 leading-relaxed'>
                  {selectedDestination.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-8 p-6'>
                {/* Images carousel */}
                <div>
                  <h3 className='text-lg md:text-xl font-semibold mb-4 text-amber-900 flex items-center'>
                    📸 Thư Viện Ảnh
                  </h3>
                  <Carousel className='w-full max-w-3xl mx-auto'>
                    <CarouselContent>
                      {selectedDestination.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className='p-1'>
                            <div className='aspect-[16/9] overflow-hidden rounded-xl shadow-lg'>
                              <img
                                src={image}
                                alt={`${selectedDestination.name} - Hình ${
                                  index + 1
                                }`}
                                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                                loading='lazy'
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className='bg-white/80 hover:bg-white text-amber-800 border-amber-200' />
                    <CarouselNext className='bg-white/80 hover:bg-white text-amber-800 border-amber-200' />
                  </Carousel>
                </div>

                {/* Foods section */}
                <div>
                  <h3 className='text-lg md:text-xl font-semibold mb-4 text-amber-900 flex items-center'>
                    📰 Thông Tin Mới
                  </h3>
                  {selectedDestination.description_news ? (
                    <>
                      <Carousel className='w-full max-w-3xl mx-auto'>
                        <CarouselContent>
                          {selectedDestination.images_news.map(
                            (images_news, index) => (
                              <CarouselItem key={index}>
                                <div className='p-1'>
                                  <div className='aspect-[16/9] overflow-hidden rounded-xl shadow-lg'>
                                    <img
                                      src={images_news}
                                      alt={`${
                                        selectedDestination.name
                                      } - Hình ${index + 1}`}
                                      className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                                      loading='lazy'
                                    />
                                  </div>
                                </div>
                              </CarouselItem>
                            )
                          )}
                        </CarouselContent>
                        <CarouselPrevious className='bg-white/80 hover:bg-white text-amber-800 border-amber-200' />
                        <CarouselNext className='bg-white/80 hover:bg-white text-amber-800 border-amber-200' />
                      </Carousel>

                      <CardDescription className='text-base md:text-lg mt-4'>
                        {selectedDestination.description_news}
                      </CardDescription>
                    </>
                  ) : (
                    'Chưa cập nhật'
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
