import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="relative">
      {/* Hero background with Thot Not palms */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="/images/ThotNotPalms.jpg"
          alt="Thốt nốt An Giang"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 to-amber-900/70"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-shrink-0 mb-4 md:mb-0 flex items-center">
            <img
              src="/images/Logo_tỉnh_An_Giang.png"
              alt="Logo Thốt Nốt"
              height={140}
              width={140}
              className="h-14 w-14 mr-3 object-cover"
            />
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-amber-50">An Giang Tourism</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-1 bg-amber-900/50 px-2 py-1 rounded-full ">
            <Link to="/">
              <Button variant={isActive('/') ? "secondary" : "ghost"} className="text-amber-50 ">
                Điểm Đến
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive('/about') ? "secondary" : "ghost"} className="text-amber-50 ">
                Giới Thiệu
              </Button>
            </Link>
            <Link to="/food">
              <Button variant={isActive('/food') ? "secondary" : "ghost"} className="text-amber-50 ">
                Ẩm Thực
              </Button>
            </Link>
            <Link to="/districts">
              <Button variant={isActive('/districts') ? "secondary" : "ghost"} className="text-amber-50 ">
                Huyện/Thị
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-amber-50 drop-shadow-lg">
          Khám phá An Giang
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-amber-100">
          Vẻ đẹp thiên nhiên, văn hóa đặc sắc và ẩm thực đa dạng của vùng đất Thất Sơn
        </p>
      </div>
    </header>
  );
}