import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, Mountain, Sparkles, UtensilsCrossed } from 'lucide-react';

export function AboutCulture() {
  return (
    <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-4'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                    <Users className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-2xl md:text-3xl font-display text-[#b25a13]'>
                    Văn Hóa và Truyền Thống
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6 space-y-6'>
                <div className='rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-5 border-l-4 border-[#ffb347]'>
                  <p className='text-[#6b4525] leading-loose text-justify'>
                    An Giang là nơi sinh sống của nhiều dân tộc, bao gồm người
                    Kinh, Khmer, Chăm và Hoa, mỗi dân tộc đều góp phần tạo nên
                    bản sắc văn hóa phong phú của tỉnh. Sự đa dạng này được thể
                    hiện qua các lễ hội địa phương, kiến trúc, ẩm thực và tín
                    ngưỡng tôn giáo.
                  </p>
                </div>

                {/* Lễ hội */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='h-5 w-5 text-[#ffb347]' />
                    <h3 className='text-xl font-display font-bold text-[#b25a13]'>
                      Lễ Hội Nổi Bật
                    </h3>
                  </div>

                  <div className='space-y-3'>
                    <div className='group/item rounded-xl bg-white border border-[#ffd8a7] p-4 hover:shadow-lg hover:border-[#ffb347] transition-all duration-300'>
                      <div className='flex items-start gap-3'>
                        <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] mt-1'>
                          <Sparkles className='h-4 w-4 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-[#b25a13] mb-1'>
                            Lễ hội Bà Chúa Xứ
                          </h4>
                          <p className='text-sm text-[#6b4525] leading-relaxed'>
                            Được tổ chức hàng năm tại núi Sam từ ngày 23 đến 27
                            tháng 4 âm lịch. Đây là một trong những lễ hội lớn
                            nhất vùng Đồng bằng sông Cửu Long, thu hút hàng
                            triệu khách hành hương và du khách.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='group/item rounded-xl bg-white border border-[#ffd8a7] p-4 hover:shadow-lg hover:border-[#ffb347] transition-all duration-300'>
                      <div className='flex items-start gap-3'>
                        <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] mt-1'>
                          <Sparkles className='h-4 w-4 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-[#b25a13] mb-1'>
                            Lễ hội đua bò
                          </h4>
                          <p className='text-sm text-[#6b4525] leading-relaxed'>
                            Một sự kiện văn hóa độc đáo của người Khmer, thường
                            được tổ chức sau mùa gặt.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='group/item rounded-xl bg-white border border-[#ffd8a7] p-4 hover:shadow-lg hover:border-[#ffb347] transition-all duration-300'>
                      <div className='flex items-start gap-3'>
                        <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff7b54] mt-1'>
                          <Mountain className='h-4 w-4 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-semibold text-[#b25a13] mb-1'>
                            Mùa nước nổi
                          </h4>
                          <p className='text-sm text-[#6b4525] leading-relaxed'>
                            Không phải là lễ hội truyền thống nhưng là hiện
                            tượng tự nhiên khi sông Mekong dâng nước, tạo nên
                            cảnh quan độc đáo và lối sống đặc trưng.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ẩm thực */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <UtensilsCrossed className='h-5 w-5 text-[#ffb347]' />
                    <h3 className='text-xl font-display font-bold text-[#b25a13]'>
                      Ẩm Thực Đặc Sắc
                    </h3>
                  </div>

                  <div className='grid gap-3 sm:grid-cols-2'>
                    <div className='rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md transition-all duration-300'>
                      <h4 className='font-semibold text-[#b25a13] mb-2'>
                        🍜 Bún cá
                      </h4>
                      <p className='text-sm text-[#6b4525] leading-relaxed'>
                        Đặc sản của thành phố Châu Đốc, với bún, cá và nước dùng
                        đậm đà.
                      </p>
                    </div>

                    <div className='rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md transition-all duration-300'>
                      <h4 className='font-semibold text-[#b25a13] mb-2'>
                        🐟 Mắm
                      </h4>
                      <p className='text-sm text-[#6b4525] leading-relaxed'>
                        Các loại mắm được chế biến từ cá, là nguyên liệu chính
                        trong nhiều món ăn địa phương.
                      </p>
                    </div>

                    <div className='rounded-xl bg-gradient-to-br from-[#fff8ec] to-white p-4 border border-[#ffd8a7] hover:shadow-md transition-all duration-300 sm:col-span-2'>
                      <h4 className='font-semibold text-[#b25a13] mb-2'>
                        🍲 Lẩu mắm
                      </h4>
                      <p className='text-sm text-[#6b4525] leading-relaxed'>
                        Món lẩu đặc trưng được nấu từ mắm, rau và các loại thịt.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
  );
}
