import { useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function SmgX2() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((el) => {
      if (el) {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-['Inter'] selection:bg-[#afc7f8] selection:text-[#163059] overflow-x-hidden min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-transparent to-[#131313] z-10 opacity-60"></div>
          <img 
            className="w-full h-full object-cover object-center opacity-80" 
            src="/motorcycles/SMG x2/gallery stock leh.png" 
            alt="SMG X2 Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131313] z-10" style={{ background: 'linear-gradient(to bottom, transparent 60%, #131313 100%)' }}></div>
        </div>
        <div className="relative z-20 container mx-auto px-6 md:px-[80px] text-center">
          <h1 className="font-['Montserrat'] text-[32px] md:text-[80px] leading-[40px] md:leading-[90px] font-bold uppercase mb-4 tracking-[-0.02em] animate-fade-in-up">
            SMG X2: <span className="text-[#afc7f8]" style={{ textShadow: '0 0 20px rgba(175, 199, 248, 0.4)' }}>PURE PERFORMANCE</span>
          </h1>
          <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] max-w-2xl mx-auto mb-10 md:mb-12">
            The ultimate electric streetfighter. Engineered for the thrill of the ride, built with the soul of a racer.
          </p>
          <div className="flex items-center justify-center">
            <button className="w-full md:w-auto bg-[#2f3131] text-[#131313] font-semibold text-[12px] uppercase px-12 py-5 tracking-[0.1em] hover:bg-[#e2e2e2] transition-all duration-300">
              Book Test Ride
            </button>
          </div>
        </div>
      </header>

      {/* Key Specs Ribbon */}
      <section className="relative z-30 -mt-16 md:-mt-24 px-6 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-12 items-center" style={{ backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(192, 192, 192, 0.15)' }}>
          <div className="flex items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-[#8e9099]/10 pb-6 md:pb-0">
            <span className="text-[#afc7f8] text-4xl">⏱️</span>
            <div className="text-center md:text-left">
              <p className="font-['Inter'] text-[32px] font-bold text-[#e5e2e1]">3.2s</p>
              <p className="font-['Inter'] text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em] font-semibold">0-100 KM/H</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-[#8e9099]/10 pb-6 md:pb-0">
            <span className="text-[#afc7f8] text-4xl">⚡</span>
            <div className="text-center md:text-left">
              <p className="font-['Inter'] text-[32px] font-bold text-[#e5e2e1]">190 NM</p>
              <p className="font-['Inter'] text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em] font-semibold">Instant Torque</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-[#afc7f8] text-4xl">🔋</span>
            <div className="text-center md:text-left">
              <p className="font-['Inter'] text-[32px] font-bold text-[#e5e2e1]">20 MIN</p>
              <p className="font-['Inter'] text-[10px] text-[#c4c6d0] uppercase tracking-[0.1em] font-semibold">Fast Charge (80%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section ref={(el) => { sectionsRef.current[0] = el; }} className="py-[160px] px-6 md:px-[80px] bg-[#0e0e0e]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden">
            <div className="absolute -inset-4 border border-[#afc7f8]/20 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="h-[600px] bg-[#131313] relative overflow-hidden flex items-center justify-center">
              <img 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="/motorcycles/SMG x2/white bg.jpeg" 
                alt="SMG X2 Design" 
              />
            </div>
            <div className="absolute bottom-8 right-8 p-6 max-w-[200px]" style={{ backdropFilter: 'blur(20px)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(192, 192, 192, 0.15)' }}>
              <p className="font-['Inter'] font-semibold text-[10px] tracking-[0.1em] text-[#afc7f8] mb-2">DETAIL 01</p>
              <p className="font-['Inter'] text-[#e5e2e1] text-sm">Exposed aerospace-grade trellis frame in Racing Red.</p>
            </div>
          </div>
          <div className="space-y-8">
            <p className="font-['Inter'] font-semibold text-[12px] tracking-[0.1em] text-[#afc7f8] uppercase">DESIGN PHILOSOPHY</p>
            <h2 className="font-['Montserrat'] font-bold text-[48px] text-[#e5e2e1] leading-[56px] uppercase">THE NAKED STREETFIGHTER AESTHETIC</h2>
            <p className="font-['Inter'] text-[18px] text-[#c4c6d0] leading-[28px]">
              Stripped of everything that doesn't contribute to speed. The SMG X2 is a masterclass in aggressive minimalism. Every line serves a purpose, every component is engineered to be seen. It's not just a motorcycle; it's a declaration of raw mechanical intent.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-[#afc7f8] mt-1">✓</span>
                <div>
                  <p className="font-['Montserrat'] text-sm font-semibold uppercase text-[#e5e2e1]">Asymmetric Lighting</p>
                  <p className="text-[#c4c6d0] text-sm font-['Inter']">Signature LED cluster for a menacing road presence.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#afc7f8] mt-1">✓</span>
                <div>
                  <p className="font-['Montserrat'] text-sm font-semibold uppercase text-[#e5e2e1]">Integrated Aerodynamics</p>
                  <p className="text-[#c4c6d0] text-sm font-['Inter']">Passive cooling ducts integrated into the side fairings.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology: Core of Power */}
      <section ref={(el) => { sectionsRef.current[1] = el; }} className="py-[160px] px-6 md:px-[80px] bg-[#131313] overflow-hidden">
        <div className="text-center mb-24">
          <h2 className="font-['Montserrat'] font-bold text-[48px] text-[#e5e2e1] mb-6 uppercase">CORE OF POWER</h2>
          <div className="w-24 h-1 bg-[#afc7f8] mx-auto"></div>
        </div>
        <div className="relative max-w-6xl mx-auto flex justify-center">
          <img 
            className="w-full max-w-3xl rounded-none" 
            src="/motorcycles/SMG x2/engine.png" 
            alt="SMG X2 Engine" 
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={(el) => { sectionsRef.current[2] = el; }} className="py-[160px] px-6 md:px-[80px] bg-[#0e0e0e]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-8 relative overflow-hidden group min-h-[300px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTpGDQERLsHVDYpM61fvj7psth9QDEutXYpyd18baVnxdnRfF-wqebuHnQDwcxrxbSOjMFvjY9kMvcTulSJ3ChPhQLVq9CPv6e-asnC6D9NAqPhho16vFKRbFaj0kFDhPlyI1B9SigLWNF0CR8uG2UdpowE38AwiMAPrlJBTuMzWoOLefK_M1AwkbrwD80stWiPymO9VNcF7-vG4PfqyJlekV3KZNCaGAN5QWcAcKPXMqhpPhsD2K5UY4hQlalBAzo1V-c8UYf3BgE" alt="Gallery" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-[12px] tracking-[0.1em] uppercase text-white">URBAN NIGHTS</span>
            </div>
          </div>
          <div className="md:col-span-4 relative overflow-hidden group min-h-[300px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/motorcycles/SMG x2/gallery stock mountians.png" alt="Gallery" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-[12px] tracking-[0.1em] uppercase text-white">MOUNTAIN CURVES</span>
            </div>
          </div>
          <div className="md:col-span-4 relative overflow-hidden group min-h-[300px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/motorcycles/SMG x2/specification.jpeg" alt="Gallery" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-[12px] tracking-[0.1em] uppercase text-white">STUDIO PRECISION</span>
            </div>
          </div>
          <div className="md:col-span-8 relative overflow-hidden group min-h-[300px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/motorcycles/SMG x2/gallery stock leh.png" alt="Gallery" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-['Inter'] font-semibold text-[12px] tracking-[0.1em] uppercase text-white">RAW ACCELERATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section ref={(el) => { sectionsRef.current[3] = el; }} className="py-[160px] px-6 md:px-[80px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <p className="font-['Inter'] font-semibold text-[12px] tracking-[0.1em] text-[#afc7f8] uppercase mb-4">ACCESSORIES</p>
            <h2 className="font-['Montserrat'] font-bold text-[48px] text-[#e5e2e1] uppercase">X2 ESSENTIALS</h2>
          </div>
          <a className="font-['Inter'] font-semibold text-[12px] text-[#e5e2e1] uppercase tracking-[0.1em] border-b-2 border-[#afc7f8] pb-1 hover:text-[#afc7f8] transition-colors" href="#">Shop All Collections</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group">
            <div className="aspect-square bg-[#201f1f] relative overflow-hidden mb-6">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0XqZmsZy_ulpDR0o7ix63WPN_Sqxv_2S3wmbyuZOuKYSy7AnAE-LFVoDGMt97xcjimT-0-1NhsWYOBjUf7MERNrD9FbhRbCmo943BXoOGpo1jmmNwAKEZX6mc-Np9e7kMpv2xjQ1lbHvnjgj1t7WJ_bL_XGWD3dKJTxFY2YLH8g4AUoQiiTjYZWGE_Bf0GvLMvGnfPMhwAXs5oDecGNLU3Kw9r5YYkHDbC3J5YDEwkE0H-23Vqd0n01NUES6W_bc0KJXLp8f8nG0n" alt="Helmet" />
              <div className="absolute top-4 right-4 bg-[#afc7f8] text-[#131313] px-3 py-1 font-['Inter'] font-semibold text-[10px] tracking-[0.1em]">NEW</div>
            </div>
            <h3 className="font-['Montserrat'] font-semibold text-[32px] text-[#e5e2e1] mb-2">SMG Carbon Pro Helmet</h3>
            <p className="font-['Inter'] text-[16px] text-[#c4c6d0] mb-4">Ultra-lightweight aerospace carbon shell.</p>
            <p className="font-['Inter'] text-[14px] font-bold text-[#afc7f8]">€849.00</p>
          </div>
          <div className="group">
            <div className="aspect-square bg-[#201f1f] relative overflow-hidden mb-6">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4EgJTWlfS_toKo9YDy_cj1KCpAbe01bjiLfMXds3HXxINoc1Z7_NA-adVmiS2AFgt_Sw5gc_8uWGzTiluixhLqG6Vh8kchMSMIA1OCyHycskxBND8PBcDw8zUGI57WTlsC6ZVYsVJ523KD7WWqAG-WxwR5e0D71kOc5DMlBCHBeMzeFd01mg-ZzENgRWceJciHlBlQ-9eq3Zyz84O_zyPsbZl3hMt6jJHJcshUJ_-gFrmIEx7-RPnmgrqBEjIliKd1goZNQi5aihI" alt="Jacket" />
            </div>
            <h3 className="font-['Montserrat'] font-semibold text-[32px] text-[#e5e2e1] mb-2">Circuit Leather Jacket</h3>
            <p className="font-['Inter'] text-[16px] text-[#c4c6d0] mb-4">Italian cowhide with D3O® protection.</p>
            <p className="font-['Inter'] text-[14px] font-bold text-[#afc7f8]">€1,199.00</p>
          </div>
          <div className="group">
            <div className="aspect-square bg-[#201f1f] relative overflow-hidden mb-6">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe6Hc8hbIJvG4D1QAG4UTx-ko1O92ndHaPA8rdUvNmPytjPQkB43tfGqSLGB1zLlFOA5MS-lkagSw7dZo7VPoVO0hdW8IpzJMCnkufz4qvzGKWmco2FSK_BPTzEXSLPo8FWZYhb10cwGnUIeLN12pEVdqa6EgyJAgEB_Utc7NADnTY--4W8YxJs3Uxd72MhFxpzauzX_BWQA6oGE91R8r8Y_4f_4hg1VH0hfVIVJTy3pn0DMvEOJgzPMtOf-8zcd0hVx6WU3OzRisp" alt="Luggage" />
            </div>
            <h3 className="font-['Montserrat'] font-semibold text-[32px] text-[#e5e2e1] mb-2">X-Pack Smart Luggage</h3>
            <p className="font-['Inter'] text-[16px] text-[#c4c6d0] mb-4">Waterproof, aerodynamic quick-release system.</p>
            <p className="font-['Inter'] text-[14px] font-bold text-[#afc7f8]">€349.00</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={(el) => { sectionsRef.current[4] = el; }} className="py-[160px] px-6 md:px-[80px] bg-[#afc7f8] text-[#131313] text-center">
        <h2 className="font-['Montserrat'] text-[32px] md:text-[80px] leading-[40px] md:leading-[90px] font-bold uppercase mb-8 tracking-[-0.02em]">Ready to join the revolution?</h2>
        <p className="font-['Inter'] text-[18px] leading-[28px] mb-12 max-w-2xl mx-auto opacity-90">Experience the future of performance motorcycling. Customise your X2 and be among the first to own the ultimate streetfighter.</p>
        <button className="bg-[#131313] text-[#e5e2e1] font-semibold text-[12px] uppercase px-16 py-6 tracking-[0.1em] hover:scale-105 transition-all duration-300 shadow-2xl">
          Configure Your X2
        </button>
      </section>

      <Footer />
    </div>
  );
}
