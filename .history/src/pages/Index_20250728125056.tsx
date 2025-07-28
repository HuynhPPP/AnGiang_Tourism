import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const destinations = [
  {
    id: 1,
    name: 'Núi Sam (Châu Đốc)',
    description: 'Núi Sam cao 230 mét so với mực nước biển, nằm ở thành phố Châu Đốc, là địa điểm linh thiêng đối với Phật giáo. Từ đỉnh núi, du khách có thể ngắm toàn cảnh vùng nông thôn xung quanh và biên giới Campuchia.',
    images: [
      '/images/ChauDocImgs/mieu-ba-chua-xu-nui-sam-an-giang.jpg',
      '/images/ChauDocImgs/SamMountain.jpg',
      '/images/ChauDocImgs/nui-sam-5.jpg',
      '/images/ChauDocImgs/Nui-Sam-8.jpg',
      '/images/ChauDocImgs/nui_sam_1.jpg',
      '/images/ChauDocImgs/nui_sam_2.jpg',
      '/images/ChauDocImgs/nui_sam_3.jpg',
      '/images/ChauDocImgs/nui_sam_9.jpg',
    ],
    foods: [
      {
        name: 'Bún cá (Súp mì cá)',
        description: 'Đặc sản của Châu Đốc, gồm bún với cá, rau và gia vị trong nước dùng thơm ngon.'
      },
      {
        name: 'Mắm (Cá lên men)',
        description: 'Đặc sản địa phương làm từ cá lên men với muối và gạo.'
      }
    ]
  },
  {
    id: 2,
    name: 'Rừng tràm Trà Sư',
    description: 'Nằm ở huyện Tịnh Biên, Trà Sư là khu rừng tràm rộng lớn trên 800 héc-ta. Đây là nơi sinh sống của nhiều loài chim và thực vật, cung cấp các tour đi thuyền qua các kênh rạch xanh mát phủ đầy hoa súng và dương xỉ nước.',
    images: [
      '/images/TinhBienImgs/rung_tram_8.jpg',
      '/images/TinhBienImgs/rung_tram_2.jpg',
      '/images/TinhBienImgs/rung_tram_3.jpg',
      '/images/TinhBienImgs/rung_tram_4.jpg',
      '/images/TinhBienImgs/rung_tram_5.jpg',
      '/images/TinhBienImgs/rung_tram_6.jpg',
      '/images/TinhBienImgs/rung_tram_7.jpg',
    ],
    foods: [
      {
        name: 'Lẩu Mắm (Lẩu cá lên men)',
        description: 'Món lẩu thơm ngon được nấu với cá lên men, rau củ và các loại thịt.'
      },
      {
        name: 'Bò 7 Món (7 món từ thịt bò)',
        description: 'Bữa tiệc với thịt bò được chế biến theo bảy cách khác nhau, nổi tiếng trong khu vực.'
      }
    ]
  },
  {
    id: 3,
    name: 'Làng Chăm (Châu Phong)',
    description: 'Nằm ở xã Châu Phong, Làng Chăm cung cấp cái nhìn sâu sắc về văn hóa của dân tộc thiểu số Chăm. Du khách có thể thăm nhà truyền thống của người Chăm, nhà thờ Hồi giáo và tìm hiểu về nghề dệt truyền thống của họ.',
    images: [
      'https://www.vietnamembassy-algeria.org/wp-content/uploads/2019/06/5-An-Giang-Cham-Village.jpg',
      'https://thoidai.com.vn/stores/news_dataimages/nguyenphuong/052019/18/10/1642_CyYnh_tyYng_-_An_Giang_12.jpg',
      'https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w860/Uploaded/bpivpkib/2016_10_07/RIMG1631.JPG',
    ],
    foods: [
      {
        name: 'Bánh Xèo (Bánh pancake Việt Nam)',
        description: 'Bánh giòn nhân giá đỗ, tôm và thịt.'
      },
      {
        name: 'Bún Nước Lèo (Súp mì kiểu Khmer)',
        description: 'Món ăn kết hợp với ảnh hưởng của người Khmer, gồm nước dùng đậm đà và nhiều loại topping.'
      }
    ]
  },
  {
    id: 4,
    name: 'Núi Cấm (Thất Sơn)',
    description: 'Núi Cấm cao 710 mét so với mực nước biển, thuộc dãy Thất Sơn (Bảy Núi), nằm ở huyện Tịnh Biên. Khu vực này có rừng rậm, thác nước, chùa chiền và tượng Phật khổng lồ.',
    images: [
      'https://statics.vinpearl.com/nui-cam-an-giang-0_1630905070.jpg',
      'https://statics.vinpearl.com/nui-cam-an-giang-2_1630904958.jpg',
      'https://statics.vinpearl.com/nui-cam-an-giang-7_1630905023.jpg',
    ],
    foods: [
      {
        name: 'Cơm Tấm (Cơm gạo tấm)',
        description: 'Món cơm từ gạo tấm, phục vụ kèm thịt heo nướng, trứng và rau.'
      },
      {
        name: 'Bánh Canh (Súp mì dày)',
        description: 'Món súp với sợi bánh dày, thường được phục vụ với cá hoặc thịt heo.'
      }
    ]
  },
  {
    id: 5,
    name: 'Mộ Ba Chúc',
    description: 'Nằm ở huyện Tri Tôn, khu tưởng niệm này tưởng nhớ các nạn nhân của cuộc thảm sát Khmer Đỏ năm 1978. Mộ chứa hài cốt của hơn 3.000 nạn nhân và là lời nhắc nhở nghiêm túc về quá khứ.',
    images: [
      'https://nhatranghub.com/wp-content/uploads/2020/10/hang-cot-ba-chuc-an-giang-0.jpg',
      'https://media.vneconomy.vn/w800/images/upload/2022/04/15/anh-3.jpeg',
      'https://baoanhdatmui.vn/sites/upload/files/2021-04/657579pm-di-tich-quoc-gia-dac-biet-chung-tich-tham-sat-ba-chuc-an-giang-1956946.jpg',
    ],
    foods: [
      {
        name: 'Bánh Đúc (Bánh gạo)',
        description: 'Bánh gạo truyền thống thường được ăn kèm với thịt băm, tôm và rau thơm.'
      },
      {
        name: 'Chè (Súp ngọt)',
        description: 'Các loại chè làm từ đậu, trái cây và nước cốt dừa.'
      }
    ]
  }
];

export default function HomePage() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header với gradient đẹp */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">Khám Phá An Giang</h1>
          <p className="text-lg md:text-xl text-center opacity-90 max-w-4xl mx-auto leading-relaxed">
            Vùng đất miền Tây với văn hóa đa dạng, ẩm thực phong phú và cảnh quan thiên nhiên tuyệt đẹp
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-4">Điểm Đến Nổi Bật</h2>
          <p className="text-base md:text-lg text-amber-700 text-center max-w-3xl mx-auto">
            Khám phá những địa điểm du lịch tuyệt vời và nét văn hóa đặc sắc của An Giang
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar with destination list */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-4">🏛️ Điểm Tham Quan</h3>
            <div className="flex flex-col space-y-3">
              {destinations.map((dest) => (
                <Button 
                  key={dest.id}
                  variant={selectedDestination.id === dest.id ? "default" : "outline"} 
                  className={`justify-start h-auto py-3 px-4 text-left transition-all duration-300 ${
                    selectedDestination.id === dest.id 
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg transform scale-105' 
                      : 'hover:bg-amber-100 hover:text-amber-900 border-amber-200 hover:border-amber-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedDestination(dest)}
                >
                  <span className="text-sm md:text-base leading-relaxed">{dest.name}</span>
                </Button>
              ))}
            </div>

            {/* Thot Not tree image */}
            <div className="hidden lg:block mt-8">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/TriTonImgs/thotnottraitim01.jpg" 
                    alt="Rừng Thốt nốt An Giang" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-amber-50 to-orange-50">
                  <p className="text-amber-900 text-sm font-medium leading-relaxed">
                    🌳 Cây thốt nốt hình trái tim - điểm đến thú vị ở An Giang
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Selected destination details */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-amber-800 to-orange-700 text-white p-6">
                <CardTitle className="text-2xl md:text-3xl font-bold">{selectedDestination.name}</CardTitle>
                <CardDescription className="text-base md:text-lg text-amber-100 leading-relaxed">
                  {selectedDestination.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 p-6">
                {/* Images carousel */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-amber-900 flex items-center">
                    📸 Thư Viện Ảnh
                  </h3>
                  <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                      {selectedDestination.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
                              <img 
                                src={image} 
                                alt={`${selectedDestination.name} - Hình ${index + 1}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-white/80 hover:bg-white text-amber-800 border-amber-200" />
                    <CarouselNext className="bg-white/80 hover:bg-white text-amber-800 border-amber-200" />
                  </Carousel>
                </div>
                
                {/* Foods section */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-amber-900 flex items-center">
                    🍽️ Ẩm Thực Đặc Sắc
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedDestination.foods.map((food, index) => (
                      <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-amber-50 to-orange-50">
                        <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 pb-3">
                          <CardTitle className="text-amber-900 text-base md:text-lg font-semibold">{food.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-3">
                          <p className="text-amber-800 text-sm md:text-base leading-relaxed">{food.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick travel info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold text-amber-900 mb-4 flex items-center">
                ℹ️ Thông Tin Du Lịch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800 text-sm md:text-base">⏰ Thời gian tốt nhất:</h4>
                  <p className="text-amber-700 text-sm md:text-base">Mùa khô (tháng 11 đến tháng 4)</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800 text-sm md:text-base">🚗 Phương tiện di chuyển:</h4>
                  <p className="text-amber-700 text-sm md:text-base">Xe buýt, xe máy, thuyền</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800 text-sm md:text-base">⚠️ Lưu ý:</h4>
                  <p className="text-amber-700 text-sm md:text-base">Mang theo nước uống và kem chống nắng</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-800 text-sm md:text-base">🎉 Lễ hội nổi bật:</h4>
                  <p className="text-amber-700 text-sm md:text-base">Lễ hội Vía Bà Chúa Xứ (tháng 4 âm lịch)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}