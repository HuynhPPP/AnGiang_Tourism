import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const districts = [
  // Long Xuyên
  {
    id: "long-xuyen",
    name: "Thành phố Long Xuyên",
    image: "/images/LongXuyenImgs/den_4_ngon_lx.jpg",
    description: "Thành phố Long Xuyên là tỉnh lỵ của tỉnh An Giang, nằm bên bờ sông Hậu. Là trung tâm chính trị, kinh tế, văn hóa của tỉnh An Giang.",
    attractions: [
      {
        name: "Khu phố chợ Long Xuyên",
        description: "Khu vực trung tâm thành phố với nhiều cửa hàng và khu chợ truyền thống, nơi bạn có thể trải nghiệm cuộc sống thường nhật của người dân địa phương.",
        image: "/images/LongXuyenImgs/chonoilx-2.jpg",
        location: "2 Nguyễn Trãi, Mỹ Long, Thành phố Long Xuyên, An Giang"
      },
      {
        name: "Chợ nổi Long Xuyên",
        description: "Những ngôi chùa cổ trong nội ô thành phố Long Xuyên có kiến trúc đẹp và mang đậm nét văn hóa Phật giáo của người dân vùng sông nước.",
        image: "/images/LongXuyenImgs/cho-noi.jpg",
        location: "22 Ngô Thời Nhậm, Thành phố Long Xuyên, tỉnh An Giang"
      },
      {
        name: "Chùa Ông Bắc (Bắc Đế Miếu)",
        description: "Chùa Ông Bắc là một trong những địa điểm du lịch Long Xuyên được nhiều du khách ghé tham quan. Chùa có lịch sử lâu đời và thường được biết đến với một tên gọi khác là Quảng Đông tỉnh Hội Quán.",
        image: "/images/LongXuyenImgs/Chùa_Ông_Bắc_1.jpg",
        location: "68 Phạm Hồng Thái, phường Mỹ Long, thành phố Long Xuyên, tỉnh An Giang"
      },
      {
        name: "Bảo tàng An Giang",
        description: "Bảo tàng An Giang là nơi trưng bày hiện vật và các tư liệu lịch sử, văn hóa của tỉnh An Giang.",
        image: "/images/LongXuyenImgs/bao-tang-AG.jpg",
        location: "11 Tôn Đức Thắng, phường Mỹ Bình, thành phố Long Xuyên, tỉnh An Giang."
      },
    ],
    cuisine: [
      {
        name: "Bún cá Long Xuyên",
        description: "Đặc sản nổi tiếng với nước lèo ngọt, chả cá, bún mềm, thêm bông diêu điền, rau sống.",
        image: "/images/LongXuyenImgs/Foods/bun_ca_long_xuyen_1.jpg"
      },
      {
        name: "Cơm tấm Long Xuyên",
        description: "Món cơm tấm đặc trưng của vùng Nam bộ, được phục vụ với sườn nướng, bì, chả, trứng và đồ chua.",
        image: "/images/LongXuyenImgs/Foods/com-tam-LX.jpg"
      },
    ]
  },
  // Châu Đốc
  {
    id: "chau-doc",
    name: "Thành phố Châu Đốc",
    image: "/images/ChauDocImgs/tuong_dai_ca_ba_cd.jpg",
    description: "Thành phố Châu Đốc nằm ven biên giới Việt Nam - Campuchia, nổi tiếng với khu di tích Núi Sam và Miếu Bà Chúa Xứ.",
    attractions: [
      {
        name: "Núi Sam (Bà Chúa Xứ)",
        description: "Khu di tích linh thiêng với Miếu Bà Chúa Xứ nổi tiếng, là điểm hành hương quan trọng của người dân Nam bộ.",
        image: "/images/ChauDocImgs/tuong_dai_ca_ba_cd.jpg",
        location: "Khu du lịch Núi Sam, An Hòa, Tịnh Biên, An Giang"
      },
      {
        name: "Chợ nổi Châu Đốc",
        description: "Khu chợ nổi trên sông, nơi diễn ra các hoạt động giao thương truyền thống của người dân vùng sông nước.",
        image: "https://cdn.tgdd.vn/Files/2022/01/17/1411285/kinh-nghiem-di-cho-noi-chau-doc-an-giang-cap-nhat-2022-202201171359081502.jpg"
      },
      {
        name: "Chùa Tây An",
        description: "Ngôi chùa cổ với kiến trúc độc đáo, kết hợp giữa Phật giáo và tín ngưỡng dân gian.",
        image: "https://dulichkhampha24.com/wp-content/uploads/2020/04/chua-tay-an-an-giang-4.jpg"
      },
      {
        name: "Đồi Tức Dụp",
        description: "Địa điểm lịch sử quan trọng trong kháng chiến, nay là điểm tham quan du lịch sinh thái.",
        image: "https://statics.vinpearl.com/doi-tuc-dup-an-giang-0_1630642543.jpg"
      }
    ],
    cuisine: [
      {
        name: "Lẩu mắm Châu Đốc",
        description: "Món ăn đặc sản từ cá linh kho với mắm, ăn kèm nhiều loại rau và bún.",
        image: "https://statics.vinpearl.com/lau-mam-chau-doc-2_1632307614.png"
      },
      {
        name: "Gỏi sầu đâu",
        description: "Món gỏi độc đáo được làm từ lá và hoa sầu đâu, chấm cá kho Châu Đốc.",
        image: "https://i.ytimg.com/vi/-MFuQO3YPzE/maxresdefault.jpg"
      },
      {
        name: "Bò bảy món Núi Sam",
        description: "Gồm lòng bò, bò lúc lắc, bò khìa bánh mì, cháo bò, bò xào lá giang và các món khác từ thịt bò.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxpPzZsEd1fzOYlNQyoZN0YRoKukMd_6b_A&usqp=CAU"
      }
    ]
  },
  // Tân Châu
  {
    id: "tan-chau",
    name: "Thị xã Tân Châu",
    image: "/images/TanChauImgs/tan-chau-1.jpg",
    description: "Thị xã Tân Châu nằm ở phía bắc tỉnh An Giang, giáp với Campuchia, nổi tiếng với nghề dệt lụa Tân Châu và các di tích lịch sử.",
    attractions: [
      {
        name: "Dinh Thầy Thím",
        description: "Di tích lịch sử liên quan đến nhân vật lịch sử nổi tiếng của vùng, được nhiều du khách tìm đến.",
        image: "https://cdn.vietnambiz.vn/2020/1/14/dinh-thay-thim-1578973349233300516101-crop-15789733539311999175537.jpg"
      },
      {
        name: "Mũi Nai",
        description: "Điểm cực bắc của tỉnh An Giang, nơi sông Tiền đổ vào biên giới Việt Nam - Campuchia.",
        image: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/06_2019/mui-nai-ha-tien.jpg"
      },
      {
        name: "Núi Đèn",
        description: "Ngọn núi nhỏ với cảnh quan thiên nhiên đẹp và có giá trị về mặt văn hóa tín ngưỡng.",
        image: "https://nld.mediacdn.vn/2017/photo-1-1491822028206.jpg"
      },
      {
        name: "Khu đồi cát ven biên",
        description: "Khu vực đồi cát ven biên giới với cảnh quan đặc trưng của vùng.",
        image: "https://dulichkhampha24.com/wp-content/uploads/2019/12/doi-cat-bay-mui-ne-2.jpg"
      }
    ],
    cuisine: [
      {
        name: "Bún cá Tân Châu",
        description: "Món bún cá tương tự Long Xuyên nhưng có hương vị riêng của vùng Tân Châu.",
        image: "https://thucthan.com/media/2018/06/bun-ca-long-xuyen/bun-ca-long-xuyen.jpg"
      },
      {
        name: "Bánh bò thốt nốt",
        description: "Bánh bò được làm từ đường thốt nốt, đặc sản của vùng Bảy Núi.",
        image: "https://cdn.tgdd.vn/Files/2021/08/11/1373699/cach-lam-banh-bo-thot-not-mem-ngot-thom-mui-la-dua-202108111431366402.jpg"
      },
      {
        name: "Thạch thốt nốt",
        description: "Món tráng miệng làm từ đường thốt nốt đặc trưng của vùng Bảy Núi An Giang.",
        image: "https://i.ytimg.com/vi/Hx-PwK3oras/maxresdefault.jpg"
      }
    ]
  },
  // Tịnh Biên
  {
    id: "tinh-bien",
    name: "Thị xã Tịnh Biên",
    image: "/images/TinhBienImgs/tinh_bien_1.jpg",
    description: "Thị xã Tịnh Biên nằm ở phía Tây của tỉnh An Giang, giáp với Campuchia và huyện Tri Tôn, nổi tiếng với chợ biên giới và cảnh quan thiên nhiên.",
    attractions: [
      {
        name: "Núi Cấm (Thiên Cấm Sơn)",
        description: "Nằm ở xã An Hảo, Tịnh Biên, núi Cấm được người dân nơi đây ví như nóc nhà của vùng đồng bằng Sông Cửu Long.",
        image: "/images/TriTonImgs/thien_cam_son.jpg",
        location: "Khu du lịch Núi Cấm, An Hòa, Tịnh Biên, An Giang"
      },
      {
        name: "Làng du lịch sinh thái Núi Voi",
        description: "Khu du lịch sinh thái với núi Voi hùng vĩ, có nhiều hoạt động giải trí và nghỉ dưỡng.",
        image: "https://dulichphunu.net/wp-content/uploads/2021/01/nui-voi-min.jpg"
      },
      {
        name: "Chợ Tịnh Biên",
        description: "Chợ biên giới lớn, nơi giao thương hàng hóa giữa Việt Nam và Campuchia, nhiều mặt hàng độc đáo.",
        image: "https://vintrip.cdn.vccloud.vn/wp-content/uploads/2017/08/cho-tinh-bien.jpg"
      }
    ],
    cuisine: [
      {
        name: "Bò cạp Bảy Núi",
        description: "Đặc sản côn trùng chỉ có ở khu vực Bảy Núi, được chế biến theo nhiều cách khác nhau.",
        image: "https://statics.vinpearl.com/bo-cap-xao-la-me-3_1630904643.jpg"
      }
    ]
  },
  // An Phú
  {
    id: "an-phu",
    name: "Huyện An Phú",
    image: "/images/AnPhuImgs/an_phu_1.jpg",
    description: "Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.",
    attractions: [
      {
        name: "Vùng sông nước biên giới Campuchia",
        description: "Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.",
        image: "https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg"
      },
      {
        name: "Du lịch homestay Đa Phước",
        description: "Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.",
        image: "https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg"
      }
    ],
    cuisine: [
      {
        name: "Đường thốt nốt",
        description: "Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.",
        image: "https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg"
      },
      {
        name: "Nước thốt nốt",
        description: "Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.",
        image: "https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg"
      }
    ]
  },
  // Châu Phú
  {
    id: "chau-phu",
    name: "Huyện Châu Phú",
    image: "/images/ChauPhuImgs/Tran-Van-Thanh.jpg",
    description: "Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.",
    attractions: [
      {
        name: "Vùng sông nước biên giới Campuchia",
        description: "Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.",
        image: "https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg"
      },
      {
        name: "Du lịch homestay Đa Phước",
        description: "Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.",
        image: "https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg"
      }
    ],
    cuisine: [
      {
        name: "Đường thốt nốt",
        description: "Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.",
        image: "https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg"
      },
      {
        name: "Nước thốt nốt",
        description: "Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.",
        image: "https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg"
      }
    ]
  },
  // Châu Thành
  {
    id: "chau-thanh",
    name: "Huyện Châu Thành",
    image: "/images/ChauThanhImgs/huyen-chau-thanh_8.jpg",
    description: "Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.",
    attractions: [
      {
        name: "Vùng sông nước biên giới Campuchia",
        description: "Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.",
        image: "https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg"
      },
      {
        name: "Du lịch homestay Đa Phước",
        description: "Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.",
        image: "https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg"
      }
    ],
    cuisine: [
      {
        name: "Đường thốt nốt",
        description: "Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.",
        image: "https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg"
      },
      {
        name: "Nước thốt nốt",
        description: "Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.",
        image: "https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg"
      }
    ]
  },
  // Phú Tân
  {
    id: "phu-tan",
    name: "Huyện Phú Tân",
    image: "/images/PhuTanImgs/phu_tan_1.jpg",
    description: "Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.",
    attractions: [
      {
        name: "Vùng sông nước biên giới Campuchia",
        description: "Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.",
        image: "https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg"
      },
      {
        name: "Du lịch homestay Đa Phước",
        description: "Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.",
        image: "https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg"
      }
    ],
    cuisine: [
      {
        name: "Đường thốt nốt",
        description: "Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.",
        image: "https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg"
      },
      {
        name: "Nước thốt nốt",
        description: "Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.",
        image: "https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg"
      }
    ]
  },
  // Thoại Sơn
  {
    id: "thoai-son",
    name: "Huyện Thoại Sơn",
    image: "/images/ThoaiSonImgs/thoai-son-1.jpg",
    description: "Huyện Thoại Sơn nằm ở phía nam tỉnh An Giang, nổi tiếng với Óc Eo - di tích lịch sử văn hóa quan trọng của vương quốc Phù Nam cổ.",
    attractions: [
      {
        name: "Chùa Hang",
        description: "Ngôi chùa nằm trong hang núi, có kiến trúc độc đáo và cảnh quan đẹp.",
        image: "https://gonsa.vn/uploads/news/2020_10/di-tich-lich-su-chua-hang-an-giang-7.jpg"
      },
      {
        name: "Núi Ô Thum",
        description: "Ngọn núi với cảnh quan thiên nhiên đẹp và nhiều di tích lịch sử văn hóa.",
        image: "https://mineviettravel.vn/library/module_new/tintuc_1574922946.jpg"
      }
    ],
    cuisine: [
      {
        name: "Gà đốt lá chúc Ô Thum",
        description: "Gà nướng kiểu Khmer, có hương vị đặc biệt, thơm mùi lá chúc.",
        image: "https://cdn3.ivivu.com/2014/10/10-dieu-thu-vi-o-le-hoi-ok-om-bok-cua-nguoi-khmer-iVIVU.com-1.jpg"
      }
    ]
  },
  // Tri Tôn
  {
    id: "tri-ton",
    name: "Huyện Tri Tôn",
    image: "/images/TriTonImgs/tri_ton_1.jpg",
    description: "Huyện Tri Tôn nằm ở phía Tây của tỉnh An Giang, giáp với Tịnh Biên và Thoại Sơn, là nơi có cụm núi Thất Sơn nổi tiếng với phong cảnh hùng vĩ và nhiều di tích văn hóa lịch sử.",
    attractions: [
      {
        name: "Núi Cô Tô (Phụng Hoàng Sơn)",
        description: "Núi Cô Tô có khá nhiều tên như: Núi Tô, Phụng Hoàng Sơn và gọi theo tiếng Khmer là Phnom-Ktô. Núi Cô Tô (Phụng Hoàng Sơn) nằm trong dãy Thất Sơn - Bảy Núi nổi tiếng.",
        image: "/images/TriTonImgs/nui-co-to.jpg",
        location: "Núi Cô Tô, Phú Thọ, Tri Tôn, An Giang"
      },
      {
        name: "Hồ Tà Pạ",
        description: "Hồ nước trong vắt được bao bọc bởi những hàng cây, núi đá. Ngày nắng trong dưới nền trời xanh rọi xuống mặt hồ tạo nên khung cảnh đẹp lung linh. Mặt hồ bằng lặng, khung cảnh hoang sơ được ví như “Tuyệt tình Cốc” của miền Tây.",
        image: "/images/TriTonImgs/ho_ta_pa.jpg",
        location: "Ta Pa, Núi Tô, Tri Tôn, An Giang"
      },
      {
        name: "Cánh đồng Tà Pạ",
        description: "Theo Kinh nghiệm khám phá cánh đồng Tà Pạ, đến đây vào lúc này, bạn sẽ có cơ hội chiêm ngưỡng cảnh sắc thiên nhiên vô cùng mênh mông bát ngát, tha hồ mà chụp ảnh và tận hưởng mùi hương của lúa.",
        image: "/images/TriTonImgs/canh_dong_ta_pa.jpg",
        location: "Dưới chân núi Tà Pạ và Cô Tô, Huyện Tri Tôn, tỉnh An Giang."
      },
      {
        name: "Hồ Ô Thum",
        description: "Ô Thum được biết đến như một con hồ ngăn nước có nhiệm vụ chính là phục vụ cho việc sản xuất nông nghiệp với diện tích khá nhỏ.",
        image: "/images/TriTonImgs/ho_o_thum.jpg",
        location: "xã Ô Lâm, huyện Tri Tôn, tỉnh An Giang (dưới chân núi Cô Tô)"
      },
      {
        name: "Hồ Ô Tà Sóc",
        description: "Hồ Ô Tà Sóc An Giang là một trong những điểm đến du lịch nổi bật và kỳ vĩ của vùng Tây Nam Bộ, thu hút du khách bởi vẻ đẹp thiên nhiên hoang sơ, hùng vĩ.",
        image: "/images/TriTonImgs/ho-o-ta-soc.jpg",
        location: "xã Lương Phi, huyện Tri Tôn, tỉnh An Giang"
      },
      {
        name: "Chùa Xà Tón",
        description: "Chùa có tên Khmer là Xvayton, có lịch sử lâu đời hơn 200 năm là địa điểm du lịch Tri Tôn được nhiều du khách đến tham quan, hành hương.",
        image: "/images/TriTonImgs/chua-xa-ton.jpg",
        location: "khóm 3, thị trấn Tri Tôn, Tri Tôn, An Giang"
      },
      {
        name: "Chùa Koh Kas (Cổng trời Tri Tôn)",
        description: "Điểm thu hút của Chùa Koh Kas chính là chiếc cổng chùa nằm sừng sững mang đậm dấu ấn thời gian.",
        image: "/images/TriTonImgs/cong-troi-tri-ton-7.jpg",
        location: "xã Châu Lăng, huyện Tri Tôn, tỉnh An Giang"
      },
      {
        name: "Chùa Tà Pạ",
        description: "Chùa Tà Pạ còn có tên khác là Chùa Núi hay Chùa Chưn - Num theo cách gọi của người Khmer. Chùa theo phái Nam tông hệ của Phật giáo tiểu thừa đặc trưng của văn hóa Khmer.",
        image: "/images/TriTonImgs/chua-ta-pa.jpg",
        location: "Đồi Tà Pạ, xã Núi Tô, huyện Tri Tôn, tỉnh An Giang"
      },
      {
        name: "Đồi Tức Dụp",
        description: "Tức Dụp là ngọn đồi có nhiều hang sâu, động lớn dựa lưng vào Núi Cô Tô có vị trí cách Thành phố Long Xuyên chừng 70km và biên giới Campuchia tầm 10km.",
        image: "/images/TriTonImgs/Tuc-Dup-Tu-Ngon-Doi.jpg",
        location: "xã An Tức, huyện Tri Tôn, tỉnh An Giang"
      },
    ],
    cuisine: [
      {
        name: "Gà đốt lá chúc Ô Thum",
        description: "Gà đốt là món ăn truyền thống của người Khmer ở An Giang. Món ăn kèm đĩa gỏi bắp cải chua ngọt hoặc rau sống, dưa leo, chấm với nước chấm lá chúc mằn mặn lạ miệng hay muối tiêu chanh, muối ớt chanh.",
        image: "/images/TriTonImgs/Foods/ga-dot.jpg"
      },
      {
        name: "Cháo bò Tri Tôn",
        description: "Cháo bò là một trong những món ăn nổi bật nhất ở thị trấn Tri Tôn, món cháo được nấu như cháo lòng lợn thông thường nhưng dùng lòng bò: lá sách, gan, phổi, phèo... thêm miếng huyết mềm và thịt bò tái chín.",
        image: "/images/TriTonImgs/Foods/chao-bo.jpg"
      },
      {
        name: "Bò nướng Tri Tôn",
        description: "Cháo bò là một trong những món ăn nổi bật nhất ở thị trấn Tri Tôn, món cháo được nấu như cháo lòng lợn thông thường nhưng dùng lòng bò: lá sách, gan, phổi, phèo... thêm miếng huyết mềm và thịt bò tái chín.",
        image: "/images/TriTonImgs/Foods/bo-nuong.jpg"
      },
      {
        name: "Đu đủ đâm",
        description: "Đây là gỏi đu đủ của người Campuchia. Ở Việt Nam, tên gọi này xuất phát từ việc món được chế biến bằng cách đâm (giã) trong cối.",
        image: "/images/TriTonImgs/Foods/du-du-dam.jpg"
      },
      {
        name: "Thốt nốt sữa",
        description: "Nước thốt nốt để tủ đông lạnh cho đến khi sền sệt như đá bào, sau đó để ra ly cho vào đó cái thốt nốt, chế vào ly 1 ít sữa bò cùng đậu phộng.",
        image: "/images/TriTonImgs/Foods/thot-not-sua.jpeg"
      },
      {
        name: "Bánh bò thốt nốt",
        description: "Bánh bò thốt nốt được làm từ cây thốt nốt – loài cây gắn liền với cuộc sống của người Khmer.",
        image: "/images/TriTonImgs/Foods/banh-bo-thot-not.jpeg"
      },
    ]
  },
  // Chợ Mới
  {
    id: "cho-moi",
    name: "Huyện Chợ Mới",
    image: "/images/ChoMoiImgs/cho-moi-1.jpg",
    description: "Huyện Tri Tôn nằm ở phía Tây của tỉnh An Giang, giáp với Tịnh Biên và Thoại Sơn, là nơi có cụm núi Thất Sơn nổi tiếng với phong cảnh hùng vĩ và nhiều di tích văn hóa lịch sử.",
    attractions: [
      {
        name: "Núi Cấm (Thiên Cẩm Sơn)",
        description: "Ngọn núi cao nhất trong dãy Thất Sơn, có khí hậu mát mẻ, nhiều chùa chiền và cảnh quan đẹp.",
        image: "https://statics.vinpearl.com/nui-cam-an-giang-2_1630904958.jpg"
      },
      {
        name: "Núi Cô Tô",
        description: "Ngọn núi trong dãy Thất Sơn với nhiều hang động và di tích lịch sử.",
        image: "https://statics.vinpearl.com/nui-co-to-an-giang-0_1630905144.jpg"
      },
      {
        name: "Hồ Thủy Liêm",
        description: "Hồ nước lớn nằm dưới chân núi Cấm, là điểm du lịch sinh thái hấp dẫn.",
        image: "https://statics.vinpearl.com/Ho-Soai-So-An-Giang-2_1630905338.jpg"
      }
    ],
    cuisine: [
      {
        name: "Bánh canh bò viên Bảy Núi",
        description: "Món bánh canh được nấu với nước dùng từ xương bò và ăn kèm với bò viên.",
        image: "https://cdn.tgdd.vn/Files/2022/01/14/1411033/cach-lam-banh-canh-bot-gao-dam-vi-thom-ngon-va-beo-ngay-202201141411543442.jpg"
      },
      {
        name: "Cháo bò Tri Tôn",
        description: "Cháo nấu từ gạo Sóc Khmer, ăn kèm trái chúc tạo vị đặc trưng chua nhẹ.",
        image: "https://statics.vinpearl.com/chao-ga-nam-huong-sapa-0_1634895251.jpg"
      }
    ]
  },
];


export default function DistrictsPage() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Các Huyện, Thị Xã và Thành Phố của An Giang (trước 1/7/2025)</h2>
          <p className="text-lg text-amber-800">
            An Giang gồm 11 đơn vị hành chính cấp huyện: 2 thành phố (Long Xuyên, Châu Đốc), 2 thị xã (Tân Châu, Tịnh Biên) và 7 huyện (An Phú, Châu Phú, Châu Thành, Phú Tân, Thoại Sơn, Tri Tôn, Chợ Mới). Mỗi địa phương đều có nét văn hóa, ẩm thực và cảnh quan riêng biệt.
          </p>
        </div>

        {/* Districts selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {districts.map((district) => (
            <Card
              key={district.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${selectedDistrict.id === district.id ? 'border-amber-500 border-2 shadow-lg' : 'border-gray-200'}`}
              onClick={() => setSelectedDistrict(district)}
            >
              <div className="h-24 overflow-hidden rounded-t-lg">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h3 className="text-sm font-medium text-center truncate">{district.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected district detail */}
        {selectedDistrict && (
          <Card className="mb-8">
            <div className="relative h-96 overflow-hidden rounded-t-lg">
              <img
                src={selectedDistrict.image}
                alt={selectedDistrict.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">{selectedDistrict.name}</CardTitle>
              <CardDescription className="text-lg text-amber-700">
                {selectedDistrict.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="attractions" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="attractions">Điểm Du Lịch</TabsTrigger>
                  <TabsTrigger value="cuisine">Ẩm Thực</TabsTrigger>
                </TabsList>
                <TabsContent value="attractions">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {selectedDistrict.attractions.map((attraction, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={attraction.image}
                            alt={attraction.name}
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg text-amber-900">{attraction.name}</CardTitle>
                          <CardDescription className="text-amber-700">
                            {attraction.description}
                          </CardDescription>
                          {attraction.location && (
                            <p className="text-sm text-amber-600 mt-2">
                              <span className="font-medium">Địa chỉ:</span> {attraction.location}
                            </p>
                          )}
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="cuisine">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {selectedDistrict.cuisine.map((dish, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg text-amber-900">{dish.name}</CardTitle>
                          <CardDescription className="text-amber-700">
                            {dish.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
