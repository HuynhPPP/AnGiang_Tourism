import type { Destination } from '@/types';
import { getImgUrl, getVideoUrl } from './utils';

export const defaultDestinations: Destination[] = [
  // Núi Sam
  {
    id: 1,
    name: 'Núi Sam (Châu Đốc)',
    description:
      'Núi Sam cao 230 mét so với mực nước biển, nằm ở thành phố Châu Đốc, là địa điểm linh thiêng đối với Phật giáo. Từ đỉnh núi, du khách có thể ngắm toàn cảnh vùng nông thôn xung quanh và biên giới Campuchia.',
    description_news:
      'Công trình tượng Phật Thích Ca ngồi thiền khắc trực tiếp vào vách đá là hạng mục chính của Công viên Văn hóa núi Sam, cao 81m, đang được xây dựng trên khu đất rộng 5.500 m², tổng vốn đầu tư khoảng 255 tỷ đồng. Sau khi hoàn thiện, công trình sẽ trở thành tượng Phật khắc vào vách đá cao nhất thế giới, góp phần tôn tạo cảnh quan và phát triển du lịch tâm linh An Giang.',
    story:
      'Câu chuyện thú vị về núi Sam xoay quanh những truyền thuyết về sự linh thiêng của Miếu Bà Chúa Xứ, như việc tượng Bà được 9 cô gái đồng trinh khiêng từ núi xuống, hay lời đồn về việc Bà phù hộ người dân tránh khỏi thiên tai, điển hình là trận lụt lớn năm 2000 không ngập được miếu. Một bí ẩn khác là nghi vấn về tượng Bà Chúa Xứ: có giả thuyết cho rằng đây là tượng Phật của người Khmer, bị người Việt sử dụng và trang điểm thành tượng Bà Chúa Xứ. ',
    images: [
      getImgUrl('ChauDocImgs/mieu-ba-chua-xu-nui-sam-an-giang.jpg'),
      getImgUrl('ChauDocImgs/SamMountain.jpg'),
      getImgUrl('ChauDocImgs/nui-sam-5.jpg'),
      getImgUrl('ChauDocImgs/Nui-Sam-8.jpg'),
      getImgUrl('ChauDocImgs/nui_sam_1.jpg'),
      getImgUrl('ChauDocImgs/nui_sam_2.jpg'),
      getImgUrl('ChauDocImgs/nui_sam_3.jpg'),
      getImgUrl('ChauDocImgs/nui_sam_9.jpg'),
    ],
    images_news: [
      getImgUrl('ChauDocImgs/tuong-phat-nui-sam.jpg'),
      getImgUrl('ChauDocImgs/tuong-phat-nui-sam-2.png'),
      getImgUrl('ChauDocImgs/tuong-phat-nui-sam-3.jpg'),
      getImgUrl('ChauDocImgs/tuong-phat-nui-sam-4.jpg'),
    ],
    foods: [
      {
        name: 'Bún cá',
        description:
          'Món đặc sản với nước lèo ngon, vị mắm ruốc đậm đà, dùng kèm với rau sống miền Tây sông nước.',
      },
      {
        name: 'Lẩu mắm (Cá lên men)',
        description:
          'Đặc sản miền Tây với mắm cá ngon, dùng kèm rau rừng và các loại cá.',
      },
    ],
    address: 'Châu Đốc, An Giang',
    video: getVideoUrl('Chau_Doc/gioi-thieu-nui-sam-le-hoi.mp4'),
  },
  // Núi Cấm
  {
    id: 2,
    name: 'Núi Cấm (Thất Sơn)',
    description:
      'Toạ lạc ở xã An Hảo, huyện Tịnh Biên, tỉnh An Giang, Núi Cấm nằm trong vùng Thất Sơn An Giang và là ngọn núi cao nhất miền Tây Nam Bộ với độ cao 716m. Ngoài ra, núi Cấm còn được mệnh danh là nóc nhà của Đồng bằng sông Cửu Long. Đến đây, các bạn sẽ được tham quan và chiêm bái những danh lam thắng cảnh nổi tiếng như: Chùa Vạn Linh, Hồ Thủy Liêm… Ngoài ra, bạn sẽ có được những cung bậc cảm xúc khác nhau khi khám phá những địa điểm thú vị có có trong Khu du lịch Lâm Viên Núi Cấm này.',
    description_news: null,
    story:
      'Núi Cấm có nhiều câu chuyện thú vị về nguồn gốc tên gọi, trong đó phổ biến nhất là chuyện vua Gia Long ẩn náu tại đây và ra lệnh cấm người dân lên núi. Một truyền thuyết khác kể rằng núi có nhiều hổ dữ, được gọi là Núi Cấm để bảo vệ người dân. Bên cạnh đó, còn có truyền thuyết về rắn hổ mây khổng lồ và câu chuyện về một con bạch hổ được tu hành nhưng cuối cùng lại bị người dân giết hại.',
    images: [
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-1.jpg'),
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-2.jpg'),
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-3.jpg'),
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-4.jpg'),
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-5.jpg'),
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-6.jpg'),
      getImgUrl('TinhBienImgs/Nui_cam/nui-cam-7.jpg'),
    ],
    images_news: [],
    foods: [
      {
        name: 'Cơm Tấm (Cơm gạo tấm)',
        description:
          'Món cơm từ gạo tấm, phục vụ kèm thịt heo nướng, trứng và rau.',
      },
      {
        name: 'Bánh Canh (Súp mì dày)',
        description:
          'Món súp với sợi bánh dày, thường được phục vụ với cá hoặc thịt heo.',
      },
    ],
    address: 'Tinh Biên, An Giang',
    video: getVideoUrl('Tinh_Bien/gioi-thieu-nui-cam.mp4'),
  },
  // Làng Chăm
  {
    id: 3,
    name: 'Làng Chăm (Châu Phong)',
    description:
      'Toạ lạc ở xã Châu Phong, thị trấn Tân Châu, huyện Tân Châu, tỉnh An Giang. Làng Chăm Châu Giang nổi bật với tín ngưỡng Hồi giáo, tập tục ở nhà sàn và nghề dệt thổ cẩm lưu truyền qua nhiều thế hệ. Dừng chân nơi đây, bạn không chỉ có cơ hội hiểu thêm về đời sống vật chất lẫn tinh thần của người dân địa phương mà còn có thể rời xa phố thị đông đúc và sống chậm lại từng phút giây cùng ngôi làng yên bình, hiền hòa.',
    description_news: null,
    story:
      'Điều làm nên giá trị độc đáo của thổ cẩm Châu Phong chính là sự tinh tế trong từng công đoạn, từ xe sợi, nhuộm màu, căng khung đến dệt thành phẩm. Không có máy móc hỗ trợ, mọi thao tác đều được thực hiện thủ công bằng đôi tay khéo léo với sự kiên trì, bền bỉ và kỹ thuật được truyền thừa từ bao đời. Khác với thổ cẩm của nhiều nơi khác, sản phẩm ở làng dệt thổ cẩm An Giang nổi bật với gam màu nóng rực rỡ như đỏ, cam, vàng, tím… được phối hài hòa để tạo nên những hoa văn hình học và họa tiết cách điệu mang ý nghĩa tâm linh sâu sắc. Đặc biệt, kỹ thuật “canh sợi dọc” để tạo hoa văn trực tiếp trên khung go là bí quyết riêng chỉ còn ít nghệ nhân có thể thực hiện. Nguyên liệu được dùng ở làng nghề dệt thổ cẩm An Giang hoàn toàn tự nhiên, được nhuộm từ vỏ cây, củ nghệ, trái mặc nưa… giúp màu sắc bền đẹp và thân thiện với môi trường. Nhờ đó, các sản phẩm thổ cẩm của làng càng dùng càng mềm mại, bóng đẹp và mang giá trị thẩm mỹ cao.',
    images: [
      getImgUrl('TanChauImgs/lang-cham-1.jpg'),
      getImgUrl('TanChauImgs/lang-cham-2.jpg'),
      getImgUrl('TanChauImgs/lang-cham-3.jpg'),
      getImgUrl('TanChauImgs/lang-cham-4.jpg'),
    ],
    images_news: [],
    foods: [
      {
        name: 'Bánh Xèo (Bánh pancake Việt Nam)',
        description: 'Bánh giòn nhân giá đỗ, tôm và thịt.',
      },
      {
        name: 'Bún Nước Lèo (Súp mì kiểu Khmer)',
        description:
          'Món ăn kết hợp với ảnh hưởng của người Khmer, gồm nước dùng đậm đà và nhiều loại topping.',
      },
    ],
    address: 'Tân Châu, An Giang',
    video: getVideoUrl('Tan_Chau/gioi-thieu-lang-cham.mp4'),
  },
  // Rừng tràm Trà Sư
  {
    id: 4,
    name: 'Rừng tràm Trà Sư',
    description:
      'Nằm ở huyện Tịnh Biên, Trà Sư là khu rừng tràm rộng lớn trên 800 héc-ta. Đây là nơi sinh sống của nhiều loài chim và thực vật, cung cấp các tour đi thuyền qua các kênh rạch xanh mát phủ đầy hoa súng và dương xỉ nước.',
    description_news: null,
    story:
      'Rừng tràm Trà Sư, An Giang nổi tiếng với câu chuyện về sự hình thành trên đất phèn ngập nước, biến thành “bảo tàng sống” của hệ sinh thái miền Tây, và nỗ lực bảo tồn với nhiều chương trình phục hồi và quản lý. Nơi đây còn thú vị vì vẻ đẹp hoang sơ của rừng ngập nước, với rặng tràm xanh mướt, thảm bèo phủ kín mặt nước, cùng sự đa dạng của hơn 140 loài thực vật và 70 loài chim. ',
    images: [
      getImgUrl('TinhBienImgs/rung_tram_8.jpg'),
      getImgUrl('TinhBienImgs/rung_tram_2.jpg'),
      getImgUrl('TinhBienImgs/rung_tram_3.jpg'),
      getImgUrl('TinhBienImgs/rung_tram_4.jpg'),
      getImgUrl('TinhBienImgs/rung_tram_5.jpg'),
      getImgUrl('TinhBienImgs/rung_tram_6.jpg'),
      getImgUrl('TinhBienImgs/rung_tram_7.jpg'),
    ],
    images_news: [],
    foods: [
      {
        name: 'Lẩu Mắm (Lẩu cá lên men)',
        description:
          'Món lẩu thơm ngon được nấu với cá lên men, rau củ và các loại thịt.',
      },
      {
        name: 'Bò 7 Món (7 món từ thịt bò)',
        description:
          'Bữa tiệc với thịt bò được chế biến theo bảy cách khác nhau, nổi tiếng trong khu vực.',
      },
    ],
    address: 'Ấp Văn Trà, Văn Giáo, Tịnh Biên, An Giang',
    video: getVideoUrl('Tinh_Bien/gioi-thieu-rung-cham-tra-su.mp4'),
  },
  // Nhà Mồ Ba Chúc
  {
    id: 5,
    name: 'Nhà Mồ Ba Chúc',
    description:
      'Nằm ở huyện Tri Tôn, khu tưởng niệm này tưởng nhớ các nạn nhân của cuộc thảm sát Khmer Đỏ năm 1978. Mộ chứa hài cốt của hơn 3.000 nạn nhân và là lời nhắc nhở nghiêm túc về quá khứ.',
    description_news: null,
    story:
      'Năm 1979, chính quyền và nhân dân tỉnh An Giang đã xây dựng khu nhà mồ Ba Chúc, trên diện tích 3.000m2 (còn gọi là khu chứng tích tội ác Pôn Pốt) nhằm tưởng nhớ những thường dân vô tội bị bọn diệt chủng Pôn Pốt sát hại, để những người yêu chuộng hòa bình trên toàn thế giới tận mắt chứng kiến. Bà Hà Thị Nga được người dân quen gọi "Má Tư nhà mồ", bởi không như những người từng chứng kiến tội ác man rợ của bọn Pôn Pốt thường phải rời bỏ quê hương vì không thể chịu nổi nỗi đau mất mát và cả những ký ức kinh hoàng đó. Bà Nga vẫn bám trụ tại quê hương và âm thầm trông coi nhà mồ vì một lẽ: "Tôi ở lại vì nơi đây còn có chồng con và người thân của tôi. Họ cần tôi chăm sóc, cầu nguyện"',
    images: [
      getImgUrl('TriTonImgs/nha-mo-ba-chuc-4.jpg'),
      getImgUrl('TriTonImgs/nha-mo-ba-chuc-1.jpg'),
      getImgUrl('TriTonImgs/nha-mo-ba-chuc-2.jpg'),
      getImgUrl('TriTonImgs/nha-mo-ba-chuc-3.jpg'),
      getImgUrl('TriTonImgs/nha-mo-ba-chuc-5.jpg'),
    ],
    images_news: [],
    foods: [
      {
        name: 'Bánh Đúc (Bánh gạo)',
        description:
          'Bánh gạo truyền thống thường được ăn kèm với thịt băm, tôm và rau thơm.',
      },
      {
        name: 'Chè (Súp ngọt)',
        description: 'Các loại chè làm từ đậu, trái cây và nước cốt dừa.',
      },
    ],
    address: 'Tri Tôn, An Giang',
    video: getVideoUrl('Tri_Ton/nha_mo_ba_chuc_home_page.mp4'),
  },
];