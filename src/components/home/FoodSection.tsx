import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { UtensilsCrossed, ChefHat, Coffee, Star } from 'lucide-react';
import type { FoodCategory } from '@/types';

interface FoodSectionProps {
  foodHighlights: any[];
}

export function FoodSection({ foodHighlights }: FoodSectionProps) {
  return (
    <section className='space-y-6'>
            {/* Section Header */}
            <div className='flex items-center justify-between'>
              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                  <div className='h-1 w-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500'></div>
                  <p className='text-sm uppercase tracking-[0.2em] text-amber-600 font-semibold'>
                    Nét ẩm thực phù sa
                  </p>
                </div>
                <h2 className='text-3xl font-serif text-amber-900 flex items-center gap-3'>
                  Khám phá món ngon địa phương
                  <UtensilsCrossed className='h-7 w-7 text-amber-600' />
                </h2>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='group cursor-pointer rounded-full border-2 border-amber-200 bg-white px-5 py-2 text-xs uppercase tracking-widest text-amber-700 transition-all hover:border-amber-400 hover:shadow-lg'>
                    <div className='flex items-center gap-2'>
                      <ChefHat className='h-4 w-4 transition-transform group-hover:scale-110' />
                      <span>Local tips</span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>Gợi ý các món ngon địa phương</TooltipContent>
              </Tooltip>
            </div>

            {/* Food Cards Grid */}
            {foodHighlights.length > 0 ? (
              <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {foodHighlights.map((food, index) => {
                  // Rotate through different food icons
                  const foodIcons = [UtensilsCrossed, ChefHat, Coffee];
                  const FoodIcon = foodIcons[index % foodIcons.length];

                  return (
                    <Card
                      key={food.name}
                      className='group relative overflow-hidden border-none bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
                    >
                      {/* Gradient border effect */}
                      <div className='absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                      <div className='absolute inset-[2px] rounded-lg bg-white'></div>

                      {/* Content */}
                      <CardContent className='relative space-y-4 p-6'>
                        {/* Icon & Badge Row */}
                        <div className='flex items-start justify-between'>
                          <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg'>
                            <FoodIcon className='h-6 w-6 text-amber-700' />
                          </div>
                          <Badge className='bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105'>
                            <Star className='mr-1 h-3 w-3 fill-white' />
                            Đặc sản
                          </Badge>
                        </div>

                        {/* Food Name */}
                        <div>
                          <h3 className='text-lg font-bold text-amber-900 transition-colors group-hover:text-orange-600'>
                            {food.name}
                          </h3>
                          <div className='mt-1 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-full'></div>
                        </div>

                        {/* Description */}
                        <p className='text-sm leading-relaxed text-amber-800/90'>
                          {food.description}
                        </p>

                        {/* Bottom decorative element */}
                        <div className='flex items-center gap-2 pt-2'>
                          <div className='flex gap-1'>
                            {[...Array(3)].map((_, i) => (
                              <Star
                                key={i}
                                className='h-3 w-3 fill-amber-400 text-amber-400 transition-all duration-300'
                                style={{
                                  transitionDelay: `${i * 50}ms`,
                                  transform: 'scale(0)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'scale(1)';
                                }}
                              />
                            ))}
                          </div>
                          <span className='text-xs text-amber-600/70'>
                            Món ăn truyền thống
                          </span>
                        </div>

                        {/* Decorative corner gradient */}
                        <div className='absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-tl from-amber-200/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>

                        {/* Top corner decoration */}
                        <div className='absolute -top-2 -right-2 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                          <div className='h-full w-full rounded-full bg-gradient-to-bl from-orange-300/20 to-transparent'></div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className='relative overflow-hidden rounded-3xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 p-12 text-center'>
                {/* Decorative background */}
                <div className='absolute inset-0 opacity-30'>
                  <div className='absolute top-10 left-10 h-20 w-20 rounded-full bg-amber-300 blur-2xl'></div>
                  <div className='absolute bottom-10 right-10 h-32 w-32 rounded-full bg-orange-300 blur-3xl'></div>
                </div>

                <div className='relative z-10 space-y-5'>
                  {/* Animated food icons */}
                  <div className='flex justify-center gap-4'>
                    {[UtensilsCrossed, ChefHat, Coffee].map((Icon, i) => (
                      <div
                        key={i}
                        className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl animate-bounce'
                        style={{
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s',
                        }}
                      >
                        <Icon className='h-8 w-8 text-white' />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className='space-y-2'>
                    <h3 className='text-2xl font-bold text-amber-900'>
                      Đang cập nhật món ăn
                    </h3>
                    <p className='mx-auto max-w-lg text-sm text-amber-700'>
                      Địa điểm này chưa có dữ liệu món ăn. Hãy khám phá thêm các
                      điểm lân cận để thưởng thức ẩm thực phong phú của An
                      Giang!
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4'>
                    <Button
                      variant='outline'
                      className='border-amber-400 text-amber-700 hover:bg-amber-50'
                    >
                      <UtensilsCrossed className='mr-2 h-4 w-4' />
                      Gợi ý món ăn
                    </Button>
                    <Button className='bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg'>
                      <ChefHat className='mr-2 h-4 w-4' />
                      Khám phá ẩm thực
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </section>
  );
}
