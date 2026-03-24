import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function AboutBestTime() {
  return (
    <Card className='overflow-hidden border border-[#f7d9aa] bg-white shadow-xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-4'>
                <div className='flex items-center gap-2'>
                  <Calendar className='h-5 w-5 text-[#ffb347]' />
                  <CardTitle className='text-lg font-display text-[#b25a13]'>
                    Thời Điểm Tham Quan
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6'>
                <p className='mb-4 text-sm text-[#6b4525] leading-relaxed'>
                  Thời điểm tốt nhất để thăm An Giang phụ thuộc vào trải nghiệm
                  bạn muốn:
                </p>
                <ul className='space-y-3'>
                  <li className='group/season rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-3 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <div className='flex items-start gap-2'>
                      <Badge className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs mt-0.5'>
                        12-4
                      </Badge>
                      <div className='flex-1'>
                        <p className='font-semibold text-[#b25a13] text-sm mb-1'>
                          Mùa khô
                        </p>
                        <p className='text-xs text-[#6b4525]'>
                          Lý tưởng cho tham quan và leo núi
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='group/season rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-3 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <div className='flex items-start gap-2'>
                      <Badge className='bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs mt-0.5'>
                        8-11
                      </Badge>
                      <div className='flex-1'>
                        <p className='font-semibold text-[#b25a13] text-sm mb-1'>
                          Mùa nước nổi
                        </p>
                        <p className='text-xs text-[#6b4525]'>
                          Cảnh quan độc đáo khi đồng ruộng ngập nước
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='group/season rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-3 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <div className='flex items-start gap-2'>
                      <Badge className='bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs mt-0.5'>
                        11-12
                      </Badge>
                      <div className='flex-1'>
                        <p className='font-semibold text-[#b25a13] text-sm mb-1'>
                          Mùa gặt
                        </p>
                        <p className='text-xs text-[#6b4525]'>
                          Cánh đồng lúa vàng đẹp mắt
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='group/season rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-3 border border-[#ffd8a7] hover:shadow-md hover:border-[#ffb347] transition-all duration-300'>
                    <div className='flex items-start gap-2'>
                      <Badge className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs mt-0.5'>
                        4-5
                      </Badge>
                      <div className='flex-1'>
                        <p className='font-semibold text-[#b25a13] text-sm mb-1'>
                          Mùa lễ hội
                        </p>
                        <p className='text-xs text-[#6b4525]'>
                          Trải nghiệm các sự kiện văn hóa địa phương
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
  );
}
