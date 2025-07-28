import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foodCategories = [
  {
    id: "rice-dishes",
    name: "Món Cơm",
    items: [
      {
        name: "Cơm Tấm",
        description: "Cơm tấm với thịt heo nướng, trứng và rau. Món ăn phổ biến ở miền Nam Việt Nam với hương vị đặc trưng của An Giang.",
        origin: "Phổ biến khắp miền Nam Việt Nam, bao gồm An Giang"
      },
      {
        name: "Cơm Lá Sen",
        description: "Cơm được nấu trong lá sen, tạo hương vị thơm ngon đặc biệt. Thường được phục vụ kèm với các món đặc sản địa phương.",
        origin: "Vùng đồng bằng sông Cửu Long, bao gồm An Giang"
      },
      {
        name: "Cơm Hến",
        description: "Cơm với hến, rau thơm và các gia vị. Ở An Giang, món này thường sử dụng hến từ sông địa phương.",
        origin: "Biến tấu từ món ăn miền Trung với nguyên liệu địa phương"
      }
    ]
  },
  {
    id: "noodle-dishes",
    name: "Món Bún & Phở",
    items: [
      {
        name: "Bún Cá",
        description: "Đặc sản Châu Đốc, với bún, cá lóc, chả cá và rau trong nước dùng ngọt thanh từ xương cá.",
        origin: "Châu Đốc, An Giang"
      },
      {
        name: "Bún Nước Lèo",
        description: "Món bún mang đậm văn hóa Khmer với nước dùng đặc trưng từ cá và thịt heo, kèm các loại rau thơm. Phổ biến tại các cộng đồng người Khmer.",
        origin: "Cộng đồng người Khmer ở An Giang"
      },
      {
        name: "Hủ Tiếu Sa Đéc",
        description: "Món hủ tiếu nổi tiếng từ Sa Đéc và phổ biến khắp đồng bằng sông Cửu Long. Được nấu với thịt heo, tôm và rau thơm.",
        origin: "Vùng đồng bằng sông Cửu Long"
      },
      {
        name: "Bánh Canh",
        description: "Bánh canh với sợi bánh từ bột gạo hoặc bột mì, thường ăn kèm cá hoặc thịt. Phiên bản An Giang thường dùng cá đồng.",
        origin: "Nam Bộ, với biến thể đặc trưng của An Giang"
      }
    ]
  },
  {
    id: "fermented-foods",
    name: "Đặc Sản Mắm",
    items: [
      {
        name: "Mắm Châu Đốc",
        description: "Các loại mắm từ Châu Đốc, được đánh giá là một trong những loại mắm ngon nhất Việt Nam. Dùng làm nguyên liệu nấu ăn hoặc ăn trực tiếp với cơm.",
        origin: "Châu Đốc, An Giang"
      },
      {
        name: "Lẩu Mắm",
        description: "Món lẩu đặc trưng với nước dùng từ mắm, rau và các loại thịt. Món ăn đặc sản của vùng đồng bằng sông Cửu Long.",
        origin: "Vùng đồng bằng sông Cửu Long, bao gồm An Giang"
      },
      {
        name: "Mắm Ruốc",
        description: "Mắm ruốc dùng làm gia vị hoặc nguyên liệu nấu ăn. Phiên bản An Giang có hương vị đặc trưng riêng.",
        origin: "Tỉnh An Giang"
      },
      {
        name: "Mắm Kho Quẹt",
        description: "Món chấm từ mắm kho với đường, thường ăn kèm rau sống và cơm.",
        origin: "Vùng đồng bằng sông Cửu Long"
      }
    ]
  },
  {
    id: "street-foods",
    name: "Ẩm Thực Đường Phố",
    items: [
      {
        name: "Bánh Xèo",
        description: "Bánh xèo giòn với nhân giá, tôm và thịt. Phiên bản An Giang thường nhỏ hơn và giòn hơn so với các vùng khác.",
        origin: "Nam Bộ, với đặc trưng riêng"
      },
      {
        name: "Bánh Khọt",
        description: "Bánh nhỏ tròn với tôm trên mặt, ăn kèm rau sống và nước chấm.",
        origin: "Nam Bộ"
      },
      {
        name: "Bánh Bò Thốt Nốt",
        description: "Bánh bò mềm, ngọt làm từ đường thốt nốt - đặc sản của An Giang.",
        origin: "Tỉnh An Giang"
      },
      {
        name: "Chè Thốt Nốt",
        description: "Chè ngọt làm từ trái thốt nốt - đặc sản của vùng.",
        origin: "Tỉnh An Giang"
      }
    ]
  },
  {
    id: "local-specialties",
    name: "Đặc Sản Địa Phương",
    items: [
      {
        name: "Heo quay cúng Bà",
        description: "Món ăn đặc trưng của Châu Đốc, thường được làm trong dịp lễ hội Bà Chúa Xứ.",
        origin: "Châu Đốc, An Giang"
      },
      {
        name: "Bánh tằm bì Tân Châu",
        description: "Món bánh tằm đặc trưng của Tân Châu, ăn kèm với bì heo và nước cốt dừa.",
        origin: "Tân Châu, An Giang"
      },
      {
        name: "Bánh xèo núi Cấm",
        description: "Bánh xèo được ăn kèm với các loại rau rừng đặc trưng của vùng Thất Sơn.",
        origin: "Tịnh Biên, An Giang"
      },
      {
        name: "Cơm nị - cà púa",
        description: "Món ăn truyền thống của người Chăm, được làm từ gạo nếp và các loại gia vị đặc trưng.",
        origin: "An Phú, An Giang"
      }
    ]
  }
];

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">    
      {/* Header với gradient đẹp */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">Ẩm Thực An Giang</h1>
          <p className="text-xl text-center opacity-90">Khám phá hương vị đặc trưng của vùng đất miền Tây</p>
        </div>
      </div>

      {/* Nội dung chính */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          {/* Tab danh mục món ăn */}
          <Tabs defaultValue="rice-dishes" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-1 shadow-lg">
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
                      <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/20 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl">🍽️</span>
                          </div>
                          <span className="text-amber-700 font-medium">
                            {food.name}
                          </span>
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