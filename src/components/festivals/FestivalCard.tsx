import { Festival } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { PlayCircle } from 'lucide-react';

interface FestivalCardProps {
  festival: Festival;
}

export function FestivalCard({ festival }: FestivalCardProps) {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-md group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image/Media Section */}
          <div className="relative h-64 md:h-auto md:min-h-[400px] overflow-hidden">
            {festival.images && festival.images.length > 0 ? (
              <Carousel 
                plugins={[plugin.current]}
                className="w-full h-full"
              >
                <CarouselContent className="h-full ml-0">
                  {festival.images.map((img, idx) => (
                    <CarouselItem key={idx} className="h-full pl-0 relative">
                      <img 
                        src={img} 
                        alt={`${festival.name} image ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/40 border-0 text-white" />
                <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/40 border-0 text-white" />
              </Carousel>
            ) : (
              <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-800">Hình ảnh đang cập nhật...</span>
              </div>
            )}
            
            {festival.videoUrl && (
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm cursor-pointer hover:bg-black/80 transition-colors">
                <PlayCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Xem Video</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-center relative bg-gradient-to-br from-white/90 to-amber-50/90 space-y-6">
            <div className="space-y-4">
              {festival.badge && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-0">
                  {festival.badge}
                </Badge>
              )}
              <h3 className="text-3xl font-display font-bold text-amber-900 leading-tight">
                {festival.name}
              </h3>
              <div className="flex flex-col gap-2 text-emerald-800 font-medium">
                <div className="flex items-center gap-2 bg-emerald-50 w-fit px-3 py-1.5 rounded-lg">
                  <span className="text-amber-600">Thời gian:</span> {festival.date}
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 w-fit px-3 py-1.5 rounded-lg">
                  <span className="text-amber-600">Địa điểm:</span> {festival.location}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              {festival.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
