import { useState, useEffect } from 'react';
import { useFestivalsData } from '@/hooks/useData';
import { FestivalCalendar } from '@/components/festivals/FestivalCalendar';
import { FestivalCard } from '@/components/festivals/FestivalCard';
import { getImgUrl } from '@/data/defaults';
import { Sparkles, Map, ChevronLeft, ListCollapse } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const allFestivalsTimeline = [
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

export default function FestivalsPage() {
  const { items: festivals } = useFestivalsData();
  
  // Sort and set initial selected festival
  const sortedFestivals = [...festivals].sort((a, b) => a.month - b.month);
  const [selectedFestival, setSelectedFestival] = useState(sortedFestivals[0] || null);

  useEffect(() => {
    if (festivals.length > 0 && !selectedFestival) {
      setSelectedFestival(sortedFestivals[0]);
    }
  }, [festivals]);

  return (
    <div className='font-sans-soft min-h-screen bg-gradient-to-b from-[#fffdf5] via-[#fff4df] to-[#ffe6c9]'>
      
      {/* Hero Section with Glassmorphism */}
      <section className='relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden'>
        
        {/* Nút quay về trang chủ */}
        <div className='absolute top-6 left-6 sm:top-8 sm:left-8 z-50'>
          <Link to="/">
            <div className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md px-4 py-2.5 rounded-full transition-all border border-white/20 shadow-lg group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-sm tracking-wide">Trang chủ</span>
            </div>
          </Link>
        </div>

        <div className='absolute inset-0 z-0'>
          <img 
            src={getImgUrl('Mua-le-hoi/bg-mua-le-hoi-2.jpg')} 
            alt="Mùa Lễ Hội An Giang" 
            className='w-full h-full object-cover object-center scale-105 animate-pulse-slow' 
          />
          <div className='absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-900/40 to-[#fffdf5]'></div>
        </div>
        
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg'>
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span className='font-medium uppercase tracking-wider text-sm'>Trải nghiệm văn hoá đặc sắc</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-display font-bold text-white drop-shadow-xl'>
            Mùa Lễ Hội <span className='text-amber-400'>An Giang</span>
          </h1>
          <p className='text-xl md:text-2xl text-white/90 drop-shadow-md mx-auto max-w-2xl leading-relaxed'>
            Hành trình tâm linh và khám phá những sự kiện đầy màu sắc trên mảnh đất chín rồng.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16 -mt-16 relative z-20'>
        
        {/* Calendar Timeline Section */}
        <section className='space-y-8 animate-in fade-in zoom-in-95 duration-700 delay-300'>
          <div className="text-center space-y-4 mt-10">
            <h2 className="text-3xl font-display font-bold text-amber-900 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="flex items-center gap-3">
                <Map className="w-8 h-8 text-amber-600" />
                Lịch Trình Sự Kiện Nổi Bật
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-emerald-800">
              <p>Chọn một sự kiện trên trục thời gian để khám phá</p>
              
              {/* Button xem chi tiết -> Mở Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2 border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 bg-white shadow-sm rounded-full">
                    <ListCollapse className="w-4 h-4" />
                    Bảng chi tiết Lễ Hội
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden rounded-2xl flex flex-col">
                  <DialogHeader className="px-6 py-4 bg-gradient-to-r from-amber-50 to-emerald-50 border-b border-border/50">
                    <DialogTitle className="text-2xl font-display font-bold text-amber-900">
                      Tổng Hợp Lễ Hội An Giang
                    </DialogTitle>
                    <DialogDescription className="text-amber-800/80">
                      Danh sách các sự kiện văn hóa, lễ hội nổi bật được sắp xếp theo thời gian trong năm.
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="flex-1 p-6">
                    <div className="rounded-xl border shadow-sm bg-white overflow-hidden">
                      <Table>
                        <TableHeader className="bg-slate-50/50">
                          <TableRow>
                            <TableHead className="w-[180px] sm:w-[220px] font-semibold text-emerald-800">Thời gian</TableHead>
                            <TableHead className="font-semibold text-emerald-800">Sự kiện lễ hội</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {allFestivalsTimeline.map((item, index) => (
                            <TableRow key={index} className="hover:bg-slate-50/50 transition-colors group">
                              <TableCell className="font-medium align-top text-amber-900">
                                {item.time}
                              </TableCell>
                              <TableCell className="text-slate-700">
                                <ul className="space-y-1.5 list-none">
                                  {item.events.map((evt, i) => (
                                    <li key={i} className="leading-relaxed flex gap-2">
                                      <span className="text-amber-500 font-bold select-none">•</span> 
                                      <span dangerouslySetInnerHTML={{__html: evt.replace(/\+ /g, "<br/><span class='text-emerald-600 font-medium ml-2'>+</span> ")}} />
                                    </li>
                                  ))}
                                </ul>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>

            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-xl border border-white border-opacity-50">
            <FestivalCalendar 
              festivals={festivals} 
              onSelect={setSelectedFestival}
              selectedId={selectedFestival?.id || null}
            />
          </div>
        </section>

        {/* Selected Festival Details */}
        <section className="min-h-[500px]">
           {selectedFestival ? (
             <FestivalCard festival={selectedFestival} />
           ) : (
             <div className="text-center text-amber-800 py-12">Không có lễ hội nào để hiển thị.</div>
           )}
        </section>
        
      </main>
    </div>
  );
}
