import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Video } from 'lucide-react';
import { DistrictImageGallery } from './DistrictImageGallery';
import { DistrictVideoPlayer } from './DistrictVideoPlayer';

interface DistrictDetailProps {
  selectedDistrict: any;
  activeTab: string;
  handleTabChange: (value: string) => void;
}

export function DistrictDetail({ selectedDistrict, activeTab, handleTabChange }: DistrictDetailProps) {
  return (
    <>
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
                        <DistrictImageGallery
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
                                      <DistrictVideoPlayer
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
                        <DistrictImageGallery
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
                                      <DistrictVideoPlayer
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
                      <DistrictVideoPlayer
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
    </>
  );
}
