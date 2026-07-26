import { useState, useEffect } from 'react';

const BuyVehicle = () => {
  const [filter, setFilter] = useState<'motorcycles' | 'scooters'>('motorcycles');

  useEffect(() => {
    // Simple Intersection Observer for scroll reveals
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active', 'opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
        }
      });
    }, observerOptions);

    // Add a small delay to ensure DOM is updated after filter change
    setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    }, 100);
    
    return () => observer.disconnect();
  }, [filter]);

  return (
    <div className="font-sans bg-[#0A0A0A] text-[#e5e2e1] overflow-x-hidden selection:bg-[#1f3861] selection:text-[#afc7f8]">
      
      {/* Background grain effect */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-5 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9Y62Sjhfr_rQ094AivzD1un9rdKjqBIhpirvVsISA4qnBoWPL4XACr4fbPYWc7GHiw9-m8Ivtt8bhzSXMY3HqwbIsJNJaWeBfU1yQt69fUSYcJx2SE2VN3tX9qrSeTLet2qPQmSZNk07VN6TV3hAfzeRMEeoY3Q9HwboeRU274rZKNd6_bT5tVxAdLFq1N888zO5b4rFzurxMIxzqeQYhaUcsDKcG4jiaw9nu7u8JsK33XRApVdHs2bA110q-mXkohnpPalHvbT_A')]" />

      {/* 2. HERO SECTION */}
      <section data-theme="dark" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center scale-105" style={{ backgroundImage: "url('/motorcycles/SMG R3/r3 white bg.jpeg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-[#131313]/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="font-bold text-[48px] md:text-[80px] leading-tight md:leading-[90px] tracking-[-0.02em] uppercase mb-6">
            Ride the <span className="text-[#afc7f8] italic">Future</span>
          </h1>
          <p className="font-normal text-[18px] leading-[28px] text-[#c4c6d0] mb-12 max-w-2xl mx-auto opacity-90">
            Crafted for performance. Engineered for innovation. Experience the pinnacle of electric cafe racer engineering.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#models" className="w-full md:w-auto bg-[#afc7f8] text-[#163059] px-10 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-white hover:text-[#163059] transition-all duration-300 text-center">
              Explore Models
            </a>
            <a href="#dealers" className="w-full md:w-auto border border-white/30 text-white px-10 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center backdrop-blur-sm">
              Book Test Ride
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">Scroll</span>
          <span className="text-2xl font-light">↓</span>
        </div>
      </section>

      {/* FILTER BAR */}
      <section data-theme="dark" className="w-full bg-[#131313] py-6 border-b border-[#44474e]/30 flex justify-center sticky top-[80px] z-[90] backdrop-blur-xl bg-[#131313]/80">
        <div className="flex space-x-2 bg-[#0e0e0e] p-1 rounded-full border border-[#44474e]/50">
          <button 
            onClick={() => setFilter('motorcycles')}
            className={`px-8 py-3 rounded-full text-[13px] font-semibold uppercase tracking-widest transition-all ${filter === 'motorcycles' ? 'bg-[#afc7f8] text-[#163059]' : 'text-[#c4c6d0] hover:text-white'}`}
          >
            Motorcycles
          </button>
          <button 
            onClick={() => setFilter('scooters')}
            className={`px-8 py-3 rounded-full text-[13px] font-semibold uppercase tracking-widest transition-all ${filter === 'scooters' ? 'bg-[#afc7f8] text-[#163059]' : 'text-[#c4c6d0] hover:text-white'}`}
          >
            Scooters
          </button>
        </div>
      </section>

      {filter === 'motorcycles' && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* 3. FEATURED MODEL: CR-X 800 (SPLIT) */}
          <section id="models" data-theme="dark" className="py-[100px] md:py-[160px] bg-[#131313]">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 h-[500px] lg:h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/motorcycles/SMG x2/specification.jpeg')" }}></div>
              <div className="w-full lg:w-1/2 p-[24px] md:p-[80px] bg-[#0e0e0e]">
                <div className="max-w-xl reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                  <span className="font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#afc7f8] uppercase mb-4 block">Precision Engineered</span>
                  <h2 className="font-bold text-[32px] md:text-[48px] leading-tight md:leading-[56px] mb-8 uppercase">SMG R3</h2>
                  <p className="font-normal text-[18px] leading-[28px] text-[#c4c6d0] mb-12">
                    The SMG R3 redefines the cafe racer for the modern era. Combining raw aesthetics with a silent, high-torque powertrain, it delivers a visceral riding experience without compromise.
                  </p>
                  <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-16">
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Power</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">800cc Equiv.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Range</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">220km</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Acceleration</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">4.5s <span className="text-[14px] font-normal text-[#c4c6d0]">0-100</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Charge</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">Fast Sync</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-[#163059] text-white px-8 py-4 uppercase text-[13px] font-semibold tracking-widest hover:bg-[#afc7f8] hover:text-[#163059] transition-all">Configure</button>
                    <button className="border border-[#44474e]/30 text-[#e5e2e1] px-8 py-4 uppercase text-[13px] font-semibold tracking-widest hover:border-[#e5e2e1] transition-all">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. FEATURED MODEL: STREET RACER (WHITE/STUDIO) */}
          <section data-theme="light" className="py-[100px] md:py-[160px] bg-white text-[#131313]">
            <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-[32px]">
                <div className="w-full lg:w-1/2 reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                  <span className="font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#1f3861] uppercase mb-4 block">Minimalist Masterpiece</span>
                  <h2 className="font-bold text-[32px] md:text-[48px] leading-tight md:leading-[56px] mb-8 uppercase text-[#131313]">SMG X1</h2>
                  <p className="font-normal text-[18px] leading-[28px] text-[#131313]/70 mb-12">
                    Designed for the urban landscape. The SMG X1 focuses on agility and effortless style. Lightweight composites meet ergonomic perfection for a ride that feels like an extension of yourself.
                  </p>
                  <ul className="space-y-6 mb-12">
                    <li className="flex items-center space-x-4 border-b border-[#131313]/10 pb-4">
                      <span className="text-[#1f3861] text-xl">⚡</span>
                      <span className="font-medium text-[14px] leading-[20px] text-[#131313]/80">Ultra-Lightweight Carbon Monocoque Frame</span>
                    </li>
                    <li className="flex items-center space-x-4 border-b border-[#131313]/10 pb-4">
                      <span className="text-[#1f3861] text-xl">🧭</span>
                      <span className="font-medium text-[14px] leading-[20px] text-[#131313]/80">Integrated Smart AR-Dashboard Compatibility</span>
                    </li>
                    <li className="flex items-center space-x-4 border-b border-[#131313]/10 pb-4">
                      <span className="text-[#1f3861] text-xl">🌱</span>
                      <span className="font-medium text-[14px] leading-[20px] text-[#131313]/80">100% Recyclable Marine-Grade Materials</span>
                    </li>
                  </ul>
                  <button className="bg-[#1f3861] text-white px-10 py-5 font-semibold text-[14px] uppercase tracking-widest hover:shadow-2xl transition-all">
                    View Full Specs
                  </button>
                </div>
                <div className="w-full lg:w-1/2">
                  <img src="/motorcycles/SMG X1/x1 white bg.jpeg" alt="SMG X1" className="w-full h-auto drop-shadow-2xl rounded-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* 5. FEATURED MODEL: THRUST R (DARK GARAGE) */}
          <section data-theme="dark" className="relative min-h-screen flex items-center bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/motorcycles/SMG R3/r2 specifications.jpeg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px] w-full">
              <div className="max-w-2xl reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#afc7f8] uppercase mb-4 block">Peak Performance</span>
                <h2 className="font-bold text-[48px] md:text-[80px] leading-tight md:leading-[90px] tracking-[-0.02em] uppercase mb-6 text-white">
                  SMG <span className="text-[#afc7f8]">X2</span>
                </h2>
                <div className="flex items-center space-x-8 mb-10 overflow-x-auto pb-4 scrollbar-hide">
                  <div className="shrink-0 text-center">
                    <span className="block font-semibold text-[24px] md:text-[32px] text-[#e5e2e1]">110 kW</span>
                    <span className="block font-semibold text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em]">Peak Power</span>
                  </div>
                  <div className="w-px h-10 bg-[#44474e]/30"></div>
                  <div className="shrink-0 text-center">
                    <span className="block font-semibold text-[24px] md:text-[32px] text-[#e5e2e1]">190 Nm</span>
                    <span className="block font-semibold text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em]">Torque</span>
                  </div>
                  <div className="w-px h-10 bg-[#44474e]/30"></div>
                  <div className="shrink-0 text-center">
                    <span className="block font-semibold text-[24px] md:text-[32px] text-[#e5e2e1]">250 km/h</span>
                    <span className="block font-semibold text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em]">Top Speed</span>
                  </div>
                </div>
                <p className="font-normal text-[18px] leading-[28px] text-[#c4c6d0] mb-12 opacity-80">
                  The rawest expression of electric speed. The SMG X2 is not for the faint-hearted. It is a mechanical symphony of power, tuned for the track and unleashed on the street.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-[#afc7f8] text-[#163059] px-12 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-white transition-all">Buy Now</button>
                  <button className="border border-[#afc7f8] text-[#afc7f8] px-12 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-[#afc7f8] hover:text-[#163059] transition-all">Book Test Ride</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {filter === 'scooters' && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* 3. FEATURED SCOOTER: E1 ADV (SPLIT) */}
          <section id="models" data-theme="dark" className="py-[100px] md:py-[160px] bg-[#131313]">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 h-[500px] lg:h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/scooters/smg e1/adv e1.jpeg')" }}></div>
              <div className="w-full lg:w-1/2 p-[24px] md:p-[80px] bg-[#0e0e0e]">
                <div className="max-w-xl reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                  <span className="font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#afc7f8] uppercase mb-4 block">Urban Explorer</span>
                  <h2 className="font-bold text-[32px] md:text-[48px] leading-tight md:leading-[56px] mb-8 uppercase">SMG E1</h2>
                  <p className="font-normal text-[18px] leading-[28px] text-[#c4c6d0] mb-12">
                    The SMG E1 redefines urban mobility with its rugged design and efficient electric powertrain, delivering a smooth, connected, and thrilling daily commute.
                  </p>
                  <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-16">
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Power</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">15 kW</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Range</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">150km</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Acceleration</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">6.5s <span className="text-[14px] font-normal text-[#c4c6d0]">0-60</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-[10px] leading-[16px] tracking-[0.1em] text-[#c4c6d0] uppercase mb-2">Charge</p>
                      <p className="font-semibold text-[24px] md:text-[32px] text-[#afc7f8]">Fast Sync</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-[#163059] text-white px-8 py-4 uppercase text-[13px] font-semibold tracking-widest hover:bg-[#afc7f8] hover:text-[#163059] transition-all">Configure</button>
                    <button className="border border-[#44474e]/30 text-[#e5e2e1] px-8 py-4 uppercase text-[13px] font-semibold tracking-widest hover:border-[#e5e2e1] transition-all">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. FEATURED SCOOTER: E3 ELEGANCE (WHITE/STUDIO) */}
          <section data-theme="light" className="py-[100px] md:py-[160px] bg-white text-[#131313]">
            <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-[32px]">
                <div className="w-full lg:w-1/2 reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                  <span className="font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#1f3861] uppercase mb-4 block">Modern Commute</span>
                  <h2 className="font-bold text-[32px] md:text-[48px] leading-tight md:leading-[56px] mb-8 uppercase text-[#131313]">SMG E3</h2>
                  <p className="font-normal text-[18px] leading-[28px] text-[#131313]/70 mb-12">
                    Designed for the modern cityscape. The SMG E3 combines minimalist aesthetics with effortless maneuverability. Perfect for your daily journeys with zero emissions.
                  </p>
                  <ul className="space-y-6 mb-12">
                    <li className="flex items-center space-x-4 border-b border-[#131313]/10 pb-4">
                      <span className="text-[#1f3861] text-xl">⚡</span>
                      <span className="font-medium text-[14px] leading-[20px] text-[#131313]/80">Lightweight Aluminum Frame</span>
                    </li>
                    <li className="flex items-center space-x-4 border-b border-[#131313]/10 pb-4">
                      <span className="text-[#1f3861] text-xl">🧭</span>
                      <span className="font-medium text-[14px] leading-[20px] text-[#131313]/80">Smart Connected Display</span>
                    </li>
                    <li className="flex items-center space-x-4 border-b border-[#131313]/10 pb-4">
                      <span className="text-[#1f3861] text-xl">🌱</span>
                      <span className="font-medium text-[14px] leading-[20px] text-[#131313]/80">Eco-friendly Materials</span>
                    </li>
                  </ul>
                  <button className="bg-[#1f3861] text-white px-10 py-5 font-semibold text-[14px] uppercase tracking-widest hover:shadow-2xl transition-all">
                    View Full Specs
                  </button>
                </div>
                <div className="w-full lg:w-1/2">
                  <img src="/scooters/smg e3/white e3.png" alt="SMG E3" className="w-full h-auto drop-shadow-2xl rounded-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* 5. FEATURED SCOOTER: E2 PRO (DARK GARAGE) */}
          <section data-theme="dark" className="relative min-h-screen flex items-center bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/scooters/smg e2/adv smg e2.jpeg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px] w-full">
              <div className="max-w-2xl reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#afc7f8] uppercase mb-4 block">Ultimate Commuter</span>
                <h2 className="font-bold text-[48px] md:text-[80px] leading-tight md:leading-[90px] tracking-[-0.02em] uppercase mb-6 text-white">
                  SMG <span className="text-[#afc7f8]">E2</span>
                </h2>
                <div className="flex items-center space-x-8 mb-10 overflow-x-auto pb-4 scrollbar-hide">
                  <div className="shrink-0 text-center">
                    <span className="block font-semibold text-[24px] md:text-[32px] text-[#e5e2e1]">25 kW</span>
                    <span className="block font-semibold text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em]">Peak Power</span>
                  </div>
                  <div className="w-px h-10 bg-[#44474e]/30"></div>
                  <div className="shrink-0 text-center">
                    <span className="block font-semibold text-[24px] md:text-[32px] text-[#e5e2e1]">60 Nm</span>
                    <span className="block font-semibold text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em]">Torque</span>
                  </div>
                  <div className="w-px h-10 bg-[#44474e]/30"></div>
                  <div className="shrink-0 text-center">
                    <span className="block font-semibold text-[24px] md:text-[32px] text-[#e5e2e1]">110 km/h</span>
                    <span className="block font-semibold text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em]">Top Speed</span>
                  </div>
                </div>
                <p className="font-normal text-[18px] leading-[28px] text-[#c4c6d0] mb-12 opacity-80">
                  The ultimate expression of electric scooter performance. Built for longer rides and more demanding terrain with enhanced suspension and extended range.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="bg-[#afc7f8] text-[#163059] px-12 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-white transition-all">Buy Now</button>
                  <button className="border border-[#afc7f8] text-[#afc7f8] px-12 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-[#afc7f8] hover:text-[#163059] transition-all">Book Test Ride</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}


      {/* 6. PERFORMANCE CARDS */}
      <section data-theme="dark" className="py-[100px] md:py-[160px] bg-[#201f1f]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="mb-[100px] md:mb-[160px] text-center">
            <h2 className="font-bold text-[32px] md:text-[48px] uppercase mb-4">Performance Engineering</h2>
            <div className="w-24 h-1 bg-[#afc7f8] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-[#1c1b1b] p-10 border border-[#44474e]/15 hover:border-[#afc7f8]/50 transition-all duration-500 reveal-on-scroll opacity-0 translate-y-[30px]">
              <span className="text-[48px] text-[#afc7f8] mb-8 block group-hover:scale-110 transition-transform">🔋</span>
              <h3 className="font-semibold text-[24px] mb-4 uppercase">Next-Gen Battery</h3>
              <p className="font-normal text-[16px] text-[#c4c6d0]">Solid-state battery technology providing 30% more density and rapid thermal cooling for sustained high output.</p>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-[#1c1b1b] p-10 border border-[#44474e]/15 hover:border-[#afc7f8]/50 transition-all duration-500 reveal-on-scroll opacity-0 translate-y-[30px]" style={{ transitionDelay: '100ms' }}>
              <span className="text-[48px] text-[#afc7f8] mb-8 block group-hover:scale-110 transition-transform">📡</span>
              <h3 className="font-semibold text-[24px] mb-4 uppercase">Smart Connectivity</h3>
              <p className="font-normal text-[16px] text-[#c4c6d0]">Seamless integration with the SMG App. Over-the-air updates, predictive maintenance, and real-time telemetry.</p>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-[#1c1b1b] p-10 border border-[#44474e]/15 hover:border-[#afc7f8]/50 transition-all duration-500 reveal-on-scroll opacity-0 translate-y-[30px]" style={{ transitionDelay: '200ms' }}>
              <span className="text-[48px] text-[#afc7f8] mb-8 block group-hover:scale-110 transition-transform">⚙️</span>
              <h3 className="font-semibold text-[24px] mb-4 uppercase">Precision Aero</h3>
              <p className="font-normal text-[16px] text-[#c4c6d0]">Tuned in wind tunnels to reduce drag by 15%. Active aerodynamic winglets adjust to speed and lean angle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY SMG: INFOGRAPHIC STATS */}
      <section data-theme="dark" className="py-[100px] md:py-[160px] bg-[#163059] text-white">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="reveal-on-scroll opacity-0 translate-y-[30px]">
              <p className="text-[#afc7f8] font-bold text-[48px] lg:text-[64px] mb-2">₹9000<span className="text-[32px]">Cr</span></p>
              <p className="font-semibold text-[12px] uppercase tracking-widest text-[#c4c6d0]">Group Value</p>
            </div>
            <div className="reveal-on-scroll opacity-0 translate-y-[30px]" style={{ transitionDelay: '100ms' }}>
              <p className="text-[#afc7f8] font-bold text-[48px] lg:text-[64px] mb-2">3500+</p>
              <p className="font-semibold text-[12px] uppercase tracking-widest text-[#c4c6d0]">Global Workforce</p>
            </div>
            <div className="reveal-on-scroll opacity-0 translate-y-[30px]" style={{ transitionDelay: '200ms' }}>
              <p className="text-[#afc7f8] font-bold text-[48px] lg:text-[64px] mb-2">100+</p>
              <p className="font-semibold text-[12px] uppercase tracking-widest text-[#c4c6d0]">Dealer Network</p>
            </div>
            <div className="reveal-on-scroll opacity-0 translate-y-[30px]" style={{ transitionDelay: '300ms' }}>
              <p className="text-[#afc7f8] font-bold text-[48px] lg:text-[64px] mb-2">45<span className="text-[32px]">L</span></p>
              <p className="font-semibold text-[12px] uppercase tracking-widest text-[#c4c6d0]">Startup Innovation Fund</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ACCESSORIES */}
      <section id="accessories" data-theme="dark" className="py-[100px] md:py-[160px] bg-[#131313]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-semibold text-[12px] text-[#afc7f8] uppercase mb-4 block tracking-[0.1em]">Lifestyle Essentials</span>
              <h2 className="font-bold text-[32px] md:text-[48px] uppercase">Curated Gear</h2>
            </div>
            <a href="#" className="font-semibold uppercase text-[12px] tracking-[0.2em] border-b border-[#afc7f8] pb-2 text-[#afc7f8] hover:text-white hover:border-white transition-all">View All Collection</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#353534] overflow-hidden mb-6 rounded-lg">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/accessories/headlight.jpeg')" }}></div>
              </div>
              <p className="font-semibold text-[12px] text-[#c4c6d0] mb-1 uppercase tracking-[0.1em]">Parts</p>
              <h3 className="font-semibold text-[18px] uppercase mb-2">LED Headlight Setup</h3>
              <p className="text-[#afc7f8] font-medium text-[14px]">₹24,999</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#353534] overflow-hidden mb-6 rounded-lg">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/accessories/battery.jpeg')" }}></div>
              </div>
              <p className="font-semibold text-[12px] text-[#c4c6d0] mb-1 uppercase tracking-[0.1em]">Power</p>
              <h3 className="font-semibold text-[18px] uppercase mb-2">High-Cap Battery</h3>
              <p className="text-[#afc7f8] font-medium text-[14px]">₹18,500</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#353534] overflow-hidden mb-6 rounded-lg">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/accessories/clutchplate.jpeg')" }}></div>
              </div>
              <p className="font-semibold text-[12px] text-[#c4c6d0] mb-1 uppercase tracking-[0.1em]">Performance</p>
              <h3 className="font-semibold text-[18px] uppercase mb-2">Racing Clutch Plate</h3>
              <p className="text-[#afc7f8] font-medium text-[14px]">₹6,900</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#353534] overflow-hidden mb-6 rounded-lg">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/accessories/air filter.jpeg')" }}></div>
              </div>
              <p className="font-semibold text-[12px] text-[#c4c6d0] mb-1 uppercase tracking-[0.1em]">Airflow</p>
              <h3 className="font-semibold text-[18px] uppercase mb-2">Sport Air Filter</h3>
              <p className="text-[#afc7f8] font-medium text-[14px]">₹12,499</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LIFESTYLE GALLERY */}
      <section data-theme="dark" className="py-[100px] md:py-[160px] bg-[#0e0e0e] overflow-hidden">
        <div className="px-[24px] md:px-[80px] mb-16">
          <h2 className="font-bold text-[32px] md:text-[48px] uppercase mb-4 text-center">Life in the Fast Lane</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="aspect-square bg-cover bg-center hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" style={{ backgroundImage: "url('/motorcycles/SMG X1/x1 specifications.jpeg')" }}></div>
          <div className="aspect-square bg-cover bg-center hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" style={{ backgroundImage: "url('/motorcycles/SMG x2/gallery stock leh.png')" }}></div>
          <div className="aspect-square bg-cover bg-center hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" style={{ backgroundImage: "url('/stock/two wheerler ev.jpeg')" }}></div>
          <div className="aspect-square bg-cover bg-center hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" style={{ backgroundImage: "url('/motorcycles/SMG R3/r2 specifications.jpeg')" }}></div>
        </div>
      </section>

      {/* 10. DEALER NETWORK */}
      <section id="dealers" data-theme="dark" className="py-[100px] md:py-[160px] bg-[#131313] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] flex flex-col lg:flex-row items-center gap-[32px]">
          <div className="w-full lg:w-1/2 reveal-on-scroll opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
            <h2 className="font-bold text-[32px] md:text-[48px] uppercase mb-8">Join the Movement</h2>
            <p className="font-normal text-[18px] text-[#c4c6d0] mb-12">
              Our network of exclusive SMG Experience Centers is growing across the nation. Find your nearest hub for service, community events, and test rides.
            </p>
            <div className="space-y-6">
              <button className="w-full md:w-auto bg-[#afc7f8] text-[#163059] px-10 py-5 font-semibold text-[14px] uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center space-x-3">
                <span className="text-lg">📍</span>
                <span>Find Nearest Dealer</span>
              </button>
              <button className="w-full md:w-auto border border-[#44474e] text-[#e5e2e1] px-10 py-5 font-semibold text-[14px] uppercase tracking-widest hover:border-[#afc7f8] transition-all flex items-center justify-center space-x-3">
                <span className="text-lg">🤝</span>
                <span>Become a Partner</span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-[#1c1b1b] border border-[#44474e]/20 relative group overflow-hidden rounded-xl">
              <img src="/dealers/find a dealer.png" alt="Map" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                  <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-[#afc7f8] rounded-full animate-ping"></div>
                  <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-[#afc7f8] rounded-full"></div>
                  
                  <div className="absolute top-[60%] left-[60%] w-3 h-3 bg-[#afc7f8] rounded-full animate-ping" style={{ animationDelay: '300ms' }}></div>
                  <div className="absolute top-[60%] left-[60%] w-3 h-3 bg-[#afc7f8] rounded-full"></div>
                  
                  <div className="absolute bottom-[20%] right-[30%] w-3 h-3 bg-[#afc7f8] rounded-full animate-ping" style={{ animationDelay: '700ms' }}></div>
                  <div className="absolute bottom-[20%] right-[30%] w-3 h-3 bg-[#afc7f8] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BuyVehicle;
