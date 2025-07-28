import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-amber-800 to-orange-700 text-white">
                <CardTitle className="text-2xl md:text-3xl font-bold">🏛️ Tỉnh An Giang</CardTitle>
              </CardHeader>
              <CardContent className="p-6 prose lg:prose-lg">
                <p className="text-amber-800 leading-relaxed">
                  An Giang là một tỉnh thuộc vùng Đồng bằng sông Cửu Long của Việt Nam. Giáp với Campuchia về phía Tây Bắc,
                  An Giang nổi tiếng với cảnh quan thiên nhiên tươi đẹp, di sản văn hóa đa dạng và lịch sử phong phú.
                  Tỉnh có diện tích khoảng 3.536 kilômét vuông và dân số khoảng 2,1 triệu người.
                </p>

                <p className="mt-4 text-amber-800 leading-relaxed">
                  An Giang là một tỉnh thuộc vùng Đồng bằng sông Cửu Long của Việt Nam. Trước khi sáp nhập với tỉnh Kiên Giang (trước 1/7/2025), An Giang có 11 đơn vị hành chính cấp huyện và 156 đơn vị hành chính cấp xã. Sau khi sáp nhập từ 1/7/2025, tỉnh An Giang mới sẽ có 102 đơn vị hành chính cấp xã, bao gồm 85 xã, 14 phường và 3 đặc khu (Kiên Hải, Phú Quốc, Thổ Châu).
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-amber-800 to-orange-700 text-white">
                <CardTitle className="text-2xl md:text-3xl font-bold">🎭 Văn Hóa và Truyền Thống</CardTitle>
              </CardHeader>
              <CardContent className="p-6 prose lg:prose-lg">
                <p className="text-amber-800 leading-relaxed">
                  An Giang là nơi sinh sống của nhiều dân tộc, bao gồm người Kinh, Khmer, Chăm và Hoa, mỗi dân tộc
                  đều góp phần tạo nên bản sắc văn hóa phong phú của tỉnh. Sự đa dạng này được thể hiện qua các lễ hội
                  địa phương, kiến trúc, ẩm thực và tín ngưỡng tôn giáo.
                </p>

                <h3 className="mt-6 text-xl font-bold text-amber-900">🎉 Lễ Hội</h3>
                <p className="text-amber-800 leading-relaxed">
                  Một số lễ hội nổi tiếng ở An Giang bao gồm:
                </p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Lễ hội Bà Chúa Xứ:</strong> Được tổ chức hàng năm tại núi Sam từ ngày 23 đến 27
                      tháng 4 âm lịch. Đây là một trong những lễ hội lớn nhất vùng Đồng bằng sông Cửu Long, thu hút
                      hàng triệu khách hành hương và du khách.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Lễ hội đua bò:</strong> Một sự kiện văn hóa độc đáo của người Khmer, thường được tổ chức
                      sau mùa gặt.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Mùa nước nổi:</strong> Không phải là lễ hội truyền thống nhưng là hiện tượng tự nhiên
                      khi sông Mekong dâng nước, tạo nên cảnh quan độc đáo và lối sống đặc trưng.
                    </div>
                  </li>
                </ul>

                <h3 className="mt-6 text-xl font-bold text-amber-900">🍽️ Ẩm Thực</h3>
                <p className="text-amber-800 leading-relaxed">
                  Ẩm thực An Giang chịu ảnh hưởng từ địa lý, lịch sử và sự đa dạng dân tộc. Tỉnh nổi tiếng với các món ăn như:
                </p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Bún cá:</strong> Đặc sản của thành phố Châu Đốc, với bún, cá và nước dùng đậm đà.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Mắm:</strong> Các loại mắm được chế biến từ cá, là nguyên liệu chính trong nhiều món ăn địa phương.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Lẩu mắm:</strong> Món lẩu đặc trưng được nấu từ mắm, rau và các loại thịt.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bản đồ hành chính */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-amber-800 to-orange-700 text-white">
                <CardTitle className="text-2xl md:text-3xl font-bold">🗺️ Bản Đồ Hành Chính</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-amber-800 leading-relaxed">
                    Bản đồ hành chính tỉnh An Giang thể hiện rõ các đơn vị hành chính, ranh giới và địa hình của tỉnh.
                  </p>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/images/Bản_đồ_hành_chính_tỉnh_An_Giang.jpeg" 
                      alt="Bản đồ hành chính tỉnh An Giang" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">🏛️ Thành phố & Thị xã</h4>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• Long Xuyên (Tỉnh lỵ)</li>
                        <li>• Châu Đốc</li>
                        <li>• Tân Châu</li>
                        <li>• Tịnh Biên</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">🏘️ Huyện</h4>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• An Phú</li>
                        <li>• Châu Phú</li>
                        <li>• Châu Thành</li>
                        <li>• Phú Tân</li>
                        <li>• Thoại Sơn</li>
                        <li>• Tri Tôn</li>
                        <li>• Chợ Mới</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-amber-800 to-orange-700 text-white">
                <CardTitle className="text-xl font-bold">📊 Thông Tin Nhanh</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <dl className="space-y-4">
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                    <dt className="text-sm font-semibold text-amber-700">🏛️ Tỉnh lỵ</dt>
                    <dd className="mt-1 text-base font-medium text-amber-900">Long Xuyên</dd>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                    <dt className="text-sm font-semibold text-amber-700">📏 Diện tích</dt>
                    <dd className="mt-1 text-base font-medium text-amber-900">3.536 km²</dd>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                    <dt className="text-sm font-semibold text-amber-700">👥 Dân số</dt>
                    <dd className="mt-1 text-base font-medium text-amber-900">~2,1 triệu người</dd>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                    <dt className="text-sm font-semibold text-amber-700">🗣️ Ngôn ngữ</dt>
                    <dd className="mt-1 text-base font-medium text-amber-900">Tiếng Việt, Khmer, Chăm</dd>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                    <dt className="text-sm font-semibold text-amber-700">🏙️ Thành phố chính</dt>
                    <dd className="mt-1 text-base font-medium text-amber-900">Long Xuyên, Châu Đốc, Tân Châu</dd>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                    <dt className="text-sm font-semibold text-amber-700">🌤️ Khí hậu</dt>
                    <dd className="mt-1 text-base font-medium text-amber-900">Nhiệt đới gió mùa</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-amber-800 to-orange-700 text-white">
                <CardTitle className="text-xl font-bold">⏰ Thời Điểm Tham Quan Tốt Nhất</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-amber-800 leading-relaxed">
                  Thời điểm tốt nhất để thăm An Giang phụ thuộc vào trải nghiệm bạn muốn:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Mùa khô (12-4):</strong> 
                      <span className="text-amber-800"> Lý tưởng cho tham quan và leo núi</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Mùa nước nổi (8-11):</strong> 
                      <span className="text-amber-800"> Cảnh quan độc đáo khi đồng ruộng ngập nước</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Mùa gặt (11-12):</strong> 
                      <span className="text-amber-800"> Cánh đồng lúa vàng đẹp mắt</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-amber-900">Mùa lễ hội (4-5):</strong> 
                      <span className="text-amber-800"> Trải nghiệm các sự kiện văn hóa địa phương</span>
                    </div>
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
