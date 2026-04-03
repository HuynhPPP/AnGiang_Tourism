import { useState, useRef } from 'react';
import { Camera, Video, Hand, ArrowRightLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Sử dụng import.meta.glob của Vite để tự động load ảnh và video
const imageModules = import.meta.glob('@/assets/images/HomePage/*.{jpg,jpeg,png}', { eager: true });
const MOCK_IMAGES: string[] = Object.values(imageModules).map((mod: any) => mod.default);

const videoModules = import.meta.glob('@/assets/videos/HomePage/*.mp4', { eager: true });
const MOCK_VIDEOS: string[] = Object.values(videoModules).map((mod: any) => mod.default);

export function TouristMoments() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Khởi tạo plugins riêng biệt cho 2 Slides (Autoplay)
  const pluginVideos = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const pluginImages = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="mt-20 space-y-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b25a13]">
          Khám Phá An Giang
        </h2>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7b54]"></div>
        <p className="text-[#825126] text-lg">
          Những hình ảnh và video tuyệt đẹp, chân thực nhất về mảnh đất và con người nơi đây.
        </p>
      </div>

      <div className="space-y-16">
        {/* Videos Carousel */}
        {MOCK_VIDEOS.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-md">
                <Video className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#b25a13]">Video Ấn Tượng</h3>
            </div>
            
            <Carousel 
              plugins={[pluginVideos.current]}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {MOCK_VIDEOS.map((video, index) => (
                  <CarouselItem key={index} className="pl-5 basis-[85%] sm:basis-1/3 lg:basis-1/4">
                    <Card className="overflow-hidden border-2 border-[#ffd8a7] bg-white shadow-lg rounded-2xl group relative">
                      <CardContent className="p-0 aspect-[9/16] relative bg-black flex items-center justify-center overflow-hidden">
                        <video 
                          src={video} 
                          controls
                          controlsList="nodownload"
                          className="w-full h-full object-contain"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-[#ffd8a7] text-[#b25a13] hover:bg-[#fffdf5] hover:text-[#d45b16]" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-[#ffd8a7] text-[#b25a13] hover:bg-[#fffdf5] hover:text-[#d45b16]" />
              </div>
            </Carousel>
            
            {/* Mobile swipe hint */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#a2763f] font-medium md:hidden pt-2">
              <ArrowRightLeft className="w-4 h-4 animate-pulse" />
              <span>Vuốt sang trái để xem thêm</span>
            </div>
          </div>
        )}

        {/* Images Carousel */}
        {MOCK_IMAGES.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-md">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#b25a13]">Ảnh Nổi Bật</h3>
            </div>
            
            <Carousel 
              plugins={[pluginImages.current]}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {MOCK_IMAGES.map((img, index) => (
                  <CarouselItem key={index} className="pl-5 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="overflow-hidden border-2 border-[#ffd8a7] bg-white shadow-lg rounded-2xl group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
                      onClick={() => setSelectedImage(img)}
                    >
                      {/* Đảm bảo các ảnh hiển thị kích thước bằng nhau và to rõ thông qua aspect ratio (4:3) và object-cover */}
                      <CardContent className="p-0 aspect-[4/3] relative h-full">
                        <img 
                          src={img} 
                          alt={`An Giang View ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Overlay detail */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex justify-center items-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold drop-shadow-md bg-black/40 px-3 py-1.5 rounded-full flex items-center gap-2">
                             Mở rộng
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-[#ffd8a7] text-[#b25a13] hover:bg-[#fffdf5] hover:text-[#d45b16]" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-[#ffd8a7] text-[#b25a13] hover:bg-[#fffdf5] hover:text-[#d45b16]" />
              </div>
            </Carousel>

            {/* Mobile swipe hint */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#a2763f] font-medium md:hidden pt-2">
              <ArrowRightLeft className="w-4 h-4 animate-pulse" />
              <span>Vuốt sang trái để xem thêm</span>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Mở rộng ảnh */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-none shadow-none flex justify-center items-center outline-none">
          <DialogTitle className="sr-only">Chi tiết hình ảnh</DialogTitle>
          {selectedImage && (
            <div className="relative mx-auto rounded-lg overflow-hidden group">
              <img 
                src={selectedImage} 
                alt="Expanded view" 
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
