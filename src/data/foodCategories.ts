import type { FoodCategory } from '@/types';
import { getImgUrl } from './utils';

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
        image: getImgUrl('LongXuyenImgs/Foods/com-tam-LX.jpg'),
      },
      {
        name: 'Cơm Lá Sen',
        description:
          'Cơm được nấu trong lá sen, tạo hương vị thơm ngon đặc biệt. Thường được phục vụ kèm với các món đặc sản địa phương.',
        origin: 'Vùng đồng bằng sông Cửu Long, bao gồm An Giang',
        image: getImgUrl('Foods/com-hap-la-sen.jpg'),
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
        image: getImgUrl('LongXuyenImgs/Foods/bun_ca_long_xuyen_1.jpg'),
      },
      {
        name: 'Bún mắm Châu Đốc',
        description:
          'Bún Mắm Châu Đốc là một biểu tượng của ẩm thực miền Tây, nổi tiếng với hương vị đậm đà đặc trưng của mắm. Nước lèo bún mắm được nấu từ nhiều loại mắm cá linh, mắm sặc, cùng với xương heo, tôm, mực, cá, tạo nên một nồi nước dùng sánh đặc, ngọt thanh và thơm lừng mà không hề tanh.',
        origin: 'Châu Đốc, An Giang',
        image: getImgUrl('Foods/bun-mam.jpg'),
      },
      {
        name: 'Bún Kèn',
        description:
          'Bún Kèn An Giang cũng là món ăn lâu đời và có tiếng tại vùng đất Châu Đốc. Món ngon này được chế biến từ những nguyên liệu có sẵn của vùng sông nước miền Tây.',
        origin: 'Châu Đốc, An Giang',
        image: getImgUrl('Foods/bun-ken.jpg'),
      },
      {
        name: 'Bánh canh Khmer',
        description:
          'Bánh canh Khmer (hay còn gọi là bánh canh Vĩnh Trung) rất được các bạn gần xa ưa chuộng nhé! Bắt nguồn từ xã Vĩnh Trung, huyện Tịnh Biên, món ăn này do một người phụ nữ Khmer tên là Neang Oanh Na chế biến ra cách đây hàng chục năm.',
        origin: 'An Giang',
        image: getImgUrl('Foods/banh-canh-khmer.jpeg'),
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
        image: getImgUrl('Foods/Mam/mam_chau_doc.jpg'),
      },
      {
        name: 'Lẩu mắm',
        description:
          'Món lẩu đặc trưng với nước dùng từ mắm, rau và các loại thịt. Món ăn đặc sản của vùng đồng bằng sông Cửu Long.',
        origin: 'Vùng đồng bằng sông Cửu Long, bao gồm An Giang',
        image: getImgUrl('Foods/Mam/lau-mam.jpeg'),
      },
      {
        name: 'Mắm cá linh',
        description:
          'Mắm ruốc dùng làm gia vị hoặc nguyên liệu nấu ăn. Phiên bản An Giang có hương vị đặc trưng riêng.',
        origin: 'An Giang',
        image: getImgUrl('Foods/Mam/mam-ca-linh.jpg'),
      },
      {
        name: 'Mắm Thái',
        description:
          'Mắm thái An Giang, đặc biệt là mắm thái Châu Đốc, là một món đặc sản nổi tiếng của vùng An Giang, được làm từ cá lóc và đu đủ, kết hợp cùng các loại gia vị tạo nên hương vị thơm ngon đặc trưng.',
        origin: 'Vùng đồng bằng sông Cửu Long',
        image: getImgUrl('Foods/Mam/mam-thai.jpg'),
      },
      {
        name: 'Mắm cá lóc',
        description:
          'Mắm cá lóc là một món đặc sản nổi tiếng của vùng Châu Đốc, An Giang, được làm từ cá lóc tươi ngon và các nguyên liệu truyền thống.',
        origin: 'Châu Đốc, An Giang',
        image: getImgUrl('Foods/Mam/mam-ca-loc.jpg'),
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
        image: getImgUrl('Foods/heo-quay.jpg'),
      },
      {
        name: 'Bánh tằm bì Tân Châu',
        description:
          'Món bánh tằm đặc trưng của Tân Châu, ăn kèm với bì heo và nước cốt dừa.',
        origin: 'Tân Châu, An Giang',
        image: getImgUrl('Foods/banh-tam-bi.jpg'),
      },
      {
        name: 'Bánh xèo núi Cấm',
        description:
          'Bánh xèo được ăn kèm với các loại rau rừng đặc trưng của vùng Thất Sơn.',
        origin: 'Tịnh Biên, An Giang',
        image: getImgUrl('Foods/banh-xeo-nui-cam.jpg'),
      },
      {
        name: 'Cơm nị - cà púa',
        description:
          'Món ăn truyền thống của người Chăm, được làm từ gạo nếp và các loại gia vị đặc trưng.',
        origin: 'An Phú, An Giang',
        image: getImgUrl('Foods/com-ni-ca-pua.jpg'),
      },
      {
        name: 'Thịt bò bảy món',
        description:
          'Một đặc sản vùng Châu Đốc khác cũng được khá nhiều thực khách ưa chuộng là món bò bảy món núi Sam.',
        origin: 'Châu Đốc, An Giang',
        image: getImgUrl('Foods/bo-7-mon.jpg'),
      },
      {
        name: 'Bánh bò thốt nốt',
        description:
          'Đây là một món được nhắc đến khá nhiều khi bạn đến vùng An Giang, bánh bò được làm bằng đường thốt nốt - loài cây đặc trưng của xứ An Giang.',
        origin: 'An Giang',
        image: getImgUrl('Foods/banh-bo-thot-not.jpg'),
      },
      {
        name: 'Gà đốt lá chúc Ô Thum',
        description:
          'Bất kì ai đặt chân đến vùng đất An Giang cũng đều phải thử món gà đốt lá chúc Ô Thum huyền thoại. Món ăn có nguồn gốc từ Campuchia. Lá chúc như một loại gia vị đặc biệt tạo nên hương vị đặc trưng không lẫn vào đầu được cho món gà nướng.',
        origin: 'Tri Tôn, An Giang',
        image: getImgUrl('Foods/ga-dot.jpg'),
      },
      {
        name: 'Cháo bò Tri Tôn',
        description:
          'Cháo bò là món ăn quen thuộc của người dân địa phương huyện Tri Tôn. Gạo để nấu cháo bò phải dùng loại gạo lúa mùa “sóc Khmer” có hương thơm, độ dẻo đặc trưng.',
        origin: 'Tri Tôn, An Giang',
        image: getImgUrl('Foods/chao-bo.jpg'),
      },
    ],
  },
];