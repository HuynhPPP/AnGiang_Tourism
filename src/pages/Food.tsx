import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFoodCategoriesData } from '@/hooks/useData';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const useFoodCategories = () => {
  const { items } = useFoodCategoriesData();
  return items;
};

// Image Gallery Component
interface ImageGalleryProps {
  images: string[];
  name: string;
}

function ImageGallery({ images, name }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='relative h-80 overflow-hidden group'>
      <img
        src={images[currentIndex]}
        alt={`${name} - ${currentIndex + 1}`}
        className='object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500'
        loading='lazy'
      />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            onClick={nextImage}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#b25a13] rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
          >
            <ChevronRight className='h-5 w-5' />
          </button>

          {/* Image Counter */}
          <div className='absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold'>
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Dots */}
          <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function FoodPage() {
  const foodCategories = useFoodCategories();
  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]'>
      {/* Nội dung chính */}
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='space-y-12'>
          {/* Tab danh mục món ăn */}
          <Tabs defaultValue='rice-dishes' className='w-full'>
            <TabsList className='grid grid-cols-2 md:grid-cols-4 w-full bg-white/80 backdrop-blur-sm border border-[#ffd8a7] rounded-xl p-1 shadow-lg'>
              {foodCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ffb347] data-[state=active]:to-[#ff7b54] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105 font-sans-soft'
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {foodCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className='pt-8'
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {category.items.map((food, index) => (
                    <Card
                      key={index}
                      className='group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-[#f7d9aa] shadow-lg hover:shadow-[#ffb347]/30'
                    >
                      <ImageGallery
                        images={food.image ? [food.image] : []}
                        name={food.name}
                      />
                      <CardHeader className='pb-4'>
                        <CardTitle className='text-xl font-display text-[#b25a13] group-hover:text-[#ff7b54] transition-colors duration-300'>
                          {food.name}
                        </CardTitle>
                        <CardDescription className='text-sm text-[#a2763f] font-medium'>
                          📍 {food.origin}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className='text-[#6b4525] leading-relaxed'>
                          {food.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Mẹo ẩm thực với thiết kế mới */}
          <Card className='shadow-xl bg-white border border-[#f7d9aa] overflow-hidden'>
            <div className='bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white p-6'>
              <CardTitle className='text-2xl font-display font-bold'>
                🍴 Hướng Dẫn Ẩm Thực Cho Du Khách
              </CardTitle>
            </div>
            <CardContent className='p-8 bg-gradient-to-br from-[#fff8ec] to-white'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='w-8 h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>⏰</span>
                    </div>
                    <h3 className='font-bold text-lg font-display text-[#b25a13]'>
                      Thời Điểm Ăn Uống
                    </h3>
                  </div>
                  <ul className='space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Bữa sáng (6-9 giờ):
                        </strong>{' '}
                        Nên thử Bún Cá hoặc Hủ Tiếu
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Bữa trưa (11-13 giờ):
                        </strong>{' '}
                        Thích hợp cho các món cơm
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Bữa tối (18-20 giờ):
                        </strong>{' '}
                        Lý tưởng cho lẩu và các món ăn chung
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='w-8 h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>📍</span>
                    </div>
                    <h3 className='font-bold text-lg font-display text-[#b25a13]'>
                      Địa Điểm Ăn Uống
                    </h3>
                  </div>
                  <ul className='space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Chợ địa phương:
                        </strong>{' '}
                        Món ăn đường phố đích thực
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Thành phố Châu Đốc:
                        </strong>{' '}
                        Các món mắm ngon nhất
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Nhà hàng ven sông:
                        </strong>{' '}
                        Hải sản tươi sống
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>Homestay:</strong>{' '}
                        Món ăn gia đình truyền thống
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='w-8 h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>🌱</span>
                    </div>
                    <h3 className='font-bold text-lg font-display text-[#b25a13]'>
                      Món Theo Mùa
                    </h3>
                  </div>
                  <ul className='space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Mùa nước nổi (8-11):
                        </strong>{' '}
                        Các món cá đồng
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Mùa gặt (12-1):
                        </strong>{' '}
                        Món cơm mới
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Mùa hè (4-6):
                        </strong>{' '}
                        Các món tráng miệng từ trái cây
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='w-8 h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>🤝</span>
                    </div>
                    <h3 className='font-bold text-lg font-display text-[#b25a13]'>
                      Phép Lịch Sự Khi Ăn
                    </h3>
                  </div>
                  <ul className='space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        Luôn dùng tay phải khi gắp thức ăn
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        Nên thử tất cả các món khi ăn chung
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        Húp bún, phở là điều bình thường và được đánh giá cao
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
