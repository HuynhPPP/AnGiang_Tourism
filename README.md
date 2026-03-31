<div align="center">
  <img src="https://raw.githubusercontent.com/HuynhPPP/AnGiang_Tourism/main/src/assets/images/HomePage/homePage_1.jpg" alt="An Giang Tourism Banner" style="border-radius: 16px; object-fit: cover; max-height: 400px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />

  <br />

  # 🌴 Khám Phá An Giang - Tourism Portal 🛶
  
  *Website quảng bá du lịch Tỉnh An Giang mang đến trải nghiệm thị giác sống động, mượt mà và đậm chất văn hoá vùng Đồng Bằng Sông Cửu Long.*
  
  ![React](https://img.shields.io/badge/React-18-blue)
  ![Vite](https://img.shields.io/badge/Vite-5-purple)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
</div>

---

## ✨ Điểm Nổi Bật (Key Features)

Dự án được xây dựng với mục tiêu mang lại **trải nghiệm người dùng (UX) đẳng cấp** kết hợp thiết kế thẩm mỹ **Landing Page hiện đại**, đưa người xem đắm chìm vào cảnh sắc An Giang:

- 🏞️ **Hệ Thống Điểm Đến (Destination Explorer):** Khám phá tất tần tật các khu vực nổi tiếng (Châu Đốc, Tri Tôn, Long Xuyên, Tịnh Biên...) qua 3 lăng kính chuyên sâu: *Câu Chuyện, Thư Viện Ảnh* và *Tin Tức cập nhật*. 
- 📱 **Video Trình Chiếu Đột Phá (TikTok/Reels Style):** Các đoạn video ngắn được bố trí với khung dọc `9:16`, tối ưu tương tác vuốt trượt trên di động và hiển thị hàng loạt đầy ấn tượng, đẹp mắt ngay trên giao diện máy tính.
- 🖼️ **Thư Viện Khoảnh Khắc (Interactive Gallery):** Slider hình ảnh tự động chuyển động (Autoplay) mỗi 2 giây. Khi click sẽ phóng to, mang đến trải nghiệm xem ảnh chi tiết qua Lightbox sang trọng (Glassmorphism layout).
- ⚡ **Siêu Hiệu Năng & Đồng Bộ Thiết Kế:** Giao diện nhất quán với tone màu Nâu - Cam của vùng Thất Sơn đặc trưng, hiển thị hoàn hảo trên TẤT CẢ độ phân giải màn hình (Fully Responsive).

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

Dự án được triển khai hoàn toàn bằng các công cụ Frontend thế hệ mới nhất để đảm bảo hiệu năng và tính bảo trì cao:

- **Core:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Carousels & Animation:** [Embla Carousel](https://www.embla-carousel.com/) (React hook based)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Trải Nghiệm Giao Diện (Preview)

*Một số thành phần UI đặc trưng mà dự án đang sở hữu:*

1. **Giao diện Masonry / Carousel Mượt Mà:** Sử dụng kiến trúc của `Embla Carousel Autoplay` tự động chuyển và hỗ trợ vuốt tay qua ảnh/video.
2. **Dynamic Asset Loading:** Tự động lấy file hình/video hàng loạt từ thư mục local thông qua `import.meta.glob` cực kỳ tiện lợi của Vite.
3. **Card Điểm Đến Focus:** Tự làm nổi bật Box Điểm Đến (`Active state`) khi chọn, kèm các nhãn Tag/Icon tạo điểm nhấn.

---

## 🚀 Hướng Dẫn Cài Đặt Khởi Chạy (Getting Started)

Dự án sử dụng **pnpm** làm Package Manager chính. 

**Bước 1: Clone dự án**
```bash
git clone https://github.com/HuynhPPP/AnGiang_Tourism.git
cd AnGiang_Tourism
```

**Bước 2: Cài đặt thư viện**
```bash
pnpm install
```

**Bước 3: Khởi chạy môi trường phát triển (Local Development)**
```bash
pnpm run dev
```
*Mở [http://localhost:5173](http://localhost:5173) trên trình duyệt để thưởng thức thành quả.*

**Bước 4: Build cho môi trường Production (Tuỳ chọn)**
```bash
pnpm run build
```

---

## 📁 Cấu Trúc Thư Mục Chính

```text
├── src/
│   ├── assets/               # Chứa ảnh, video, logo 
│   │   ├── images/HomePage/  # Ảnh trình chiếu Landing Page
│   │   └── videos/HomePage/  # Video dọc (TikTok style)
│   ├── components/           
│   │   ├── home/             # Chứa toàn bộ các section ở trang chủ (TouristMoments, Destination...)
│   │   ├── ui/               # Chứa các Component tái sử dụng của Shadcn UI
│   ├── data/                 # Data mẫu tĩnh (defaults.ts)
│   ├── pages/                
│   │   └── Index.tsx         # Trang chủ
│   └── App.tsx               # Root component
└── package.json
```

---

<div align="center">
    <i>Phát triển bằng cả tâm huyết dành cho quê hương An Giang hùng vĩ! 🏔️✨</i>
</div>
