import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFoodCategoriesData } from "@/hooks/useData";

const useFoodCategories = () => {
  const { items } = useFoodCategoriesData();
  return items;
};

export default function FoodPage() {
  const foodCategories = useFoodCategories();
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">

      {/* Nội dung chính */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Tab danh mục món ăn */}
          <Tabs defaultValue="rice-dishes" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-1 shadow-lg">
              {foodCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {foodCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((food, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-amber-200/50"
                    >
                      <div className="relative h-80 overflow-hidden">
                        {/* Ảnh món ăn */}
                        <img
                          src={food.image}
                          alt={food.name}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback khi ảnh không tải được
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const nextElement = target.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        {/* Fallback khi không có ảnh hoặc ảnh lỗi */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/20 group-hover:scale-110 transition-transform duration-500 hidden">
                          <div className="relative z-10 text-center w-full h-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white text-2xl">🍽️</span>
                            </div>
                            <span className="text-amber-700 font-medium">
                              {food.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl text-amber-800 group-hover:text-amber-600 transition-colors duration-300">
                          {food.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-amber-600 font-medium">
                          📍 {food.origin}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">{food.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Mẹo ẩm thực với thiết kế mới */}
          <Card className="shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
              <CardTitle className="text-2xl font-bold">🍴 Hướng Dẫn Ẩm Thực Cho Du Khách</CardTitle>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⏰</span>
                    </div>
                    <h3 className="font-bold text-lg text-amber-800">Thời Điểm Ăn Uống</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Bữa sáng (6-9 giờ):</strong> Nên thử Bún Cá hoặc Hủ Tiếu</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Bữa trưa (11-13 giờ):</strong> Thích hợp cho các món cơm</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Bữa tối (18-20 giờ):</strong> Lý tưởng cho lẩu và các món ăn chung</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <h3 className="font-bold text-lg text-amber-800">Địa Điểm Ăn Uống</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Chợ địa phương:</strong> Món ăn đường phố đích thực</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Thành phố Châu Đốc:</strong> Các món mắm ngon nhất</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Nhà hàng ven sông:</strong> Hải sản tươi sống</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Homestay:</strong> Món ăn gia đình truyền thống</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌱</span>
                    </div>
                    <h3 className="font-bold text-lg text-amber-800">Món Theo Mùa</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Mùa nước nổi (8-11):</strong> Các món cá đồng</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Mùa gặt (12-1):</strong> Món cơm mới</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Mùa hè (4-6):</strong> Các món tráng miệng từ trái cây</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤝</span>
                    </div>
                    <h3 className="font-bold text-lg text-amber-800">Phép Lịch Sự Khi Ăn</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Luôn dùng tay phải khi gắp thức ăn</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Nên thử tất cả các món khi ăn chung</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">Húp bún, phở là điều bình thường và được đánh giá cao</span>
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