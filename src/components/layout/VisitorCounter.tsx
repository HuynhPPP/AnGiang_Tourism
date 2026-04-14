import { useAnalytics } from '@/hooks/useAnalytics';
import { Eye, Users, Activity } from 'lucide-react';

export const VisitorCounter = () => {
  const { totalViews, uniqueVisitors } = useAnalytics();

  return (
    <div className="flex items-center gap-6 py-4 px-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          <Eye className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-amber-800/60 font-bold">Lượt xem</span>
          <span className="text-sm font-display font-bold text-amber-900">{totalViews.toLocaleString()}</span>
        </div>
      </div>

      <div className="w-px h-8 bg-amber-200/50" />

      <div className="flex items-center gap-2">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Users className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-amber-800/60 font-bold">Khách ghé thăm</span>
          <span className="text-sm font-display font-bold text-amber-900">{uniqueVisitors.toLocaleString()}</span>
        </div>
      </div>

      <div className="w-px h-8 bg-amber-200/50" />

      <div className="flex items-center gap-2">
        <div className="relative">
          <Activity className="w-4 h-4 text-orange-500 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-amber-800/60 font-bold">Trạng thái</span>
          <span className="text-sm font-display font-bold text-green-600">Trực tuyến</span>
        </div>
      </div>
    </div>
  );
};
