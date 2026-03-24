import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function AboutIntroduction() {
  return (
    <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-4'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                    <MapPin className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-2xl md:text-3xl font-display text-[#b25a13]'>
                    Giới Thiệu Chung
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6 space-y-5'>
                <div className='rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-5 border-l-4 border-[#ffb347]'>
                  <p className='text-[#6b4525] leading-loose text-justify'>
                    An Giang là một tỉnh thuộc vùng Đồng bằng sông Cửu Long của
                    Việt Nam. Giáp với Campuchia về phía Tây Bắc, An Giang nổi
                    tiếng với cảnh quan thiên nhiên tươi đẹp, di sản văn hóa đa
                    dạng và lịch sử phong phú. Tỉnh có diện tích khoảng 3.536
                    kilômét vuông và dân số khoảng 2,1 triệu người.
                  </p>
                </div>

                <div className='rounded-xl bg-white/60 p-5 hover:bg-white/80 transition-all duration-300'>
                  <p className='text-[#6b4525] leading-loose text-justify'>
                    Trước khi sáp nhập với tỉnh Kiên Giang (trước 1/7/2025), An
                    Giang có 11 đơn vị hành chính cấp huyện và 156 đơn vị hành
                    chính cấp xã. Sau khi sáp nhập từ 1/7/2025, tỉnh An Giang
                    mới sẽ có 102 đơn vị hành chính cấp xã, bao gồm 85 xã, 14
                    phường và 3 đặc khu (Kiên Hải, Phú Quốc, Thổ Châu).
                  </p>
                </div>
              </CardContent>
            </Card>
  );
}
