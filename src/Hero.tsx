import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Compass, Handshake, Rocket, ArrowRight, Volume2, VolumeX, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useImages } from './ImageContext';
import RevealLayer from './RevealLayer';

import CircularGallery from './CircularGallery';
import TextPressure from './TextPressure';

type Category = 'motorcycles' | 'scooters';

const vehicleCategories: Record<Category, { image: string; text: string; }[]> = {
  motorcycles: [
    { image: '/motorcycles/SMG X1/x1 white bg.jpeg', text: 'SMG X1' },
    { image: '/motorcycles/SMG x2/white bg.jpeg', text: 'SMG R3' },
    { image: '/motorcycles/SMG R3/r3 white bg.jpeg', text: 'SMG X2' },
  ],
  scooters: [
    { image: '/scooters/smg e1/white smg e1.jpeg', text: 'SMG E1' },
    { image: '/scooters/smg e2/white smg e3.jpeg', text: 'SMG E2' },
    { image: '/scooters/smg e4/white e4.jpeg', text: 'SMG E4' }
  ]
};

export default function Hero() {
  const navigate = useNavigate();
  const { image1, image2, isLoading } = useImages();
  const [isMuted, setIsMuted] = useState(true);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>('motorcycles');
  
  const currentItems = vehicleCategories[activeCategory];

  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (smooth.current.x === -999) {
        smooth.current.x = e.clientX;
        smooth.current.y = e.clientY;
      }
    };

    const loop = () => {
      if (smooth.current.x !== -999) {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
        setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading experience...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>

      <section data-theme="dark" className="relative w-full overflow-hidden h-screen bg-[#1f3861]" style={{ height: '100dvh' }}>
        <div 
          className="absolute inset-0 bg-left-top bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url(${image1})` }}
        />
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10 hidden md:block">
          <RevealLayer image={image2} cursorX={cursorPos.x} cursorY={cursorPos.y} />
        </div>
        <div className="absolute inset-0 bg-black/40 md:bg-transparent z-10 block md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />

        <div className="absolute bottom-24 md:bottom-[10%] left-6 md:left-[10%] flex flex-col items-start text-left pointer-events-none z-50">
          <h1 className="text-white leading-[1]">
            <span 
              className="block font-playfair italic font-normal text-3xl sm:text-4xl md:text-5xl hero-anim hero-reveal" 
              style={{ letterSpacing: '-0.02em', animationDelay: '0.2s' }}
            >
              Layers hold
            </span>
            <span 
              className="block font-normal text-3xl sm:text-4xl md:text-5xl mt-1 hero-anim hero-reveal" 
              style={{ letterSpacing: '-0.04em', animationDelay: '0.4s' }}
            >
              tales of time
            </span>
          </h1>
        </div>

      </section>

            {/* Discover Your Ride Section */}
      <section className="bg-background text-on-surface pt-24 md:pt-32 pb-12 md:pb-20 px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto font-hanken z-10 relative" data-theme="light">
        <div className="bg-white rounded-[1.5rem] md:rounded-[3rem] border border-outline-variant/20 p-6 md:p-12 shadow-[0_0_40px_rgba(31,56,97,0.05)] relative overflow-hidden">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-2 block">Discover your ride</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <h1 className="font-display-lg text-4xl sm:text-display-lg md:text-7xl text-[#1f3861]">Vehicles</h1>
              <div className="flex gap-2 p-1 bg-surface-container-low rounded-full w-full sm:w-fit overflow-x-auto border border-outline-variant/50 shadow-inner scrollbar-hide">
                {(['motorcycles', 'scooters'] as Category[]).map(cat => (
                  <button 
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveGalleryIndex(0);
                    }}
                    className={`px-4 md:px-6 py-2 rounded-full font-title-sm capitalize whitespace-nowrap transition-all duration-300 ${activeCategory === cat ? 'bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-[#1f3861] font-bold border border-[#1f3861]/10' : 'text-[#1f3861]/60 hover:text-[#1f3861] hover:bg-[#1f3861]/5'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="w-12 h-12 shrink-0 p-0 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-all group">
                <ChevronLeft className="w-5 h-5 text-[#1f3861] m-auto group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button className="w-12 h-12 shrink-0 p-0 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-all group">
                <ChevronRight className="w-5 h-5 text-[#1f3861] m-auto group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Circular Gallery */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[800px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-sm mt-6 md:mt-12 bg-white">
          <CircularGallery
            // Force re-mount when category changes so the WebGL context re-initializes perfectly
            key={activeCategory}
            items={currentItems}
            bend={typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3}
            textColor="#1f3861"
            borderRadius={0.05}
            scrollEase={0.05}
            onActiveItemChange={setActiveGalleryIndex}
            disableTitle={true}
            fontUrl={undefined}
          />
          <div 
            className={`absolute bottom-0 left-0 w-full flex justify-center items-end z-10 h-16 sm:h-24 md:h-48 px-4 pb-2 ${
              (currentItems[activeGalleryIndex]?.text === 'SMG R3' || currentItems[activeGalleryIndex]?.text === 'SMG X2' || currentItems[activeGalleryIndex]?.text === 'SMG X1' || currentItems[activeGalleryIndex]?.text === 'SMG E1')
                ? 'pointer-events-auto cursor-pointer transition-transform hover:scale-105 active:scale-95' 
                : 'pointer-events-none'
            }`}
            onClick={() => {
              if (currentItems[activeGalleryIndex]?.text === 'SMG R3') {
                navigate('/smg-r3');
              } else if (currentItems[activeGalleryIndex]?.text === 'SMG X2') {
                navigate('/smg-x2');
              } else if (currentItems[activeGalleryIndex]?.text === 'SMG X1') {
                navigate('/smg-x1');
              } else if (currentItems[activeGalleryIndex]?.text === 'SMG E1') {
                navigate('/smg-e1');
              }
            }}
          >
            <TextPressure
              text={currentItems[activeGalleryIndex]?.text || 'SMG'}
              flex={false}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#1f3861"
              strokeColor="#ff0000"
              minFontSize={24}
            />
          </div>
        </div>
      </div>
      </section>

      {/* New Discover Your Ride Section */}
      <section className="bg-white text-[#1f3861] py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto font-hanken z-10 relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12" data-theme="light">
        <div className="w-full md:w-1/2">
          <span className="font-label-caps text-sm text-[#1f3861]/60 tracking-[0.2em] uppercase block mb-4">Discover Your Ride</span>
          <h2 className="font-display-lg text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-[#1f3861]">
            Electric DNA<br />
            <span className="text-[#1f3861]/70">Unleashed</span>
          </h2>
          <p className="font-body-lg text-xl text-[#1f3861]/80 mb-10 leading-relaxed max-w-xl">
            Experience the raw power of electric propulsion with our purpose-built machines. Advanced battery systems, regenerative braking, and zero-emission performance — engineered for riders who demand more from the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-[#1f3861] text-white rounded-full font-title-md font-semibold hover:opacity-90 transition-opacity">
              View Models
            </button>
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border border-[#1f3861]/30 text-[#1f3861] rounded-full font-title-md font-semibold hover:bg-[#1f3861]/5 transition-colors">
              Find a Dealer
            </button>
          </div>
          <p className="mt-8 font-label-caps text-sm text-[#1f3861]/50 tracking-wider font-semibold uppercase">
            SMG X1 Electric Motorcycle
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-surface-container-low shadow-[0_0_40px_rgba(31,56,97,0.05)] relative hero-anim hero-reveal">
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url('/motorcycles/SMG X1/marine drive.png')` }}
             />
        </div>
      </section>

      {/* Dealers Section: Find A Dealer Near You */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto bg-[#f4f6f8] rounded-[1.5rem] md:rounded-[3rem] my-8 md:my-12" data-theme="light">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="font-label-caps text-sm text-[#1f3861]/60 tracking-[0.2em] uppercase block mb-4">Network</span>
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-[#1f3861]">Find Your<br />Local Hub</h2>
            <p className="font-body-lg text-xl text-[#1f3861]/80 mb-8 leading-relaxed max-w-xl">
              Find your nearest authorized SMG dealer with our easy to use interactive tool. Get all details including phone number, address, map and driving directions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-6 py-3 border border-[#1f3861]/20 rounded-full bg-white">
                <MapPin className="text-[#1f3861] w-5 h-5 fill-current" />
                <span className="font-title-md font-semibold text-[#1f3861]">142 Global Locations</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 border border-[#1f3861]/20 rounded-full bg-white">
                <Zap className="text-[#1f3861] w-5 h-5 fill-current" />
                <span className="font-title-md font-semibold text-[#1f3861]">68 EV Centers</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_0_40px_rgba(31,56,97,0.05)] relative overflow-hidden flex flex-col gap-8">
            <div className="space-y-6 z-10 relative">
              <div className="space-y-2">
                <label className="font-label-caps text-xs uppercase tracking-[0.1em] text-[#1f3861]/60">Select Region</label>
                <select className="w-full bg-[#f4f6f8] border border-[#1f3861]/20 rounded-xl py-4 px-6 focus:ring-[#1f3861] focus:border-[#1f3861] transition-all outline-none appearance-none text-[#1f3861] font-title-md">
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Delhi</option>
                  <option>Gujarat</option>
                  <option>Tamil Nadu</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-xs uppercase tracking-[0.1em] text-[#1f3861]/60">Select City</label>
                <select className="w-full bg-[#f4f6f8] border border-[#1f3861]/20 rounded-xl py-4 px-6 focus:ring-[#1f3861] focus:border-[#1f3861] transition-all outline-none appearance-none text-[#1f3861] font-title-md">
                  <option>Select City</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                  <option>New Delhi</option>
                  <option>Ahmedabad</option>
                  <option>Chennai</option>
                </select>
              </div>
              <button className="w-full py-4 px-6 bg-[#1f3861] text-white font-title-md rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden">
                <Compass className="w-5 h-5 shrink-0" />
                <span className="truncate">LOCATE NEAREST HUB</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Signature Features */}
      <section className="py-16 md:py-32 bg-[#1f3861] relative overflow-hidden" data-theme="dark">
        {/* Lightweight radial glow background */}
        <div className="absolute inset-0 z-0 opacity-40" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(239,56,52,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.05) 0%, transparent 50%)' }} />
        <div className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-xl">
              <span className="font-label-caps text-sm text-white/60 tracking-[0.2em] uppercase block mb-4">ABOUT SMG</span>
              <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Pioneering the Future of Electric Mobility
              </h2>
            </div>
            <div className="flex items-center gap-2 text-white/80 font-medium cursor-pointer hover:text-white hover:translate-x-2 transition-all group">
              <span>View all stats</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between group hover:bg-white/10 transition-all duration-500 h-auto min-h-[16rem] md:h-64 border-l-4 border-l-white/30">
              <div>
                <Compass className="text-[#ef3834] w-8 h-8 mb-6" />
                <h3 className="font-display-lg text-3xl font-bold mb-3 text-white">50M+</h3>
                <p className="text-white/70 font-body-md">Vehicles on road, evolving from heritage roots to electric explorers.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between group hover:bg-white/10 transition-all duration-500 h-auto min-h-[16rem] md:h-64 border-l-4 border-l-white/30">
              <div>
                <Zap className="text-[#ef3834] w-8 h-8 mb-6" />
                <h3 className="font-display-lg text-3xl font-bold mb-3 text-white">Everywhere</h3>
                <p className="text-white/70 font-body-md">From urban electric pulsars to heavy-duty field support units.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between group hover:bg-white/10 transition-all duration-500 h-auto min-h-[16rem] md:h-64 border-l-4 border-l-white/30">
              <div>
                <MapPin className="text-[#ef3834] w-8 h-8 mb-6" />
                <h3 className="font-display-lg text-3xl font-bold mb-3 text-white">80+ Nations</h3>
                <p className="text-white/70 font-body-md">Global geological footprint ensuring prosperity and fulfillment.</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between group hover:bg-white/10 transition-all duration-500 h-auto min-h-[16rem] md:h-64 border-l-4 border-l-white/30">
              <div>
                <Rocket className="text-[#ef3834] w-8 h-8 mb-6" />
                <h3 className="font-display-lg text-3xl font-bold mb-3 text-white">Leader</h3>
                <p className="text-white/70 font-body-md">Industry-first connected technologies and material science breakthroughs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Categories with Images */}
      <section className="py-16 md:py-24 bg-white" data-theme="light">
        <div className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-[#1f3861] mb-4 font-bold">Network Categories</h2>
            <p className="text-[#1f3861]/70 font-body-lg text-xl max-w-2xl mx-auto">Specialized hubs designed for specific exploration needs and technological requirements.</p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
              }}
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-[#f8f9fa] isolate"
            >
              <img src="/dealers/find a dealer.png" alt="Two-Wheeler" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3861]/90 via-[#1f3861]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="font-title-md text-white font-semibold">Two-Wheeler</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
              }}
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-[#f8f9fa] isolate"
            >
              <img src="/motorcycles/SMG X1/marine drive.png" alt="Super Premium" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3861]/90 via-[#1f3861]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="font-title-md text-white font-semibold">Super Premium</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
              }}
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-[#f8f9fa] isolate"
            >
              <img src="/stock/two wheerler ev.jpeg" alt="Electric Vehicle" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3861]/90 via-[#1f3861]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="font-title-md text-white font-semibold">Electric Vehicle</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TVS Racing DNA Section */}
      <section className="bg-white pt-16 md:pt-20 overflow-hidden relative" data-theme="light">
        {/* Background Watermark */}
        <div className="absolute top-0 left-0 right-0 h-64 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-40 md:opacity-60">
          <span 
            className="text-[90px] sm:text-[140px] md:text-[250px] text-gray-100 whitespace-nowrap leading-none tracking-tight -rotate-3"
            style={{ fontFamily: '"Brush Script MT", cursive, font-style: italic' }}
          >
            Racing
          </span>
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          <div className="flex items-center gap-1 mb-8 scale-110 md:scale-125 origin-center">
            <span className="font-display-lg font-black italic text-3xl tracking-tighter text-black uppercase">SMG</span>
            <div className="bg-[#e31e24] px-3 py-0.5 skew-x-[-15deg] ml-1 rounded-sm shadow-sm">
              <span className="font-title-md italic font-bold text-white tracking-widest text-xl block skew-x-[15deg]">Racing</span>
            </div>
          </div>
          
          <h2 className="font-display-lg font-bold text-2xl sm:text-3xl md:text-[42px] text-gray-900 mb-8 max-w-4xl tracking-tight leading-tight px-4">
            Racing DNA Unleashed <span className="whitespace-nowrap">#SMGRacing</span>
          </h2>
          
          <button className="bg-[#1c3a7a] text-white px-10 py-3 rounded-md font-medium hover:bg-[#1c3a7a]/90 transition-all text-sm md:text-base mb-12 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Explore Now
          </button>
        </div>

        {/* Full Width Video */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] z-10 bg-gray-100">
          <video 
            src="/stock/Motorcyclist_speeds_through_water_202606171833 - Trim.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 transition-all z-20 shadow-lg"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
        </div>
      </section>

      {/* Become a SMG Dealer */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto overflow-hidden mb-12 md:mb-24 bg-white" data-theme="light">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <span className="font-label-caps text-sm text-[#1f3861]/60 tracking-[0.2em] uppercase block mb-4">Partnership</span>
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-6xl font-bold text-[#1f3861] mb-8">Become an SMG Dealer</h2>
            <div className="space-y-6 text-[#1f3861]/80 font-body-lg text-lg">
              <p>
                Partnering with SMG gives you the opportunity to sell diversified products to possibly the largest set of customers, thus maximizing profits. 
              </p>
              <p>
                Becoming an SMG dealer could also offer a good supplementary business to your existing business, with an assured income every month at a minimal initial investment in infrastructure.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-8 bg-[#f4f6f8] rounded-[2rem] border-l-4 border-[#1f3861] shadow-sm">
                <div className="text-4xl font-bold text-[#1f3861] mb-2">20%</div>
                <div className="font-label-caps text-xs uppercase tracking-wider text-[#1f3861]/70">Projected Growth</div>
              </div>
              <div className="p-8 bg-[#f4f6f8] rounded-[2rem] border-l-4 border-[#1f3861]/50 shadow-sm">
                <div className="text-4xl font-bold text-[#1f3861] mb-2">Global</div>
                <div className="font-label-caps text-xs uppercase tracking-wider text-[#1f3861]/70">Network Access</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:max-w-xl relative">
            <div className="relative group rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/dealers/become a dealer.png" alt="Become a Dealer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3861]/90 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <Handshake className="text-white w-8 h-8" />
                </div>
                <h3 className="font-display-lg text-3xl font-bold mb-3 text-white">Join the Network</h3>
                <p className="text-white/80 mb-8 max-w-sm">Take the first step towards a premium partnership in the future of mobility.</p>
                <Link to="/dealership" className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#1f3861] font-bold rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 group/btn">
                    APPLY NOW
                    <Rocket className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
