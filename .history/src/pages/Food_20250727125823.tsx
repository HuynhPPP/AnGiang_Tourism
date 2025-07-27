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
  }
];

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-amber-50">    
      {/* Nội dung chính */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          
          {/* Tab danh mục món ăn */}
          <Tabs defaultValue="rice-dishes" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              {foodCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {foodCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((food, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-40 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">
                          Hình ảnh {food.name}
                        </span>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-amber-800">{food.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{food.origin}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{food.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Mẹo ẩm thực */}
          <Card className="shadow-md bg-amber-50">
            <CardHeader>
              <CardTitle>Hướng Dẫn Ẩm Thực Cho Du Khách</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-amber-800">Thời Điểm Ăn Uống</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bữa sáng (6-9 giờ): Nên thử Bún Cá hoặc Hủ Tiếu</li>
                    <li>Bữa trưa (11-13 giờ): Thích hợp cho các món cơm</li>
                    <li>Bữa tối (18-20 giờ): Lý tưởng cho lẩu và các món ăn chung</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-amber-800">Địa Điểm Ăn Uống</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Chợ địa phương: Món ăn đường phố đích thực</li>
                    <li>Thành phố Châu Đốc: Các món mắm ngon nhất</li>
                    <li>Nhà hàng ven sông: Hải sản tươi sống</li>
                    <li>Homestay: Món ăn gia đình truyền thống</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-amber-800">Món Theo Mùa</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mùa nước nổi (8-11): Các món cá đồng</li>
                    <li>Mùa gặt (12-1): Món cơm mới</li>
                    <li>Mùa hè (4-6): Các món tráng miệng từ trái cây</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-amber-800">Phép Lịch Sự Khi Ăn</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Luôn dùng tay phải khi gắp thức ăn</li>
                    <li>Nên thử tất cả các món khi ăn chung</li>
                    <li>Húp bún, phở là điều bình thường và được đánh giá cao</li>
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