import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Waves, ChevronRight, Compass, Sparkles, Calendar, Car, Users, Award } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section className='grid gap-6 lg:grid-cols-2'>
            {/* River Experiences Card */}
            <Card className='group relative overflow-hidden border-none bg-gradient-to-br from-emerald-500/90 to-cyan-600/80 text-white shadow-2xl transition-all duration-500 hover:shadow-emerald-500/50 hover:scale-[1.02]'>
              {/* Animated wave background pattern */}
              <div className='absolute inset-0 opacity-20'>
                <div className='absolute bottom-0 left-0 right-0 h-32'>
                  <svg
                    className='absolute bottom-0 w-full'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                  >
                    <path
                      d='M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z'
                      fill='white'
                      opacity='0.1'
                      className='animate-pulse'
                    />
                  </svg>
                </div>
              </div>

              <CardHeader className='relative z-10'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
                    <Waves className='h-6 w-6' />
                  </div>
                  <div>
                    <CardTitle className='text-2xl font-serif'>
                      Trải nghiệm sông nước
                    </CardTitle>
                    <CardDescription className='text-white/80'>
                      Những hoạt động nên thử để cảm nhận trọn vẹn hơi thở miền
                      Tây.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='relative z-10 space-y-4'>
                <div className='space-y-3'>
                  {[
                    {
                      text: 'Chèo xuồng sáng sớm ở rừng tràm Trà Sư',
                      icon: '🚣',
                    },
                    {
                      text: 'Săn hoàng hôn tại hồ Thủy Liêm - Núi Cấm',
                      icon: '🌅',
                    },
                    {
                      text: 'Ghé làng Chăm, trải nghiệm dệt thổ cẩm',
                      icon: '🧵',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.text}
                      className='group/item flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:translate-x-2'
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 text-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12'>
                        {item.icon}
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm leading-relaxed'>{item.text}</p>
                        <div className='mt-1 h-0.5 w-0 bg-white/50 transition-all duration-300 group-hover/item:w-full'></div>
                      </div>
                      <ChevronRight className='h-5 w-5 opacity-0 transition-all duration-300 group-hover/item:opacity-100' />
                    </div>
                  ))}
                </div>

                {/* Bottom decorative element */}
                <div className='flex items-center justify-between pt-4'>
                  <div className='flex items-center gap-2 text-xs text-white/70'>
                    <Compass className='h-4 w-4' />
                    <span>Khám phá văn hóa miền Tây</span>
                  </div>
                  <Badge className='bg-white/20 text-white backdrop-blur-sm'>
                    <Sparkles className='mr-1 h-3 w-3' />
                    Nổi bật
                  </Badge>
                </div>
              </CardContent>

              {/* Decorative corner */}
              <div className='absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl'></div>
              <div className='absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl'></div>
            </Card>

            {/* Travel Tips Card */}
            <Card className='group relative overflow-hidden border-none bg-white/90 shadow-2xl backdrop-blur transition-all duration-500 hover:shadow-amber-500/30 hover:scale-[1.02]'>
              {/* Decorative background pattern */}
              <div className='absolute inset-0 opacity-5'>
                <div
                  className='absolute inset-0'
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>
              </div>

              <CardHeader className='relative z-10'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
                    <Compass className='h-6 w-6 text-amber-700' />
                  </div>
                  <div>
                    <CardTitle className='text-2xl text-amber-900'>
                      Bí kíp du lịch
                    </CardTitle>
                    <CardDescription>
                      Những mẹo nhỏ để hành trình thuận lợi.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className='relative z-10'>
                <Accordion
                  type='single'
                  collapsible
                  className='w-full space-y-3'
                >
                  {[
                    {
                      id: 'season',
                      title: 'Thời điểm lý tưởng',
                      content:
                        'Tháng 12 - 4 trời khô ráo, mây trắng cho ảnh đẹp; mùa nước nổi (9 - 11) lại phù hợp trải nghiệm ghe xuồng và ngắm rừng tràm ngập nước.',
                      icon: Calendar,
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      id: 'transport',
                      title: 'Di chuyển',
                      content:
                        'Kết hợp xe khách đến Long Xuyên/Châu Đốc rồi thuê xe máy hoặc book tour ghe. Nên đặt vé cáp treo Núi Sam/Núi Cấm trước giờ cao điểm.',
                      icon: Car,
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      id: 'culture',
                      title: 'Văn hóa bản địa',
                      content:
                        'Tôn trọng tập tục người Chăm và Khmer: ăn mặc kín đáo khi vào mosque/chùa, giữ im lặng khi tham dự nghi thức Bà Chúa Xứ.',
                      icon: Users,
                      color: 'from-purple-500 to-pink-500',
                    },
                  ].map((tip) => {
                    const TipIcon = tip.icon;
                    return (
                      <AccordionItem
                        value={tip.id}
                        key={tip.id}
                        className='group/accordion overflow-hidden rounded-2xl border-2 border-amber-100 bg-white/90 transition-all duration-300 hover:border-amber-300 hover:shadow-lg'
                      >
                        <AccordionTrigger className='px-4 text-left font-semibold text-amber-900 transition-colors hover:text-orange-600 [&[data-state=open]]:text-orange-600'>
                          <div className='flex items-center gap-3'>
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tip.color} shadow-md transition-all duration-300 group-hover/accordion:scale-110`}
                            >
                              <TipIcon className='h-5 w-5 text-white' />
                            </div>
                            <span>{tip.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className='px-4 pb-4 text-sm text-amber-800'>
                          <div className='ml-13 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4'>
                            <p className='leading-relaxed'>{tip.content}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>

                {/* Bottom tip */}
                <div className='mt-6 flex items-center gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4'>
                  <Award className='h-6 w-6 flex-shrink-0 text-amber-600' />
                  <p className='text-xs text-amber-700'>
                    <span className='font-semibold'>Pro tip:</span> Đặt tour
                    trước để có giá tốt và đảm bảo chỗ trong mùa cao điểm!
                  </p>
                </div>
              </CardContent>

              {/* Decorative corners */}
              <div className='absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-bl from-amber-200/20 to-transparent'></div>
              <div className='absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-orange-200/20 to-transparent'></div>
            </Card>
          </section>
  );
}
