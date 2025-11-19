import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Index from './pages/Index';
import About from './pages/About';
import Food from './pages/Food';
import Districts from './pages/Districts';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/food' element={<Food />} />
            <Route path='/districts' element={<Districts />} />
            <Route path='/admin' element={<Admin />} />
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
