import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { getImgUrl } from '@/data/defaults';

export function AboutMap() {
  return (
    <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-4'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                    <MapPin className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-2xl md:text-3xl font-display text-[#b25a13]'>
                    Bản Đồ Hành Chính
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='space-y-5'>
                  <p className='text-[#6b4525] leading-relaxed'>
                    Bản đồ hành chính tỉnh An Giang thể hiện rõ các đơn vị hành
                    chính, ranh giới và địa hình của tỉnh.
                  </p>
                  <div className='relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[#ffd8a7] group/img'>
                    <img
                      src={getImgUrl('Bản_đồ_hành_chính_tỉnh_An_Giang.jpeg')}
                      alt='Bản đồ hành chính tỉnh An Giang'
                      className='w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300'></div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-5 border border-[#ffd8a7] hover:shadow-lg transition-all duration-300'>
                      <h4 className='font-semibold text-[#b25a13] mb-3 flex items-center gap-2'>
                        <span className='text-xl'>🏛️</span>
                        Thành phố & Thị xã
                      </h4>
                      <ul className='text-sm text-[#6b4525] space-y-2'>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Long Xuyên (Tỉnh lỵ)
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Châu Đốc
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Tân Châu
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Tịnh Biên
                        </li>
                      </ul>
                    </div>
                    <div className='rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-5 border border-[#ffd8a7] hover:shadow-lg transition-all duration-300'>
                      <h4 className='font-semibold text-[#b25a13] mb-3 flex items-center gap-2'>
                        <span className='text-xl'>🏘️</span>
                        Huyện
                      </h4>
                      <ul className='text-sm text-[#6b4525] space-y-2'>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          An Phú
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Châu Phú
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Châu Thành
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Phú Tân
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Thoại Sơn
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Tri Tôn
                        </li>
                        <li className='flex items-center gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-[#ffb347]'></span>
                          Chợ Mới
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
  );
}
