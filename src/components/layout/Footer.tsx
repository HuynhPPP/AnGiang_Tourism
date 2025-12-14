import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='relative isolate mt-16 overflow-hidden bg-gradient-to-b from-[#0b5c55] via-[#0a4a45] to-[#082f2d] text-amber-50'>
      <div className='absolute inset-0 opacity-20'>
        <img
          src='/images/ThtNt.jpg'
          alt='Thốt Nốt Background'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#041b1a]/80 to-transparent'></div>

      <div className='relative z-10 mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-10 lg:px-8'>
        <div className='grid gap-6 sm:gap-8 lg:grid-cols-[1.3fr,1fr,1fr]'>
          <div className='space-y-2 sm:space-y-3'>
            <Link
              to='/'
              className='flex items-center gap-2 sm:gap-3 text-white/90 justify-center lg:justify-start'
            >
              <img
                src='/images/Logo_tỉnh_An_Giang.png'
                alt='Logo An Giang'
                className='h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/40 bg-white/10 object-cover shadow-lg'
              />
              <div>
                <p className='text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-amber-100'>
                  Du lịch An Giang
                </p>
                <p className='text-lg sm:text-xl font-semibold'>
                  An Giang Tourism
                </p>
              </div>
            </Link>
            <h3 className='text-xl sm:text-2xl font-semibold text-white text-center lg:text-left'>
              Chạm sắc xanh miền Tây, giữ trọn ký ức phù sa.
            </h3>
            <p className='text-xs sm:text-sm text-emerald-100/80 text-center lg:text-left'>
              Thông tin chính thức từ Sở Du lịch An Giang – nơi cập nhật hành
              trình, lễ hội và bản đồ trải nghiệm.
            </p>
          </div>

          <div className='space-y-3 sm:space-y-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur'>
            <p className='text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-100'>
              Liên hệ
            </p>
            <div className='space-y-2 text-xs sm:text-sm text-amber-50/90'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span>+84 xxx xxx xxx</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span>info@angiangtourism.vn</span>
              </div>
            </div>
          </div>

          <div className='space-y-3 sm:space-y-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 text-xs sm:text-sm text-amber-50/90 backdrop-blur'>
            <p className='text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-100'>
              Kết nối
            </p>
            <p>Nhận tin nhanh về lễ hội, thời tiết đẹp và hành trình mới.</p>
            <div className='flex space-x-3 sm:space-x-4'>
              {[
                {
                  label: 'Facebook',
                  path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                },
                {
                  label: 'Instagram',
                  path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                },
                {
                  label: 'YouTube',
                  path: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href='#'
                  className='text-amber-100 transition hover:text-white'
                >
                  <span className='sr-only'>{social.label}</span>
                  <svg
                    className='h-5 w-5 sm:h-6 sm:w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fillRule='evenodd'
                      d={social.path}
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              ))}
            </div>
            <p className='text-[0.65rem] sm:text-xs text-emerald-100/70'>
              &copy; 2025 Sở Du Lịch An Giang
            </p>
          </div>
        </div>

        <div className='mt-6 sm:mt-8 border-t border-white/15 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-emerald-100/80'>
          “Đến với An Giang, khách du lịch được hòa mình vào thiên nhiên kỳ vĩ
          với núi non hùng vĩ, đồng bằng xanh tươi và các di tích lịch sử văn
          hóa đặc sắc.”
        </div>
      </div>
    </footer>
  );
}
