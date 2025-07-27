import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header />
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}