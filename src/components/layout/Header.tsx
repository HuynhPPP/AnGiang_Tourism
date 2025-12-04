import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/', label: 'Điểm Đến' },
  { path: '/about', label: 'Giới Thiệu' },
  { path: '/food', label: 'Ẩm Thực' },
  { path: '/districts', label: 'Huyện/Thị' },
];

const headerHighlights = [
  { label: 'Điểm check-in', value: '25+' },
  { label: 'Món ngon bản địa', value: '20+' },
  { label: 'Lễ hội lớn', value: '7+' },
  { label: 'Dân số tỉnh', value: 'Hơn 4 triệu' },
];

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className='relative isolate overflow-hidden bg-gradient-to-br from-cyan-900/90 via-emerald-800/80 to-amber-700/90 text-white shadow-lg'>
      <img
        src='/images/TriTonImgs/thotnottraitim01.jpg'
        alt='Cánh đồng thốt nốt An Giang'
        className='absolute inset-0 h-full w-full object-cover opacity-40'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/70'></div>
      <div className='relative z-10'>
        <div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
            <Link to='/' className='flex items-center gap-3 text-white/90'>
              <img
                src='/images/Logo_tỉnh_An_Giang.png'
                alt='Logo An Giang'
                className='h-12 w-12 rounded-full border border-white/40 bg-white/10 object-cover shadow-lg'
              />
              <div>
                <p className='text-xs uppercase tracking-[0.3em] text-amber-100'>
                  Du lịch An Giang
                </p>
                <p className='text-xl font-semibold'>An Giang Tourism</p>
              </div>
            </Link>
            <nav className='flex flex-wrap justify-center gap-2 rounded-full bg-white/10 p-1 backdrop-blur'>
              {navItems.map(({ path, label }) => {
                const active = isActive(path);
                return (
                  <Link
                    to={path}
                    key={path}
                    aria-current={active ? 'page' : undefined}
                  >
                    <Button
                      variant='ghost'
                      className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                        active
                          ? 'bg-white text-amber-800 shadow-lg hover:bg-white'
                          : 'text-white/80 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {label}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className='flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left'>
            <div className='space-y-3'>
              <p className='text-xs uppercase tracking-[0.5em] text-amber-100'>
                Miền Tây sông nước
              </p>
              <h1 className='font-display text-3xl leading-tight sm:text-3xl'>
                Khám phá An Giang – cảm nhận sắc xanh phù sa.
              </h1>
              <h2 className='font-display text-xl leading-tight sm:text-xl text-white/90'>
                Một số thông tin đã cũ và chưa được cập nhật sau khi sáp nhập
                tỉnh thành tỉnh
              </h2>
            </div>
            <div className='grid grid-cols-2 gap-3 text-left text-sm text-white/90 sm:grid-cols-4 lg:grid-cols-2'>
              {headerHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className='rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur'
                >
                  <p className='text-lg font-semibold'>{highlight.value}</p>
                  <p className='text-xs uppercase tracking-widest text-white/70'>
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
