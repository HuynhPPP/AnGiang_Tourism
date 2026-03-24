import { getImgUrl } from '@/data/defaults';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function HeroSection() {
  return (
    <section className='relative overflow-hidden rounded-3xl shadow-2xl'>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className='w-full'
            >
              <CarouselContent>
                {[
                  {
                    image: getImgUrl('Gioi_Thieu_AG/g1_1.jpg'),
                    title: 'Chào Mừng Đến An Giang',
                    description:
                      'Vùng đất phù sa màu mỡ, nơi hội tụ của văn hóa đa sắc tộc và thiên nhiên tươi đẹp',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_2.jpg'),
                    title: 'Vùng Đất Phù Sa',
                    description:
                      'Nơi sông Hậu uốn lượn, đất phù sa màu mỡ nuôi dưỡng văn hóa đa sắc tộc',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_3.jpg'),
                    title: 'Núi Non Hùng Vĩ',
                    description:
                      'Dãy Thất Sơn sừng sững giữa đồng bằng, nơi linh thiêng của tín ngưỡng dân gian',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_4.jpg'),
                    title: 'Văn Hóa Đa Dạng',
                    description:
                      'Nơi giao thoa của người Kinh, Khmer, Chăm và Hoa tạo nên bản sắc độc đáo',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_5.jpg'),
                    title: 'Thiên Nhiên Tươi Đẹp',
                    description:
                      'Cánh đồng lúa bạt ngàn, rừng tràm xanh mướt và mùa nước nổi đặc sắc',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_6.jpg'),
                    title: 'Di Sản Kiến Trúc',
                    description:
                      'Những ngôi chùa cổ kính, miếu thờ linh thiêng mang đậm dấu ấn lịch sử',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_7jpg.jpg'),
                    title: 'Cuộc Sống Sông Nước',
                    description:
                      'Nhịp sống bình yên trên dòng sông Hậu với chợ nổi và làng chài truyền thống',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_8.jpg'),
                    title: 'Lễ Hội Truyền Thống',
                    description:
                      'Những lễ hội đặc sắc như Bà Chúa Xứ, đua bò và Ok Om Bok của người Khmer',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_9.jpg'),
                    title: 'Cảnh Quan Thiên Nhiên',
                    description:
                      'Vẻ đẹp hoang sơ của rừng tràm, cánh đồng sen và hồ nước trong xanh',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_10.jpg'),
                    title: 'Ẩm Thực Phong Phú',
                    description:
                      'Hương vị đậm đà của miền sông nước với bún cá, lẩu mắm và đặc sản thốt nốt',
                  },
                  {
                    image: getImgUrl('Gioi_Thieu_AG/gt_11.jpg'),
                    title: 'Điểm Đến Hấp Dẫn',
                    description:
                      'Khám phá những địa danh nổi tiếng từ Núi Sam đến rừng tràm Trà Sư',
                  },
                ].map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className='relative h-[550px] overflow-hidden'>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className='w-full h-full object-cover'
                      />
                      {/* Gradient Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>

                      {/* Content */}
                      <div className='absolute bottom-0 left-0 right-0 p-8 md:p-12'>
                        <div className='max-w-3xl'>
                          <div className='flex items-center gap-3 mb-4'>
                            <div className='h-1 w-12 rounded-full bg-[#ffb347]'></div>
                            <p className='text-sm font-semibold uppercase tracking-wider text-white/90'>
                              Khám phá An Giang
                            </p>
                          </div>
                          <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg'>
                            {slide.title}
                          </h2>
                          <p className='text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md'>
                            {slide.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ffb347]/20 to-transparent'></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <CarouselPrevious className='left-4 bg-white/90 hover:bg-white text-[#b25a13] border-none shadow-lg' />
              <CarouselNext className='right-4 bg-white/90 hover:bg-white text-[#b25a13] border-none shadow-lg' />
            </Carousel>
          </section>
  );
}
