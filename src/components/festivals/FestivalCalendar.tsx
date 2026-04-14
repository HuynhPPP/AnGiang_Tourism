import { useRef, useEffect } from 'react';
import { Festival } from '@/types';
import { CalendarDays, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FestivalCalendarProps {
  festivals: Festival[];
  onSelect: (festival: Festival) => void;
  selectedId: string | null;
}

export function FestivalCalendar({ festivals, onSelect, selectedId }: FestivalCalendarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sort festivals by month ideally, but we'll sort based on 'month' property.
  const sortedFestivals = [...festivals].sort((a, b) => a.month - b.month);

  const currentMonth = new Date().getMonth() + 1;

  // Scroll to selected festival when it changes
  useEffect(() => {
    if (selectedId && containerRef.current) {
      const element = containerRef.current.querySelector(`[data-id="${selectedId}"]`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedId]);

  return (
    <div 
      ref={containerRef}
      className="w-full relative py-8 overflow-x-auto custom-scrollbar flex scroll-smooth"
    >
      {/* Background line for the timeline */}
      <div className="absolute top-[40%] left-0 w-[200%] h-1 bg-gradient-to-r from-amber-200 via-emerald-300 to-amber-200 opacity-50 z-0"></div>

      <div className="flex gap-8 items-center px-8 w-max relative z-10 min-w-full">
        {sortedFestivals.map((festival) => {
          const isSelected = festival.id === selectedId;
          const isCurrentMonth = Math.floor(festival.month) === currentMonth;

          return (
            <div 
              key={festival.id} 
              data-id={festival.id}
              className="flex flex-col items-center gap-4 cursor-pointer group flex-shrink-0"
              onClick={() => onSelect(festival)}
            >
              {/* Event Badge / Top */}
              <div className={`transition-all duration-300 ease-in-out ${isSelected ? '-translate-y-2' : 'group-hover:-translate-y-1'}`}>
                <Card className={`border-2 shadow-lg w-48 relative overflow-hidden ${isSelected ? 'border-amber-500 bg-amber-50' : 'border-amber-200 bg-white group-hover:border-amber-400'}`}>
                  {isCurrentMonth && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold flex items-center gap-1">
                      <Star className="w-2 h-2 fill-white" /> Hiện tại
                    </div>
                  )}
                  <CardContent className="p-3 text-center">
                    <p className={`font-bold line-clamp-1 ${isSelected ? 'text-amber-800' : 'text-amber-700'}`}>
                      {festival.name}
                    </p>
                    <p className="text-xs text-emerald-700 mt-1 flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" /> {festival.location.split(',')[0]}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className={`w-6 h-6 rounded-full border-4 shadow-md transition-all duration-300 ${isSelected ? 'bg-amber-500 border-white ring-4 ring-amber-200 scale-125' : isCurrentMonth ? 'bg-emerald-500 border-emerald-100 ring-2 ring-emerald-200' : 'bg-emerald-500 border-white group-hover:bg-amber-400'}`}></div>

              {/* Date / Month */}
              <div className={`text-center transition-all ${isSelected ? 'scale-110 font-bold text-amber-800' : 'text-emerald-800 group-hover:text-amber-700'}`}>
                <div className="flex items-center justify-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-sm font-semibold">{festival.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
