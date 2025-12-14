import type { Destination, FoodCategory, District, LocalTip } from '@/types';

export const defaultDestinations: Destination[] = [
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
      '/images/ChauDocImgs/mieu-ba-chua-xu-nui-sam-an-giang.jpg',
      '/images/ChauDocImgs/SamMountain.jpg',
      '/images/ChauDocImgs/nui-sam-5.jpg',
      '/images/ChauDocImgs/Nui-Sam-8.jpg',
      '/images/ChauDocImgs/nui_sam_1.jpg',
      '/images/ChauDocImgs/nui_sam_2.jpg',
      '/images/ChauDocImgs/nui_sam_3.jpg',
      '/images/ChauDocImgs/nui_sam_9.jpg',
    ],
    images_news: [
      '/images/ChauDocImgs/tuong-phat-nui-sam.jpg',
      '/images/ChauDocImgs/tuong-phat-nui-sam-2.png',
      '/images/ChauDocImgs/tuong-phat-nui-sam-3.jpg',
      '/images/ChauDocImgs/tuong-phat-nui-sam-4.jpg',
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
  },
  {
    id: 2,
    name: 'Núi Cấm (Thất Sơn)',
    description:
      'Toạ lạc ở xã An Hảo, huyện Tịnh Biên, tỉnh An Giang, Núi Cấm nằm trong vùng Thất Sơn An Giang và là ngọn núi cao nhất miền Tây Nam Bộ với độ cao 716m. Ngoài ra, núi Cấm còn được mệnh danh là nóc nhà của Đồng bằng sông Cửu Long. Đến đây, các bạn sẽ được tham quan và chiêm bái những danh lam thắng cảnh nổi tiếng như: Chùa Vạn Linh, Hồ Thủy Liêm… Ngoài ra, bạn sẽ có được những cung bậc cảm xúc khác nhau khi khám phá những địa điểm thú vị có có trong Khu du lịch Lâm Viên Núi Cấm này.',
    description_news: null,
    story:
      'Núi Cấm có nhiều câu chuyện thú vị về nguồn gốc tên gọi, trong đó phổ biến nhất là chuyện vua Gia Long ẩn náu tại đây và ra lệnh cấm người dân lên núi. Một truyền thuyết khác kể rằng núi có nhiều hổ dữ, được gọi là Núi Cấm để bảo vệ người dân. Bên cạnh đó, còn có truyền thuyết về rắn hổ mây khổng lồ và câu chuyện về một con bạch hổ được tu hành nhưng cuối cùng lại bị người dân giết hại.',
    images: [
      '/images/TinhBienImgs/nui-cam-1.jpg',
      '/images/TinhBienImgs/nui-cam-2.jpg',
      '/images/TinhBienImgs/nui-cam-3.jpg',
      '/images/TinhBienImgs/nui-cam-4.jpg',
      '/images/TinhBienImgs/nui-cam-5.jpg',
      '/images/TinhBienImgs/nui-cam-6.jpg',
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
  },
  {
    id: 3,
    name: 'Làng Chăm (Châu Phong)',
    description:
      'Toạ lạc ở xã Châu Phong, thị trấn Tân Châu, huyện Tân Châu, tỉnh An Giang. Làng Chăm Châu Giang nổi bật với tín ngưỡng Hồi giáo, tập tục ở nhà sàn và nghề dệt thổ cẩm lưu truyền qua nhiều thế hệ. Dừng chân nơi đây, bạn không chỉ có cơ hội hiểu thêm về đời sống vật chất lẫn tinh thần của người dân địa phương mà còn có thể rời xa phố thị đông đúc và sống chậm lại từng phút giây cùng ngôi làng yên bình, hiền hòa.',
    description_news: null,
    story:
      'Điều làm nên giá trị độc đáo của thổ cẩm Châu Phong chính là sự tinh tế trong từng công đoạn, từ xe sợi, nhuộm màu, căng khung đến dệt thành phẩm. Không có máy móc hỗ trợ, mọi thao tác đều được thực hiện thủ công bằng đôi tay khéo léo với sự kiên trì, bền bỉ và kỹ thuật được truyền thừa từ bao đời. Khác với thổ cẩm của nhiều nơi khác, sản phẩm ở làng dệt thổ cẩm An Giang nổi bật với gam màu nóng rực rỡ như đỏ, cam, vàng, tím… được phối hài hòa để tạo nên những hoa văn hình học và họa tiết cách điệu mang ý nghĩa tâm linh sâu sắc. Đặc biệt, kỹ thuật “canh sợi dọc” để tạo hoa văn trực tiếp trên khung go là bí quyết riêng chỉ còn ít nghệ nhân có thể thực hiện. Nguyên liệu được dùng ở làng nghề dệt thổ cẩm An Giang hoàn toàn tự nhiên, được nhuộm từ vỏ cây, củ nghệ, trái mặc nưa… giúp màu sắc bền đẹp và thân thiện với môi trường. Nhờ đó, các sản phẩm thổ cẩm của làng càng dùng càng mềm mại, bóng đẹp và mang giá trị thẩm mỹ cao.',
    images: [
      '/images/TanChauImgs/lang-cham-1.jpg',
      '/images/TanChauImgs/lang-cham-2.jpg',
      '/images/TanChauImgs/lang-cham-3.jpg',
      '/images/TanChauImgs/lang-cham-4.jpg',
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
  },
  {
    id: 4,
    name: 'Rừng tràm Trà Sư',
    description:
      'Nằm ở huyện Tịnh Biên, Trà Sư là khu rừng tràm rộng lớn trên 800 héc-ta. Đây là nơi sinh sống của nhiều loài chim và thực vật, cung cấp các tour đi thuyền qua các kênh rạch xanh mát phủ đầy hoa súng và dương xỉ nước.',
    description_news: null,
    story:
      'Rừng tràm Trà Sư, An Giang nổi tiếng với câu chuyện về sự hình thành trên đất phèn ngập nước, biến thành “bảo tàng sống” của hệ sinh thái miền Tây, và nỗ lực bảo tồn với nhiều chương trình phục hồi và quản lý. Nơi đây còn thú vị vì vẻ đẹp hoang sơ của rừng ngập nước, với rặng tràm xanh mướt, thảm bèo phủ kín mặt nước, cùng sự đa dạng của hơn 140 loài thực vật và 70 loài chim. ',
    images: [
      '/images/TinhBienImgs/rung_tram_8.jpg',
      '/images/TinhBienImgs/rung_tram_2.jpg',
      '/images/TinhBienImgs/rung_tram_3.jpg',
      '/images/TinhBienImgs/rung_tram_4.jpg',
      '/images/TinhBienImgs/rung_tram_5.jpg',
      '/images/TinhBienImgs/rung_tram_6.jpg',
      '/images/TinhBienImgs/rung_tram_7.jpg',
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
    address: 'Tịnh Biên, An Giang',
  },
  {
    id: 5,
    name: 'Nhà Mồ Ba Chúc',
    description:
      'Nằm ở huyện Tri Tôn, khu tưởng niệm này tưởng nhớ các nạn nhân của cuộc thảm sát Khmer Đỏ năm 1978. Mộ chứa hài cốt của hơn 3.000 nạn nhân và là lời nhắc nhở nghiêm túc về quá khứ.',
    description_news: null,
    story:
      'Năm 1979, chính quyền và nhân dân tỉnh An Giang đã xây dựng khu nhà mồ Ba Chúc, trên diện tích 3.000m2 (còn gọi là khu chứng tích tội ác Pôn Pốt) nhằm tưởng nhớ những thường dân vô tội bị bọn diệt chủng Pôn Pốt sát hại, để những người yêu chuộng hòa bình trên toàn thế giới tận mắt chứng kiến. Bà Hà Thị Nga được người dân quen gọi "Má Tư nhà mồ", bởi không như những người từng chứng kiến tội ác man rợ của bọn Pôn Pốt thường phải rời bỏ quê hương vì không thể chịu nổi nỗi đau mất mát và cả những ký ức kinh hoàng đó. Bà Nga vẫn bám trụ tại quê hương và âm thầm trông coi nhà mồ vì một lẽ: "Tôi ở lại vì nơi đây còn có chồng con và người thân của tôi. Họ cần tôi chăm sóc, cầu nguyện"',
    images: [
      '/images/TriTonImgs/nha-mo-ba-chuc-4.jpg',
      '/images/TriTonImgs/nha-mo-ba-chuc-1.jpg',
      '/images/TriTonImgs/nha-mo-ba-chuc-2.jpg',
      '/images/TriTonImgs/nha-mo-ba-chuc-3.jpg',
      '/images/TriTonImgs/nha-mo-ba-chuc-5.jpg',
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
  },
];

export const localTipsFood: LocalTip[] = [
  {
    id: 1,
    title: 'Món ăn đặc sản',
    description:
      'Món ăn đặc sản của An Giang là cơm tấm Long Xuyên, cơm lá sen và bánh giò.',
    image: '/images/LongXuyenImgs/Foods/com-tam-LX.jpg',
  },
];

export const defaultFoodCategories: FoodCategory[] = [
  {
    id: 'rice-dishes',
    name: 'Món Cơm',
    items: [
      {
        name: 'Cơm tấm Long Xuyên',
        description:
          'Cơm tấm với thịt heo sắt, trứng và rau. Món ăn phổ biến ở miền Nam Việt Nam với hương vị đặc trưng của An Giang.',
        origin: 'Long Xuyên, An Giang',
        image: '/images/LongXuyenImgs/Foods/com-tam-LX.jpg',
      },
      {
        name: 'Cơm Lá Sen',
        description:
          'Cơm được nấu trong lá sen, tạo hương vị thơm ngon đặc biệt. Thường được phục vụ kèm với các món đặc sản địa phương.',
        origin: 'Vùng đồng bằng sông Cửu Long, bao gồm An Giang',
        image: '/images/Foods/com-hap-la-sen.jpg',
      },
    ],
  },
  {
    id: 'noodle-dishes',
    name: 'Món Bún & Phở',
    items: [
      {
        name: 'Bún Cá',
        description:
          'Đặc sản Châu Đốc, với bún, cá lóc, chả cá và rau trong nước dùng ngọt thanh từ xương cá.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/LongXuyenImgs/Foods/bun_ca_long_xuyen_1.jpg',
      },
      {
        name: 'Bún mắm Châu Đốc',
        description:
          'Bún Mắm Châu Đốc là một biểu tượng của ẩm thực miền Tây, nổi tiếng với hương vị đậm đà đặc trưng của mắm. Nước lèo bún mắm được nấu từ nhiều loại mắm cá linh, mắm sặc, cùng với xương heo, tôm, mực, cá, tạo nên một nồi nước dùng sánh đặc, ngọt thanh và thơm lừng mà không hề tanh.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/Foods/bun-mam.jpg',
      },
      {
        name: 'Bún Kèn',
        description:
          'Bún Kèn An Giang cũng là món ăn lâu đời và có tiếng tại vùng đất Châu Đốc. Món ngon này được chế biến từ những nguyên liệu có sẵn của vùng sông nước miền Tây.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/Foods/bun-ken.jpg',
      },
      {
        name: 'Bánh canh Khmer',
        description:
          'Bánh canh Khmer (hay còn gọi là bánh canh Vĩnh Trung) rất được các bạn gần xa ưa chuộng nhé! Bắt nguồn từ xã Vĩnh Trung, huyện Tịnh Biên, món ăn này do một người phụ nữ Khmer tên là Neang Oanh Na chế biến ra cách đây hàng chục năm.',
        origin: 'An Giang',
        image: '/images/Foods/banh-canh-khmer.jpeg',
      },
    ],
  },
  {
    id: 'fermented-foods',
    name: 'Đặc Sản Mắm',
    items: [
      {
        name: 'Mắm Châu Đốc',
        description:
          'Từ khi ra đời đến nay, mắm Châu Đốc đã có gần 150 năm tuổi thọ với hàng trăm loại mắm có hương vị hoàn toàn khác nhau.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/Foods/Mam/mam_chau_doc.jpg',
      },
      {
        name: 'Lẩu mắm',
        description:
          'Món lẩu đặc trưng với nước dùng từ mắm, rau và các loại thịt. Món ăn đặc sản của vùng đồng bằng sông Cửu Long.',
        origin: 'Vùng đồng bằng sông Cửu Long, bao gồm An Giang',
        image: '/images/Foods/Mam/lau-mam.jpeg',
      },
      {
        name: 'Mắm cá linh',
        description:
          'Mắm ruốc dùng làm gia vị hoặc nguyên liệu nấu ăn. Phiên bản An Giang có hương vị đặc trưng riêng.',
        origin: 'An Giang',
        image: '/images/Foods/Mam/mam-ca-linh.jpg',
      },
      {
        name: 'Mắm Thái',
        description:
          'Mắm thái An Giang, đặc biệt là mắm thái Châu Đốc, là một món đặc sản nổi tiếng của vùng An Giang, được làm từ cá lóc và đu đủ, kết hợp cùng các loại gia vị tạo nên hương vị thơm ngon đặc trưng.',
        origin: 'Vùng đồng bằng sông Cửu Long',
        image: '/images/Foods/Mam/mam-thai.jpg',
      },
      {
        name: 'Mắm cá lóc',
        description:
          'Mắm cá lóc là một món đặc sản nổi tiếng của vùng Châu Đốc, An Giang, được làm từ cá lóc tươi ngon và các nguyên liệu truyền thống.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/Foods/Mam/mam-ca-loc.jpg',
      },
    ],
  },
  {
    id: 'local-specialties',
    name: 'Đặc Sản Địa Phương',
    items: [
      {
        name: 'Heo quay cúng Bà',
        description:
          'Món ăn đặc trưng của Châu Đốc, thường được làm trong dịp lễ hội Bà Chúa Xứ.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/Foods/heo-quay.jpg',
      },
      {
        name: 'Bánh tằm bì Tân Châu',
        description:
          'Món bánh tằm đặc trưng của Tân Châu, ăn kèm với bì heo và nước cốt dừa.',
        origin: 'Tân Châu, An Giang',
        image: '/images/Foods/banh-tam-bi.jpg',
      },
      {
        name: 'Bánh xèo núi Cấm',
        description:
          'Bánh xèo được ăn kèm với các loại rau rừng đặc trưng của vùng Thất Sơn.',
        origin: 'Tịnh Biên, An Giang',
        image: '/images/Foods/banh-xeo-nui-cam.jpg',
      },
      {
        name: 'Cơm nị - cà púa',
        description:
          'Món ăn truyền thống của người Chăm, được làm từ gạo nếp và các loại gia vị đặc trưng.',
        origin: 'An Phú, An Giang',
        image: '/images/Foods/com-ni-ca-pua.jpg',
      },
      {
        name: 'Thịt bò bảy món',
        description:
          'Một đặc sản vùng Châu Đốc khác cũng được khá nhiều thực khách ưa chuộng là món bò bảy món núi Sam.',
        origin: 'Châu Đốc, An Giang',
        image: '/images/Foods/bo-7-mon.jpg',
      },
      {
        name: 'Bánh bò thốt nốt',
        description:
          'Đây là một món được nhắc đến khá nhiều khi bạn đến vùng An Giang, bánh bò được làm bằng đường thốt nốt - loài cây đặc trưng của xứ An Giang.',
        origin: 'An Giang',
        image: '/images/Foods/banh-bo-thot-not.jpg',
      },
      {
        name: 'Gà đốt lá chúc Ô Thum',
        description:
          'Bất kì ai đặt chân đến vùng đất An Giang cũng đều phải thử món gà đốt lá chúc Ô Thum huyền thoại. Món ăn có nguồn gốc từ Campuchia. Lá chúc như một loại gia vị đặc biệt tạo nên hương vị đặc trưng không lẫn vào đầu được cho món gà nướng.',
        origin: 'Tri Tôn, An Giang',
        image: '/images/Foods/ga-dot.jpg',
      },
      {
        name: 'Cháo bò Tri Tôn',
        description:
          'Cháo bò là món ăn quen thuộc của người dân địa phương huyện Tri Tôn. Gạo để nấu cháo bò phải dùng loại gạo lúa mùa “sóc Khmer” có hương thơm, độ dẻo đặc trưng.',
        origin: 'Tri Tôn, An Giang',
        image: '/images/Foods/chao-bo.jpg',
      },
    ],
  },
];

export const defaultDistricts: District[] = [
  // long xuyên
  {
    id: 'long-xuyen',
    name: 'Thành phố Long Xuyên',
    image: '/images/LongXuyenImgs/den_4_ngon_lx.jpg',
    description:
      'Thành phố Long Xuyên là tỉnh lỵ của tỉnh An Giang, nằm bên bờ sông Hậu. Là trung tâm chính trị, kinh tế, văn hóa của tỉnh An Giang.',
    attractions: [
      {
        name: 'Khu phố chợ Long Xuyên',
        description:
          'Khu vực trung tâm thành phố với nhiều cửa hàng và khu chợ truyền thống, nơi bạn có thể trải nghiệm cuộc sống thường nhật của người dân địa phương.',
        image: '/images/LongXuyenImgs/chonoilx-2.jpg',
        location: '2 Nguyễn Trãi, Mỹ Long, Thành phố Long Xuyên, An Giang',
      },
      {
        name: 'Chợ nổi Long Xuyên',
        description:
          'Những ngôi chùa cổ trong nội ô thành phố Long Xuyên có kiến trúc đẹp và mang đậm nét văn hóa Phật giáo của người dân vùng sông nước.',
        image: '/images/LongXuyenImgs/cho-noi.jpg',
        location: '22 Ngô Thời Nhậm, Thành phố Long Xuyên, tỉnh An Giang',
      },
      {
        name: 'Chùa Ông Bắc (Bắc Đế Miếu)',
        description:
          'Chùa Ông Bắc là một trong những địa điểm du lịch Long Xuyên được nhiều du khách ghé tham quan. Chùa có lịch sử lâu đời và thường được biết đến với một tên gọi khác là Quảng Đông tỉnh Hội Quán.',
        image: '/images/LongXuyenImgs/Chùa_Ông_Bắc_1.jpg',
        location:
          '68 Phạm Hồng Thái, phường Mỹ Long, thành phố Long Xuyên, tỉnh An Giang',
      },
      {
        name: 'Bảo tàng An Giang',
        description:
          'Bảo tàng An Giang là nơi trưng bày hiện vật và các tư liệu lịch sử, văn hóa của tỉnh An Giang.',
        image: '/images/LongXuyenImgs/bao-tang-AG.jpg',
        location:
          '11 Tôn Đức Thắng, phường Mỹ Bình, thành phố Long Xuyên, tỉnh An Giang.',
      },
    ],
    cuisine: [
      {
        name: 'Bún cá Long Xuyên',
        description:
          'Đặc sản nổi tiếng với nước lèo ngọt, chả cá, bún mềm, thêm bông diêu điền, rau sống.',
        image: '/images/LongXuyenImgs/Foods/bun_ca_long_xuyen_1.jpg',
      },
      {
        name: 'Cơm tấm Long Xuyên',
        description:
          'Món cơm tấm đặc trưng của vùng Nam bộ, được phục vụ với sườn nướng, bì, chả, trứng và đồ chua.',
        image: '/images/LongXuyenImgs/Foods/com-tam-LX.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // châu đốc
  {
    id: 'chau-doc',
    name: 'Thành phố Châu Đốc',
    image: '/images/ChauDocImgs/tuong_dai_ca_ba_cd.jpg',
    description:
      'Thành phố Châu Đốc nằm ven biên giới Việt Nam - Campuchia, nổi tiếng với khu di tích Núi Sam và Miếu Bà Chúa Xứ.',
    attractions: [
      {
        name: 'Chợ nổi Châu Đốc',
        description:
          'Khu chợ nổi trên sông, nơi diễn ra các hoạt động giao thương truyền thống của người dân vùng sông nước.',
        image: '/images/ChauDocImgs/cho-noi-CD.jpg',
        location: 'P498+86R, Đa Phước, Châu Đốc, An Giang',
      },
      {
        name: 'Núi Sam (Bà Chúa Xứ)',
        description:
          'Khu di tích linh thiêng với Miếu Bà Chúa Xứ nổi tiếng, là điểm hành hương quan trọng của người dân Nam bộ.',
        image: '/images/ChauDocImgs/Chua-Ba-Chau-Doc-An-Giang-1.jpg',
        location: 'thuộc phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang',
      },
      {
        name: 'Khu du lịch cáp treo Núi Sam',
        description:
          'Khu du lịch cáp treo Núi Sam là hệ thống cáp treo được đầu tư bởi công ty MGA Việt Nam và do các kiến trúc sư Cộng hòa Áo xây dựng. Hệ thống cáp có chiều dài 900m với 37 cabin. Mỗi cabin của khu cáp treo chở được tối đa 8 khách và di chuyển liên tục đưa mọi người lên Núi Sam.',
        image: '/images/ChauDocImgs/cap-treo-nui-sam.jpg',
        location:
          'Khóm Vĩnh Tây 3, phường Núi Sam, Thành phố Châu Đốc, tỉnh An Giang.',
      },
      {
        name: 'Chùa Tây An Núi Sam',
        description:
          'Chùa Tây An được Tổ chức Kỷ lục Việt Nam xác nhận là “ngôi chùa có kiến trúc kết hợp phong cách nghệ thuật Ấn Độ và kiến trúc cổ dân tộc đầu tiên tại Việt Nam” vào năm 1980.',
        image: '/images/ChauDocImgs/chua-tay-an.jpg',
        location: 'Đường Vòng Núi Sam, phường Núi Sam, Châu Đốc, An Giang',
      },
      {
        name: 'Chùa hang',
        description:
          'Chùa Hang (Phước Điền Tự) tọa lạc trên triền núi Sam, là một trong những địa điểm du lịch Châu Đốc cho tín đồ hành hương đến chiêm bái. Xung quanh ngôi chùa được bao bọc bởi núi non hùng vĩ cùng nhiều loài hoa khoe sắc thắm quanh năm, tạo thành một bức tranh nên thơ cho chùa Hang cổ kính.',
        image: '/images/ChauDocImgs/chua-hang-AG.jpg',
        location: 'phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang',
      },
      {
        name: 'Chùa Huỳnh Đạo',
        description:
          'Chùa Huỳnh Đạo sở hữu khuôn viên rộng đến 3.000 m2 với hơn 50 bức tượng Phật bằng đá với nhiều tư thế dáng vẻ khác nhau. Trong đó, phải nhắc đến bức tượng Phật bà Quan âm trong tư thế ngồi thiền cao hơn 30 mét, càng tạo thêm vẻ uy nghi, trang trọng cho ngôi chùa.',
        image: '/images/ChauDocImgs/chua-huynh-dao-chau-doc-1.jpg',
        location:
          'Quốc lộ 91 Tân Lộ Kiều Lương, Vĩnh Đông 2, Châu Đốc, An Giang',
      },
      {
        name: 'Tượng phật Thích Ca ngồi thiền cao 81m Núi Sam',
        description:
          'Tượng Phật Thích Ca cao 81m được đặt trên khu đất rộng 5.500m2, với chi phí đầu tư khoảng 255 tỷ đồng. Sau khi hoàn thành, đây là “tượng Phật ngồi thiền, khắc vào vách đá” cao nhất thế giới.',
        image: '/images/ChauDocImgs/tuong-phat-nui-sam.jpg',
        location: '731 Tân Lộ Kiều Lương, phường Núi Sam, Châu Đốc, An Giang',
      },
      {
        name: 'Victoria Núi Sam Lodge',
        description:
          'Tọa lạc trên sườn núi Sam hùng vĩ, Victoria Nui Sam Lodge sở hữu vị trí đắc địa để du khách hòa mình vào thiên nhiên nguyên sơ, hít thở không khí trong lành và tận hưởng những trải nghiệm độc đáo.',
        image: '/images/ChauDocImgs/victoria-nui-sam.jpg',
        location: 'Khóm Vĩnh Đông 1 , Phường Núi Sam, Châu Đốc, Tỉnh An Giang',
      },
      {
        name: 'Chùa Long Sơn Núi Sam',
        description:
          'Chùa Long Sơn Núi Sam nằm trên đường lên đỉnh Núi Sam, ngôi chùa là một trong những địa điểm du lịch Châu Đốc.',
        image: '/images/ChauDocImgs/chua-long-son.jpg',
        location: 'Xã Vĩnh Phước, Châu Đốc, An Giang',
      },
      {
        name: 'Biệt thự bác sĩ Nu - Địa điểm du lịch Châu Đốc đầy ma mị',
        description:
          'Biệt thự Bác sĩ Nu nằm trên sườn núi Sam, được xây dựng trước năm 1975, ban đầu nơi đây được dùng để nghỉ mát và dưỡng bệnh cho bệnh nhân.',
        image: '/images/ChauDocImgs/biet-thu-bac-si-Nu.jpg',
        location: 'phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Lẩu mắm Châu Đốc',
        description:
          'Món ăn đặc sản từ cá linh kho với mắm, ăn kèm nhiều loại rau và bún.',
        image: 'https://statics.vinpearl.com/lau-mam-chau-doc-2_1632307614.png',
      },
      {
        name: 'Gỏi sầu đâu',
        description:
          'Món gỏi độc đáo được làm từ lá và hoa sầu đâu, chấm cá kho Châu Đốc.',
        image: 'https://i.ytimg.com/vi/-MFuQO3YPzE/maxresdefault.jpg',
      },
      {
        name: 'Bò bảy món Núi Sam',
        description:
          'Gồm lòng bò, bò lúc lắc, bò khìa bánh mì, cháo bò, bò xào lá giang và các món khác từ thịt bò.',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxpPzZsEd1fzOYlNQyoZN0YRoKukMd_6b_A&usqp=CAU',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // tân châu
  {
    id: 'tan-chau',
    name: 'Thị xã Tân Châu',
    image: '/images/TanChauImgs/tan-chau-1.jpg',
    description:
      'Thị xã Tân Châu nằm ở phía bắc tỉnh An Giang, giáp với Campuchia, nổi tiếng với nghề dệt lụa Tân Châu và các di tích lịch sử.',
    attractions: [
      {
        name: 'Dinh Thầy Thím',
        description:
          'Di tích lịch sử liên quan đến nhân vật lịch sử nổi tiếng của vùng, được nhiều du khách tìm đến.',
        image:
          'https://cdn.vietnambiz.vn/2020/1/14/dinh-thay-thim-1578973349233300516101-crop-15789733539311999175537.jpg',
      },
      {
        name: 'Mũi Nai',
        description:
          'Điểm cực bắc của tỉnh An Giang, nơi sông Tiền đổ vào biên giới Việt Nam - Campuchia.',
        image:
          'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/06_2019/mui-nai-ha-tien.jpg',
      },
      {
        name: 'Núi Đèn',
        description:
          'Ngọn núi nhỏ với cảnh quan thiên nhiên đẹp và có giá trị về mặt văn hóa tín ngưỡng.',
        image: 'https://nld.mediacdn.vn/2017/photo-1-1491822028206.jpg',
      },
      {
        name: 'Khu đồi cát ven biên',
        description:
          'Khu vực đồi cát ven biên giới với cảnh quan đặc trưng của vùng.',
        image:
          'https://dulichkhampha24.com/wp-content/uploads/2019/12/doi-cat-bay-mui-ne-2.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Bún cá Tân Châu',
        description:
          'Món bún cá tương tự Long Xuyên nhưng có hương vị riêng của vùng Tân Châu.',
        image:
          'https://thucthan.com/media/2018/06/bun-ca-long-xuyen/bun-ca-long-xuyen.jpg',
      },
      {
        name: 'Bánh bò thốt nốt',
        description:
          'Bánh bò được làm từ đường thốt nốt, đặc sản của vùng Bảy Núi.',
        image:
          'https://cdn.tgdd.vn/Files/2021/08/11/1373699/cach-lam-banh-bo-thot-not-mem-ngot-thom-mui-la-dua-202108111431366402.jpg',
      },
      {
        name: 'Thạch thốt nốt',
        description:
          'Món tráng miệng làm từ đường thốt nốt đặc trưng của vùng Bảy Núi An Giang.',
        image: 'https://i.ytimg.com/vi/Hx-PwK3oras/maxresdefault.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // tịnh biên
  {
    id: 'tinh-bien',
    name: 'Thị xã Tịnh Biên',
    image: '/images/TinhBienImgs/tinh_bien_1.jpg',
    description:
      'Thị xã Tịnh Biên nằm ở phía Tây của tỉnh An Giang, giáp với Campuchia và huyện Tri Tôn, nổi tiếng với chợ biên giới và cảnh quan thiên nhiên.',
    attractions: [
      {
        name: 'Núi Cấm (Thiên Cấm Sơn)',
        description:
          'Nằm ở xã An Hảo, Tịnh Biên, núi Cấm được người dân nơi đây ví như nóc nhà của vùng đồng bằng Sông Cửu Long.',
        image: '/images/TinhBienImgs/nui-cam-1.jpg',
        location: 'Khu du lịch Núi Cấm, An Hòa, Tịnh Biên, An Giang',
      },
      {
        name: 'Chợ Tịnh Biên',
        description:
          'Chợ Tịnh Biên là một trong những khu chợ đầu mối sầm uất nhất vùng Đồng bằng sông Cửu Long. Với vị trí đặc biệt cách cửa khẩu quốc tế Tịnh Biên – Phnom Den (Campuchia) chỉ khoảng 2km, chợ Tịnh Biên An Giang từ lâu đã trở thành điểm giao thương nhộn nhịp giữa Việt Nam và Campuchia.',
        image: '/images/TinhBienImgs/cho-tinh-bien-1.jpg',
        location:
          '350 khóm Xuân Hòa, thị trấn Tịnh Biên, huyện Tịnh Biên, An Giang',
      },
      {
        name: 'Núi dài (Ngọa Long Sơn)',
        description:
          'Cái tên “Núi Dài” bắt nguồn từ dáng hình đặc trưng của ngọn núi, trải dài như một dải lụa mềm mại, ôm trọn vùng đất Tịnh Biên trù phú. Núi dài là núi dài nhất trong vùng Thất Sơn (Bảy Núi) An Giang.',
        image: '/images/TinhBienImgs/nui-dai-1.jpg',
        location: 'Khu du lịch Núi Dài, Tịnh Biên, An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Bò cạp Bảy Núi',
        description:
          'Đặc sản côn trùng chỉ có ở khu vực Bảy Núi, được chế biến theo nhiều cách khác nhau.',
        image: 'https://statics.vinpearl.com/bo-cap-xao-la-me-3_1630904643.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // an phú
  {
    id: 'an-phu',
    name: 'Huyện An Phú',
    image: '/images/AnPhuImgs/an_phu_1.jpg',
    description:
      'Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.',
    attractions: [
      {
        name: 'Vùng sông nước biên giới Campuchia',
        description:
          'Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.',
        image:
          'https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg',
      },
      {
        name: 'Du lịch homestay Đa Phước',
        description:
          'Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.',
        image:
          'https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Đường thốt nốt',
        description:
          'Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.',
        image:
          'https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg',
      },
      {
        name: 'Nước thốt nốt',
        description:
          'Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.',
        image:
          'https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // châu phú
  {
    id: 'chau-phu',
    name: 'Huyện Châu Phú',
    image: '/images/ChauPhuImgs/Tran-Van-Thanh.jpg',
    description:
      'Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.',
    attractions: [
      {
        name: 'Vùng sông nước biên giới Campuchia',
        description:
          'Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.',
        image:
          'https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg',
      },
      {
        name: 'Du lịch homestay Đa Phước',
        description:
          'Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.',
        image:
          'https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Đường thốt nốt',
        description:
          'Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.',
        image:
          'https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg',
      },
      {
        name: 'Nước thốt nốt',
        description:
          'Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.',
        image:
          'https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // châu thành
  {
    id: 'chau-thanh',
    name: 'Huyện Châu Thành',
    image: '/images/ChauThanhImgs/huyen-chau-thanh_8.jpg',
    description:
      'Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.',
    attractions: [
      {
        name: 'Vùng sông nước biên giới Campuchia',
        description:
          'Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.',
        image:
          'https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg',
      },
      {
        name: 'Du lịch homestay Đa Phước',
        description:
          'Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.',
        image:
          'https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Đường thốt nốt',
        description:
          'Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.',
        image:
          'https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg',
      },
      {
        name: 'Nước thốt nốt',
        description:
          'Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.',
        image:
          'https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // phú tân
  {
    id: 'phu-tan',
    name: 'Huyện Phú Tân',
    image: '/images/PhuTanImgs/phu_tan_1.jpg',
    description:
      'Huyện An Phú nằm ở phía Đông Bắc tỉnh An Giang, giáp với Campuchia, thị xã Tân Châu và tỉnh Đồng Tháp, nổi tiếng với vùng sông nước và biên giới.',
    attractions: [
      {
        name: 'Vùng sông nước biên giới Campuchia',
        description:
          'Khu vực sông nước biên giới với phong cảnh đẹp và đời sống văn hóa đặc sắc của cư dân vùng biên.',
        image:
          'https://media.travelmag.vn/files/kemly/2021/11/16/vinh-halong-tren-can-soi-tai-mekong-1-10444.jpeg',
      },
      {
        name: 'Du lịch homestay Đa Phước',
        description:
          'Khu homestay cho phép du khách trải nghiệm cuộc sống của người dân vùng sông nước.',
        image:
          'https://bizweb.dktcdn.net/100/423/653/files/du-lich-mien-tay-can-tho-via-orenia.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Đường thốt nốt',
        description:
          'Đường được làm từ hoa thốt nốt, có vị ngọt đặc trưng và hương thơm tự nhiên.',
        image:
          'https://cdn.tgdd.vn/Files/2021/12/28/1407855/tac-dung-cua-duong-thot-not-va-cach-dung-dung-cach-202112282222026452.jpg',
      },
      {
        name: 'Nước thốt nốt',
        description:
          'Thức uống giải khát từ cây thốt nốt, có vị ngọt thanh và nhiều dưỡng chất.',
        image:
          'https://cdn.tgdd.vn/Files/2018/04/29/1084925/uong-nuoc-thot-not-co-tac-dung-gi-8-cach-su-dung-nuoc-thot-not-2-760x367.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // thoại sơn
  {
    id: 'thoai-son',
    name: 'Huyện Thoại Sơn',
    image: '/images/ThoaiSonImgs/thoai-son-1.jpg',
    description:
      'Huyện Thoại Sơn nằm ở phía nam tỉnh An Giang, nổi tiếng với Óc Eo - di tích lịch sử văn hóa quan trọng của vương quốc Phù Nam cổ.',
    attractions: [
      {
        name: 'Chùa Hang',
        description:
          'Ngôi chùa nằm trong hang núi, có kiến trúc độc đáo và cảnh quan đẹp.',
        image:
          'https://gonsa.vn/uploads/news/2020_10/di-tich-lich-su-chua-hang-an-giang-7.jpg',
      },
      {
        name: 'Núi Ô Thum',
        description:
          'Ngọn núi với cảnh quan thiên nhiên đẹp và nhiều di tích lịch sử văn hóa.',
        image:
          'https://mineviettravel.vn/library/module_new/tintuc_1574922946.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Gà đốt lá chúc Ô Thum',
        description:
          'Gà nướng kiểu Khmer, có hương vị đặc biệt, thơm mùi lá chúc.',
        image:
          'https://cdn3.ivivu.com/2014/10/10-dieu-thu-vi-o-le-hoi-ok-om-bok-cua-nguoi-khmer-iVIVU.com-1.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // tri tôn
  {
    id: 'tri-ton',
    name: 'Huyện Tri Tôn',
    image: '/images/TriTonImgs/tri_ton_1.jpg',
    description:
      'Huyện Tri Tôn nằm ở phía Tây của tỉnh An Giang, giáp với Tịnh Biên và Thoại Sơn, là nơi có cụm núi Thất Sơn nổi tiếng với phong cảnh hùng vĩ và nhiều di tích văn hóa lịch sử.',
    attractions: [
      {
        name: 'Núi Cô Tô (Phụng Hoàng Sơn)',
        description:
          'Núi Cô Tô có khá nhiều tên như: Núi Tô, Phụng Hoàng Sơn và gọi theo tiếng Khmer là Phnom-Ktô. Núi Cô Tô (Phụng Hoàng Sơn) nằm trong dãy Thất Sơn - Bảy Núi nổi tiếng.',
        image: '/images/TriTonImgs/nui-co-to.jpg',
        location: 'Núi Cô Tô, Phú Thọ, Tri Tôn, An Giang',
      },
      {
        name: 'Hồ Tà Pạ',
        description:
          'Hồ nước trong vắt được bao bọc bởi những hàng cây, núi đá. Ngày nắng trong dưới nền trời xanh rọi xuống mặt hồ tạo nên khung cảnh đẹp lung linh. Mặt hồ bằng lặng, khung cảnh hoang sơ được ví như “Tuyệt tình Cốc” của miền Tây.',
        image: '/images/TriTonImgs/ho_ta_pa.jpg',
        location: 'Ta Pa, Núi Tô, Tri Tôn, An Giang',
      },
      {
        name: 'Cánh đồng Tà Pạ',
        description:
          'Theo Kinh nghiệm khám phá cánh đồng Tà Pạ, đến đây vào lúc này, bạn sẽ có cơ hội chiêm ngưỡng cảnh sắc thiên nhiên vô cùng mênh mông bát ngát, tha hồ mà chụp ảnh và tận hưởng mùi hương của lúa.',
        image: '/images/TriTonImgs/canh_dong_ta_pa.jpg',
        location: 'Dưới chân núi Tà Pạ và Cô Tô, Huyện Tri Tôn, tỉnh An Giang.',
      },
      {
        name: 'Hồ Ô Thum',
        description:
          'Ô Thum được biết đến như một con hồ ngăn nước có nhiệm vụ chính là phục vụ cho việc sản xuất nông nghiệp với diện tích khá nhỏ.',
        image: '/images/TriTonImgs/ho_o_thum.jpg',
        location:
          'xã Ô Lâm, huyện Tri Tôn, tỉnh An Giang (dưới chân núi Cô Tô)',
      },
      {
        name: 'Hồ Ô Tà Sóc',
        description:
          'Hồ Ô Tà Sóc An Giang là một trong những điểm đến du lịch nổi bật và kỳ vĩ của vùng Tây Nam Bộ, thu hút du khách bởi vẻ đẹp thiên nhiên hoang sơ, hùng vĩ.',
        image: '/images/TriTonImgs/ho-o-ta-soc.jpg',
        location: 'xã Lương Phi, huyện Tri Tôn, tỉnh An Giang',
      },
      {
        name: 'Chùa Xà Tón',
        description:
          'Chùa có tên Khmer là Xvayton, có lịch sử lâu đời hơn 200 năm là địa điểm du lịch Tri Tôn được nhiều du khách đến tham quan, hành hương.',
        image: '/images/TriTonImgs/chua-xa-ton.jpg',
        location: 'khóm 3, thị trấn Tri Tôn, Tri Tôn, An Giang',
      },
      {
        name: 'Chùa Koh Kas (Cổng trời Tri Tôn)',
        description:
          'Điểm thu hút của Chùa Koh Kas chính là chiếc cổng chùa nằm sừng sững mang đậm dấu ấn thời gian.',
        image: '/images/TriTonImgs/cong-troi-tri-ton-7.jpg',
        location: 'xã Châu Lăng, huyện Tri Tôn, tỉnh An Giang',
      },
      {
        name: 'Chùa Tà Pạ',
        description:
          'Chùa Tà Pạ còn có tên khác là Chùa Núi hay Chùa Chưn - Num theo cách gọi của người Khmer. Chùa theo phái Nam tông hệ của Phật giáo tiểu thừa đặc trưng của văn hóa Khmer.',
        image: '/images/TriTonImgs/chua-ta-pa.jpg',
        location: 'Đồi Tà Pạ, xã Núi Tô, huyện Tri Tôn, tỉnh An Giang',
      },
      {
        name: 'Đồi Tức Dụp',
        description:
          'Tức Dụp là ngọn đồi có nhiều hang sâu, động lớn dựa lưng vào Núi Cô Tô có vị trí cách Thành phố Long Xuyên chừng 70km và biên giới Campuchia tầm 10km.',
        image: '/images/TriTonImgs/Tuc-Dup-Tu-Ngon-Doi.jpg',
        location: 'xã An Tức, huyện Tri Tôn, tỉnh An Giang',
      },
    ],
    cuisine: [
      {
        name: 'Gà đốt lá chúc Ô Thum',
        description:
          'Gà đốt là món ăn truyền thống của người Khmer ở An Giang. Món ăn kèm đĩa gỏi bắp cải chua ngọt hoặc rau sống, dưa leo, chấm với nước chấm lá chúc mằn mặn lạ miệng hay muối tiêu chanh, muối ớt chanh.',
        image: '/images/TriTonImgs/Foods/ga-dot.jpg',
      },
      {
        name: 'Cháo bò Tri Tôn',
        description:
          'Cháo bò là một trong những món ăn nổi bật nhất ở thị trấn Tri Tôn, món cháo được nấu như cháo lòng lợn thông thường nhưng dùng lòng bò: lá sách, gan, phổi, phèo... thêm miếng huyết mềm và thịt bò tái chín.',
        image: '/images/TriTonImgs/Foods/chao-bo.jpg',
      },
      {
        name: 'Bò nướng Tri Tôn',
        description:
          'Cháo bò là một trong những món ăn nổi bật nhất ở thị trấn Tri Tôn, món cháo được nấu như cháo lòng lợn thông thường nhưng dùng lòng bò: lá sách, gan, phổi, phèo... thêm miếng huyết mềm và thịt bò tái chín.',
        image: '/images/TriTonImgs/Foods/bo-nuong.jpg',
      },
      {
        name: 'Đu đủ đâm',
        description:
          'Đây là gỏi đu đủ của người Campuchia. Ở Việt Nam, tên gọi này xuất phát từ việc món được chế biến bằng cách đâm (giã) trong cối.',
        image: '/images/TriTonImgs/Foods/du-du-dam.jpg',
      },
      {
        name: 'Thốt nốt sữa',
        description:
          'Nước thốt nốt để tủ đông lạnh cho đến khi sền sệt như đá bào, sau đó để ra ly cho vào đó cái thốt nốt, chế vào ly 1 ít sữa bò cùng đậu phộng.',
        image: '/images/TriTonImgs/Foods/thot-not-sua.jpeg',
      },
      {
        name: 'Bánh bò thốt nốt',
        description:
          'Bánh bò thốt nốt được làm từ cây thốt nốt – loài cây gắn liền với cuộc sống của người Khmer.',
        image: '/images/TriTonImgs/Foods/banh-bo-thot-not.jpeg',
      },
    ],
    video: '/videos/gioi_thieu_tri_ton_1.mp4',
  },
  // chợ mới
  {
    id: 'cho-moi',
    name: 'Huyện Chợ Mới',
    image: '/images/ChoMoiImgs/cho-moi-1.jpg',
    description:
      'Huyện Tri Tôn nằm ở phía Tây của tỉnh An Giang, giáp với Tịnh Biên và Thoại Sơn, là nơi có cụm núi Thất Sơn nổi tiếng với phong cảnh hùng vĩ và nhiều di tích văn hóa lịch sử.',
    attractions: [
      {
        name: 'Núi Cấm (Thiên Cẩm Sơn)',
        description:
          'Ngọn núi cao nhất trong dãy Thất Sơn, có khí hậu mát mẻ, nhiều chùa chiền và cảnh quan đẹp.',
        image: 'https://statics.vinpearl.com/nui-cam-an-giang-2_1630904958.jpg',
      },
      {
        name: 'Núi Cô Tô',
        description:
          'Ngọn núi trong dãy Thất Sơn với nhiều hang động và di tích lịch sử.',
        image:
          'https://statics.vinpearl.com/nui-co-to-an-giang-0_1630905144.jpg',
      },
      {
        name: 'Hồ Thủy Liêm',
        description:
          'Hồ nước lớn nằm dưới chân núi Cấm, là điểm du lịch sinh thái hấp dẫn.',
        image:
          'https://statics.vinpearl.com/Ho-Soai-So-An-Giang-2_1630905338.jpg',
      },
    ],
    cuisine: [
      {
        name: 'Bánh canh bò viên Bảy Núi',
        description:
          'Món bánh canh được nấu với nước dùng từ xương bò và ăn kèm với bò viên.',
        image:
          'https://cdn.tgdd.vn/Files/2022/01/14/1411033/cach-lam-banh-canh-bot-gao-dam-vi-thom-ngon-va-beo-ngay-202201141411543442.jpg',
      },
      {
        name: 'Cháo bò Tri Tôn',
        description:
          'Cháo nấu từ gạo Sóc Khmer, ăn kèm trái chúc tạo vị đặc trưng chua nhẹ.',
        image:
          'https://statics.vinpearl.com/chao-ga-nam-huong-sapa-0_1634895251.jpg',
      },
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];
