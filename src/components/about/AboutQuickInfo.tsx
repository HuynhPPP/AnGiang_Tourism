import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export function AboutQuickInfo() {
  return (
    <Card className='overflow-hidden border border-[#f7d9aa] bg-white shadow-xl top-4'>
              <CardHeader className='bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white pb-4'>
                <CardTitle className='text-xl font-display flex items-center gap-2'>
                  <Sparkles className='h-5 w-5' />
                  Thông Tin Nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <dl className='space-y-3'>
                  <div className='group rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <dt className='text-xs font-semibold text-[#a2763f] uppercase tracking-wider mb-1'>
                      🏛️ Tỉnh lỵ
                    </dt>
                    <dd className='text-base font-semibold text-[#b25a13]'>
                      Long Xuyên
                    </dd>
                  </div>

                  <div className='group rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <dt className='text-xs font-semibold text-[#a2763f] uppercase tracking-wider mb-1'>
                      📏 Diện tích
                    </dt>
                    <dd className='text-base font-semibold text-[#b25a13]'>
                      3.536 km²
                    </dd>
                  </div>

                  <div className='group rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <dt className='text-xs font-semibold text-[#a2763f] uppercase tracking-wider mb-1'>
                      👥 Dân số
                    </dt>
                    <dd className='text-base font-semibold text-[#b25a13]'>
                      ~2,1 triệu người
                    </dd>
                  </div>

                  <div className='group rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <dt className='text-xs font-semibold text-[#a2763f] uppercase tracking-wider mb-1'>
                      🗣️ Ngôn ngữ
                    </dt>
                    <dd className='text-base font-semibold text-[#b25a13]'>
                      Tiếng Việt, Khmer, Chăm
                    </dd>
                  </div>

                  <div className='group rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <dt className='text-xs font-semibold text-[#a2763f] uppercase tracking-wider mb-1'>
                      🏙️ Thành phố chính
                    </dt>
                    <dd className='text-base font-semibold text-[#b25a13]'>
                      Long Xuyên, Châu Đốc, Tân Châu
                    </dd>
                  </div>

                  <div className='group rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <dt className='text-xs font-semibold text-[#a2763f] uppercase tracking-wider mb-1'>
                      🌤️ Khí hậu
                    </dt>
                    <dd className='text-base font-semibold text-[#b25a13]'>
                      Nhiệt đới gió mùa
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
  );
}
