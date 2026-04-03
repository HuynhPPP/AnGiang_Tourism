import { Festival } from '../types';
import { getImgUrl } from './utils';

export const defaultFestivals: Festival[] = [
  {
    id: 'via-ba-chua-xu',
    name: 'Lễ hội Vía Bà Chúa Xứ Núi Sam',
    date: '22 - 27 tháng 4 Âm lịch',
    month: 4,
    location: 'Phường Núi Sam, TP. Châu Đốc',
    description: 'Một trong những lễ hội tín ngưỡng dân gian lớn nhất Tây Nam Bộ, thu hút hàng triệu du khách đến hành hương mỗi năm.',
    images: [
      getImgUrl('ChauDocImgs/viaba1.jpg'),
      getImgUrl('ChauDocImgs/viaba2.jpg'),
    ],
    badge: 'Lễ hội lớn nhất năm'
  },
  {
    id: 'dua-bo-bay-nui',
    name: 'Lễ hội Đua Bò Bảy Núi',
    date: 'Dịp lễ Sene Dolta (chữ Khmer) khoảng tháng 8 - tháng 9',
    month: 9,
    location: 'Khu vực Bảy Núi (Tịnh Biên, Tri Tôn)',
    description: 'Là lễ hội mang đậm bản sắc văn hoá truyền thống của đồng bào dân tộc Khmer vùng Bảy Núi, vô cùng sôi động và kịch tính.',
    images: [
      getImgUrl('TriTonImgs/duabo1.jpg'),
    ],
    badge: 'Đậm chất miền Tây'
  },
  {
    id: 'ramadan-cham',
    name: 'Tháng chay Ramadan Chăm',
    date: 'Tháng 9 Hồi lịch',
    month: 9, // roughly
    location: 'Các làng Chăm (Tân Châu, An Phú)',
    description: 'Tháng linh thiêng nhất của người Chăm Islam ở An Giang, nơi có thể trải nghiệm không gian văn hóa Hồi giáo đặc sắc.',
    images: [
      getImgUrl('TanChauImgs/langcham.jpg'),
    ],
  },
  {
    id: 'ton-duc-thang',
    name: 'Lễ kỷ niệm Ngày sinh Chủ tịch Tôn Đức Thắng',
    date: '20 tháng 8',
    month: 8,
    location: 'Xã Mỹ Hòa Hưng, TP. Long Xuyên',
    description: 'Sự kiện mang ý nghĩa lịch sử sâu sắc, tưởng nhớ và tôn vinh Chủ tịch Tôn Đức Thắng, thu hút đông đảo tầng lớp nhân dân viếng thăm.',
    images: [
      getImgUrl('LongXuyenImgs/bacton.jpg'),
    ],
  }
];
