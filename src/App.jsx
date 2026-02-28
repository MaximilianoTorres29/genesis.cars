import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { VehicleDetail } from './pages/VehicleDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehiculo/:id" element={<VehicleDetail />} />
      </Routes>
      <Footer />
      {/* Botón flotante de WhatsApp en toda la web */}
      <WhatsAppButton floating />
    </BrowserRouter>
  );
}

export default App;
