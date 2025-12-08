import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MapPin,
  Users,
  Calendar,
  Mountain,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      {/* Main content */}
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main content area */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Giới thiệu */}
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

            {/* Văn hóa */}
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

            {/* Bản đồ hành chính */}
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
                      src='/images/Bản_đồ_hành_chính_tỉnh_An_Giang.jpeg'
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
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Thông tin nhanh */}
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

            {/* Thời điểm tham quan */}
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
          </div>
        </div>
      </main>
    </div>
  );
}
