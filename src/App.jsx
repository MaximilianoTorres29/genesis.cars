import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';

const VehicleDetail = lazy(() => import('./pages/VehicleDetail').then((m) => ({ default: m.VehicleDetail })));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent-400 border-t-transparent rounded-full animate-spin" aria-hidden />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vehiculo/:id" element={<VehicleDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton floating className="!bottom-4 !right-4 sm:!bottom-6 sm:!right-6" />
      </div>
    </BrowserRouter>
  );
}
