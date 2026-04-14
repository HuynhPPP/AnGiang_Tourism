import { Festival } from '../types';
import { getImgUrl, getImgUrls, getVideoUrl } from './utils';

export type FestivalTimelineItem = {
  time: string;
  events: string[];
};

export const defaultFestivals: Festival[] = [
  {
    id: 'nghinh-ong-tong-tau',
    name: 'Lễ Nghinh Ông (Quá Xương) & Tống Tàu (Hành Xác)',
    date: 'Rằm Tháng Giêng',
    month: 1,
    location: 'Núi Sam (Châu Đốc) và Quan Đế Miếu (Tân Châu)',
    description: 'Lễ Nghinh Ông hay Lễ Rước Ông Châu Xương tại Núi Sam và Lễ Hội Tống Tàu (Lễ Hành Xác) đặc sắc tại Tân Châu.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
    videoUrl: getVideoUrl('Chau_Doc/gioi-thieu-mieu-ba.mp4'),
  },
  {
    id: 'cau-an-tong-binh',
    name: 'Lễ Cầu An, Tống Binh & Cúng Miếu Ông Tà',
    date: '19 - 20 Tháng Giêng âm lịch',
    month: 1.5,
    location: 'Vệ Thủy Thần Miếu (Châu Đốc) & Xã Tà Đảnh (Tri Tôn)',
    description: 'Lễ Cầu An & Tống Binh tại Châu Đốc và Lễ cúng Miếu Ông Tà truyền thống tại Tri Tôn.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'duc-co-quan',
    name: 'Lễ Đức Cố Quản Trần Văn Thành',
    date: '20, 21, 22 tháng 2 âm lịch',
    month: 2,
    location: 'Châu Phú, Châu Thành, Phú Tân',
    description: 'Diễn ra tại Đền Thờ Đức Cố Quản (Châu Phú), Dinh Sơn Trung (Châu Thành) và Dinh Chánh Quản Cơ (Phú Tân).',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'gio-cha-diep',
    name: 'Lễ Giỗ Cha Phanxico Trương Bửu Diệp',
    date: '11 & 12 tháng 3 dương lịch',
    month: 3,
    location: 'Nhà thờ Giáo Xứ Cồn Phước (Chợ Mới)',
    description: 'Lễ giỗ được tổ chức tại nơi Cha Diệp chào đời, thu hút nhiều tín đồ công giáo.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'ky-yen-thoai-ngoc-hau',
    name: 'Lễ hội Kỳ Yên đình Thần Thoại Ngọc Hầu',
    date: 'Mùng 10 đến 12 tháng 3 âm lịch',
    month: 3.2,
    location: 'Thoại Sơn, An Giang',
    description: 'Một trong những Lễ hội kỳ yên lớn nhất của tỉnh An Giang tưởng nhớ công lao khai phá của Thoại Ngọc Hầu.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'gio-duc-phat-trum',
    name: 'Lễ giỗ Đức Phật Trùm Tà Pônh',
    date: '12 tháng 3 âm lịch',
    month: 3.3,
    location: 'Lương Phi, Tri Tôn',
    description: 'Lễ giỗ nhằm tưởng nhớ Đức Phật Trùm tại vùng đất Tri Tôn linh thiêng.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'ramadan-cham',
    name: 'Tháng chay Ramadan',
    date: 'Khoảng tháng 3 đến tháng 4 dương lịch (Hồi Lịch)',
    month: 3.5,
    location: 'Các làng Chăm An Giang',
    description: 'Tháng linh thiêng của cộng đồng người Chăm Islam. Kết thúc bằng lễ hội Eid Fitri.',
    images: [getImgUrl('TanChauImgs/langcham.jpg')],
  },
  {
    id: 'chol-chnam-thmay',
    name: 'Lễ hội Chol Chnam Thmay',
    date: '14 tháng 4 - 16 tháng 4 dương lịch',
    month: 4,
    location: 'Tri Tôn, Tịnh Biên, Thoại Sơn, Châu Thành',
    description:
      `Chol Chnam Thmay (hoặc Chaul Chnam Thmay, Choul Chnam Thmey, Chôl Chnăm Thmây) là lễ hội mừng năm mới theo lịch cổ truyền của dân tộc Khmer. Chôl nghĩa là Vào và Chnăm Thmay là Năm Mới. Lễ Chôl Chnăm Thmay cũng là những ngày Tết của Campuchia, Lào, Thái Lan, Myanmar, Sri Lanka.

Ngoài tôn giáo chính là Phật giáo, người Khmer còn tin rằng mỗi năm có một vị thần trên trời (Têvôđa) được sai xuống để chăm lo cho cuộc sống và con người trong năm đó, hết năm lại về trời để vị thần khác xuống hạ giới. Những ngày này trở thành, lễ hội truyền thống của cả cộng đồng. Tổ chức nhiều trò vui như đốt đèn trời, đốt ông lói, đánh quay lửa... Các cụ già kể cổ tích, thần thoại, chuyện cũ cho con cháu nghe.

Theo quan niệm của người Khmer, mỗi năm sẽ được 1 trong 7 vị nữ thần cai quản. Và vào thời khắc giao thừa, mà năm nay rơi vào 10 giờ 48 phút ngày 14.4, bà con sẽ cùng nhau làm lễ đón vị thần hạ phàm để cai quản năm mới. Đoàn rước sẽ đi 3 vòng quanh chánh điện rồi thực hành nghi thức đón năm mới, cầu cho một năm bình an tốt lành. Chol Chnam Thmay!`,
    images: getImgUrls(
      'Mua-le-hoi/chol-chnam-thmay/1.jpg',
      'Mua-le-hoi/chol-chnam-thmay/2.jpg',
      'Mua-le-hoi/chol-chnam-thmay/3.jpg',
      'Mua-le-hoi/chol-chnam-thmay/4.jpg',
      'Mua-le-hoi/chol-chnam-thmay/5.jpg',
      'Mua-le-hoi/chol-chnam-thmay/6.jpg',
      'Mua-le-hoi/chol-chnam-thmay/7.jpg',
    ),
    videoUrl: getVideoUrl('Mua-le-hoi/chol-chnam-thmay/chol-chnam-thmay.mp4'),
  },
  {
    id: 'gio-ong-ba-thoi',
    name: 'Lễ giỗ ông Ba Thới',
    date: 'Mùng 7 đến 9 tháng 4 âm lịch',
    month: 4.2,
    location: 'Xã Kiến An, huyện Chợ Mới',
    description: 'Tưởng nhớ một chí sĩ yêu nước thời kháng chiến chống Pháp tại phủ thờ ông Ba Thới.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'via-ba-chua-xu',
    name: 'Lễ hội Vía Bà Chúa Xứ Núi Sam',
    date: 'Từ 22 đến 27 tháng 4 âm lịch',
    month: 4.5,
    location: 'Phường Núi Sam, TP. Châu Đốc',
    description: `Lễ hội Vía Bà Chúa Xứ Núi Sam là một lễ hội lớn, mang đậm bản sắc văn hóa của cư dân vùng Tây Nam Bộ diễn ra từ ngày 22 - 27/4 (âm lịch) hàng năm, tại phường Núi Sam (thành phố Châu Đốc).

Trong tín ngưỡng của người Kinh, Bà Chúa Xứ nằm trong hệ thống Thánh Mẫu, được tôn thờ trong điện thần và tổ chức các thực hành liên quan như lễ hội, tế lễ và các hình thức diễn xướng dân gian khác. Theo truyền thuyết, Bà Chúa Xứ là người được Ngọc Hoàng sai xuống cứu dân độ thế, canh giữ bờ cõi. Bà cũng là một trong 6 nữ thần bất tử theo tín ngưỡng dân gian (Bà Chúa Bầu, Bà Chúa Liễu, Bà Chúa Tó, Bà Chúa Kho, Bà Chúa Ngọc, Bà Chúa Xứ).

Lễ hội thể hiện bản sắc và sự kế tục của cộng đồng người Kinh trong tiến trình giao lưu tiếp biến văn hóa với người Hoa, Khmer, Chăm. Lễ hội tôn vinh Bà Chúa Xứ cũng là dịp người dân thể hiện tâm thức “uống nước nhớ nguồn”, sự tri ân, tôn kính đối với bà. Theo thời gian, đi viếng bà không chỉ có người dân thành phố Châu Đốc, vùng Tây Nam Bộ, mà người dân khắp mọi miền đất nước. Bên cạnh phần lễ, địa phương còn tổ chức phần hội và các hoạt động văn hóa - thể thao, trò chơi, diễn xướng dân gian nhằm phục vụ và đáp ứng nhu cầu của người dân, du khách.`,
    images: getImgUrls(
      'Mua-le-hoi/via-ba-chua-xu/1.jpg',
      'Mua-le-hoi/via-ba-chua-xu/2.jpg',
      'Mua-le-hoi/via-ba-chua-xu/3.jpg',
      'Mua-le-hoi/via-ba-chua-xu/4.jpg',
      'Mua-le-hoi/via-ba-chua-xu/5.jpg',
      'Mua-le-hoi/via-ba-chua-xu/6.jpg',
      'Mua-le-hoi/via-ba-chua-xu/7.jpg',
      'Mua-le-hoi/via-ba-chua-xu/8.jpg',
      'Mua-le-hoi/via-ba-chua-xu/9.jpg',
      'Mua-le-hoi/via-ba-chua-xu/10.jpg',
      'Mua-le-hoi/via-ba-chua-xu/11.jpg',
    ),
    videoUrl: getVideoUrl('Mua-le-hoi/via-ba-chua-xu/le-hoi-via-ba.mp4'),
    badge: 'Lễ hội lớn nhất năm'
  },
  {
    id: 'gio-ba-co-quan',
    name: 'Lễ giỗ Bà Cố Quản Nguyễn Thị Thạnh',
    date: 'Mùng 5 tháng 5 âm lịch',
    month: 5,
    location: 'Trại Ruộng Bửu Hương Các',
    description: 'Lễ giỗ vợ của Đức Cố Quản Trần Văn Thành.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'ky-yen-binh-thuy',
    name: 'Lễ Hội Kỳ Yên Đình Bình Thủy',
    date: 'Mùng 8 – 11 tháng 5 âm lịch',
    month: 5.2,
    location: 'Huyện Châu Phú',
    description: 'Sự kiện Cúng đình vui và độc đáo nhất Miền Tây với hoạt động Múa mọi cổ vũ Đua thuyền.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'dai-le-pghh',
    name: 'Đại Lễ Phật Giáo Hòa Hảo 18/5',
    date: '18 tháng 5 âm lịch',
    month: 5.5,
    location: 'An Hòa Tự và Tổ Đình PGHH, Phú Tân',
    description: 'Kỷ niệm ngày Đức Huỳnh Giáo chủ khai sáng đạo Phật Giáo Hòa Hảo (18/5/1939).',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'gio-ba-quan-thuong-dang',
    name: 'Lễ Giỗ Ba Quan Thượng Đẳng',
    date: '25, 26, 27 tháng 6 âm lịch',
    month: 6,
    location: 'Phủ Thờ Nguyễn Tộc (Bình Phước Xuân, Chợ Mới)',
    description: 'Lễ giỗ tại Phủ Thờ Nguyễn Tộc tưởng nhớ các quan Thượng Đẳng.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'gio-phat-thay-tay-an',
    name: 'Lễ giỗ Phật thầy Tây An',
    date: '10-11-12 tháng 8 âm lịch',
    month: 8,
    location: 'Chùa Thới Sơn (Thới Sơn, Tịnh Biên)',
    description: 'Tưởng nhớ Phật thầy Tây An người có công lớn trong việc khai sáng vùng đạo Bảy Núi.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'gio-nguyen-trung-truc',
    name: 'Lễ giỗ ông Nguyễn Trung Trực',
    date: '26-27-28 tháng 8 âm lịch',
    month: 8.5,
    location: 'Dinh Nguyễn Trung Trực (Long Giang, Chợ Mới)',
    description: 'Lễ giỗ tưởng nhớ anh hùng dân tộc Nguyễn Trung Trực.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'dua-bo-bay-nui',
    name: 'Lễ Sene Dolta & Đua Bò Bảy Núi',
    date: '29/8 đến 1/9 âm lịch',
    month: 8.8,
    location: 'Tri Tôn và Tịnh Biên (Chùa Rô)',
    description: 'Vu Lan Báo Hiếu của người Khmer, nổi bật với Lễ Hội Đua Bò Bảy Núi đặc trưng.',
    images: [getImgUrl('TriTonImgs/duabo1.jpg')],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    badge: 'Đậm chất miền Tây'
  },
  {
    id: 'gio-duc-bon-su',
    name: 'Lễ Giỗ đức Bổn sư Ngô Tự Lợi',
    date: '11 tháng 10 âm lịch',
    month: 10,
    location: 'Chùa Tam Bửu – Phi Lai (Ba Chúc, Tri Tôn)',
    description: 'Lễ giỗ tôn kính đạo đạo Bổn Sư tại cụm di tích lịch sử Ba Chúc.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'mua-nuoc-noi',
    name: 'Lễ Hội Mùa Nước Nổi An Giang',
    date: 'Khoảng tháng 10 âm lịch',
    month: 10.5,
    location: 'Châu Phú, An Giang',
    description: 'Tôn vinh và phát huy giá trị văn hóa mùa nước nổi của người dân miền Tây Nam Bộ.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'gio-ba-cai-nai',
    name: 'Lễ giỗ Mộ Bà Cái Nai',
    date: '28, 29 tháng 10 âm lịch',
    month: 10.8,
    location: 'Rạch Cái Nai, xã Hội An (Chợ Mới)',
    description: 'Lễ giỗ tại khu Mộ Bà linh thiêng.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'ngay-truyen-thong',
    name: 'Ngày truyền thống tỉnh An Giang',
    date: '22 tháng 11 dương lịch',
    month: 11,
    location: 'Toàn tỉnh An Giang',
    description: 'Tỉnh An Giang được vua Minh Mệnh quyết định thành lập vào ngày 22/11/1832.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  },
  {
    id: 'dan-sinh-pghh',
    name: 'Đại Lễ Đản sinh Huỳnh Giáo chủ',
    date: '25 tháng 11 âm lịch',
    month: 11.5,
    location: 'An Hòa Tự và Tổ Đình PGHH, Phú Tân',
    description: 'Đại lễ trọng thể của Phật giáo Hòa Hảo kỷ niệm ngày sinh của người khai sáng Đạo.',
    images: [getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')],
  }
];

export const allFestivalsTimeline: FestivalTimelineItem[] = [
  {
    time: "Rằm Tháng Giêng",
    events: [
      "Lễ Nghinh Ông hay còn gọi là Lễ Rước Ông Châu Xương tại Núi Sam, thành phố Châu Đốc.",
      "Lễ Hội Tống Tàu (có nghi thức hành xác nên nhiều người gọi là Lễ Hành Xác) tại Quan Đế Miếu (thị xã Tân Châu)."
    ]
  },
  {
    time: "19 - 20 Tháng Giêng âm lịch",
    events: [
      "Lễ Cầu An & Tống Binh ở Di tích lịch sử cấp tỉnh Vệ Thủy Thần Miếu, đường Châu Long, phường Vĩnh Mỹ, thành phố Châu Đốc.",
      "Lễ cúng Miếu Ông Tà tại xã Tà Đảnh (Tri Tôn, An Giang)."
    ]
  },
  {
    time: "20, 21, 22 tháng 2 âm lịch",
    events: [
      "Lễ Đức Cố Quản Trần Văn Thành, diễn ra tại 3 địa điểm chính:",
      "+ Đền Thờ Đức Cố Quản Trần Văn Thành, Bửu Hương Tự hay còn gọi là Chùa Láng (Láng Linh) ở Thạnh Mỹ Tây, Châu Phú.",
      "+ Dinh Sơn Trung (lò rèn Bảy Thưa) ở Vĩnh An, Châu Thành.",
      "+ Dinh Chánh Quản Cơ Trần Văn Thành tại Phú Bình, Phú Tân."
    ]
  },
  {
    time: "11 & 12 tháng 3 dương lịch",
    events: [
      "Lễ Giỗ Cha Phanxico Trương Bửu Diệp được tổ chức tại Nhà thờ Giáo Xứ Cồn Phước (Chợ Mới, An Giang), đây là nơi Cha Diệp chào đời."
    ]
  },
  {
    time: "Mùng 10 đến 12 tháng 3 âm lịch",
    events: [
      "Lễ hội Kỳ Yên đình Thần Thoại Ngọc Hầu tại Thoại Sơn, An Giang. Đây là một trong những Lễ hội kỳ yên lớn nhất của tỉnh An Giang."
    ]
  },
  {
    time: "12 tháng 3 âm lịch",
    events: [
      "Lễ giỗ của Đức Phật Trùm Tà Pônh ở Lương Phi, Tri Tôn."
    ]
  },
  {
    time: "Khoảng tháng 3 đến tháng 4 dương lịch",
    events: [
      "Tháng lễ Ramadan của cộng đồng người Chăm An Giang (do tính theo Hồi Lịch nên có sự chênh lệch ngày so với dương lịch), sau khi kết thúc tháng nhịn Ramadan sẽ có một buổi lễ để đánh dấu sự kết thúc của tháng gọi là Eid Fitri."
    ]
  },
  {
    time: "Giữa tháng 4 dương lịch",
    events: [
      "Lễ hội Chol Chnam Thmay của bà con Khmer, thu hút đông đảo du khách đến tham gia Lễ hội Té Nước tại các Chùa, các Phum Sóc Khmer ở Tri Tôn, Tịnh Biên, Thoại Sơn, Châu Thành."
    ]
  },
  {
    time: "Mùng 7 đến 9 tháng 4 âm lịch",
    events: [
      "Lễ giỗ ông Ba Thới (một chí sĩ yêu nước thời kháng chiến chống Pháp) tại phủ thờ ông Ba Thới tại xã Kiến An, huyện Chợ Mới, tỉnh An Giang."
    ]
  },
  {
    time: "Từ 22 đến 27/4 âm lịch",
    events: [
      "Lễ Hội Vía Bà Chúa Xứ Núi Sam (Châu Đốc), đây có thể xem là Lễ Hội lớn nhất trong năm tại An Giang, được Bộ Văn hóa Thể thao và Du lịch đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia vào năm 2014."
    ]
  },
  {
    time: "Mùng 5 tháng 5 ÂL",
    events: [
      "Lễ giỗ Bà Cố Quản Nguyễn Thị Thạnh vợ của Đức Cố Quản Trần Văn Thành tại Trại Ruộng Bửu Hương Các."
    ]
  },
  {
    time: "Mùng 8 – 11/5 âm lịch",
    events: [
      "Lễ Hội Kỳ Yên Đình Bình Thủy (huyện Châu Phú), lễ kỳ yên có hoạt động Múa mọi cổ vũ Đua thuyền có thể nói đây là sự kiện Cúng đình vui và độc đáo nhất Miền Tây."
    ]
  },
  {
    time: "18/5 âm lịch",
    events: [
      "Đại Lễ PGHH 18 tháng 5, kỷ niệm ngày Đức Huỳnh Giáo chủ khai sáng đạo Phật Giáo Hòa Hảo (18/5/1939 năm Kỷ Mão), được tổ chức tại An Hòa Tự và Tổ Đình PGHH ở Phú Tân, An Giang."
    ]
  },
  {
    time: "25, 26, 27 tháng 6 âm lịch",
    events: [
      "Lễ Giỗ Ba Quan Thượng Đẳng tại Phủ Thờ Nguyễn Tộc (Xã Bình Phước Xuân, huyện Chợ Mới, tỉnh An Giang)."
    ]
  },
  {
    time: "10-11-12 tháng 8 âm lịch",
    events: [
      "Lễ giỗ Phật thầy Tây An Đoàn Minh Huyên tại Chùa Thới Sơn (phường Thới Sơn, tx Tịnh Biên)."
    ]
  },
  {
    time: "26-27-28/8 âm lịch",
    events: [
      "Lễ giỗ ông Nguyễn Trung Trực được tổ chức tại Ngôi thờ Nguyễn Trung Trực hay còn gọi là Dinh Nguyễn Trung Trực (gần chùa Tây An Cổ Tự, xã Long Giang, Chợ Mới, An Giang)."
    ]
  },
  {
    time: "29/8 đến 1/9 âm lịch",
    events: [
      "Lễ Sene Dolta của bà con Khmer (Sen Dol Ta hay còn gọi là ngày Lễ Vu Lan Báo Hiếu), nổi bật với Lễ Hội Đua Bò Bảy Núi được tổ chức tại sân đua bò huyện Tri Tôn và sân đua bò Chùa Rô (An Cư, Tịnh Biên)."
    ]
  },
  {
    time: "11/10 âm lịch",
    events: [
      "Lễ Giỗ đức Bổn sư Ngô Tự Lợi tại Chùa Tam Bửu – Phi Lai ở Ba Chúc, Tri Tôn."
    ]
  },
  {
    time: "Khoảng tháng 10 âm lịch",
    events: [
      "Lễ Hội Mùa Nước Nổi An Giang. Lễ hội này được tổ chức lần 1 rất thành công vào năm 2023 tại Châu Phú, An Giang."
    ]
  },
  {
    time: "28, 29 tháng 10 âm lịch",
    events: [
      "Lễ giỗ Mộ Bà Cái Nai tại Mộ Bà tọa lạc tại rạch Cái Nai, ấp An Bình, xã Hội An (huyện Chợ Mới)."
    ]
  },
  {
    time: "22 tháng 11",
    events: [
      "Ngày truyền thống tỉnh An Giang (tỉnh An Giang được vua Minh Mệnh quyết định thành lập vào ngày 22/11/1832)."
    ]
  },
  {
    time: "25/11 âm lịch",
    events: [
      "Đại Lễ 25 tháng 11 kỷ niệm Ngày Đản sinh Đức Huỳnh Giáo chủ Phật giáo Hòa Hảo được tổ chức tại An Hòa Tự và Tổ Đình PGHH ở Phú Tân, An Giang."
    ]
  }
];
