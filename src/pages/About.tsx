import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50">
    

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

                <p className="mt-3">
                An Giang là một tỉnh thuộc vùng Đồng bằng sông Cửu Long của Việt Nam. Trước khi sáp nhập với tỉnh Kiên Giang (trước 1/7/2025), An Giang có 11 đơn vị hành chính cấp huyện và 156 đơn vị hành chính cấp xã. Sau khi sáp nhập từ 1/7/2025, tỉnh An Giang mới sẽ có 102 đơn vị hành chính cấp xã, bao gồm 85 xã, 14 phường và 3 đặc khu (Kiên Hải, Phú Quốc, Thổ Châu).
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

                <h3 className="mt-3">Lễ Hội</h3>
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

                <h3 className="mt-3">Ẩm Thực</h3>
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
