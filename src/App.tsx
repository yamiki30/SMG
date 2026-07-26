import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ImageProvider } from './ImageContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Hero = lazy(() => import('./Hero'));
const Dealership = lazy(() => import('./Dealership'));
const Services = lazy(() => import('./Services'));
const Tru4Oil = lazy(() => import('./Tru4Oil'));
const Company = lazy(() => import('./Company'));
const Shop = lazy(() => import('./Shop'));
const BookTestRide = lazy(() => import('./BookTestRide'));
const SmgR3 = lazy(() => import('./SmgR3'));
const SmgX2 = lazy(() => import('./SmgX2'));
const SmgX1 = lazy(() => import('./SmgX1'));
const SmgE1 = lazy(() => import('./SmgE1'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ImageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans flex flex-col">
          <NavBar />
          <div className="flex-1">
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#120f17] text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/dealership" element={<Dealership />} />
                <Route path="/services" element={<Services />} />
                <Route path="/tru4oil" element={<Tru4Oil />} />
                <Route path="/company" element={<Company />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/book-test-ride" element={<BookTestRide />} />
                <Route path="/smg-r3" element={<SmgR3 />} />
                <Route path="/smg-x2" element={<SmgX2 />} />
                <Route path="/smg-x1" element={<SmgX1 />} />
                <Route path="/smg-e1" element={<SmgE1 />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    </ImageProvider>
  );
}
