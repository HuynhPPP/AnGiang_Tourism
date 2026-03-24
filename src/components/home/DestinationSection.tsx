import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Check, Sparkles, Newspaper, Maximize2, ChevronLeft, ChevronRight, X, Star, Bell } from 'lucide-react';
import type { Destination } from '@/types';
import { ImageGallery } from './ImageGallery';
import { VideoPlayer } from './VideoPlayer';

interface DestinationSectionProps {
  destinations: Destination[];
  selectedDestination: Destination;
  handleDestinationSelect: (id: number) => void;
  activeTab: string;
  handleTabChange: (value: string) => void;
}

export function DestinationSection({
  destinations,
  selectedDestination,
  handleDestinationSelect,
  activeTab,
  handleTabChange
}: DestinationSectionProps) {
  const [newsImageIndex, setNewsImageIndex] = useState(0);
  const [isNewsLightboxOpen, setIsNewsLightboxOpen] = useState(false);

  useEffect(() => {
    setNewsImageIndex(0);
  }, [selectedDestination]);

  const nextNewsImage = () => {
    if (!selectedDestination) return;
    setNewsImageIndex((prev) => (prev + 1) % selectedDestination.images_news.length);
  };

  const prevNewsImage = () => {
    if (!selectedDestination) return;
    setNewsImageIndex((prev) => (prev - 1 + selectedDestination.images_news.length) % selectedDestination.images_news.length);
  };

  const openNewsLightbox = (index: number) => {
    setNewsImageIndex(index);
    setIsNewsLightboxOpen(true);
  };

  const closeNewsLightbox = () => {
    setIsNewsLightboxOpen(false);
  };

  const hasNews = !!selectedDestination.description_news && !!selectedDestination.images_news.length;

  return (
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
                            onClick={() => handleDestinationSelect(dest.id)}
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
                <Tabs
                  key={`${selectedDestination.id}-${activeTab}`}
                  value={activeTab}
                  onValueChange={handleTabChange}
                  className='w-full'
                >
                  <TabsList className='grid w-full grid-cols-3 rounded-2xl bg-[#fef3d4] p-1 text-[#c26a1f]'>
                    {[
                      { value: 'gallery', label: 'Thư viện' },
                      { value: 'overview', label: 'Câu chuyện' },
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

                      {/* Video Introduction - Only render when overview tab is active to stop video on tab switch */}
                      {activeTab === 'overview' &&
                        selectedDestination.video && (
                          <div className='animate-in fade-in slide-in-from-bottom-4 duration-700'>
                            <VideoPlayer
                              videoUrl={selectedDestination.video}
                              name={selectedDestination.name}
                              className='w-full mb-8'
                            />
                          </div>
                        )}

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
  );
}
