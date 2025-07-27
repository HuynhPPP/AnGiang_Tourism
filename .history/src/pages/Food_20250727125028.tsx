import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foodCategories = [
  {
    id: "rice-dishes",
    name: "Các Món Cơm",
    items: [
      {
        name: "Cơm Tấm",
        description: "Broken rice served with grilled pork, egg, and vegetables. A popular dish throughout Southern Vietnam with regional variations in An Giang.",
        origin: "Popular throughout Southern Vietnam, including An Giang"
      },
      {
        name: "Cơm Lá Sen",
        description: "Rice cooked in lotus leaf, giving it a unique fragrance and flavor. Often served with local specialties from the region.",
        origin: "Mekong Delta region, including An Giang"
      },
      {
        name: "Cơm Hến",
        description: "Rice with baby clams, herbs, and various condiments. In An Giang, this dish often uses clams from the local rivers.",
        origin: "Adapted from Central Vietnam but with local ingredients"
      }
    ]
  },
  {
    id: "noodle-dishes",
    name: "Các Món Bún & Phở",
    items: [
      {
        name: "Bún Cá (Fish Noodle Soup)",
        description: "A specialty of Chau Doc, featuring rice vermicelli with snakehead fish, fish cake, and vegetables in a flavorful broth made from fish bones.",
        origin: "Chau Doc, An Giang"
      },
      {
        name: "Bún Nước Lèo",
        description: "A Khmer-influenced noodle soup with a rich broth made from fermented fish, pork, and various herbs. Commonly found in areas with Khmer communities.",
        origin: "Khmer communities in An Giang"
      },
      {
        name: "Hủ Tiếu Sa Đéc",
        description: "A type of rice noodle soup that originates from Sa Dec but is popular throughout the Mekong Delta, including An Giang. Made with pork, shrimp, and various herbs.",
        origin: "Mekong Delta region"
      },
      {
        name: "Bánh Canh",
        description: "A thick noodle soup made from tapioca or rice flour, served with fish or pork. The An Giang version often features local river fish.",
        origin: "Southern Vietnam, with local variations in An Giang"
      }
    ]
  },
  {
    id: "fermented-foods",
    name: "Đặc Sản Mắm",
    items: [
      {
        name: "Mắm Châu Đốc",
        description: "Various types of fermented fish products from Chau Doc, considered some of the best in Vietnam. Used as ingredients in many dishes or eaten directly with rice.",
        origin: "Chau Doc, An Giang"
      },
      {
        name: "Lẩu Mắm",
        description: "A savory hotpot dish made with fermented fish, vegetables, and various meats. A signature dish of the Mekong Delta region.",
        origin: "Mekong Delta region, including An Giang"
      },
      {
        name: "Mắm Ruốc",
        description: "Fermented shrimp paste used as a condiment or cooking ingredient. The An Giang version has its own distinct flavor.",
        origin: "An Giang province"
      },
      {
        name: "Mắm Kho Quẹt",
        description: "A dipping sauce made from caramelized fermented fish, often eaten with fresh vegetables and rice.",
        origin: "Mekong Delta region"
      }
    ]
  },
  {
    id: "street-foods",
    name: "Món Ăn Đường Phố",
    items: [
      {
        name: "Bánh Xèo",
        description: "Crispy savory pancakes filled with bean sprouts, shrimp, and meat. The An Giang version is typically smaller and crispier than those found in other regions.",
        origin: "Southern Vietnam, with local variations"
      },
      {
        name: "Bánh Khọt",
        description: "Small round savory pancakes topped with shrimp, often served with herbs and dipping sauce.",
        origin: "Southern Vietnam"
      },
      {
        name: "Bánh Bò Thốt Nốt",
        description: "A sweet, soft cake made with palm sugar from the Thot Not palm trees that are native to An Giang.",
        origin: "An Giang province"
      },
      {
        name: "Chè Thốt Nốt",
        description: "A sweet soup dessert made with palm fruit from the Thot Not palm trees, a specialty of the region.",
        origin: "An Giang province"
      }
    ]
  }
];

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="relative bg-green-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ẩm Thực An Giang
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Khám phá hương vị độc đáo của vùng đất Tây Nam Bộ
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Introduction */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="prose lg:prose-lg mx-auto">
                <h2>Di Sản Ẩm Thực An Giang</h2>
                <p>
                  Ẩm thực An Giang đa dạng như chính cảnh quan và di sản văn hóa của nó. Nằm trong vùng đồng bằng
                  sông Cửu Long màu mỡ và chịu ảnh hưởng từ nhiều dân tộc bao gồm người Việt, Khmer và Chăm,
                  tỉnh An Giang mang đến một bức tranh phong phú về hương vị phản ánh lịch sử và địa lý của vùng đất này.
                </p>
                <p>
                  Với nguồn cá tươi dồi dào từ sông Mekong, những cánh đồng lúa xanh tươi và các loại trái cây nhiệt đới,
                  ẩm thực An Giang nổi tiếng với sự tươi ngon, cân bằng trong hương vị và cách sử dụng độc đáo các nguyên liệu địa phương.
                  Đặc biệt là các sản phẩm mắm từ Châu Đốc đã được công nhận trên khắp Việt Nam.
                </p>
                <p>
                  Dưới đây là những món ăn đặc trưng và ngon nhất của An Giang, được phân loại để giúp bạn khám phá thiên đường ẩm thực này.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Culinary Tips */}
          <Card className="shadow-md bg-amber-50">
            <CardHeader>
              <CardTitle>Hướng Dẫn Ẩm Thực Cho Du Khách</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Thời Điểm Ăn Uống</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bữa sáng (6-9 giờ): Nên thử Bún Cá hoặc Hủ Tiếu</li>
                    <li>Bữa trưa (11-13 giờ): Thích hợp cho các món cơm</li>
                    <li>Bữa tối (18-20 giờ): Lý tưởng cho lẩu và các món ăn chung</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Địa Điểm Ăn Uống</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Chợ địa phương để thưởng thức đồ ăn đường phố</li>
                    <li>Thành phố Châu Đốc để thưởng thức các món mắm ngon nhất</li>
                    <li>Nhà hàng ven sông để thưởng thức hải sản tươi sống</li>
                    <li>Homestay để trải nghiệm ẩm thực gia đình truyền thống</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Đặc Sản Theo Mùa</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mùa nước nổi (8-11): Các món cá đồng</li>
                    <li>Mùa gặt (12-1): Các món từ gạo mới</li>
                    <li>Mùa hè (4-6): Các món tráng miệng từ trái cây nhiệt đới</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Phép Lịch Sự Khi Ăn Uống</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Luôn dùng tay phải để gắp thức ăn</li>
                    <li>Nên thử tất cả các món khi dùng bữa chung</li>
                    <li>Húp nước khi ăn bún phở là điều bình thường và được đánh giá cao</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Du Lịch An Giang</h3>
              <p className="mt-2 text-sm text-green-200">
                Khám phá kho tàng ẩm thực của vùng đất Tây Nam Bộ
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-sm">
                © 2025 Ban Du Lịch An Giang. Đã đăng ký bản quyền.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}