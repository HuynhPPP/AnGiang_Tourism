import { Card, CardContent, CardTitle } from '@/components/ui/card';

export function FoodGuide() {
  return (
    <Card className='shadow-xl bg-white border border-[#f7d9aa] overflow-hidden'>
            <div className='bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white p-6'>
              <CardTitle className='text-2xl font-display font-bold'>
                🍴 Hướng Dẫn Ẩm Thực Cho Du Khách
              </CardTitle>
            </div>
            <CardContent className='p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#fff8ec] to-white'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
                <div className='space-y-3 sm:space-y-4'>
                  <div className='flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4'>
                    <div className='w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xs sm:text-sm'>⏰</span>
                    </div>
                    <h3 className='font-bold text-sm sm:text-base md:text-lg font-display text-[#b25a13]'>
                      Thời Điểm Ăn Uống
                    </h3>
                  </div>
                  <ul className='space-y-2 sm:space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#ffb347] rounded-full mt-1.5 sm:mt-2 flex-shrink-0'></span>
                      <span className='text-xs sm:text-sm text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Bữa sáng (6-9 giờ):
                        </strong>{' '}
                        Nên thử Bún Cá hoặc Hủ Tiếu
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Bữa trưa (11-13 giờ):
                        </strong>{' '}
                        Thích hợp cho các món cơm
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Bữa tối (18-20 giờ):
                        </strong>{' '}
                        Lý tưởng cho lẩu và các món ăn chung
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='space-y-3 sm:space-y-4'>
                  <div className='flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4'>
                    <div className='w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xs sm:text-sm'>📍</span>
                    </div>
                    <h3 className='font-bold text-sm sm:text-base md:text-lg font-display text-[#b25a13]'>
                      Địa Điểm Ăn Uống
                    </h3>
                  </div>
                  <ul className='space-y-2 sm:space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Chợ địa phương:
                        </strong>{' '}
                        Món ăn đường phố đích thực
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Thành phố Châu Đốc:
                        </strong>{' '}
                        Các món mắm ngon nhất
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Nhà hàng ven sông:
                        </strong>{' '}
                        Hải sản tươi sống
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>Homestay:</strong>{' '}
                        Món ăn gia đình truyền thống
                      </span>
                    </li>
                  </ul>
                </div>

                <div className='space-y-3 sm:space-y-4'>
                  <div className='flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4'>
                    <div className='w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ffb347] to-[#ff7b54] rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xs sm:text-sm'>🌱</span>
                    </div>
                    <h3 className='font-bold text-sm sm:text-base md:text-lg font-display text-[#b25a13]'>
                      Món Theo Mùa
                    </h3>
                  </div>
                  <ul className='space-y-2 sm:space-y-3'>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Mùa nước nổi (8-11):
                        </strong>{' '}
                        Các món cá đồng
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Mùa gặt (12-1):
                        </strong>{' '}
                        Món cơm mới
                      </span>
                    </li>
                    <li className='flex items-start space-x-3'>
                      <span className='w-2 h-2 bg-[#ffb347] rounded-full mt-2 flex-shrink-0'></span>
                      <span className='text-[#6b4525]'>
                        <strong className='text-[#b25a13]'>
                          Mùa hè (4-6):
                        </strong>{' '}
                        Các món tráng miệng từ trái cây
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        
  );
}
