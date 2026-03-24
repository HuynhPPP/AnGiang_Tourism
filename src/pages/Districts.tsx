import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDistrictsData } from '@/hooks/useData';
import { DistrictGrid } from '@/components/districts/DistrictGrid';
import { DistrictDetail } from '@/components/districts/DistrictDetail';

const useDistricts = () => {
  const { items } = useDistrictsData();
  return items;
};

export default function DistrictsPage() {
  const districts = useDistricts();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get active district ID from URL or default to first
  const districtIdFromUrl = searchParams.get('id');
  const selectedDistrict = useMemo(() => {
    return districts?.find((d) => d.id === districtIdFromUrl) || districts[0];
  }, [districts, districtIdFromUrl]);

  // Get active tab from URL or default to 'attractions'
  const activeTab = searchParams.get('tab') || 'attractions';

  if (!selectedDistrict) return null;

  const handleDistrictSelect = (district: any) => {
    setSearchParams(
      (prev) => {
        prev.set('id', district.id);
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

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mb-10'>
          <h2 className='text-3xl font-display font-bold text-[#b25a13] mb-4'>
            Các Huyện, Thị Xã và Thành Phố của An Giang (trước 1/7/2025)
          </h2>
          <p className='text-lg text-[#6b4525] leading-relaxed'>
            An Giang gồm 11 đơn vị hành chính cấp huyện: 2 thành phố (Long
            Xuyên, Châu Đốc), 2 thị xã (Tân Châu, Tịnh Biên) và 7 huyện (An Phú,
            Châu Phú, Châu Thành, Phú Tân, Thoại Sơn, Tri Tôn, Chợ Mới). Mỗi địa
            phương đều có nét văn hóa, ẩm thực và cảnh quan riêng biệt.
          </p>
        </div>

        <DistrictGrid 
          districts={districts} 
          selectedDistrict={selectedDistrict} 
          handleDistrictSelect={handleDistrictSelect} 
        />

        <DistrictDetail 
          selectedDistrict={selectedDistrict} 
          activeTab={activeTab} 
          handleTabChange={handleTabChange} 
        />

      </main>
    </div>
  );
}
