import { AboutIntroduction } from '@/components/about/AboutIntroduction';
import { AboutCulture } from '@/components/about/AboutCulture';
import { AboutMap } from '@/components/about/AboutMap';
import { AboutQuickInfo } from '@/components/about/AboutQuickInfo';
import { AboutBestTime } from '@/components/about/AboutBestTime';
import SEO from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      <SEO 
        title="Giới Thiệu" 
        description="Tìm hiểu về lịch sử, văn hóa, bản đồ và những thông tin du lịch hữu ích về tỉnh An Giang."
      />
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex justify-end mb-6'>
          <Link to="/about-new">
            <Button className="bg-[#b25a13] hover:bg-[#8e460e] text-white">
              Phiên bản mới - sau khi sáp nhập
            </Button>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main content area */}
          <div className='lg:col-span-2 space-y-8'>
            <AboutIntroduction />
            <AboutCulture />
            <AboutMap />
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1 space-y-6'>
            <AboutQuickInfo />
            <AboutBestTime />
          </div>
        </div>
      </main>
    </div>
  );
}
