import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const hideHeader = location.pathname === '/festivals';

  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      {!hideHeader && <Header />}
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}