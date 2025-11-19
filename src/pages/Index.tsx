import { useMemo, useState } from "react";
import type { Destination } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDestinationsData } from "@/hooks/useData";
import { Waves } from "lucide-react";

const useDestinations = () => {
  const { items } = useDestinationsData();
  return items;
};

const travelTips = [
  {
    id: "season",
    title: "Thời điểm lý tưởng",
    content:
      "Tháng 12 - 4 trời khô ráo, mây trắng cho ảnh đẹp; mùa nước nổi (9 - 11) lại phù hợp trải nghiệm ghe xuồng và ngắm rừng tràm ngập nước.",
  },
  {
    id: "transport",
    title: "Di chuyển",
    content:
      "Kết hợp xe khách đến Long Xuyên/Châu Đốc rồi thuê xe máy hoặc book tour ghe. Nên đặt vé cáp treo Núi Sam/Núi Cấm trước giờ cao điểm.",
  },
  {
    id: "culture",
    title: "Văn hóa bản địa",
    content:
      "Tôn trọng tập tục người Chăm và Khmer: ăn mặc kín đáo khi vào mosque/chùa, giữ im lặng khi tham dự nghi thức Bà Chúa Xứ.",
  },
];

export default function HomePage() {
  const destinations = useDestinations();
  const [selectedDestinationId, setSelectedDestinationId] = useState<
    number | null
  >(null);

  const selectedDestination = useMemo<Destination | null>(() => {
    if (!destinations.length) return null;
    if (selectedDestinationId) {
      const match = destinations.find(
        (destination) => destination.id === selectedDestinationId
      );
      if (match) return match;
    }
    return destinations[0];
  }, [destinations, selectedDestinationId]);

  const signatureExperiences = useMemo(() => {
    if (!selectedDestination) return [];
    const mainImageFallback =
      selectedDestination.images?.[0] ??
      "/images/TriTonImgs/thotnottraitim01.jpg";

    const galleryExperiences =
      selectedDestination.images?.slice(0, 3).map((image, index) => ({
        title: `${selectedDestination.name} góc nhìn ${index + 1}`,
        description: selectedDestination.description,
        image,
      })) ?? [];

    const foodExperiences =
      selectedDestination.foods?.slice(0, 2).map((food) => ({
        title: food.name,
        description: food.description,
        image: mainImageFallback,
      })) ?? [];

    return [...galleryExperiences, ...foodExperiences].slice(0, 3);
  }, [selectedDestination]);

  if (!selectedDestination) {
    return null;
  }

  const foodHighlights = selectedDestination.foods ?? [];
  const hasNews =
    !!selectedDestination.description_news &&
    !!selectedDestination.images_news.length;

  return (
    <div className="font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9] text-[#6b4525]">
      <TooltipProvider>
        {/* <div className='relative isolate overflow-hidden bg-gradient-to-br from-cyan-700/80 via-emerald-600/70 to-amber-600/80 text-white'>
          <img
            src='/images/TriTonImgs/thotnottraitim01.jpg'
            alt='Cánh đồng thốt nốt An Giang'
            className='absolute inset-0 h-full w-full object-cover opacity-40'
            loading='lazy'
          />
          <div className='absolute right-10 top-10 hidden lg:block animate-pulse'>
            <div className='rounded-full border border-white/40 px-6 py-3 text-sm tracking-[0.3em] uppercase'>
              Miền tây sông nước
            </div>
          </div>
          <div className='relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:px-10'>
            <div className='flex-1 text-center lg:text-left'>
              <p className='text-xs uppercase tracking-[0.7em] text-amber-100'>
                An Giang bản sắc
              </p>
              <h1 className='mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl'>
                Lạc bước giữa mùa nước nổi, chạm vào bản sắc Khmer - Chăm.
              </h1>
              <p className='mt-6 text-base text-amber-50/90 sm:text-lg'>
                Chọn điểm đến để khám phá rừng tràm, núi thiêng, chợ nổi và
                thưởng thức những món ăn đậm vị phù sa.
              </p>
              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <Button
                  size='lg'
                  className='bg-white text-amber-700 hover:bg-amber-50'
                >
                  Khám phá hành trình
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white/60 text-white hover:bg-white/10'
                >
                  Xem lịch lễ hội
                </Button>
              </div>
            </div>
            <div className='flex-1'>
              <div className='grid grid-cols-2 gap-4 text-center sm:grid-cols-4 lg:grid-cols-2'>
                {heroStats.map((stat) => (
                  <Card
                    key={stat.label}
                    className='bg-white/10 text-white shadow-none backdrop-blur'
                  >
                    <CardContent className='flex flex-col items-center gap-3 p-5'>
                      <div className='rounded-2xl bg-white/20 p-3'>
                        <stat.icon className='h-6 w-6' />
                      </div>
                      <div>
                        <p className='text-lg font-semibold'>{stat.value}</p>
                        <p className='text-xs uppercase tracking-widest text-white/70'>
                          {stat.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
          <section className="grid gap-6 lg:grid-cols-[320px,1fr]">
            <div className="space-y-5">
              <Card className="overflow-hidden border border-[#f7d9aa] bg-white shadow-xl">
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl text-[#b25a13]">
                    Điểm đến gợi ý
                  </CardTitle>
                  <CardDescription className="text-sm text-[#a2763f]">
                    Chọn địa danh để xem câu chuyện nổi bật.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ScrollArea className="h-[420px] pr-3">
                    <div className="space-y-3">
                      {destinations.map((dest) => {
                        const isActive = selectedDestination.id === dest.id;
                        return (
                          <Button
                            key={dest.id}
                            variant="ghost"
                            className={`w-full justify-start rounded-2xl border text-left text-sm transition-all ${
                              isActive
                                ? "border-transparent bg-gradient-to-r from-[#ffb347] to-[#ff7b54] text-white shadow-lg"
                                : "border-transparent bg-[#fff8ec] text-[#6f4525] hover:border-[#ffd8a7]"
                            }`}
                            onClick={() => setSelectedDestinationId(dest.id)}
                          >
                            <div className="flex w-full items-center gap-3">
                              <div className="flex-1">
                                <p className="font-semibold">{dest.name}</p>
                              </div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-[#f6d9ab] bg-white shadow-2xl">
              <CardContent className="space-y-6 bg-[#fff9ef] p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 rounded-2xl bg-[#fef3d4] p-1 text-[#c26a1f]">
                    {[
                      { value: "overview", label: "Câu chuyện" },
                      { value: "gallery", label: "Thư viện" },
                      { value: "news", label: "Thông tin" },
                    ].map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="rounded-2xl text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-[#d45b16] data-[state=active]:shadow"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsContent value="overview" className="pt-6">
                    <div className="space-y-4 text-sm text-[#825126]">
                      <p>
                        Miền Tây sông nước hiện hữu trong từng góc nhìn — từ
                        cánh đồng thốt nốt, mái nhà sàn đến nét tín ngưỡng bản
                        địa. Hãy dành ít nhất 1 ngày để cảm nhận nhịp sống chậm
                        và thưởng thức đặc sản.
                      </p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {signatureExperiences.map((experience) => (
                          <div
                            key={experience.title}
                            className="flex items-center gap-3 rounded-2xl border border-[#f6d7a9] bg-white p-3 shadow-sm"
                          >
                            <img
                              src={experience.image}
                              alt={experience.title}
                              className="h-14 w-14 rounded-xl object-cover"
                              loading="lazy"
                            />
                            <div>
                              <p className="text-sm font-semibold text-[#7b4218]">
                                {experience.title}
                              </p>
                              <p className="line-clamp-2 text-xs text-[#a06933]">
                                {experience.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="pt-6">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedDestination.images.map((image, index) => (
                          <CarouselItem key={index} className="basis-full">
                            <div className="p-1">
                              <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-white shadow-lg">
                                <img
                                  src={image}
                                  alt={`${selectedDestination.name} - ${
                                    index + 1
                                  }`}
                                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="bg-white text-[#c4631c] hover:bg-[#fff3e2]" />
                      <CarouselNext className="bg-white text-[#c4631c] hover:bg-[#fff3e2]" />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="news" className="pt-6">
                    {hasNews ? (
                      <>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {selectedDestination.images_news.map(
                              (image, index) => (
                                <CarouselItem
                                  key={index}
                                  className="basis-full"
                                >
                                  <div className="p-1">
                                    <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-white shadow-lg">
                                      <img
                                        src={image}
                                        alt={`${
                                          selectedDestination.name
                                        } tin tức ${index + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselPrevious className="bg-white text-[#c4631c] hover:bg-[#fff3e2]" />
                          <CarouselNext className="bg-white text-[#c4631c] hover:bg-[#fff3e2]" />
                        </Carousel>
                        <CardDescription className="mt-4 text-base text-[#7c4a1f]">
                          {selectedDestination.description_news}
                        </CardDescription>
                      </>
                    ) : (
                      <p className="rounded-2xl border border-[#f8e0b8] bg-white p-4 text-sm text-[#a16934]">
                        Chưa có tin tức mới cho địa điểm này. Hãy quay lại vào
                        mùa lễ hội nhé!
                      </p>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
                  Nét ẩm thực phù sa
                </p>
                <h2 className="text-2xl font-serif text-amber-900">
                  Khám phá món ngon địa phương
                </h2>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="rounded-full border border-amber-200 px-4 py-1 text-xs uppercase tracking-widest text-amber-700">
                    Local tips
                  </div>
                </TooltipTrigger>
                <TooltipContent>Gợi ý các món ngon địa phương</TooltipContent>
              </Tooltip>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {foodHighlights.map((food) => (
                <Card
                  key={food.name}
                  className="border-none bg-white/80 shadow-lg backdrop-blur"
                >
                  <CardContent className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-amber-900">
                        {food.name}
                      </p>
                      <Badge className="bg-amber-100 text-amber-700">
                        Đặc sản
                      </Badge>
                    </div>
                    <p className="text-sm text-amber-800">{food.description}</p>
                  </CardContent>
                </Card>
              ))}
              {!foodHighlights.length && (
                <p className="text-sm text-amber-700">
                  Địa điểm này chưa có dữ liệu món ăn. Hãy khám phá thêm các
                  điểm lân cận để thưởng thức ẩm thực phong phú.
                </p>
              )}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card className="border-none bg-gradient-to-br from-emerald-500/90 to-cyan-600/80 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  Trải nghiệm sông nước
                </CardTitle>
                <CardDescription className="text-white/80">
                  Những hoạt động nên thử để cảm nhận trọn vẹn hơi thở miền Tây.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Chèo xuồng sáng sớm ở rừng tràm Trà Sư",
                    "Săn hoàng hôn tại hồ Thủy Liêm - Núi Cấm",
                    "Ghé làng Chăm, trải nghiệm dệt thổ cẩm",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white/10 p-3"
                    >
                      <Waves className="mt-1 h-5 w-5" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-white/80 shadow-2xl backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">
                  Bí kíp du lịch
                </CardTitle>
                <CardDescription>
                  Những mẹo nhỏ để hành trình thuận lợi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-3"
                >
                  {travelTips.map((tip) => (
                    <AccordionItem
                      value={tip.id}
                      key={tip.id}
                      className="rounded-2xl border border-amber-100 bg-white/90 px-4"
                    >
                      <AccordionTrigger className="text-left font-semibold text-amber-900">
                        {tip.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-amber-800">
                        {tip.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </main>
      </TooltipProvider>
    </div>
  );
}
