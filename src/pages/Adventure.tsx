import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const funFacts = [
  {
    id: 1,
    title: "Cây Thốt Nốt - Biểu Tượng Của An Giang",
    excerpt: "Thốt nốt không chỉ là loài cây đặc trưng mà còn là nguồn sống của người dân An Giang.",
    image: "/images/ThtNt.jpg",
    date: "15/01/2025",
    content: "Cây thốt nốt (Borassus flabellifer) là một loài cây đặc trưng của vùng đất An Giang, được mệnh danh là 'cây của cuộc sống' bởi hầu hết các bộ phận của cây đều có thể sử dụng được. Từ lá làm nón, mái nhà, quạt; thân cây làm cột nhà, cầu; đến hoa thốt nốt để lấy đường và nước ngọt thanh mát."
  },
  {
    id: 2,
    title: "Bảy Núi Thất Sơn - Kỳ Quan Thiên Nhiên",
    excerpt: "Cụm bảy ngọn núi nổi lên giữa đồng bằng rộng lớn, tạo nên cảnh quan độc đáo.",
    image: "/images/TriTonImgs/thien_cam_son.jpg",
    date: "12/01/2025",
    content: "Thất Sơn hay còn gọi là Bảy Núi, bao gồm: Núi Cấm (Thiên Cấm Sơn), Núi Tà Pạ, Núi Cô Tô, Núi Nước, Núi Đá Dựng, Núi Đất Set và Núi Chùa. Đây là những ngọn núi đá vôi nổi lên giữa đồng bằng sông Cửu Long, tạo nên một vùng sinh thái đặc biệt với nhiều hang động, chùa chiền và hệ thực vật quý hiếm."
  },
  {
    id: 3,
    title: "Rừng Tràm Trà Sư - Hệ Sinh Thái Đặc Biệt",
    excerpt: "Khu rừng ngập nước đẹp nhất miền Tây với hàng ngàn con chim và cây tràm cổ thụ.",
    image: "/images/TinhBienImgs/rung_tram_8.jpg",
    date: "10/01/2025",
    content: "Rừng tràm Trà Sư có diện tích hơn 850 ha, là khu rừng ngập nước tự nhiên lớn nhất Đồng bằng sông Cửu Long. Đây là nơi sinh sống của hơn 70 loài chim, nhiều loài cá và sinh vật thủy sinh. Mùa nước nổi (từ tháng 8 đến tháng 11) là thời điểm đẹp nhất để khám phá rừng tràm với hàng nghìn con chim về làm tổ."
  },
  {
    id: 4,
    title: "Lễ Hội Bà Chúa Xứ Núi Sam",
    excerpt: "Một trong những lễ hội lớn nhất miền Nam, thu hút hàng triệu du khách mỗi năm.",
    image: "/images/ChauDocImgs/mieu-ba-chua-xu-nui-sam-an-giang.jpg",
    date: "08/01/2025",
    content: "Lễ hội Bà Chúa Xứ diễn ra từ ngày 23 đến 27 tháng 4 âm lịch hàng năm tại núi Sam, Châu Đốc. Lễ hội có nghi lễ rước tượng Bà lên núi tắm và thay áo mới, thu hút hàng triệu người dân và du khách từ khắp nơi về tham dự, thể hiện lòng thành kính với vị Thánh Mẫu."
  },
  {
    id: 5,
    title: "Chợ Nổi - Nét Văn Hóa Sông Nước",
    excerpt: "Phiên chợ độc đáo trên sông Hậu, nơi mua bán diễn ra ngay trên thuyền.",
    image: "/images/LongXuyenImgs/cho-noi.jpg",
    date: "05/01/2025",
    content: "Chợ nổi Long Xuyên và Châu Đốc là nơi diễn ra hoạt động buôn bán sầm uất ngay trên dòng sông Hậu. Các thương lái chèo thuyền chở đầy hoa quả, nông sản đến giao dịch với nhau. Đây là nét văn hóa đặc trưng của vùng sông nước miền Tây, phản ánh lối sống và sinh kế của người dân địa phương."
  },
  {
    id: 6,
    title: "Văn Hóa Đa Dạng Dân Tộc",
    excerpt: "An Giang là nơi sinh sống hài hòa của nhiều dân tộc với bản sắc riêng.",
    image: "/images/TanChauImgs/lang-cham-1.jpg",
    date: "03/01/2025",
    content: "An Giang là tỉnh có sự đa dạng dân tộc cao, bao gồm người Kinh, Khmer, Chăm và Hoa. Mỗi dân tộc đều có nét văn hóa, tín ngưỡng và lễ hội riêng, tạo nên bức tranh văn hóa đa sắc màu. Làng Chăm ở Châu Giang với kiến trúc nhà sàn độc đáo, văn hóa Khmer với lễ hội Chol Chnam Thmay và Ok Om Bok đều là những nét đẹp văn hóa đặc sắc."
  }
];

const newsArticles = [
  {
    id: 1,
    title: "Tượng Phật Thích Ca 81m Tại Núi Sam - Kỷ Lục Thế Giới",
    excerpt: "Công trình tượng Phật khắc vào vách đá cao nhất thế giới đang được hoàn thiện tại núi Sam.",
    image: "/images/ChauDocImgs/tuong-phat-nui-sam.jpg",
    date: "20/01/2025",
    category: "Kiến Trúc",
    content: "Tượng Phật Thích Ca cao 81m đang được xây dựng tại núi Sam với tổng vốn đầu tư khoảng 255 tỷ đồng. Sau khi hoàn thiện, đây sẽ trở thành tượng Phật ngồi thiền khắc vào vách đá cao nhất thế giới, góp phần tôn tạo cảnh quan và phát triển du lịch tâm linh An Giang."
  },
  {
    id: 2,
    title: "An Giang Phát Triển Du Lịch Sinh Thái Bền Vững",
    excerpt: "Tỉnh An Giang đang triển khai nhiều dự án du lịch sinh thái, kết hợp bảo vệ môi trường.",
    image: "/images/TinhBienImgs/rung_tram_4.jpg",
    date: "18/01/2025",
    category: "Du Lịch",
    content: "Tỉnh An Giang đang tập trung phát triển du lịch sinh thái tại các khu vực như rừng tràm Trà Sư, vùng Bảy Núi, nhằm vừa bảo vệ môi trường vừa phát triển kinh tế. Các mô hình homestay, tour du lịch cộng đồng đang được khuyến khích để người dân địa phương tham gia và hưởng lợi từ du lịch."
  },
  {
    id: 3,
    title: "Lễ Hội Đua Bò Bảy Núi - Nét Văn Hóa Độc Đáo",
    excerpt: "Lễ hội đua bò truyền thống của người Khmer tại An Giang thu hút đông đảo du khách.",
    image: "/images/TriTonImgs/tri_ton_1.jpg",
    date: "15/01/2025",
    category: "Văn Hóa",
    content: "Lễ hội đua bò Bảy Núi là lễ hội truyền thống của đồng bào dân tộc Khmer, thường được tổ chức sau mùa gặt. Đây là dịp để người dân vui chơi, giải trí và cầu mong mùa màng bội thu. Lễ hội đã trở thành sản phẩm du lịch văn hóa đặc sắc, thu hút nhiều du khách trong và ngoài nước."
  },
  {
    id: 4,
    title: "Đường Thốt Nốt An Giang - Đặc Sản Được Bảo Hộ",
    excerpt: "Đường thốt nốt An Giang đã được cấp chỉ dẫn địa lý, nâng cao giá trị sản phẩm.",
    image: "/images/TriTonImgs/thotnottraitim01.jpg",
    date: "12/01/2025",
    category: "Nông Nghiệp",
    content: "Đường thốt nốt An Giang được làm từ hoa cây thốt nốt, có vị ngọt tự nhiên và nhiều giá trị dinh dưỡng. Sản phẩm đã được cấp giấy chứng nhận chỉ dẫn địa lý, giúp bảo vệ thương hiệu và nâng cao giá trị cho người nông dân. Hiện nay, đường thốt nốt An Giang được xuất khẩu sang nhiều nước."
  },
  {
    id: 5,
    title: "Khu Du Lịch Cáp Treo Núi Sam Nâng Cấp",
    excerpt: "Hệ thống cáp treo núi Sam được nâng cấp, mang lại trải nghiệm tốt hơn cho du khách.",
    image: "/images/ChauDocImgs/cap-treo-nui-sam.jpg",
    date: "10/01/2025",
    category: "Du Lịch",
    content: "Khu du lịch cáp treo núi Sam đang được nâng cấp hệ thống cabin và các dịch vụ đi kèm. Với chiều dài 900m và 37 cabin, hệ thống cáp treo giúp du khách dễ dàng lên đỉnh núi Sam để chiêm bái các ngôi chùa và ngắm cảnh toàn vùng Châu Đốc."
  },
  {
    id: 6,
    title: "An Giang Kết Nối Du Lịch Với Campuchia",
    excerpt: "Tỉnh An Giang đang phát triển các tour du lịch xuyên biên giới với Campuchia.",
    image: "/images/ChauDocImgs/tuong_dai_ca_ba_cd.jpg",
    date: "08/01/2025",
    category: "Du Lịch",
    content: "Với lợi thế giáp biên giới Campuchia, An Giang đang phát triển các tour du lịch xuyên biên giới, kết hợp tham quan các di tích lịch sử, văn hóa của cả hai nước. Các tuyến du lịch sông nước, tham quan chợ biên giới và các khu di tích Angkor đang được nhiều du khách quan tâm."
  }
];

export default function AdventurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-4">
            Khám Phá An Giang
          </h2>
          <p className="text-base md:text-lg text-amber-700 text-center max-w-3xl mx-auto">
            Những câu chuyện thú vị và tin tức mới nhất về vùng đất Thất Sơn
          </p>
        </div>

        <Tabs defaultValue="fun-facts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-1 shadow-lg mb-8">
            <TabsTrigger
              value="fun-facts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              Sự Thật Thú Vị
            </TabsTrigger>
            <TabsTrigger
              value="news"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              Tin Tức
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fun-facts" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {funFacts.map((fact) => (
                <Card
                  key={fact.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={fact.image}
                      alt={fact.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <Badge className="bg-amber-500 text-white text-xs mb-2">
                        {fact.date}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-amber-800 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                      {fact.title}
                    </CardTitle>
                    <CardDescription className="text-amber-700 leading-relaxed line-clamp-2">
                      {fact.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {fact.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="news" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-orange-500 text-white text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-amber-500 text-white text-xs">
                        {article.date}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-amber-800 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-amber-700 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {article.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
