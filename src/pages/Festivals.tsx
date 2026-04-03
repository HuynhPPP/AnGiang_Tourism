import { useState, useEffect } from 'react';
import { useFestivalsData } from '@/hooks/useData';
import { FestivalCalendar } from '@/components/festivals/FestivalCalendar';
import { FestivalCard } from '@/components/festivals/FestivalCard';
import { getImgUrl } from '@/data/defaults';
import { Sparkles, Map, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FestivalsPage() {
  const { items: festivals } = useFestivalsData();
  
  // Sort and set initial selected festival
  const sortedFestivals = [...festivals].sort((a, b) => a.month - b.month);
  const [selectedFestival, setSelectedFestival] = useState(sortedFestivals[0] || null);

  useEffect(() => {
    if (festivals.length > 0 && !selectedFestival) {
      setSelectedFestival(sortedFestivals[0]);
    }
  }, [festivals]);

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9]'>
      
      {/* Hero Section with Glassmorphism */}
      <section className='relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden'>
        
        {/* Nút quay về trang chủ */}
        <div className='absolute top-6 left-6 sm:top-8 sm:left-8 z-50'>
          <Link to="/">
            <div className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md px-4 py-2.5 rounded-full transition-all border border-white/20 shadow-lg group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-sm tracking-wide">Trang chủ</span>
            </div>
          </Link>
        </div>

        <div className='absolute inset-0 z-0'>
          <img 
            src={getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')} 
            alt="Mùa Lễ Hội An Giang" 
            className='w-full h-full object-cover object-center scale-105 animate-pulse-slow' 
          />
          <div className='absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-900/40 to-[#fffdf5]'></div>
        </div>
        
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg'>
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span className='font-medium uppercase tracking-wider text-sm'>Trải nghiệm văn hoá đặc sắc</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-display font-bold text-white drop-shadow-xl'>
            Mùa Lễ Hội <span className='text-amber-400'>An Giang</span>
          </h1>
          <p className='text-xl md:text-2xl text-white/90 drop-shadow-md mx-auto max-w-2xl leading-relaxed'>
            Hành trình tâm linh và khám phá những sự kiện đầy màu sắc trên mảnh đất chín rồng.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16 -mt-16 relative z-20'>
        
        {/* Calendar Timeline Section */}
        <section className='space-y-8 animate-in fade-in zoom-in-95 duration-700 delay-300'>
          <div className="text-center space-y-4 mt-10">
            <h2 className="text-3xl font-display font-bold text-amber-900 flex items-center justify-center gap-3">
              <Map className="w-8 h-8 text-amber-600" />
              Lịch Trình Sự Kiện Nổi Bật
            </h2>
            <p className="text-emerald-800">Chọn một sự kiện trên trục thời gian để khám phá</p>
          </div>
          
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-xl border border-white border-opacity-50">
            <FestivalCalendar 
              festivals={festivals} 
              onSelect={setSelectedFestival}
              selectedId={selectedFestival?.id || null}
            />
          </div>
        </section>

        {/* Selected Festival Details */}
        <section className="min-h-[500px]">
           {selectedFestival ? (
             <FestivalCard festival={selectedFestival} />
           ) : (
             <div className="text-center text-amber-800 py-12">Không có lễ hội nào để hiển thị.</div>
           )}
        </section>
        
      </main>
    </div>
  );
}
