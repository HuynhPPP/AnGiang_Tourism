import { useSearchParams } from 'react-router-dom';
import { useFoodCategoriesData } from '@/hooks/useData';
import { FoodCategories } from '@/components/food/FoodCategories';
import { FoodGuide } from '@/components/food/FoodGuide';

const useFoodCategories = () => {
  const { items } = useFoodCategoriesData();
  return items;
};

export default function FoodPage() {
  const foodCategories = useFoodCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') || foodCategories[0]?.id || 'rice-dishes';

  const handleTabChange = (value: string) => {
    setSearchParams(
      (prev) => {
        prev.set('tab', value);
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='space-y-12'>
          <FoodCategories 
            foodCategories={foodCategories} 
            activeTab={activeTab} 
            handleTabChange={handleTabChange} 
          />
          <FoodGuide />
        </div>
      </main>
    </div>
  );
}
