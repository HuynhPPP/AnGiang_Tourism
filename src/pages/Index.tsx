import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Destination } from '@/types';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useDestinationsData } from '@/hooks/useData';

import { HeroSection } from '@/components/home/HeroSection';
import { DestinationSection } from '@/components/home/DestinationSection';
import { FoodSection } from '@/components/home/FoodSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';

const useDestinations = () => {
  const { items } = useDestinationsData();
  return items;
};

export default function HomePage() {
  const destinations = useDestinations();
  const [searchParams, setSearchParams] = useSearchParams();

  const destIdFromUrl = searchParams.get('id');
  const selectedDestinationId = destIdFromUrl ? parseInt(destIdFromUrl) : null;

  const selectedDestination = useMemo<Destination | null>(() => {
    if (!destinations.length) return null;
    if (selectedDestinationId) {
      const match = destinations.find(
        (destination) => destination.id === selectedDestinationId
      );
      if (match) return match;
    }
    return destinations[0];
  }, [destinations, selectedDestinationId]);

  const activeTab = searchParams.get('tab') || 'overview';

  const handleDestinationSelect = (id: number) => {
    setSearchParams(
      (prev) => {
        prev.set('id', id.toString());
        return prev;
      },
      { replace: true }
    );
  };

  const handleTabChange = (value: string) => {
    setSearchParams(
      (prev) => {
        prev.set('tab', value);
        return prev;
      },
      { replace: true }
    );
  };

  if (!selectedDestination) {
    return null;
  }

  const foodHighlights = selectedDestination.foods ?? [];

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      <TooltipProvider>
        <main className='mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8'>
          <HeroSection />
          
          <DestinationSection 
            destinations={destinations}
            selectedDestination={selectedDestination}
            handleDestinationSelect={handleDestinationSelect}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
          
          {/* <FoodSection foodHighlights={foodHighlights} />
          
          <ExperienceSection /> */}
        </main>
      </TooltipProvider>
    </div>
  );
}
