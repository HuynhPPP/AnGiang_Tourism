import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FoodImageGallery } from './FoodImageGallery';
import type { FoodCategory } from '@/types';

interface FoodCategoriesProps {
  foodCategories: any[];
  activeTab: string;
  handleTabChange: (value: string) => void;
}

export function FoodCategories({ foodCategories, activeTab, handleTabChange }: FoodCategoriesProps) {
  return (
    <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className='w-full'
          >
            <TabsList className='flex overflow-x-auto bg-white/80 backdrop-blur-sm border border-[#ffd8a7] rounded-xl p-1 shadow-lg scrollbar-hide'>
              {foodCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 font-sans-soft text-sm px-8 py-2.5 whitespace-nowrap flex-shrink-0'
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {foodCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className='pt-8'
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {category.items.map((food, index) => (
                    <Card
                      key={index}
                      className='group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-[#f7d9aa] shadow-lg hover:shadow-[#ffb347]/30'
                    >
                      <FoodImageGallery
                        images={food.image ? [food.image] : []}
                        name={food.name}
                      />
                      <CardHeader className='pb-4'>
                        <CardTitle className='text-xl font-display text-[#b25a13] group-hover:text-[#ff7b54] transition-colors duration-300'>
                          {food.name}
                        </CardTitle>
                        <CardDescription className='text-sm text-[#a2763f] font-medium'>
                          📍 {food.origin}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className='text-[#6b4525] leading-relaxed'>
                          {food.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          
  );
}
