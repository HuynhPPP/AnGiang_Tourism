import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export interface VisitorStats {
  totalViews: number;
  uniqueVisitors: number;
  lastVisit: string;
}

const STORAGE_KEYS = {
  TOTAL_VIEWS: 'ag_analytics_total_views',
  UNIQUE_VISITOR: 'ag_analytics_unique_visitor',
  STATS: 'ag_analytics_stats'
};

export const useAnalytics = () => {
  const location = useLocation();
  const [stats, setStats] = useState<VisitorStats>({
    totalViews: 0,
    uniqueVisitors: 0,
    lastVisit: new Date().toISOString()
  });

  useEffect(() => {
    // Load existing stats
    const savedStats = localStorage.getItem(STORAGE_KEYS.STATS);
    let currentStats: VisitorStats = savedStats 
      ? JSON.parse(savedStats) 
      : { totalViews: 1240, uniqueVisitors: 856, lastVisit: new Date().toISOString() };

    // Increment views on every route change
    currentStats.totalViews += 1;
    currentStats.lastVisit = new Date().toISOString();

    // Check for unique visitor
    const isReturning = localStorage.getItem(STORAGE_KEYS.UNIQUE_VISITOR);
    if (!isReturning) {
      currentStats.uniqueVisitors += 1;
      localStorage.setItem(STORAGE_KEYS.UNIQUE_VISITOR, 'true');
    }

    // Save back
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(currentStats));
    setStats(currentStats);

    // Track page view event (Console log for demo)
    console.log(`[Analytics] Page View: ${location.pathname}`);
    
    // NOTE: In a real production app, you would call an API here:
    // supabase.from('page_views').insert({ path: location.pathname, visitor_id: ... })
    
  }, [location.pathname]);

  return stats;
};
