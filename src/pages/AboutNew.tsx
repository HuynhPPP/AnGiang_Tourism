import SEO from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Map, Building2, Trees, Layout, History, ZoomIn } from 'lucide-react';
import mapAnGiang from '@/assets/images/BD-An-Giang.webp';

export default function AboutNewPage() {
  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      <SEO 
        title="Giới Thiệu (Sau Sáp Nhập)" 
        description="Tìm hiểu về đơn vị hành chính mới của tỉnh An Giang sau khi sáp nhập với tỉnh Kiên Giang."
      />
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex justify-start mb-6'>
          <Link to="/about">
            <Button variant="outline" className="border-[#b25a13] text-[#b25a13] hover:bg-[#fff8ec] text-base px-6 py-6 h-auto">
              Trở về phiên bản cũ
            </Button>
          </Link>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-8'>
            {/* Introduction Card */}
            <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                    <MapPin className='h-7 w-7 text-white' />
                  </div>
                  <CardTitle className='text-3xl md:text-4xl font-display text-[#b25a13]'>
                    Giới Thiệu Tỉnh An Giang (Mới)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6 md:p-8 space-y-6'>
                <div className='rounded-xl bg-gradient-to-r from-[#fff8ec] to-white p-6 border-l-4 border-[#ffb347]'>
                  <p className='text-base md:text-lg text-[#6b4525] leading-loose text-justify'>
                    Sau khi sắp xếp lại đơn vị hành chính cấp xã theo Nghị quyết 1654/NQ-UBTVQH15, tỉnh An Giang (mới) có tổng cộng 102 đơn vị hành chính cấp xã, gồm 85 xã, 14 phường và 3 đặc khu. Trong đó có 79 xã, 14 phường, 3 đặc khu hình thành sau sáp nhập, và 6 xã giữ nguyên (Mỹ Hòa Hưng, Bình Giang, Bình Sơn, Hòn Nghệ, Sơn Hải, Tiên Hải).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                    <Map className='h-7 w-7 text-white' />
                  </div>
                  <CardTitle className='text-3xl md:text-4xl font-display text-[#b25a13]'>
                    Bản Đồ Hành Chính Mới
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6 md:p-8'>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className='relative overflow-hidden rounded-xl border-2 border-[#f7d9aa] bg-white p-3 shadow-inner cursor-pointer group/map'>
                      <img
                        src={mapAnGiang}
                        alt='Bản đồ An Giang sau sáp nhập'
                        className='h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover/map:scale-105'
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg m-3">
                        <div className="bg-white/95 text-[#b25a13] px-5 py-2.5 rounded-full flex items-center gap-2 font-medium shadow-lg transform translate-y-4 group-hover/map:translate-y-0 transition-all duration-300">
                          <ZoomIn className="h-5 w-5" />
                          Phóng to bản đồ
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] md:max-w-[85vw] max-h-[95vh] p-2 bg-transparent border-none shadow-none flex items-center justify-center">
                    <DialogTitle className="sr-only">Bản đồ An Giang chi tiết</DialogTitle>
                    <img
                      src={mapAnGiang}
                      alt='Bản đồ An Giang chi tiết'
                      className='max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl bg-white p-2'
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <div className='lg:col-span-1 space-y-6'>
            {/* List of Communes/Wards */}
            <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl h-full'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb347] to-[#ff7b54] shadow-lg'>
                    <Layout className='h-7 w-7 text-white' />
                  </div>
                  <CardTitle className='text-2xl md:text-3xl font-display text-[#b25a13]'>
                    Đơn Vị Hành Chính
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='p-6 md:p-8 space-y-8'>
                
                <div>
                  <h4 className='flex items-center gap-3 font-display text-xl md:text-2xl font-semibold text-[#b25a13] mb-4'>
                    <Trees className='h-6 w-6 text-[#ffb347]' /> Các xã mới (79)
                  </h4>
                  <div className='flex flex-wrap gap-2.5 max-h-80 overflow-y-auto pr-2 custom-scrollbar'>
                    {['An Phú', 'Vĩnh Hậu', 'Nhơn Hội', 'Khánh Bình', 'Phú Hữu', 'Tân An', 'Châu Phong', 'Vĩnh Xương', 'Phú Tân', 'Phú An', 'Bình Thạnh Đông', 'Chợ Vàm', 'Hòa Lạc', 'Phú Lâm', 'Châu Phú', 'Mỹ Đức', 'Vĩnh Thạnh Trung', 'Bình Mỹ', 'Thạnh Mỹ Tây', 'An Cư', 'Núi Cấm', 'Ba Chúc', 'Tri Tôn', 'Ô Lâm', 'Cô Tô', 'Vĩnh Gia', 'An Châu', 'Bình Hòa', 'Cần Đăng', 'Vĩnh Hanh', 'Vĩnh An', 'Chợ Mới', 'Cù Lao Giêng', 'Hội An', 'Long Điền', 'Nhơn Mỹ', 'Long Kiến', 'Thoại Sơn', 'Óc Eo', 'Định Mỹ', 'Phú Hòa', 'Vĩnh Trạch', 'Tây Phú', 'Vĩnh Bình', 'Vĩnh Thuận', 'Vĩnh Phong', 'Vĩnh Hòa', 'U Minh Thượng', 'Đông Hòa', 'Tân Thạnh', 'Đông Hưng', 'An Minh', 'Vân Khánh', 'Tây Yên', 'Đông Thái', 'An Biên', 'Định Hòa', 'Gò Quao', 'Vĩnh Hòa Hưng', 'Vĩnh Tuy', 'Giồng Riềng', 'Thạnh Hưng', 'Long Thạnh', 'Hòa Hưng', 'Ngọc Chúc', 'Hòa Thuận', 'Tân Hội', 'Tân Hiệp', 'Thạnh Đông', 'Thạnh Lộc', 'Châu Thành', 'Bình An', 'Hòn Đất', 'Sơn Kiên', 'Mỹ Thuận', 'Hòa Điền', 'Kiên Lương', 'Giang Thành', 'Vĩnh Điều'].map((item, i) => (
                      <span key={i} className='inline-flex items-center px-3 py-1.5 rounded-lg text-sm md:text-base font-medium bg-[#fff8ec] text-[#b25a13] border border-[#f7d9aa] hover:bg-[#ffe6c9] transition-colors'>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className='flex items-center gap-3 font-display text-xl md:text-2xl font-semibold text-[#b25a13] mb-4'>
                    <Building2 className='h-6 w-6 text-[#ffb347]' /> Các phường mới (14)
                  </h4>
                  <div className='flex flex-wrap gap-2.5'>
                    {['Long Xuyên', 'Bình Đức', 'Mỹ Thới', 'Châu Đốc', 'Vĩnh Tế', 'Tân Châu', 'Long Phú', 'Tịnh Biên', 'Thới Sơn', 'Chi Lăng', 'Vĩnh Thông', 'Rạch Giá', 'Hà Tiên', 'Tô Châu'].map((item, i) => (
                      <span key={i} className='inline-flex items-center px-3 py-1.5 rounded-lg text-sm md:text-base font-medium bg-[#fff8ec] text-[#b25a13] border border-[#f7d9aa] hover:bg-[#ffe6c9] transition-colors'>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className='flex items-center gap-3 font-display text-xl md:text-2xl font-semibold text-[#b25a13] mb-4'>
                    <MapPin className='h-6 w-6 text-[#ffb347]' /> Các đặc khu (3)
                  </h4>
                  <div className='flex flex-wrap gap-2.5'>
                    {['Kiên Hải', 'Phú Quốc', 'Thổ Châu'].map((item, i) => (
                      <span key={i} className='inline-flex items-center px-3 py-1.5 rounded-lg text-sm md:text-base font-medium bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors'>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className='flex items-center gap-3 font-display text-xl md:text-2xl font-semibold text-[#b25a13] mb-4'>
                    <Trees className='h-6 w-6 text-[#ffb347]' /> Các xã giữ nguyên (6)
                  </h4>
                  <div className='flex flex-wrap gap-2.5'>
                    {['Mỹ Hòa Hưng', 'Bình Giang', 'Bình Sơn', 'Hòn Nghệ', 'Sơn Hải', 'Tiên Hải'].map((item, i) => (
                      <span key={i} className='inline-flex items-center px-3 py-1.5 rounded-lg text-sm md:text-base font-medium bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors'>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reference Information - Before Merger */}
        <div className='mt-20 space-y-10'>
          <div className='flex items-center justify-center gap-4 mb-10'>
            <History className='h-10 w-10 text-[#b25a13]' />
            <h3 className='text-3xl md:text-4xl font-display font-semibold text-[#b25a13] text-center'>
              Thông Tin Tham Khảo: Trước Khi Sáp Nhập
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Old An Giang */}
            <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-6'>
                <CardTitle className='text-2xl md:text-3xl font-display text-[#b25a13]'>
                  Tỉnh An Giang Cũ
                </CardTitle>
                <p className='text-base md:text-lg text-[#6b4525] mt-3 font-medium'>
                  11 đơn vị hành chính cấp huyện, tổng cộng 119 xã/phường/thị trấn.
                </p>
              </CardHeader>
              <CardContent className='p-6 md:p-8 space-y-6'>
                {[
                  { name: 'An Phú', desc: 'Khánh An, Khánh Bình, Nhơn Hội, Phú Hữu, Vĩnh Hội Đông…' },
                  { name: 'Châu Phú', desc: 'Bình Mỹ, Bình Thủy, Mỹ Đức, Vĩnh Thạnh Trung…' },
                  { name: 'Chợ Mới', desc: 'Long Điền A, Long Điền B, Mỹ Hội Đông, Nhơn Mỹ, Kiến Thành…' },
                  { name: 'Phú Tân', desc: 'Phú An, Phú Thạnh, Phú Lâm, Tân Trung, Hòa Lạc…' },
                  { name: 'Tri Tôn', desc: 'Ba Chúc, Lạc Quới, Vĩnh Gia, Tà Đảnh, Ô Lâm, Cô Tô…' },
                  { name: 'Tịnh Biên', desc: 'An Cư, An Nông, An Phú, Tân Lập, Vĩnh Trung, Văn Giáo…' },
                  { name: 'Thoại Sơn', desc: 'Định Mỹ, Định Thành, Vĩnh Trạch, Vĩnh Khánh, Óc Eo…' }
                ].map((district, idx) => (
                  <div key={idx}>
                    <h5 className='text-lg md:text-xl font-semibold text-[#b25a13]'>{district.name}</h5>
                    <p className='text-base text-[#6b4525] leading-relaxed mt-1'>{district.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Old Kien Giang */}
            <Card className='group overflow-hidden border border-[#f7d9aa] bg-white shadow-xl transition-all duration-300 hover:shadow-2xl'>
              <CardHeader className='bg-gradient-to-r from-[#fff8ec] to-white border-b border-[#ffd8a7] pb-6'>
                <CardTitle className='text-2xl md:text-3xl font-display text-[#b25a13]'>
                  Tỉnh Kiên Giang Cũ
                </CardTitle>
                <p className='text-base md:text-lg text-[#6b4525] mt-3 font-medium'>
                  15 đơn vị hành chính cấp huyện, tổng cộng 145 xã/phường/thị trấn.
                </p>
              </CardHeader>
              <CardContent className='p-6 md:p-8 space-y-6'>
                {[
                  { name: 'Phú Quốc', desc: 'Cửa Cạn, Gành Dầu, Dương Tơ, Hàm Ninh, Bãi Thơm…' },
                  { name: 'Kiên Lương', desc: 'Bình An, Hòa Điền, Kiên Bình…' },
                  { name: 'Hòn Đất', desc: 'Mỹ Lâm, Mỹ Phước, Sơn Bình, Sơn Kiên…' },
                  { name: 'Giồng Riềng', desc: 'Ngọc Chúc, Ngọc Thành, Hòa Thuận, Thạnh Bình…' },
                  { name: 'An Biên', desc: 'Đông Thái, Đông Yên, Tây Yên, Nam Thái…' },
                  { name: 'An Minh', desc: 'Đông Hưng, Đông Thạnh, Tân Thạnh, Vân Khánh…' },
                  { name: 'Gò Quao', desc: 'Thủy Liễu, Vĩnh Hòa Hưng, Vĩnh Phước A, Vĩnh Phước B…' },
                  { name: 'Giang Thành', desc: 'Vĩnh Điều, Phú Lợi, Tân Khánh Hòa…' }
                ].map((district, idx) => (
                  <div key={idx}>
                    <h5 className='text-lg md:text-xl font-semibold text-[#b25a13]'>{district.name}</h5>
                    <p className='text-base text-[#6b4525] leading-relaxed mt-1'>{district.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className='text-center mt-6 text-base text-[#b25a13] italic opacity-80'>
            * Đây chỉ là trích dẫn tiêu biểu, toàn bộ danh sách đầy đủ có thể tra cứu trong Nghị quyết sắp xếp đơn vị hành chính trước 2025.
          </div>
        </div>
      </main>
    </div>
  );
}
