import { Festival } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

interface FestivalCardProps {
  festival: Festival;
}

export function FestivalCard({ festival }: FestivalCardProps) {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Card className="overflow-hidden border border-amber-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl sm:rounded-[2.5rem] bg-white/95 backdrop-blur-xl group mb-10 transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col">
          
          {/* Top Content Section */}
          <div className="p-5 sm:p-8 md:p-12 flex flex-col justify-center relative space-y-6 sm:space-y-8 bg-gradient-to-br from-white to-[#fffcf5]">
            
            <div className="space-y-5">
              {festival.badge && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-0 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase shadow-sm">
                  {festival.badge}
                </Badge>
              )}
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-amber-900 leading-[1.1] drop-shadow-sm">
                {festival.name}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-emerald-800 font-medium pt-2">
                <div className="flex flex-1 sm:flex-initial items-center gap-2.5 bg-white px-4 sm:px-5 py-2.5 rounded-xl shadow-sm border border-emerald-100/50">
                  <span className="text-amber-600 font-bold uppercase text-xs tracking-wider shrink-0">Thời gian:</span> 
                  <span className="text-sm sm:text-base">{festival.date}</span>
                </div>
                <div className="flex flex-1 sm:flex-initial items-center gap-2.5 bg-white px-4 sm:px-5 py-2.5 rounded-xl shadow-sm border border-emerald-100/50">
                  <span className="text-amber-600 font-bold uppercase text-xs tracking-wider shrink-0">Địa điểm:</span> 
                  <span className="text-sm sm:text-base">{festival.location}</span>
                </div>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg max-w-6xl font-light">
              {festival.description}
            </p>

            {/* Video Button located exactly below description */}
            {festival.videoUrl && (
              <div className="pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-[0_8px_20px_rgba(5,150,105,0.3)] hover:shadow-[0_8px_25px_rgba(5,150,105,0.5)] hover:bg-emerald-500 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group/btn">
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                      <PlayCircle className="w-6 h-6 animate-pulse relative z-10 text-amber-300" />
                      <span className="text-base sm:text-lg font-bold tracking-wide relative z-10">Xem Video Lễ Hội</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black/95 border-white/10 w-full aspect-video rounded-3xl shadow-2xl">
                    {festival.videoUrl.includes('youtube.com') || festival.videoUrl.includes('youtu.be') ? (
                      <iframe 
                        src={festival.videoUrl} 
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : (
                      <video 
                        src={festival.videoUrl} 
                        className="w-full h-full object-contain focus:outline-none"
                        controls
                        autoPlay
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>

          {/* Bottom UI Slider Section */}
          <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[650px] w-full bg-slate-900 overflow-hidden rounded-b-3xl sm:rounded-b-[2.5rem]">
            {festival.images && festival.images.length > 0 ? (
              <Carousel 
                plugins={[plugin.current]}
                className="w-full h-full focus-within:outline-none"
                opts={{ loop: true }}
              >
                <CarouselContent className="h-full ml-0">
                  {festival.images.map((img, idx) => (
                    <CarouselItem key={idx} className="h-full pl-0 relative">
                      <img 
                        src={img} 
                        alt={`${festival.name} image ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 flex items-center gap-2.5 text-white/90 pointer-events-none bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                         <ImageIcon className="w-5 h-5" />
                         <span className="font-semibold text-sm tracking-wide">Hình ảnh {idx + 1} / {festival.images.length}</span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {festival.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-3 sm:left-10 w-10 h-10 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110" />
                    <CarouselNext className="right-3 sm:right-10 w-10 h-10 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110" />
                  </>
                )}
              </Carousel>
            ) : (
              <div className="w-full h-full bg-[#1b2f28] flex flex-col items-center justify-center text-emerald-800/40">
                <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                <span className="text-lg sm:text-xl font-medium tracking-wide">Hình ảnh đang cập nhật...</span>
              </div>
            )}
          </div>
          
        </div>
      </Card>
    </div>
  );
}
