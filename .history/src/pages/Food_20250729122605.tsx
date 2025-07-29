import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foodCategories = [
  {
    id: "rice-dishes",
    name: "Món Cơm",
    items: [
      {
        name: "Cơm tấm Long Xuyên",
        description: "Cơm tấm với thịt heo sắt, trứng và rau. Món ăn phổ biến ở miền Nam Việt Nam với hương vị đặc trưng của An Giang.",
        origin: "Long Xuyên, An Giang",
        image: "/images/LongXuyenImgs/Foods/com-tam-LX.jpg"
      },
      {
        name: "Cơm Lá Sen",
        description: "Cơm được nấu trong lá sen, tạo hương vị thơm ngon đặc biệt. Thường được phục vụ kèm với các món đặc sản địa phương.",
        origin: "Vùng đồng bằng sông Cửu Long, bao gồm An Giang",
        image: "/images/Foods/com-hap-la-sen.jpg"
      },
    ]
  },
  {
    id: "noodle-dishes",
    name: "Món Bún & Phở",
    items: [
      {
        name: "Bún Cá",
        description: "Đặc sản Châu Đốc, với bún, cá lóc, chả cá và rau trong nước dùng ngọt thanh từ xương cá.",
        origin: "Châu Đốc, An Giang",
        image: "/images/LongXuyenImgs/Foods/bun_ca_long_xuyen_1.jpg"
      },
      {
        name: "Bún mắm Châu Đốc",
        description: "Bún Mắm Châu Đốc là một biểu tượng của ẩm thực miền Tây, nổi tiếng với hương vị đậm đà đặc trưng của mắm. Nước lèo bún mắm được nấu từ nhiều loại mắm cá linh, mắm sặc, cùng với xương heo, tôm, mực, cá, tạo nên một nồi nước dùng sánh đặc, ngọt thanh và thơm lừng mà không hề tanh.",
        origin: "Châu Đốc, An Giang",
        image: "/images/Foods/bun-mam.jpg"
      },
      {
        name: "Bún Kèn",
        description: "Bún Kèn An Giang cũng là món ăn lâu đời và có tiếng tại vùng đất Châu Đốc. Món ngon này được chế biến từ những nguyên liệu có sẵn của vùng sông nước miền Tây.",
        origin: "Châu Đốc, An Giang",
        image: "/images/Foods/bun-ken.jpg"
      },
      {
        name: "bánh canh Khmer",
        description: "Bánh canh Khmer (hay còn gọi là bánh canh Vĩnh Trung) rất được các bạn gần xa ưa chuộng nhé! Bắt nguồn từ xã Vĩnh Trung, huyện Tịnh Biên, món ăn này do một người phụ nữ Khmer tên là Neang Oanh Na chế biến ra cách đây hàng chục năm.",
        origin: "An Giang",
        image: "/images/Foods/banh-canh-khmer.jpg"
      }
    ]
  },
  {
    id: "fermented-foods",
    name: "Đặc Sản Mắm",
    items: [
      {
        name: "Mắm Châu Đốc",
        description: "Từ khi ra đời đến nay, mắm Châu Đốc đã có gần 150 năm tuổi thọ với hàng trăm loại mắm có hương vị hoàn toàn khác nhau.",
        origin: "Châu Đốc, An Giang",
        image: "/images/Foods/Mam/mam_chau_doc.jpg"
      },
      {
        name: "Lẩu mắm",
        description: "Món lẩu đặc trưng với nước dùng từ mắm, rau và các loại thịt. Món ăn đặc sản của vùng đồng bằng sông Cửu Long.",
        origin: "Vùng đồng bằng sông Cửu Long, bao gồm An Giang",
        image: "/images/Foods/Mam/lau-mam.jpeg"
      },
      {
        name: "Mắm cá linh",
        description: "Mắm ruốc dùng làm gia vị hoặc nguyên liệu nấu ăn. Phiên bản An Giang có hương vị đặc trưng riêng.",
        origin: "An Giang",
        image: "/images/Foods/Mam/mam-ca-linh.jpg"
      },
      {
        name: "Mắm Thái",
        description: "Mắm thái An Giang, đặc biệt là mắm thái Châu Đốc, là một món đặc sản nổi tiếng của vùng An Giang, được làm từ cá lóc và đu đủ, kết hợp cùng các loại gia vị tạo nên hương vị thơm ngon đặc trưng.",
        origin: "Vùng đồng bằng sông Cửu Long",
        image: "/images/Foods/Mam/mam-thai.jpg"
      },
      {
        name: "Mắm cá lóc",
        description: "Mắm cá lóc là một món đặc sản nổi tiếng của vùng Châu Đốc, An Giang, được làm từ cá lóc tươi ngon và các nguyên liệu truyền thống.",
        origin: "Châu Đốc, An Giang",
        image: "/images/Foods/Mam/mam-ca-loc.jpg"
      },
    ]
  },
  {
    id: "local-specialties",
    name: "Đặc Sản Địa Phương",
    items: [
      {
        name: "Heo quay cúng Bà",
        description: "Món ăn đặc trưng của Châu Đốc, thường được làm trong dịp lễ hội Bà Chúa Xứ.",
        origin: "Châu Đốc, An Giang",
        image: "/images/Foods/heo-quay.jpg"
      },
      {
        name: "Bánh tằm bì Tân Châu",
        description: "Món bánh tằm đặc trưng của Tân Châu, ăn kèm với bì heo và nước cốt dừa.",
        origin: "Tân Châu, An Giang",
        image: "/images/Foods/banh-tam-bi.jpg"
      },
      {
        name: "Bánh xèo núi Cấm",
        description: "Bánh xèo được ăn kèm với các loại rau rừng đặc trưng của vùng Thất Sơn.",
        origin: "Tịnh Biên, An Giang",
        image: "/images/Foods/banh-xeo-nui-cam.jpg"
      },
      {
        name: "Cơm nị - cà púa",
        description: "Món ăn truyền thống của người Chăm, được làm từ gạo nếp và các loại gia vị đặc trưng.",
        origin: "An Phú, An Giang",
        image: "/images/Foods/com-ni-ca-pua.jpg"
      },
      {
        name: "Thịt bò bảy món",
        description: "Một đặc sản vùng Châu Đốc khác cũng được khá nhiều thực khách ưa chuộng là món bò bảy món núi Sam.",
        origin: "Châu Đốc, An Giang",
        image: "/images/Foods/bo-7-mon.jpg"
      },
      {
        name: "Bánh bò thốt nốt",
        description: "Đây là một món được nhắc đến khá nhiều khi bạn đến vùng An Giang, bánh bò được làm bằng đường thốt nốt - loài cây đặc trưng của xứ An Giang.",
        origin: "An Giang",
        image: "/images/Foods/banh-bo-thot-not.jpg"
      },
      {
        name: "Gà đốt lá chúc Ô Thum",
        description: "Bất kì ai đặt chân đến vùng đất An Giang cũng đều phải thử món gà đốt lá chúc Ô Thum huyền thoại. Món ăn có nguồn gốc từ Campuchia. Lá chúc như một loại gia vị đặc biệt tạo nên hương vị đặc trưng không lẫn vào đầu được cho món gà nướng.",
        origin: "Tri Tôn, An Giang",
        image: "/images/Foods/ga-dot.jpg"
      },
      {
        name: "Cháo bò Tri Tôn",
        description: "Cháo bò là món ăn quen thuộc của người dân địa phương huyện Tri Tôn. Gạo để nấu cháo bò phải dùng loại gạo lúa mùa “sóc Khmer” có hương thơm, độ dẻo đặc trưng.",
        origin: "Tri Tôn, An Giang",
        image: "/images/Foods/chao-bo.jpg"
      },
    ]
  }
];

export default function FoodPage() {
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