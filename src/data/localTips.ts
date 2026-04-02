import type { LocalTip } from '@/types';
import { getImgUrl } from './utils';

export const localTipsFood: LocalTip[] = [
  {
    id: 1,
    title: 'Món ăn đặc sản',
    description:
      'Món ăn đặc sản của An Giang là cơm tấm Long Xuyên, cơm lá sen và bánh giò.',
    image: getImgUrl('LongXuyenImgs/Foods/com-tam-LX.jpg'),
  },
];