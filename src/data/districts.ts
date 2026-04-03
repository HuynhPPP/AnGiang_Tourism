import type { District } from '@/types';
import { getImgUrl, getVideoUrl } from './utils';

export const defaultDistricts: District[] = [
  // long xuyên
  {
    id: 'long-xuyen',
    name: 'Thành phố Long Xuyên',
    image: getImgUrl('LongXuyenImgs/BieuTuong/den_4_ngon_lx.jpg'),
    description:
      'Thành phố Long Xuyên là tỉnh lỵ của tỉnh An Giang, nằm bên bờ sông Hậu. Là trung tâm chính trị, kinh tế, văn hóa của tỉnh An Giang.',
    attractions: [
      {
        name: 'Khu phố chợ Long Xuyên',
        description:
          'Khu vực trung tâm thành phố với nhiều cửa hàng và khu chợ truyền thống, nơi bạn có thể trải nghiệm cuộc sống thường nhật của người dân địa phương.',
        images: [
          getImgUrl('LongXuyenImgs/ChoLX/cho_lx_1.jpg'),
          getImgUrl('LongXuyenImgs/ChoLX/cho_lx_2.jpg'),
          getImgUrl('LongXuyenImgs/ChoLX/cho_lx_3.jpg'),
          getImgUrl('LongXuyenImgs/ChoLX/cho_lx_4.jpg'),
        ],
        location: '2 Nguyễn Trãi, Mỹ Long, Thành phố Long Xuyên, An Giang',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Chợ nổi Long Xuyên',
        description:
          'Những ngôi chùa cổ trong nội ô thành phố Long Xuyên có kiến trúc đẹp và mang đậm nét văn hóa Phật giáo của người dân vùng sông nước.',
        images: [
          getImgUrl('LongXuyenImgs/ChoNoiLX/cho_noi_1.jpg'),
          getImgUrl('LongXuyenImgs/ChoNoiLX/cho_noi_2.jpg'),
          getImgUrl('LongXuyenImgs/ChoNoiLX/cho_noi_3.jpg'),
        ],
        location: '22 Ngô Thời Nhậm, Thành phố Long Xuyên, tỉnh An Giang',
        video: 'https://www.youtube.com/embed/S_8S3-0W_Kk',
      },
      {
        name: 'Chùa Ông Bắc (Bắc Đế Miếu)',
        description:
          'Chùa Ông Bắc là một trong những địa điểm du lịch Long Xuyên được nhiều du khách ghé tham quan. Chùa có lịch sử lâu đời và thường được biết đến với một tên gọi khác là Quảng Đông tỉnh Hội Quán.',
        images: [
          getImgUrl('LongXuyenImgs/ChuaOngBac/chua_ong_bac_1.jpg'),
          getImgUrl('LongXuyenImgs/ChuaOngBac/chua_ong_bac_2.jpg'),
          getImgUrl('LongXuyenImgs/ChuaOngBac/chua_ong_bac_3.jpg'),
        ],
        location:
          '68 Phạm Hồng Thái, phường Mỹ Long, thành phố Long Xuyên, tỉnh An Giang',
      },
      {
        name: 'Bảo tàng An Giang',
        description:
          'Bảo tàng An Giang là nơi trưng bày hiện vật và các tư liệu lịch sử, văn hóa của tỉnh An Giang.',
        images: [
          getImgUrl('LongXuyenImgs/BaoTangAG/bao_tang_AG_1.jpg'),
          getImgUrl('LongXuyenImgs/BaoTangAG/bao_tang_AG_2.jpg'),
          getImgUrl('LongXuyenImgs/BaoTangAG/bao_tang_AG_3.jpg'),
          getImgUrl('LongXuyenImgs/BaoTangAG/bao_tang_AG_4.jpg'),
          getImgUrl('LongXuyenImgs/BaoTangAG/bao_tang_AG_5.jpg'),
        ],
        location:
          '11 Tôn Đức Thắng, phường Mỹ Bình, thành phố Long Xuyên, tỉnh An Giang.',
      },
    ],
    cuisine: [
      {
        name: 'Bún cá Long Xuyên',
        description:
          'Đặc sản nổi tiếng với nước lèo ngọt, chả cá, bún mềm, thêm bông diêu điền, rau sống.',
        images: [getImgUrl('LongXuyenImgs/Foods/bun_ca_long_xuyen_1.jpg')],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        badge: 'HOT',
      },
      {
        name: 'Cơm tấm Long Xuyên',
        description:
          'Món cơm tấm đặc trưng của vùng Nam bộ, được phục vụ với sườn nướng, bì, chả, trứng và đồ chua.',
        images: [getImgUrl('LongXuyenImgs/Foods/com-tam-LX.jpg')],
      },
    ],
    video: getVideoUrl('Long_Xuyen/gioi-thieu-long-xuyen.mp4'),
  },
  // châu đốc
  {
    id: 'chau-doc',
    name: 'Thành phố Châu Đốc',
    image: getImgUrl('ChauDocImgs/tuong_dai_ca_ba_cd.jpg'),
    description:
      'Thành phố Châu Đốc nằm ven biên giới Việt Nam - Campuchia, nổi tiếng với khu di tích Núi Sam và Miếu Bà Chúa Xứ.',
    attractions: [
      {
        name: 'Tượng phật Thích Ca ngồi thiền cao 81m Núi Sam',
        description:
          'Tượng Phật Thích Ca cao 81m được đặt trên khu đất rộng 5.500m2, với chi phí đầu tư khoảng 255 tỷ đồng. Sau khi hoàn thành, đây là "tượng Phật ngồi thiền, khắc vào vách đá" cao nhất thế giới.',
        images: [
          getImgUrl('ChauDocImgs/tuong-phat-nui-sam.jpg'),
          getImgUrl('ChauDocImgs/tuong-phat-nui-sam-2.png'),
          getImgUrl('ChauDocImgs/tuong-phat-nui-sam-3.jpg'),
          getImgUrl('ChauDocImgs/tuong-phat-nui-sam-4.jpg'),
        ],
        location: '731 Tân Lộ Kiều Lương, phường Núi Sam, Châu Đốc, An Giang',
        video: getVideoUrl('Chau_Doc/gioi-thieu-tuong-phat.mp4'),
        badge: 'HOT Check-in',
      },
      {
        name: 'Núi Sam (Bà Chúa Xứ)',
        description:
          'Khu di tích linh thiêng với Miếu Bà Chúa Xứ nổi tiếng, là điểm hành hương quan trọng của người dân Nam bộ.',
        images: [
          getImgUrl('ChauDocImgs/Chua-Ba-Chau-Doc-An-Giang-1.jpg'),
          getImgUrl('ChauDocImgs/nui_sam_1.jpg'),
          getImgUrl('ChauDocImgs/nui_sam_2.jpg'),
          getImgUrl('ChauDocImgs/nui_sam_3.jpg'),
          getImgUrl('ChauDocImgs/nui-sam-5.jpg'),
          getImgUrl('ChauDocImgs/Nui-Sam-8.jpg'),
          getImgUrl('ChauDocImgs/nui_sam_9.jpg'),
        ],
        location: 'thuộc phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang',
        video: getVideoUrl('Chau_Doc/gioi-thieu-mieu-ba.mp4'),
        badge: 'HOT Check-in',
      },
      {
        name: 'Chùa hang',
        badge: 'HOT Check-in',
        description:
          'Chùa Hang (Phước Điền Tự) tọa lạc trên triền núi Sam, là một trong những địa điểm du lịch Châu Đốc cho tín đồ hành hương đến chiêm bái. Xung quanh ngôi chùa được bao bọc bởi núi non hùng vĩ cùng nhiều loài hoa khoe sắc thắm quanh năm, tạo thành một bức tranh nên thơ cho chùa Hang cổ kính.',
        images: [
          getImgUrl('ChauDocImgs/chua-hang/1.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/2.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/3.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/4.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/5.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/6.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/7.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/8.jpg'),
          getImgUrl('ChauDocImgs/chua-hang/9.jpg'),
        ],
        location: 'phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang',
        video: getVideoUrl('Chau_Doc/chua-hang.mp4'),
      },
      {
        name: 'Chùa Tây An Núi Sam',
        badge: 'HOT Check-in',
        description:
          'Chùa Tây An được Tổ chức Kỷ lục Việt Nam xác nhận là "ngôi chùa có kiến trúc kết hợp phong cách nghệ thuật Ấn Độ và kiến trúc cổ dân tộc đầu tiên tại Việt Nam" vào năm 1980.',
        images: [
          getImgUrl('ChauDocImgs/chua-tay-an/1.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/2.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/3.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/4.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/5.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/6.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/7.jpg'),
          getImgUrl('ChauDocImgs/chua-tay-an/8.jpg'),
        ],
        video: getVideoUrl('Chau_Doc/chua-tay-an.mp4'),
        location: 'Đường Vòng Núi Sam, phường Núi Sam, Châu Đốc, An Giang',
      },   
      {
        name: 'Lăng Thoại Ngọc Hầu',
        badge: 'Di tích lịch sử',
        description:
          'Lăng Thoại Ngọc Hầu hay còn gọi là Sơn Lăng là 1 công trình kiến trúc rất hiếm hoi khi những gì mà chúng đã trải qua bao nhiêu năm lịch sử. Nhưng vẫn còn tồn tại nét văn hóa biểu trưng cho nhà Nguyễn tại mảnh đất phương Nam. Không chỉ là địa du lịch thu hút du khách đến đây để mở mang nét lịch sử văn hóa dân tộc Việt Nam mà đay còn là 1 công trình bề thế và tuyệt mỹ lâu đời.',
        images: [
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/1.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/2.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/3.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/4.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/5.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/6.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/7.jpg'),
          getImgUrl('ChauDocImgs/lang-thoai-ngoc-hau/8.jpg'),
        ],
        video: getVideoUrl('Chau_Doc/lang-thoai-ngoc-hau.mp4'),
        location: 'phường Vĩnh Tế, thành phố Châu Đốc, tỉnh An Giang',
      },   
      {
        name: 'Chợ nổi Châu Đốc',
        description:
          'Khu chợ nổi trên sông, nơi diễn ra các hoạt động giao thương truyền thống của người dân vùng sông nước.',
        images: [getImgUrl('ChauDocImgs/cho-noi-CD.jpg')],
        location: 'P498+86R, Đa Phước, Châu Đốc, An Giang',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Khu du lịch cáp treo Núi Sam',
        description:
          'Khu du lịch cáp treo Núi Sam là hệ thống cáp treo được đầu tư bởi công ty MGA Việt Nam và do các kiến trúc sư Cộng hòa Áo xây dựng. Hệ thống cáp có chiều dài 900m với 37 cabin. Mỗi cabin của khu cáp treo chở được tối đa 8 khách và di chuyển liên tục đưa mọi người lên Núi Sam.',
        images: [getImgUrl('ChauDocImgs/cap-treo-nui-sam.jpg')],
        location:
          'Khóm Vĩnh Tây 3, phường Núi Sam, Thành phố Châu Đốc, tỉnh An Giang.',
      },
      {
        name: 'Chùa Huỳnh Đạo',
        description:
          'Chùa Huỳnh Đạo sở hữu khuôn viên rộng đến 3.000 m2 với hơn 50 bức tượng Phật bằng đá với nhiều tư thế dáng vẻ khác nhau. Trong đó, phải nhắc đến bức tượng Phật bà Quan âm trong tư thế ngồi thiền cao hơn 30 mét, càng tạo thêm vẻ uy nghi, trang trọng cho ngôi chùa.',
        images: [getImgUrl('ChauDocImgs/chua-huynh-dao-chau-doc-1.jpg')],
        location:
          'Quốc lộ 91 Tân Lộ Kiều Lương, Vĩnh Đông 2, Châu Đốc, An Giang',
      },
      {
        name: 'Victoria Núi Sam Lodge',
        description:
          'Tọa lạc trên sườn núi Sam hùng vĩ, Victoria Nui Sam Lodge sở hữu vị trí đắc địa để du khách hòa mình vào thiên nhiên nguyên sơ, hít thở không khí trong lành và tận hưởng những trải nghiệm độc đáo.',
        images: [getImgUrl('ChauDocImgs/victoria-nui-sam.jpg')],
        location: 'Khóm Vĩnh Đông 1 , Phường Núi Sam, Châu Đốc, Tỉnh An Giang',
      },
      {
        name: 'Chùa Long Sơn Núi Sam',
        description:
          'Chùa Long Sơn Núi Sam nằm trên đường lên đỉnh Núi Sam, ngôi chùa là một trong những địa điểm du lịch Châu Đốc.',
        images: [getImgUrl('ChauDocImgs/chua-long-son.jpg')],
        location: 'Xã Vĩnh Phước, Châu Đốc, An Giang',
      },
      {
        name: 'Biệt thự bác sĩ Nu - Địa điểm du lịch Châu Đốc đầy ma mị',
        description:
          'Biệt thự Bác sĩ Nu nằm trên sườn núi Sam, được xây dựng trước năm 1975, ban đầu nơi đây được dùng để nghỉ mát và dưỡng bệnh cho bệnh nhân.',
        images: [getImgUrl('ChauDocImgs/biet-thu-bac-si-Nu.jpg')],
        location: 'phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Lẩu mắm Châu Đốc',
        description:
          'Lẩu mắm là đặc sản Châu Đốc không còn xa lạ với tín đồ du lịch. Nguyên liệu chính để nấu món lẩu này là mắm cá chốt và mắm cá sặc tươi ngon. Nước lẩu mắm thơm nồng, nêm nếm vừa miệng khi kết hợp với các món ăn kèm như chả, thịt heo, hải sản… và đa dạng loại rau đặc trưng của miền Tây mang đến bữa tiệc vị giác đầy ấn tượng.',
        images: [
          getImgUrl('ChauDocImgs/Foods/lau-mam.jpeg'),
        ],
        video: getVideoUrl('Chau_Doc/lau-mam-chau-doc.mp4'),
      },
      {
        name: 'Lẩu cá bông lau',
        description:
          'Đứng đầu trong danh sách đặc sản Châu Đốc là món lẩu cá bông lau ngon trứ danh. Lẩu được nấu bằng nước dừa tươi và me nên có vị chua thanh hấp dẫn. Khi ăn thêm vào đó cá bông lau chiên giòn và các loại rau đặc trưng của miền Tây như dừa nước, rau đắng, bông so đũa… Thịt cá bông lau ngon ngọt, có độ béo nhẹ hòa quyện cùng nước lẩu chua chua, chấm nước mắm ớt thì còn gì bằng.',
        images: [
          getImgUrl('ChauDocImgs/Foods/lau-ca-bong-lau.jpeg'),
        ],
      },
      {
        name: 'Cá lóc nướng trui',
        description:
          'Miền Tây nổi tiếng với đa dạng món cuốn độc đáo. Châu Đốc cũng không ngoại lệ khi có món cá lóc nướng trui cuốn bánh tráng khiến ai từng thử qua đều thích mê. Sau khi chọn được cá lóc đồng ưng ý, người địa phương sẽ sơ chế sạch sẽ rồi mang đi nước trui. Cá khi chín có thịt trắng, dậy hương thơm lừng, ăn kèm với bánh tráng, bún tươi và các loại rau thơm để làm nổi bật lên hương vị.',
        images: [
          getImgUrl('ChauDocImgs/Foods/ca-loc-nuong-chui.jpeg'),
        ],
      },
      {
        name: 'Bò bảy món Núi Sam',
        description:
          'Bò bảy món núi Sam là món ngon làm nên tên tuổi ẩm thực Châu Đốc. Đúng như cái tên, món ăn gồm 7 món khác nhau làm từ loại thịt bò ngon nhất vùng Thất Sơn. Đó là bò xào lá giang, lòng bò luộc, bò khìa bánh mì, bò bít tết, bò lúc lắc và cháo bò. Thông thường, người địa phương ít khi mua bò theo kg để chế biến mà sử dụng cả một con bò. Đó là lý do món ăn sở hữu hương vị thơm ngon, hội tụ tất cả tinh túy của giống bò nổi tiếng.',
        images: [
          getImgUrl('ChauDocImgs/Foods/bo-7-mon-nui-sam.jpeg'),
        ],
      },
      {
        name: 'Gỏi bưởi khô cá lóc',
        description:
          'Nếu đã quá quen với gỏi rau củ, MIA.vn mách bạn đổi gió với món gỏi bưởi khô cá lóc dễ ăn, dễ làm. Sau khi mua khô cá lóc về chỉ cần nướng lên, xé theo từng thớ nhỏ rồi trộn với tép bưởi và các loại rau thơm bằng nước mắm tỏi ớt. Ấy vậy là đã có ngay món ăn quen thuộc, bình dị mà thơm ngon khó cưỡng của người Châu Đốc - An Giang.',
        images: [
          getImgUrl('ChauDocImgs/Foods/goi-buoi-kho-ca-loc.jpeg'),
        ],
      },
      {
        name: 'Bún cá Châu Đốc',
        description:
          'Bún cá Châu Đốc còn được biết đến với tên gọi khác là bún nước lèo. Món bún có phần nước ninh từ xương heo, thịt cá lóc xào nghệ, các loại mắm cá linh, mắm ruốc và cuối cùng là tôm khô. Được tạo nên từ nguyên liệu đặc trưng của miền Tây nước lèo ăn vào cảm nhận được độ ngọt thanh, thơm nồng vị mắm và mang sắc vàng nghệ bắt mắt. Hương vị món bún càng thêm tròn đầy khi có một đĩa đầy đủ các loại rau đắng, rau nhút, bông điên điển, bắp chuối… và bát nước mắm hoặc muối ớt nhỏ để chấm thịt cá tươi ngon.',
        images: [
          getImgUrl('ChauDocImgs/Foods/bun-ca-chau-doc.jpeg'),
        ],
      },
      {
        name: 'Mắm đặc sản Châu Đốc',
        description:
          'Châu Đốc - An Giang là vùng đất có sản lượng cá tôm dồi dào, do đó để bảo quản được lâu hơn, người dân địa phương đã sáng tạo nên món mắm với hương vị thơm nồng hấp dẫn. Mắm ở đây có đủ loại từ mắm cá, tôm, ba khía đến mắm đu đủ. Món ăn dân dã này có thể thưởng thức theo nhiều cách khác nhau như ăn tươi, làm mắm chưng, chiên, kho, nấu lẩu hay bún nước lèo. Mắm Châu Đốc ngon nhất khi ăn kèm rau sống tươi xanh, ngon ngọt.',
        images: [
          getImgUrl('ChauDocImgs/Foods/mam-dac-san-chau-doc.jpeg'),
        ],
      },
      {
        name: 'Khô',
        description:
          'Dạo quanh chợ Châu Đốc, bên cạnh đủ loại mắm, bạn còn dễ dàng bắt gặp các hàng khô thơm ngon. Khô Châu Đốc có nhiều loại, chủ yếu là khô bò và khô cá. Mỗi loại mang hương vị đặc trưng riêng biệt, tùy theo khẩu vị của người ăn. Món khô bảo quản được lâu, do đó có thể mua về làm quà du lịch. Vào những ngày mưa rả rích, còn gì bằng nhâm nhi món khô dai giòn với chút bia tươi.',
        images: [
          getImgUrl('ChauDocImgs/Foods/kho-chau-doc.jpeg'),
        ],
      },
      {
        name: 'Tung lò mò',
        description:
          'Tung lò mò hay lạp xưởng bò là đặc sản nổi tiếng của dân tộc Chăm. Khác với các loại lạp xưởng thông thường, tung lò mò được chế biến hoàn toàn bằng thịt bò, sở hữu hương vị độc đáo. Món này dù chiên bằng nước hay nướng than hoa đều dai giòn, thơm ngon, hợp khẩu vị của nhiều người.',
        images: [
          getImgUrl('ChauDocImgs/Foods/tung-lo-mo.jpeg'),
        ],
      },
    ],
    video: getVideoUrl('Chau_Doc/mot_ngay_o_chau_doc.mp4'),
  },
  // tân châu
  {
    id: 'tan-chau',
    name: 'Thị xã Tân Châu',
    image: getImgUrl('TanChauImgs/tan-chau-banner-2.jpg'),
    description:
      'Thị xã Tân Châu nằm ở phía bắc tỉnh An Giang, giáp với Campuchia, nổi tiếng với nghề dệt lụa Tân Châu và các di tích lịch sử.',
    attractions: [
      {
        name: 'Chùa núi nổi',
        description:
          'Chùa Núi Nổi (tên chữ là Phù Sơn Tự) là một ngôi chùa độc đáo tọa lạc tại ấp Núi Nổi, xã Tân Thạnh, thị xã Tân Châu, tỉnh An Giang. Ngôi chùa này nổi tiếng với vị trí nằm trên ngọn núi "thấp nhất Việt Nam" và hiện tượng thiên nhiên kỳ thú khi mùa nước nổi về.',
        images: [
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_1.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_2.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_3.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_4.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_5.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_6.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_7.jpg'),
          getImgUrl('TanChauImgs/Chua_nui_noi/chua_nui_noi_8.jpg'),
        ],
        location: 'ấp Núi Nổi, xã Tân Thạnh, thị xã Tân Châu, tỉnh An Giang',
        video: getVideoUrl('Tan_Chau/gioi-thieu-chua-nui-noi.mp4'),
      },
      {
        name: 'Làng Chăm Châu Giang',
        description:
          'Ngôi làng người Chăm Châu Giang là điểm tham quan mà hội xê dịch muốn khám phá nét đẹp văn hóa độc đáo xứ này không thể bỏ qua trong hành trình du lịch miền đất Tây Nam. Tọa lạc tại xã Châu Phong, thị trấn Tân Châu, Làng Chăm Châu Giang nổi bật với tín ngưỡng Hồi giáo, tập tục ở nhà sàn và nghề dệt thổ cẩm lưu truyền qua nhiều thế hệ. Dừng chân nơi đây, bạn không chỉ có cơ hội hiểu thêm về đời sống vật chất lẫn tinh thần của người dân địa phương mà còn có thể rời xa phố thị đông đúc và sống chậm lại từng phút giây cùng ngôi làng yên bình, hiền hòa.',
        images: [
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-1.jpeg'),
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-2.jpg'),
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-3.jpg'),
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-4.jpg'),
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-5.jpg'),
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-6.jpg'),
          getImgUrl('TanChauImgs/Lang_cham/lang-cham-7.jpg'),
        ],
        location:
          'xã Châu Phong, thị trấn Tân Châu, huyện Tân Châu, tỉnh An Giang',
        video: getVideoUrl('Tan_Chau/gioi-thieu-lang-cham.mp4'),
      },
      {
        name: 'Núi Đèn',
        description:
          'Ngọn núi nhỏ với cảnh quan thiên nhiên đẹp và có giá trị về mặt văn hóa tín ngưỡng.',
        images: ['https://nld.mediacdn.vn/2017/photo-1-1491822028206.jpg'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Khu đồi cát ven biên',
        description:
          'Khu vực đồi cát ven biên giới với cảnh quan đặc trưng của vùng.',
        images: [
          'https://dulichkhampha24.com/wp-content/uploads/2019/12/doi-cat-bay-mui-ne-2.jpg',
        ],
      },
    ],
    cuisine: [
      {
        name: 'Bún cá Tân Châu',
        description:
          'Món bún cá tương tự Long Xuyên nhưng có hương vị riêng của vùng Tân Châu.',
        images: [
          'https://thucthan.com/media/2018/06/bun-ca-long-xuyen/bun-ca-long-xuyen.jpg',
        ],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        name: 'Bánh bò thốt nốt',
        description:
          'Bánh bò được làm từ đường thốt nốt, đặc sản của vùng Bảy Núi.',
        images: [
          'https://cdn.tgdd.vn/Files/2021/08/11/1373699/cach-lam-banh-bo-thot-not-mem-ngot-thom-mui-la-dua-202108111431366402.jpg',
        ],
      },
      {
        name: 'Thạch thốt nốt',
        description:
          'Món tráng miệng làm từ đường thốt nốt đặc trưng của vùng Bảy Núi An Giang.',
        images: ['https://i.ytimg.com/vi/Hx-PwK3oras/maxresdefault.jpg'],
      },
    ],
    video: getVideoUrl('Tan_Chau/gioi-thieu-tan-chau.mp4'),
  },
  // tịnh biên
  {
    id: 'tinh-bien',
    name: 'Thị xã Tịnh Biên',
    image: getImgUrl('TinhBienImgs/tinh_bien_1.jpg'),
    description:
      'Thị xã Tịnh Biên nằm ở phía Tây của tỉnh An Giang, giáp với Campuchia và huyện Tri Tôn, nổi tiếng với chợ biên giới và cảnh quan thiên nhiên.',
    attractions: [
      // núi cấm
      {
        name: 'Núi Cấm (Thiên Cấm Sơn)',
        badge: 'HOT Check-in',
        description:
          'Núi Cấm (Thiên Cấm Sơn) tọa lạc tại xã An Hảo, thị xã Tịnh Biên, tỉnh An Giang, là ngọn núi cao nhất (705m-710m) và hùng vĩ nhất trong dãy Thất Sơn. Được mệnh danh là "nóc nhà miền Tây", nơi đây nổi tiếng với cảnh quan thiên nhiên hoang sơ, khí hậu mát mẻ quanh năm, cùng các điểm du lịch tâm linh đặc sắc như Chùa Vạn Linh, Phật Lớn, tượng Phật Di Lặc, và hồ Thủy Liêm',
        images: [
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-1.jpg'),
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-2.jpg'),
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-3.jpg'),
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-4.jpg'),
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-5.jpg'),
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-6.jpg'),
          getImgUrl('TinhBienImgs/Nui_cam/nui-cam-7.jpg'),
        ],
        location: 'Khu du lịch Núi Cấm, An Hòa, Tịnh Biên, An Giang',
        video: 'https://www.youtube.com/embed/9XvYfS2-q-0', 
      },
      // Chùa Kim Tiên
      {
        name: 'Chùa Kim Tiên',
        badge: 'HOT Check-in',
        description:
          'Chùa Kim Tiên được mệnh danh là một trong các ngôi chùa có lối kiến trúc đẹp và hoành tráng nhất tỉnh An Giang. Chùa có không gian thanh tịnh, cổ kính cùng nhiều bức tượng Phật uy nghiêm to lớn. Mặc dù chỉ mới được xây dựng cách đây không lâu nhưng chùa Kim Tiên đã thu hút rất đông đảo du khách thập phương ghé thăm mỗi năm.',
        images: [
          getImgUrl('TinhBienImgs/chua-kim-tien/1.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/2.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/3.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/4.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/5.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/6.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/7.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/8.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/9.jpg'),
          getImgUrl('TinhBienImgs/chua-kim-tien/10.jpg'),
        ],
        location: 'xã An Phú, thị trấn Nhà Bàng, huyện Tịnh Biên, tỉnh An Giang',
        video: getVideoUrl('Tinh_Bien/chua-kim-tien.mp4'),
      },
      // Chùa Lầu - Phước Lâm Tự
      {
        name: 'Chùa Lầu - Phước Lâm Tự',
        badge: 'HOT Check-in',
        description:
          'Chùa Lầu, hay còn gọi là chùa Phước Lâm (Phước Lâm Tự chùa Lầu), là một địa danh độc đáo và lý tưởng cho những ai muốn khám phá vẻ đẹp tâm linh và nghệ thuật kiến trúc ở An Giang. Điểm độc đáo của ngôi chùa này là thiết kế vượt ra ngoài quy chuẩn kiến trúc đền chùa truyền thống Việt Nam. Chùa Lầu nổi bật với những tầng lầu độc đáo, trang trí tinh xảo, và màu sắc rực rỡ.',
        images: [
          getImgUrl('TinhBienImgs/chua-lau/1.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/2.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/3.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/4.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/5.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/6.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/7.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/8.jpg'),
          getImgUrl('TinhBienImgs/chua-lau/9.jpg'),
        ],
        location: 'Khóm Xuân Phú, thị trấn Tịnh Biên, huyện Tịnh Biên, An Giang',
        video: getVideoUrl('Tinh_Bien/chua-lau.mp4'),
      },
      // chùa bánh xèo
      {
        name: 'Chùa Bánh Xèo (Thiền viện Đông Lai)',
        badge: 'HOT Check-in',
        description:
          'Chùa Bánh Xèo còn được biết đến với tên gọi là Thiền viện Đông Lai hay Chùa Phật Nằm. Ngôi cổ tự này tọa lạc tại địa phận khóm Xuân Phú, thị trấn Tịnh Biên, huyện Tịnh Biên, tỉnh An Giang. Sở dĩ cái tên Chùa Bánh Xèo (Thiền viện Đông Lai) trở nên nổi tiếng là vì mỗi ngày tại đây đều phục vụ cho mọi người đến thăm chùa hàng nghìn chiếc bánh xèo chay miễn phí.',
        images: [
          getImgUrl('TinhBienImgs/Chua_banh_xeo/chua_banh_xeo_1.jpeg'),
          getImgUrl('TinhBienImgs/Chua_banh_xeo/chua_banh_xeo_2.jpeg'),
          getImgUrl('TinhBienImgs/Chua_banh_xeo/chua_banh_xeo_3.jpeg'),
          getImgUrl('TinhBienImgs/Chua_banh_xeo/chua_banh_xeo_4.jpeg'),
          getImgUrl('TinhBienImgs/Chua_banh_xeo/chua_banh_xeo_5.jpeg'),
          getImgUrl('TinhBienImgs/Chua_banh_xeo/chua_banh_xeo_6.jpg'),
        ],
        location: 'Khu du lịch Núi Dài, Tịnh Biên, An Giang',
        video: getVideoUrl('Tinh_Bien/chua-banh-xeo.mp4'),
      },
      // Miếu Bà Chúa Xứ Bàu Mướp
      {
        name: 'Miếu Bà Chúa Xứ Bàu Mướp',
        badge: 'HOT Check-in',
        description:
          'Bên cạnh Miếu Bà Chúa Xứ Núi Sam Châu Đốc vốn nổi tiếng gần xa, du lịch An Giang còn có một địa danh có tín ngưỡng thờ Bà được người dân nô nức đến đây thăm viếng. Đó chính là Miếu Bà Chúa Xứ Bàu Mướp Tịnh Biên. ',
        images: [
          getImgUrl('TinhBienImgs/mieu-ba-chua-xu-bau-muop/1.jpg'),
          getImgUrl('TinhBienImgs/mieu-ba-chua-xu-bau-muop/2.jpg'),
          getImgUrl('TinhBienImgs/mieu-ba-chua-xu-bau-muop/3.jpg'),
          getImgUrl('TinhBienImgs/mieu-ba-chua-xu-bau-muop/4.jpg'),
          getImgUrl('TinhBienImgs/mieu-ba-chua-xu-bau-muop/5.jpg'),
          getImgUrl('TinhBienImgs/mieu-ba-chua-xu-bau-muop/6.jpg'),
        ],
        location: 'khóm Sơn Đông, thị trấn Nhà Bàng, huyện Tịnh Biên, tỉnh An Giang',
        video: getVideoUrl('Tinh_Bien/mieu-ba-chua-xu-bau-muop.mp4'),
      },
      // Núi ông két
      {
        name: 'Núi két - Anh Vũ Sơn',
        badge: 'HOT Check-in',
        description:
          'Núi Két còn được gọi theo tên chữ là Anh Vũ Sơn, hay dân gian quen gọi là núi Ông Két, là một trong những ngọn núi thuộc dãy Thất Sơn (Bảy Núi). Núi tọa lạc tại phường Thới Sơn, tỉnh An Giang (trước đây thuộc thị xã Tịnh Biên). Dù không cao lớn hay hùng vĩ như núi Cấm, núi Dài hay núi Cô Tô, nhưng núi Ông Két ở An Giang vẫn mang trong mình vẻ đẹp riêng biệt, mộc mạc và đầy cuốn hút.',
        images: [
          getImgUrl('TinhBienImgs/nui-ong-ket/1.jpg'),
          getImgUrl('TinhBienImgs/nui-ong-ket/2.jpg'),
          getImgUrl('TinhBienImgs/nui-ong-ket/3.jpg'),
          getImgUrl('TinhBienImgs/nui-ong-ket/4.jpg'),
          getImgUrl('TinhBienImgs/nui-ong-ket/5.jpg'),
        ],
        location: 'phường Thới Sơn, thị xã Tịnh Biên, tỉnh An Giang',
        video: getVideoUrl('Tinh_Bien/nui-ong-ket.mp4'),
      },
      // chợ tịnh biên
      {
        name: 'Chợ Tịnh Biên',
        description:
          'Chợ Tịnh Biên là một trong những khu chợ đầu mối sầm uất nhất vùng Đồng bằng sông Cửu Long. Với vị trí đặc biệt cách cửa khẩu quốc tế Tịnh Biên – Phnom Den (Campuchia) chỉ khoảng 2km, chợ Tịnh Biên An Giang từ lâu đã trở thành điểm giao thương nhộn nhịp giữa Việt Nam và Campuchia.',
        images: [getImgUrl('TinhBienImgs/cho-tinh-bien-1.jpg')],
        location:
          '350 khóm Xuân Hòa, thị trấn Tịnh Biên, huyện Tịnh Biên, An Giang',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      // núi dài
      {
        name: 'Núi dài (Ngọa Long Sơn)',
        description:
          'Cái tên “Núi Dài” bắt nguồn từ dáng hình đặc trưng của ngọn núi, trải dài như một dải lụa mềm mại, ôm trọn vùng đất Tịnh Biên trù phú. Núi dài là núi dài nhất trong vùng Thất Sơn (Bảy Núi) An Giang.',
        images: [
          getImgUrl('TinhBienImgs/Nui_dai/nui-dai-1.jpg'),
          getImgUrl('TinhBienImgs/Nui_dai/nui-dai-2.jpg'),
          getImgUrl('TinhBienImgs/Nui_dai/nui-dai-3.jpg'),
          getImgUrl('TinhBienImgs/Nui_dai/nui-dai-4.jpg'),
        ],
        location: 'Khu du lịch Núi Dài, Tịnh Biên, An Giang',
      },
      
    ],
    cuisine: [
      {
        name: 'Bò cạp Bảy Núi',
        description:
          'Đặc sản côn trùng chỉ có ở khu vực Bảy Núi, được chế biến theo nhiều cách khác nhau.',
        images: [
          'https://statics.vinpearl.com/bo-cap-xao-la-me-3_1630904643.jpg',
        ],
      },
    ],
    video: getVideoUrl('Tinh_Bien/dia_diem_di_choi_tinh_bien.mp4'),
  },
  // an phú
  {
    id: 'an-phu',
    name: 'Huyện An Phú',
    image: getImgUrl('AnPhuImgs/an_phu_1.jpg'),
    description:
      'Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.',
    attractions: [
      {
        name: 'Vúng Bình Thiên (Hồ Gương Trời)',
        description:
          'Búng Bình Thiên là hồ nước ngọt tự nhiên lớn nhất miền Tây, nằm sát biên giới Campuchia. Mặt hồ phẳng lặng, trong xanh, là nơi sinh sống của cộng đồng người Chăm với những nét văn hóa đặc sắc.',
        images: [
          'https://vcdn1-dulich.vnecdn.net/2022/08/23/bung-binh-thien-an-giang-1-1661245089.jpg',
        ],
      },
      {
        name: 'Du lịch homestay Đa Phước',
        description:
          'Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.',
        images: [
          'https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg',
        ],
      },
    ],
    cuisine: [
      {
        name: 'Đường thốt nốt',
        description:
          'Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.',
        images: [
          'https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg',
        ],
      },
      {
        name: 'Nước thốt nốt',
        description:
          'Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.',
        images: [
          'https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg',
        ],
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // châu phú
  {
    id: 'chau-phu',
    name: 'Huyện Châu Phú',
    image: getImgUrl('ChauPhuImgs/Tran-Van-Thanh.jpg'),
    description:
      'Huyện Châu Phú nằm ở trung tâm tỉnh An Giang, bên bờ sông Hậu. Đây là vùng đất giàu truyền thống lịch sử với phong trào kháng chiến Bảy Thưa và các di tích kiến trúc nghệ thuật cấp quốc gia.',
    attractions: [
      {
        name: 'Di tích Quản cơ Trần Văn Thành',
        description:
          'Địa chỉ lịch sử - tâm linh quan trọng, gắn liền với thủ lĩnh cuộc khởi nghĩa Bảy Thưa chống Pháp vào cuối thế kỷ XIX.',
        images: [getImgUrl('ChauPhuImgs/Tran-Van-Thanh.jpg')],
        location: 'Xã Thạnh Mỹ Tây, huyện Châu Phú, tỉnh An Giang',
      },
      {
        name: 'Đình thần Bình Mỹ',
        description:
          'Ngôi đình cổ với kiến trúc nghệ thuật độc đáo, được công nhận là Di tích lịch sử - văn hóa cấp quốc gia, mang đậm dấu ấn Á Đông.',
        images: [
          'https://baoangiang.com.vn/image/f_600/res/2015/05/23/16/e06b72d2be.jpg',
        ],
        location: 'Xã Bình Mỹ, huyện Châu Phú, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Bún cá Châu Phú',
        description:
          'Món ăn dân dã với nước dùng thơm mùi sả và nghệ, cá lóc tươi ngon, ăn kèm với rau nhút và bông điên điển.',
        images: [
          'https://cdn.tgdd.vn/Files/2021/11/17/1398579/cach-nau-bun-ca-chau-doc-an-giang-chuan-vi-thom-ngon-hap-dan-202111171701387661.jpg',
        ],
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // châu thành
  {
    id: 'chau-thanh',
    name: 'Huyện Châu Thành',
    image: getImgUrl('ChauThanhImgs/chau-thanh-banner.jpg'),
    description:
      'Huyện Châu Thành là cửa ngõ phía Tây Bắc của TP. Long Xuyên, nổi tiếng với các di tích lịch sử như Đình Sơn Trung và các làng nghề truyền thống làm lợp lươn, rập chuột.',
    attractions: [
      {
        name: 'Nhà thờ Năng Gù',
        description:
          'Ban đầu (có thể là trước năm 1859), nhà thờ Năng Gù được cất đơn sơ bằng cây lá trên một nền đất. Về sau, nhà thờ này được lợp ngói, xây tường, lót gạch tàu và trải đệm. Nhà thờ Năng Gù hiện nay do Cha sở Ulterleiner cho khởi công xây dựng, theo sơ đồ của Đức Cha Hergott (lúc đó là Bề trên giáo phận Nam Vang), kiểu Gothique, dài 55 m, ngang 19 m, với trần cao 15 m, và tháp chuông cao 25 m.',
        images: [
          getImgUrl('ChauThanhImgs/nha-tho-nang-gu/1.jpg'),
          getImgUrl('ChauThanhImgs/nha-tho-nang-gu/2.jpg'),
          getImgUrl('ChauThanhImgs/nha-tho-nang-gu/3.jpg'),
          getImgUrl('ChauThanhImgs/nha-tho-nang-gu/4.jpg'),
          getImgUrl('ChauThanhImgs/nha-tho-nang-gu/5.jpg'),
        ],
        location: 'ấp Bình An 2, xã An Hòa, huyện Châu Thành, tỉnh An Giang',
        video: getVideoUrl('Chau_Thanh/nha_tho_nang_gu.mp4'),
      },
      {
        name: 'Dinh Sơn Trung',
        description:
          'Dinh Sơn Trung di tích nằm giữa cánh đồng lúa với vẻ đẹp thơ mộng của đồng quê tại xã Vĩnh An (Châu Thành). Đây là nơi thờ cúng, tưởng nhớ công lao của Quản Cơ Trần Văn Thành, người đã lãnh đạo cuộc khởi nghĩa Láng Linh - Bảy Thưa (1867-1873), chống thực dân Pháp.',
        images: [
          getImgUrl('ChauThanhImgs/dinh-son-trung/1.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/2.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/3.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/4.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/5.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/6.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/7.jpg'),
          getImgUrl('ChauThanhImgs/dinh-son-trung/8.jpg'),
        ],
        location: 'ấp Vĩnh Quới, xã Vĩnh An, huyện Châu Thành, An Giang',
        video: getVideoUrl('Chau_Thanh/dinh_son_trung.mp4'),
        badge: 'HOT',
      },
      {
        name: 'Chùa Nam An',
        description:
          'Chùa Nam An là một trong những ngôi chùa nổi tiếng tại An Giang, nằm tại xã An Hòa, huyện Châu Thành. Chùa được xây dựng từ thế kỷ 19, là nơi linh thiêng được nhiều người dân địa phương và du khách tin ngưỡng và thường xuyên đến thăm. Chùa Nam An còn có một số lễ hội truyền thống được tổ chức hàng năm như lễ hội đền Cô Giang, lễ hội hóa đơn, lễ hội quốc đản… Những lễ hội này thu hút đông đảo du khách đến tham dự và khám phá văn hóa tâm linh độc đáo của địa phương.',
        images: [
          getImgUrl('ChauThanhImgs/chua-nam-an/1.jpg'),
          getImgUrl('ChauThanhImgs/chua-nam-an/2.jpg'),
          getImgUrl('ChauThanhImgs/chua-nam-an/3.jpg'),
        ],
        location: 'An Hòa, Châu Thành, An Giang, Việt Nam',
        video: getVideoUrl('Chau_Thanh/chua_nam_an.mp4'),
      },
    ],
    cuisine: [
      {
        name: 'Cá lóc quay',
        description:
          'Món cá lóc được quay vàng ươm, lớp da giòn rụm, thịt bên trong ngọt lịm, ăn kèm với bánh hỏi và rau sống.',
        images: [
          'https://cdn.tgdd.vn/Files/2020/06/03/1260486/cach-lam-ca-loc-nuong-trui-thom-ngon-dan-da-dung-chuan-mien-tay-202206031025590924.jpg',
        ],
      },
    ],
    video: getVideoUrl('Chau_Thanh/gioi_thieu.mp4'),
  },
  // phú tân
  {
    id: 'phu-tan',
    name: 'Huyện Phú Tân',
    image: getImgUrl('PhuTanImgs/phu-tan-banner-2.png'),
    description:
      'Phú Tân là huyện cù lao nằm giữa dòng sông Tiền và sông Hậu, là cái nôi của Phật giáo Hòa Hảo và nổi tiếng với các làng nghề bánh phồng, làng rèn.',
    attractions: [
      {
        name: 'Vàm Nao',
        description:
          'Nơi giao thoa giữa sông Tiền và sông Hậu, nổi tiếng với hệ sinh thái sông nước phong phú và mùa săn cá bông lau đặc thù.',
        images: [
          'https://baoangiang.com.vn/image/f_600/res/2023/12/15/22/011bf4c860.jpg',
        ],
        location: 'Huyện Phú Tân, tỉnh An Giang',
      },
      {
        name: 'An Hòa Tự',
        description:
          'Ngôi chùa cổ linh thiêng, gắn liền với sự ra đời của Phật giáo Hòa Hảo, thu hút hàng triệu lượt khách hành hương mỗi năm.',
        images: [
          'https://vntrip.vnecdn.net/media/cam-nang/wp-content/uploads/2017/12/an-hoa-tu-1.jpg',
        ],
        location: 'Thị trấn Phú Mỹ, huyện Phú Tân, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Bánh phồng Phú Mỹ',
        description:
          'Đặc sản làng nghề truyền thống Phú Mỹ, bánh giòn béo, thơm mùi nếp và nước cốt dừa.',
        images: [
          'https://cdn.tgdd.vn/Files/2021/08/11/1374523/cach-lam-banh-phong-nep-nuong-phong-ngon-don-gian-tai-nha-202108111617414845.jpg',
        ],
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // thoại sơn
  {
    id: 'thoai-son',
    name: 'Huyện Thoại Sơn',
    image: getImgUrl('ThoaiSonImgs/thoai-son-banner-2.png'),
    description:
      'Huyện Thoại Sơn nằm ở phía nam tỉnh An Giang, nổi tiếng với danh thắng Núi Sập, di chỉ khảo cổ Óc Eo và công trình bia Thoại Sơn ghi dấu công trạng của danh thần Thoại Ngọc Hầu.',
    attractions: [
      {
        name: 'Thiền viện Trúc Lâm An Giang',
        badge: 'HOT Check-in',
        description:
          'Thiền viện Trúc Lâm An Giang tọa lạc ở Khu du lịch lòng hồ số 2 thuộc ấp Đông Sơn 1, thị trấn Núi Sập, Thoại Sơn. Nơi đây được xây dựng trên diện tích gần 15 hecta với 18 hạng mục bằng nguồn kinh phí xã hội hóa. Bên cạnh Đình Vĩnh Ngươn, Thiền viện Trúc Lâm An Giang cũng được xem là một biểu tượng thể hiện tự do tín ngưỡng của người dân địa phương.  ',
        images: [
          getImgUrl('ThoaiSonImgs/thien-vien-truc-lam/1.jpg'),
          getImgUrl('ThoaiSonImgs/thien-vien-truc-lam/2.jpg'),
          getImgUrl('ThoaiSonImgs/thien-vien-truc-lam/3.jpg'),
          getImgUrl('ThoaiSonImgs/thien-vien-truc-lam/4.jpg'),
          getImgUrl('ThoaiSonImgs/thien-vien-truc-lam/5.jpg'),
          getImgUrl('ThoaiSonImgs/thien-vien-truc-lam/6.jpg'),
        ],
        location: 'ấp Đông Sơn 1, thị trấn Núi Sập, Thoại Sơn',
        video: getVideoUrl('Thoai_Son/thien-vien-truc-lam.mp4'),
      },
      {
        name: 'Núi Ba Thê',
        description:
          'Núi Ba Thê (thị trấn Óc Eo, huyện Thoại Sơn, An Giang) cao 221m, nổi bật giữa đồng bằng Tứ giác Long Xuyên. Đây là di tích quốc gia đặc biệt, tâm điểm của nền văn hóa Óc Eo cổ đại. Nơi đây nổi tiếng với phong cảnh hùng vĩ, Sơn Tiên Tự, Thạch Đại Đao và Linh Sơn Cổ Tự.',
        images: [
          getImgUrl('ThoaiSonImgs/nui-ba-the/1.jpg'),
          getImgUrl('ThoaiSonImgs/nui-ba-the/2.jpg'),
          getImgUrl('ThoaiSonImgs/nui-ba-the/3.jpg'),
          getImgUrl('ThoaiSonImgs/nui-ba-the/4.jpg'),
          getImgUrl('ThoaiSonImgs/nui-ba-the/5.jpg'),
        ],
        video: getVideoUrl('Thoai_Son/nui-ba-the.mp4'),
        location: 'Thị trấn Óc Eo, huyện Thoại Sơn, tỉnh An Giang',
      },
      {
        name: 'Óc Eo',
        badge: 'Di tích lịch sử',
        description:
          'Khu di tích quốc gia đặc biệt Óc Eo - Ba Thê nằm tại thị trấn Óc Eo, huyện Thoại Sơn, tỉnh An Giang, là trung tâm đô thị - cảng thị rực rỡ của văn hóa Óc Eo (thế kỷ I - VII) thuộc vương quốc Phù Nam xưa. Với quy mô 433,2 ha bao gồm sườn núi Ba Thê và cánh đồng Óc Eo, nơi đây nổi bật với các kiến trúc gạch cổ, hệ thống kênh rạch, và các di vật thủ công/tôn giáo độc đáo, minh chứng cho sự giao thương Đông - Tây sầm uất',
        images: [
          getImgUrl('ThoaiSonImgs/oc-eo/1.jpg'),
          getImgUrl('ThoaiSonImgs/oc-eo/2.jpg'),
          getImgUrl('ThoaiSonImgs/oc-eo/3.jpg'),
          getImgUrl('ThoaiSonImgs/oc-eo/4.jpg'),
          getImgUrl('ThoaiSonImgs/oc-eo/5.jpg'),
          getImgUrl('ThoaiSonImgs/oc-eo/6.jpg'),
          getImgUrl('ThoaiSonImgs/oc-eo/7.jpg'),
        ],
        video: getVideoUrl('Thoai_Son/oc-eo.mp4'),
        location: 'Thị trấn Óc Eo, huyện Thoại Sơn, tỉnh An Giang',
      },
      {
        name: 'Thạch đại đao - Núi Ba Thê',
        badge: 'Di tích lịch sử',
        description:
          'Thạch Đại Đao tọa lạc trên đỉnh núi Ba Thê, thuộc thị trấn Óc Eo, huyện Thoại Sơn, tỉnh An Giang. Đây là một trong những ngọn núi nổi bật của vùng đồng bằng sông Cửu Long, nơi du khách có thể vừa thưởng ngoạn cảnh quan thiên nhiên vừa tìm hiểu những giá trị lịch sử lâu đời.',
        images: [
          getImgUrl('ThoaiSonImgs/thach-dai-dao/1.jpg'),
          getImgUrl('ThoaiSonImgs/thach-dai-dao/2.jpg'),
          getImgUrl('ThoaiSonImgs/thach-dai-dao/3.jpg'),
          getImgUrl('ThoaiSonImgs/thach-dai-dao/4.jpg'),
        ],
        video: getVideoUrl('Thoai_Son/thach-dai-dao.mp4'),
        location: 'Thị trấn Óc Eo, huyện Thoại Sơn, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Bún cá Thoại Sơn',
        description:
          'Món bún cá đậm đà với cá lóc đồng, nghệ vàng và nước lèo ngọt thanh từ xương.',
        images: [
          'https://cdn.tgdd.vn/Files/2021/11/17/1398579/cach-nau-bun-ca-chau-doc-an-giang-chuan-vi-thom-ngon-hap-dan-202111171701387661.jpg',
        ],
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // tri tôn
  {
    id: 'tri-ton',
    name: 'Huyện Tri Tôn',
    image: getImgUrl('TriTonImgs/tri_ton_1.jpg'),
    description:
      'Huyện Tri Tôn nằm ở phía Tây của tỉnh An Giang, giáp với Tịnh Biên và Thoại Sơn, là nơi có cụm núi Thất Sơn nổi tiếng với phong cảnh hùng vĩ và nhiều di tích văn hóa lịch sử.',
    attractions: [
      // Chùa Koh Kas (Cổng trời Tri Tôn)
      {
        name: 'Chùa Koh Kas (Cổng trời Tri Tôn)',
        description:
          'Cổng trời Tri Tôn còn được biết đến với tên gọi cổng chùa Koh Kas, nằm tại xã Tri Tôn (trước kia là xã Châu Lăng, Tri Tôn), tỉnh An Giang. Cánh cổng nổi bật giữa nền trời trong xanh, tọa lạc dưới chân núi Dài hùng vĩ, với ba tháp nhỏ trên đỉnh được nâng đỡ bởi bốn trụ bê tông kiên cố. Nhờ vẻ đẹp độc đáo và vị trí ấn tượng, nơi đây được du khách ưu ái gọi là “cổng trời An Giang”. Đây cũng là điểm check-in lý tưởng mà những tín đồ du lịch không nên bỏ lỡ khi đến với vùng đất Tri Tôn.',
        images: [getImgUrl('TriTonImgs/cong-troi-tri-ton-7.jpg')],
        location: 'xã Châu Lăng, huyện Tri Tôn, tỉnh An Giang',
        video: getVideoUrl('Tri_Ton/gioi-thieu-cong-troi.mp4'),
        badge: 'Hot Check-in',
      },
      // Chùa Tà Pạ
      {
        name: 'Chùa Tà Pạ',
        description:
          'Chùa Tà Pạ còn có tên khác là Chùa Núi hay Chùa Chưn - Num theo cách gọi của người Khmer. Chùa theo phái Nam tông hệ của Phật giáo tiểu thừa đặc trưng của văn hóa Khmer.',
        badge: 'Hot Check-in',
        images: [
          getImgUrl('TriTonImgs/chua_ta_pa/1.jpg'),
          getImgUrl('TriTonImgs/chua_ta_pa/2.jpg'),
          getImgUrl('TriTonImgs/chua_ta_pa/3.jpg'),
          getImgUrl('TriTonImgs/chua_ta_pa/4.jpg'),
          getImgUrl('TriTonImgs/chua_ta_pa/5.jpg'),
          getImgUrl('TriTonImgs/chua_ta_pa/6.jpg'),
          getImgUrl('TriTonImgs/chua_ta_pa/7.jpg'),
        ],
        location: 'Đồi Tà Pạ, xã Núi Tô, huyện Tri Tôn, tỉnh An Giang',
        video: getVideoUrl('Tri_Ton/chua_ta_pa.mp4'),
      },
      // Hồ Tà Pạ
      {
        name: 'Hồ Tà Pạ',
        badge: 'Hot Check-in',
        description:
          'Hồ nước trong vắt được bao bọc bởi những hàng cây, núi đá. Ngày nắng trong dưới nền trời xanh rọi xuống mặt hồ tạo nên khung cảnh đẹp lung linh. Mặt hồ bằng lặng, khung cảnh hoang sơ được ví như “Tuyệt tình Cốc” của miền Tây.',
        images: [
          getImgUrl('TriTonImgs/ho-ta-pa/1.jpg'),
          getImgUrl('TriTonImgs/ho-ta-pa/2.jpg'),
          getImgUrl('TriTonImgs/ho-ta-pa/3.jpg'),
          getImgUrl('TriTonImgs/ho-ta-pa/4.jpg'),
          getImgUrl('TriTonImgs/ho-ta-pa/5.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/ho-ta-pa.mp4'),
        location: 'Ta Pa, Núi Tô, Tri Tôn, An Giang',
      },
      // Con đường tơ lụa Tri Tôn
      {
        name: '"Con đường tơ lụa" Tri Tôn',
        badge: 'Hot Check-in',
        description:
          '“Con đường tơ lụa” là cái tên mà nhiều người đặt cho con đường quanh co uốn lượn chạy cắt ngang cánh đồng Tà Pạ và hàng cây trâm (gần hồ Soài Chek) ở huyện Tri Tôn. Con đường này đẹp nhất là những ngày lúa xanh mơn mởn hay khi lúa chín vàng, thu hút rất đông du khách trải nghiệm, khám phá, “check-in”.',
        images: [
          getImgUrl('TriTonImgs/con_duong_to_lua/con-duong-to-lua-1.jpg'),
          getImgUrl('TriTonImgs/con_duong_to_lua/con-duong-to-lua-2.jpg'),
          getImgUrl('TriTonImgs/con_duong_to_lua/con-duong-to-lua-3.jpg'),
          getImgUrl('TriTonImgs/con_duong_to_lua/con-duong-to-lua-4.jpg'),
        ],
        location:
          'Huyện Tri Tôn, tỉnh An Giang, gần khu vực hồ Soài Chek và đồng Tà Pạ',
        video: getVideoUrl('Tri_Ton/gioi-thieu-con-duong-lo-lua.mp4'),
      },
      // Cánh đồng Tà Pạ
      {
        name: 'Cánh đồng Tà Pạ',
        badge: 'Hot Check-in',
        description:
          'Theo Kinh nghiệm khám phá cánh đồng Tà Pạ, đến đây vào lúc này, bạn sẽ có cơ hội chiêm ngưỡng cảnh sắc thiên nhiên vô cùng mênh mông bát ngát, tha hồ mà chụp ảnh và tận hưởng mùi hương của lúa.',
        images: [
          getImgUrl('TriTonImgs/canh-dong-ta-pa/1.jpg'),
          getImgUrl('TriTonImgs/canh-dong-ta-pa/2.jpg'),
          getImgUrl('TriTonImgs/canh-dong-ta-pa/3.jpg'),
          getImgUrl('TriTonImgs/canh-dong-ta-pa/4.jpg'),
          getImgUrl('TriTonImgs/canh-dong-ta-pa/5.jpg'),
          getImgUrl('TriTonImgs/canh-dong-ta-pa/6.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/canh-dong-ta-pa.mp4'),
        location: 'Dưới chân núi Tà Pạ và Cô Tô, Huyện Tri Tôn, tỉnh An Giang.',
      },
      // Đồi Tức Dụp
      {
        name: 'Đồi Tức Dụp',
        badge: 'Di tích lịch sử',
        description:
          'Tức Dụp là ngọn đồi có nhiều hang sâu, động lớn dựa lưng vào Núi Cô Tô có vị trí cách Thành phố Long Xuyên chừng 70km và biên giới Campuchia tầm 10km.',
        images: [getImgUrl('TriTonImgs/Tuc-Dup-Tu-Ngon-Doi.jpg')],
        location: 'xã An Tức, huyện Tri Tôn, tỉnh An Giang',
      },
      // Đồi Tức Dụp
      {
        name: 'Đá đầu voi',
        badge: 'Hot',
        description:
          'Tảng đá đầu voi ở núi Cô Tô (huyện Tri Tôn, tỉnh An Giang.Đây cũng là một địa điểm check- in, sống ảo tuyệt đẹp trên cao với những tảng đá lớn xung quanh.',
        images: [
          getImgUrl('TriTonImgs/da-dau-voi/1.jpg'),
          getImgUrl('TriTonImgs/da-dau-voi/2.jpg'),
          getImgUrl('TriTonImgs/da-dau-voi/3.jpg'),
          getImgUrl('TriTonImgs/da-dau-voi/4.jpg'),
          getImgUrl('TriTonImgs/da-dau-voi/5.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/da-dau-voi.mp4'),
        location: 'xã An Tức, huyện Tri Tôn, tỉnh An Giang',
      },
      // Núi Cô Tô
      {
        name: 'Núi Cô Tô (Phụng Hoàng Sơn)',
        description:
          'Núi Cô Tô có khá nhiều tên như: Núi Tô, Phụng Hoàng Sơn và gọi theo tiếng Khmer là Phnom-Ktô. Núi Cô Tô (Phụng Hoàng Sơn) nằm trong dãy Thất Sơn - Bảy Núi nổi tiếng.',
        images: [
          getImgUrl('TriTonImgs/Nui_co_to/nui_co_to_1.jpg'),
          getImgUrl('TriTonImgs/Nui_co_to/nui_co_to_2.jpg'),
          getImgUrl('TriTonImgs/Nui_co_to/nui_co_to_3.jpg'),
          getImgUrl('TriTonImgs/Nui_co_to/nui_co_to_4.jpg'),
        ],
        location: 'Núi Cô Tô, Phú Thọ, Tri Tôn, An Giang',
        video: getVideoUrl('Tri_Ton/gioi-thieu-nui-co-to.mp4'),
      },
      // Hồ Ô Thum
      {
        name: 'Hồ Ô Thum',
        description:
          'Ô Thum được biết đến như một con hồ ngăn nước có nhiệm vụ chính là phục vụ cho việc sản xuất nông nghiệp với diện tích khá nhỏ.',
        images: [getImgUrl('TriTonImgs/ho_o_thum.jpg')],
        location:
          'xã Ô Lâm, huyện Tri Tôn, tỉnh An Giang (dưới chân núi Cô Tô)',
      },
      // Hồ Ô Tà Sóc
      {
        name: 'Hồ Ô Tà Sóc',
        description:
          'Hồ Ô Tà Sóc An Giang là một trong những điểm đến du lịch nổi bật và kỳ vĩ của vùng Tây Nam Bộ, thu hút du khách bởi vẻ đẹp thiên nhiên hoang sơ, hùng vĩ.',
        images: [getImgUrl('TriTonImgs/ho-o-ta-soc.jpg')],
        location: 'xã Lương Phi, huyện Tri Tôn, tỉnh An Giang',
      },
      // Chùa Xà Tón
      {
        name: 'Chùa Xà Tón',
        badge: 'Chùa Khmer',
        description:
          'Chùa Xà tón (Chùa Xvayton) tọa lạc tại thị trấn Tri Tôn, huyện Tri Tôn, được xây dựng cách đây hơn 300 năm. Tương truyền, từ thời Bảy Núi vẫn còn là rừng rậm, ít người ghé thăm. Khi ấy, lũ khỉ thường xuyên vào chùa, nhà dân nên chùa mới có tên gọi là Xvayton. Trong tiếng Khmer, “xvay” nghĩa là khỉ, còn “ton” nghĩa là đeo bám, níu kéo.',
        images: [
          getImgUrl('TriTonImgs/chua-xa-ton/1.jpg'),
          getImgUrl('TriTonImgs/chua-xa-ton/2.jpg'),
          getImgUrl('TriTonImgs/chua-xa-ton/3.jpg'),
          getImgUrl('TriTonImgs/chua-xa-ton/4.jpg'),
          getImgUrl('TriTonImgs/chua-xa-ton/5.jpg'),
          getImgUrl('TriTonImgs/chua-xa-ton/6.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/chua-xa-ton.mp4'),
        location: 'khóm 3, xã Tri Tôn, tỉnh An Giang',
      },
      // Chùa Hàng Còng (Chùa Krăng Krốch)
      {
        name: 'Chùa Hàng Còng (Chùa Krăng Krốch)',
        badge: 'Chùa Khmer',
        description:
          'Chùa Hàng Còng là tên gọi quen thuộc của chùa Prochum Meáp Chhưm Kiriram, hay còn được biết đến là chùa Krăng Krốch, nổi tiếng xứ Tri Tôn. Đây là ngôi chùa duy nhất tại An Giang có hàng cây còng cổ thụ nối dài từ cổng đến bên trong với bề dày lịch sử lên đến hàng trăm năm.',
        images: [
          getImgUrl('TriTonImgs/chua-hang-cong/1.jpg'),
          getImgUrl('TriTonImgs/chua-hang-cong/2.jpg'),
          getImgUrl('TriTonImgs/chua-hang-cong/3.jpg'),
          getImgUrl('TriTonImgs/chua-hang-cong/4.jpg'),
          getImgUrl('TriTonImgs/chua-hang-cong/5.jpg'),
          getImgUrl('TriTonImgs/chua-hang-cong/6.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/chua-hang-cong.mp4'),
        location:
          'ấp An Hòa, xã Châu Lăng, huyện Tri Tôn (nay thuộc xã Tri Tôn, tỉnh An Giang)',
      },
      // Chùa Tuk Phos
      {
        name: 'Chùa Tuk Phos',
        badge: 'Chùa Khmer',
        description:
          'Chùa Tuk Phos là công trình kiến trúc mang đậm nét đặc trưng về văn hóa của người Khmer Nam Bộ. Tọa lạc dưới chân núi Nam Qui thuộc thị trấn Tri Tôn, huyện Châu Lăng,  Chùa Tuk Phos từ lâu đã là điểm sinh hoạt văn hóa của rất nhiều bà con dân tộc tại vùng Thất Sơn lừng danh. Tuk Phos trong tiếng Khmer có nghĩa là giếng nước phun.',
        images: [
          getImgUrl('TriTonImgs/chua-tuk-phos/1.jpg'),
          getImgUrl('TriTonImgs/chua-tuk-phos/2.jpg'),
          getImgUrl('TriTonImgs/chua-tuk-phos/3.jpg'),
          getImgUrl('TriTonImgs/chua-tuk-phos/4.jpg'),
          getImgUrl('TriTonImgs/chua-tuk-phos/5.jpg'),
          getImgUrl('TriTonImgs/chua-tuk-phos/6.jpg'),
          getImgUrl('TriTonImgs/chua-tuk-phos/7.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/chua-tuk-phos.mp4'),
        location:
          'ấp An Hòa, xã Châu Lăng, huyện Tri Tôn (nay thuộc xã Tri Tôn, tỉnh An Giang)',
      },
    ],
    cuisine: [
      {
        name: 'Gà đốt lá chúc Ô Thum',
        description:
          'Sở dĩ món đặc sản này có tên gọi như thế là vì nó có nhiều nhất ở khu vực Hồ Ô Thum thuộc địa phận huyện Tri Tôn, tỉnh An Giang. Nằm tựa lưng vào triền núi với mặt nước phẳng lặng, xanh biếc vô cùng nên thơ, nơi này thu hút đông đảo các bạn trẻ ghé thăm không chỉ bởi khung cảnh thiên nhiên tuyệt đẹp mà còn vì món gà đốt Ô Thum trứ danh.',
        images: [
          getImgUrl('TriTonImgs/Foods/Ga_dot/ga-dot-1.jpg'),
          getImgUrl('TriTonImgs/Foods/Ga_dot/ga-dot-2.jpg'),
          getImgUrl('TriTonImgs/Foods/Ga_dot/ga-dot-3.jpg'),
          getImgUrl('TriTonImgs/Foods/Ga_dot/ga-dot-4.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/Food/gioi-thieu-ga-dot.mp4'),
        badge: 'Món đặc sản',
      },
      {
        name: 'Đu đủ đâm',
        description:
          'Gỏi đu đủ đâm Tri Tôn được chế biến từ những nguyên liệu rất dễ tìm. Món gỏi này có rau muống, đậu đũa, cà chua, rau thơm, chanh, củ hành hòa quyện với các loại gia vị như đường, ruốc, đậu phộng và đặc biệt là mắm ruốc được pha chế theo công thức riêng. Để món gỏi được ngon thì người chế biến phải ngâm đu đủ với nước muối loãng trước. Sau khi cho hết các nguyên liệu vào cối, đầu bếp sẽ dùng chày đâm và trộn cho đến khi sợi đu đủ thấm gia vị mới bày ra đĩa. Ăn kèm Gỏi đu đủ đâm Tri Tôn có thêm trứng luộc và xiên bò nướng.',
        images: [
          getImgUrl('TriTonImgs/Foods/Du_du_dam/du-du-dam-1.jpg'),
          getImgUrl('TriTonImgs/Foods/Du_du_dam/du-du-dam-2.jpg'),
          getImgUrl('TriTonImgs/Foods/Du_du_dam/du-du-dam-3.jpg'),
          getImgUrl('TriTonImgs/Foods/Du_du_dam/du-du-dam-4.jpg'),
        ],
        video: getVideoUrl('Tri_Ton/Food/gioi-thieu-du-du-dam.mp4'),
        badge: 'HOT',
      },
      {
        name: 'Cháo bò Tri Tôn',
        description:
          'Cháo bò là một trong những món ăn nổi bật nhất ở thị trấn Tri Tôn, món cháo được nấu như cháo lòng lợn thông thường nhưng dùng lòng bò: lá sách, gan, phổi, phèo... thêm miếng huyết mềm và thịt bò tái chín.',
        images: [getImgUrl('TriTonImgs/Foods/chao-bo.jpg')],
      },
      {
        name: 'Bò nướng Tri Tôn',
        description:
          'Thịt bò tươi ngon được tẩm ướp gia vị đặc trưng khmer, nướng trên bếp than hồng, ăn kèm với mắm bò hóc hoặc muối kiến vàng.',
        images: [getImgUrl('TriTonImgs/Foods/bo-nuong.jpg')],
      },

      {
        name: 'Thốt nốt sữa',
        description:
          'Nước thốt nốt để tủ đông lạnh cho đến khi sền sệt như đá bào, sau đó để ra ly cho vào đó cái thốt nốt, chế vào ly 1 ít sữa bò cùng đậu phộng.',
        images: [getImgUrl('TriTonImgs/Foods/thot-not-sua.jpeg')],
      },
      {
        name: 'Bánh bò thốt nốt',
        description:
          'Bánh bò thốt nốt được làm từ cây thốt nốt – loài cây gắn liền với cuộc sống của người Khmer.',
        images: [getImgUrl('TriTonImgs/Foods/banh-bo-thot-not.jpeg')],
      },
    ],
    video: getVideoUrl('Tri_Ton/chua_ta_pa.mp4'),
  },
  // chợ mới
  {
    id: 'cho-moi',
    name: 'Huyện Chợ Mới',
    image: getImgUrl('ChoMoiImgs/cho-moi-banner.jpg'),
    description:
      'Huyện Chợ Mới là vùng đất cù lao trù phú nằm giữa hai dòng sông Tiền và sông Hậu, nổi tiếng với các làng nghề truyền thống lâu đời và quần thể di tích kiến trúc tôn giáo đặc sắc tại Cù Lao Giêng.',
    attractions: [
      {
        name: 'Cù Lao Giêng',
        description:
          'Vùng đất cổ kính với quần thể kiến trúc tôn giáo đồ sộ như Nhà thờ Cù Lao Giêng, Tu viện Phanxicô và những vườn cây ăn trái sum suê.',
        images: [
          'https://media.vneconomy.vn/images/2023/04/24/nha-tho-cu-lao-gieng.jpg',
        ],
        location: 'Huyện Chợ Mới, tỉnh An Giang',
      },
      {
        name: 'Chùa Phước Thành (Chùa Chim)',
        description:
          'Ngôi chùa nổi tiếng với pho tượng Phật A Di Đà cao 39m uy nghi, là một trong những điểm du lịch tâm linh tiêu biểu của huyện.',
        images: [
          'https://vcdn1-dulich.vnecdn.net/2021/05/20/ChuaPhuocThanh-1-1621481053.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4Kx_vG_XbT_v9D3_v6xXQ',
        ],
        location: 'Xã Bình Phước Xuân, huyện Chợ Mới, tỉnh An Giang',
      },
      {
        name: 'Khu du lịch sinh thái Mỹ Luông',
        description:
          'Điểm đến nghỉ dưỡng hiện đại với không gian xanh, hồ bơi và khu trưng bày xe cổ độc đáo.',
        images: [
          'https://media.travelmag.vn/files/content/2021/05/19/kdl-my-luong-1-10444.jpg',
        ],
        location: 'Thị trấn Mỹ Luông, huyện Chợ Mới, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Xôi phồng Chợ Mới',
        description:
          'Món ăn đặc sản nổi tiếng, xôi được chiên phồng to tròn, giòn rụm bên ngoài nhưng vẫn giữ được độ dẻo bên trong, thường ăn kèm với gà quay.',
        images: [
          'https://cdn.tgdd.vn/Files/2021/07/07/1366113/cach-lam-xoi-chien-phong-ngon-ron-don-gian-tai-nha-202107070942464845.jpg',
        ],
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];