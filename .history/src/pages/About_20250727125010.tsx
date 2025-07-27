import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="relative bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Giới Thiệu An Giang
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Tìm hiểu về vùng đất Tây Nam Bộ đầy quyến rũ
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Tỉnh An Giang</CardTitle>
              </CardHeader>
              <CardContent className="prose lg:prose-lg">
                <p>
                  An Giang là một tỉnh thuộc vùng Đồng bằng sông Cửu Long của Việt Nam. Giáp với Campuchia về phía Tây Bắc,
                  An Giang nổi tiếng với cảnh quan thiên nhiên tươi đẹp, di sản văn hóa đa dạng và lịch sử phong phú.
                  Tỉnh có diện tích khoảng 3.536 kilômét vuông và dân số khoảng 2,1 triệu người.
                </p>

                <h3>Địa Lý và Khí Hậu</h3>
                <p>
                  An Giang được đặc trưng bởi những cánh đồng lúa bạt ngàn, những dòng sông uốn lượn và dãy núi.
                  Tỉnh được bao bọc bởi hai nhánh sông Mekong: sông Tiền và sông Hậu. Ở phía tây của tỉnh là dãy
                  Thất Sơn (Bảy Núi), một quần thể núi nhỏ có ý nghĩa văn hóa và tôn giáo quan trọng.
                </p>
                <p>
                  Khí hậu An Giang mang tính nhiệt đới với hai mùa rõ rệt: mùa mưa (tháng 5 đến tháng 11) và mùa khô
                  (tháng 12 đến tháng 4). Nhiệt độ trung bình dao động từ 26°C đến 29°C quanh năm.
                </p>

                <h3>Lịch Sử</h3>
                <p>
                  An Giang có lịch sử lâu đời từ thời đế chế Khmer. Sau đó trở thành một phần lãnh thổ của chúa Nguyễn
                  và là một trong những tỉnh đầu tiên được thành lập ở miền Nam Việt Nam. Trong thời kỳ chiến tranh Việt Nam,
                  An Giang là địa điểm chiến lược và chứng kiến nhiều hoạt động quân sự.
                </p>

                <h3>Kinh Tế</h3>
                <p>
                  Nông nghiệp, đặc biệt là trồng lúa, là xương sống của nền kinh tế An Giang. Tỉnh là một trong những
                  vựa lúa lớn nhất của Việt Nam. Nghề cá và nuôi trồng thủy sản, đặc biệt là nuôi cá tra, cũng đóng góp
                  đáng kể vào nền kinh tế địa phương. Trong những năm gần đây, du lịch đang phát triển như một ngành kinh tế quan trọng.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Văn Hóa và Truyền Thống</CardTitle>
              </CardHeader>
              <CardContent className="prose lg:prose-lg">
                <p>
                  An Giang là nơi sinh sống của nhiều dân tộc, bao gồm người Kinh, Khmer, Chăm và Hoa, mỗi dân tộc
                  đều góp phần tạo nên bản sắc văn hóa phong phú của tỉnh. Sự đa dạng này được thể hiện qua các lễ hội
                  địa phương, kiến trúc, ẩm thực và tín ngưỡng tôn giáo.
                </p>

                <h3>Lễ Hội</h3>
                <p>
                  Một số lễ hội nổi tiếng ở An Giang bao gồm:
                </p>
                <ul>
                  <li>
                    <strong>Lễ hội Bà Chúa Xứ</strong>: Được tổ chức hàng năm tại núi Sam từ ngày 23 đến 27
                    tháng 4 âm lịch. Đây là một trong những lễ hội lớn nhất vùng Đồng bằng sông Cửu Long, thu hút
                    hàng triệu khách hành hương và du khách.
                  </li>
                  <li>
                    <strong>Lễ hội đua bò</strong>: Một sự kiện văn hóa độc đáo của người Khmer, thường được tổ chức
                    sau mùa gặt.
                  </li>
                  <li>
                    <strong>Mùa nước nổi</strong>: Không phải là lễ hội truyền thống nhưng là hiện tượng tự nhiên
                    khi sông Mekong dâng nước, tạo nên cảnh quan độc đáo và lối sống đặc trưng.
                  </li>
                </ul>

                <h3>Ẩm Thực</h3>
                <p>
                  Ẩm thực An Giang chịu ảnh hưởng từ địa lý, lịch sử và sự đa dạng dân tộc. Tỉnh nổi tiếng với các món ăn như:
                </p>
                <ul>
                  <li>
                    <strong>Bún cá</strong>: Đặc sản của thành phố Châu Đốc, với bún, cá và nước dùng đậm đà.
                  </li>
                  <li>
                    <strong>Mắm</strong>: Các loại mắm được chế biến từ cá, là nguyên liệu chính trong nhiều món ăn địa phương.
                  </li>
                  <li>
                    <strong>Lẩu mắm</strong>: Món lẩu đặc trưng được nấu từ mắm, rau và các loại thịt.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông Tin Nhanh</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Tỉnh lỵ</dt>
                    <dd className="mt-1 text-base">Long Xuyên</dd>
                  </div>
                  <Separator />

                  <div>
                    <dt className="text-sm font-medium text-gray-500">Diện tích</dt>
                    <dd className="mt-1 text-base">3.536 km²</dd>
                  </div>
                  <Separator />

                  <div>
                    <dt className="text-sm font-medium text-gray-500">Dân số</dt>
                    <dd className="mt-1 text-base">~2,1 triệu người</dd>
                  </div>
                  <Separator />

                  <div>
                    <dt className="text-sm font-medium text-gray-500">Ngôn ngữ</dt>
                    <dd className="mt-1 text-base">Tiếng Việt, Khmer, Chăm</dd>
                  </div>
                  <Separator />

                  <div>
                    <dt className="text-sm font-medium text-gray-500">Thành phố chính</dt>
                    <dd className="mt-1 text-base">Long Xuyên, Châu Đốc, Tân Châu</dd>
                  </div>
                  <Separator />

                  <div>
                    <dt className="text-sm font-medium text-gray-500">Khí hậu</dt>
                    <dd className="mt-1 text-base">Nhiệt đới gió mùa</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thời Điểm Tham Quan Tốt Nhất</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Thời điểm tốt nhất để thăm An Giang phụ thuộc vào trải nghiệm bạn muốn:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Mùa khô (12-4):</strong> Lý tưởng cho tham quan và leo núi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Mùa nước nổi (8-11):</strong> Cảnh quan độc đáo khi đồng ruộng ngập nước
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Mùa gặt (11-12):</strong> Cánh đồng lúa vàng đẹp mắt
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Mùa lễ hội (4-5):</strong> Trải nghiệm các sự kiện văn hóa địa phương
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  );
}