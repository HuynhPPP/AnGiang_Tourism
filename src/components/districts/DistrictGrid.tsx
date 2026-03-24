import { Card, CardContent } from '@/components/ui/card';

interface DistrictGridProps {
  districts: any[];
  selectedDistrict: any;
  handleDistrictSelect: (district: any) => void;
}

export function DistrictGrid({ districts, selectedDistrict, handleDistrictSelect }: DistrictGridProps) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12'>
          {districts.map((district) => (
            <Card
              key={district.id}
              className={`group cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
                selectedDistrict.id === district.id
                  ? 'ring-2 ring-[#ffb347] border-transparent shadow-xl shadow-[#ffb347]/20 scale-105'
                  : 'border-[#ffd8a7] hover:border-[#ffb347] hover:shadow-lg'
              }`}
              onClick={() => handleDistrictSelect(district)}
            >
              <div className='relative aspect-[16/10] overflow-hidden bg-[#fff8ec]'>
                <img
                  src={district.image}
                  alt={district.name}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>
              <CardContent className='p-3 bg-white'>
                <h3
                  className={`text-xs sm:text-sm font-bold text-center truncate transition-colors duration-300 ${
                    selectedDistrict.id === district.id
                      ? 'text-[#ff7b54]'
                      : 'text-[#b25a13]'
                  }`}
                >
                  {district.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
  );
}
