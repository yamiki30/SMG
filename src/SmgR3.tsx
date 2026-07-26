import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function SmgR3() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = containerRef.current.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0A0A0A] text-[#E5E2E1] overflow-x-hidden font-['Inter'] antialiased">
      {/* Hero Section */}
      <section data-theme="dark" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQxb2T_Q5XWuDm-PMi2GOUbHpe3Q8hkTgtadrQS39fSH2VShjWcNCWxeLFyz4_5xHPQbrFncyIPNQ9-GWfRcP1ffDCyO15QBh3wrty3xoGAnunEjbcdev6RWXcR3l9_QTnPIweNisDgslxa45PpJYuyBiPt818RE9CSnIgDUjlqfueNYlGExD2XWlD5OYIxGGnjJQEA2FdaeSO1PlbC-xtHWjOQVvckcjXbRhBlvKV5zu2ouFk9B7MQLQVBf8b4Fzo0JVPKUT889h_')" }}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute font-bold text-center w-full top-1/2 -translate-y-1/2 text-[20vw] leading-none opacity-[0.03] pointer-events-none select-none z-0 whitespace-nowrap">SMG</div>
        <div className="relative z-10 text-center px-[24px]">
          <span className="font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.3em] text-[#afc7f8] mb-4 block uppercase">SMG PERFORMANCE</span>
          <h1 className="font-['Montserrat'] text-[80px] leading-[90px] md:text-[100px] text-white tracking-[-0.02em] font-bold mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">RIDE BEYOND LIMITS</h1>
          <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] max-w-2xl mx-auto mb-12">Experience the pinnacle of two-wheeled engineering. Every SMG motorcycle is a testament to raw power and meticulous craftsmanship.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-[#1f3861] text-white px-10 py-5 font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] hover:bg-white hover:text-[#1f3861] transition-all duration-300">EXPLORE INVENTORY</button>
            <button className="border border-white text-white px-10 py-5 font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300">BOOK TEST RIDE</button>
          </div>
        </div>
      </section>

      {/* Performance Highlights (Bento-ish Grid) */}
      <section data-theme="light" className="py-[160px] bg-white text-[#131313]">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="text-center mb-24">
            <h2 className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-[#131313] mb-6 uppercase">ENGINEERED FOR EVERY JOURNEY</h2>
            <div className="w-24 h-1 bg-[#1f3861] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Adventure Touring */}
            <div className="group cursor-pointer overflow-hidden">
              <div className="h-96 w-full mb-8 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Adventure Touring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLDWh3GKEizbQmTwsiVJTpHEoPCLwqK9GIRd8MuIhN0IqvCp1E8Sgl6Tz0uVw5b8c0FXVQTh8iroc_tFX7VX9eABlPMDclDbrW_LK-i1gT6GhLFngcd4EihSnOM_PlBXH1bFuKhDeFtiAYKNNF6gTCwB6F0_QgW57Gz5YKMdABkN8aDMUO7hc8wuIMMsxwz3MUL0HHJtRUxsIuV4f4tG8mHJeY5FG-VUYyVnXebBb6iJ7i-CbG6JL6j-77xNfYbSnhIwshw3HTyfE1"/>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] mb-2">Adventure Touring</h3>
              <p className="text-[#c4c6d0] font-['Inter'] text-[16px] leading-[24px]">Master any terrain with confidence and unrivaled comfort.</p>
            </div>
            {/* City Commuter */}
            <div className="group cursor-pointer overflow-hidden">
              <div className="h-96 w-full mb-8 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="City Commuter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASYiHjF0Po6ieJHMahZXt8jQDOjkHYPEhjhuf8UxniJEnT2QMqqh4Pil0DFIpJbpqAE9hbJcz0TSqekauRB9Pwtx8kfRir5SmtlTR7odN-G6jku_57qiCTQyYaXOXFlCKrTMXlXkgaYsZDGNSfKNfLEDWOjJfTIsdJW25RGNFJwuJLfyvBaxJ9xGHmc-Skz2uNT1IdGBQzOuvFCApOGywlcsKDDmYZqaL4awqjLO7vDg6dSktNU_OyC7c6WgAfGoEn3G_MobE-cjGK"/>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] mb-2">City Commuter</h3>
              <p className="text-[#c4c6d0] font-['Inter'] text-[16px] leading-[24px]">Efficiency meets elegance for the modern metropolitan rider.</p>
            </div>
            {/* Performance Sports */}
            <div className="group cursor-pointer overflow-hidden">
              <div className="h-96 w-full mb-8 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Performance Sports" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_BFshYaxEkZkDOhKawcHuTk5WRdi5V1yFJx611kBsVM5QWIrpQmkOoKZiTk2yo0yYlJI1MCRExEVCMN_Atcy8m_tw8Tsc9y5ubT4ZR_k8O33XNAgR_lKOEyAP_O2gdoKdWiUAZONgaG3vPDQY6vpfhmKNkSFe4ax7jg-ZH1L2QoAGtX_Oe2Y0Y0921ud46Ar0My3f6_si7ieBvscsoGs2aLoR87HEwVVUCAnbyzQ0qyQ_p2q41OVfjMB_hJn5gih8PCjcrIzeUzT"/>
              </div>
              <h3 className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] mb-2">Performance Sports</h3>
              <p className="text-[#c4c6d0] font-['Inter'] text-[16px] leading-[24px]">Precision-tuned for the track, built for the adrenaline seeker.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SMG R3 Showcase */}
      <section data-theme="light" className="relative py-[160px] bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[20vw] leading-none opacity-[0.05] pointer-events-none select-none z-0 whitespace-nowrap font-bold text-slate-100">RACING</span>
        </div>
        <div className="max-w-[1440px] mx-auto px-[80px] grid md:grid-cols-2 items-center gap-16 relative z-10">
          <div>
            <span className="font-['Inter'] font-semibold text-[12px] leading-[16px] text-[#1f3861] tracking-[0.1em] mb-4 block uppercase">SMG EXCLUSIVE</span>
            <h2 className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-[#131313] mb-8 uppercase">CRAFTED FOR THE <br/> MODERN RIDER</h2>
            <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] mb-10 max-w-md">The SMG R3 represents the pinnacle of our racing heritage, brought to the streets with uncompromising performance and bespoke design details.</p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-4 font-['Inter'] font-medium text-[14px] leading-[20px] text-[#353534]">
                <span className="material-symbols-outlined text-[#1f3861]">check_circle</span> 1100cc Quad-Cylinder Engine
              </li>
              <li className="flex items-center gap-4 font-['Inter'] font-medium text-[14px] leading-[20px] text-[#353534]">
                <span className="material-symbols-outlined text-[#1f3861]">check_circle</span> Carbon Fiber Aerodynamic Kit
              </li>
              <li className="flex items-center gap-4 font-['Inter'] font-medium text-[14px] leading-[20px] text-[#353534]">
                <span className="material-symbols-outlined text-[#1f3861]">check_circle</span> Intelligent Lean-Angle Traction
              </li>
            </ul>
            <button className="bg-[#131313] text-white px-12 py-5 font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] hover:bg-[#1f3861] transition-colors uppercase">DISCOVER R3</button>
          </div>
          <div className="relative">
            <img alt="SMG R3 Street Racer" className="w-full transform translate-x-12 scale-110 drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida/AP1WRLspRkoxNM-ohAVgCvqEudy8L8TQPqBrki4MNCsMoVQuGh0AHwed8-s5sq3qBRwP4kQF5iKOQyEUnlHTGBNAEX3ZtKCekQ_-BvCL1KR_Kup_xvg-MqQgsqcj2uGhfwEDUifqa3GyQp_lyxfCK_L5S2ynEJ8pUvFSE5S6e52o1ASPRCKdatlYwINvQgp9CzgrSvpE4Cv-M2mJzH4gh386ZW8bzJuo5sj8xFpCPUXMdSy0UPYEbRiKpPma7PI"/>
          </div>
        </div>
      </section>

      {/* Adventure Banner (Parallax) */}
      <section data-theme="dark" className="bg-fixed bg-center bg-no-repeat bg-cover relative h-[60vh] flex items-center justify-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEqxiKnGxE09EBrECr4F_DoXjHLkWkf9qmUmPrs55n_dHU9TDQ_LPdRagqXlM8b2MB98Yr3iQxr3QKkl6WhB110RV94WzwS9aXto3Btl3ULw_BGsjnkzuwVtdc53bC4FqlIKLeEpogcHlACwdo_wQ90-Rqnj06ldV5E0XIphMWk1yYzlwjv5unoAF3S8Liu0FwDl8uPm46uRJLTNfGrdv4422We77Fu8QAkM4gU3ee21fWfdfAAzlJhYcki6ziAawBQ-zBfpDkvnD-')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h2 className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[0.1em] text-white font-bold mb-6 uppercase">CHASE THE HORIZON</h2>
          <div className="w-32 h-1 bg-[#afc7f8] mx-auto"></div>
        </div>
      </section>

      {/* Technology Section */}
      <section data-theme="dark" className="py-[160px] bg-[#131313] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="text-center mb-24">
            <h2 className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-[#afc7f8] mb-4 uppercase">THE HEART OF PERFORMANCE</h2>
            <p className="text-[#c4c6d0] font-['Inter'] text-[16px] leading-[24px] uppercase tracking-widest">Precision Engineering in every bolt</p>
          </div>
          <div className="relative flex justify-center items-center py-20">
            {/* Center Engine Image */}
            <div className="z-20 w-full max-w-4xl">
              <img alt="SMG R3 Engine" className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp2IRhXCy3GwRnCj9dzu15cNdrB5SIgJiv655TBpntDnCR-5oHCvMAPh90-063OtoV6FHTusBcQtHmhl3ECO8vAo6pnhoxA_542x4vgZcxcZFzjJWwEoKMIT4PY7cblQXJyu_vaknIS7b-8UBCljgy8YzKfK24VT4m11arCSqiHpNqdNAwNW20q1rV8l1yXtDgjqxS2SjyEA7K5ZqRKIAHgOIugWsX7WJ16i0SI0q9TbxJiqhnHRQ7O6QMn5KhNOlGKu1ryhayZGr0"/>
            </div>
            {/* Desktop View */}
            <div className="hidden lg:block">
              {/* Left Side */}
              <div className="absolute left-0 top-1/4 text-right max-w-[200px]">
                <h4 className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#afc7f8] text-lg mb-1">SMART SUSPENSION</h4>
                <p className="text-xs text-[#c4c6d0]">Adaptive damping controlled by real-time sensor array.</p>
              </div>
              <div className="absolute left-20 top-1/2 text-right max-w-[200px]">
                <h4 className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#afc7f8] text-lg mb-1">PRECISION TRANSMISSION</h4>
                <p className="text-xs text-[#c4c6d0]">6-speed seamless shifting with quick-shifter plus.</p>
              </div>
              <div className="absolute left-10 bottom-1/4 text-right max-w-[200px]">
                <h4 className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#afc7f8] text-lg mb-1">TRACTION CONTROL</h4>
                <p className="text-xs text-[#c4c6d0]">9-level adjustable system with drift control.</p>
              </div>
              {/* Right Side */}
              <div className="absolute right-0 top-1/4 text-left max-w-[200px]">
                <h4 className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#afc7f8] text-lg mb-1">PERFORMANCE ENGINE</h4>
                <p className="text-xs text-[#c4c6d0]">Hyper-efficient liquid cooling and titanium valves.</p>
              </div>
              <div className="absolute right-20 top-1/2 text-left max-w-[200px]">
                <h4 className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#afc7f8] text-lg mb-1">ADVANCED SAFETY</h4>
                <p className="text-xs text-[#c4c6d0]">Cornering ABS with integrated stability control.</p>
              </div>
              <div className="absolute right-10 bottom-1/4 text-left max-w-[200px]">
                <h4 className="font-['Inter'] font-medium text-[14px] leading-[20px] text-[#afc7f8] text-lg mb-1">FUEL EFFICIENCY</h4>
                <p className="text-xs text-[#c4c6d0]">Dual-stage injection for optimized power delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section data-theme="dark" className="py-24 bg-[#201f1f]">
        <div className="max-w-[1440px] mx-auto px-[80px] flex flex-wrap justify-between items-center gap-[24px] grayscale opacity-50">
          <div className="hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="font-bold text-2xl tracking-tighter">HERO</span>
          </div>
          <div className="hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="font-bold text-2xl tracking-tighter">BAJAJ</span>
          </div>
          <div className="hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="font-bold text-2xl tracking-tighter">HONDA</span>
          </div>
          <div className="hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="font-bold text-2xl tracking-tighter">YAMAHA</span>
          </div>
          <div className="hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="font-bold text-2xl tracking-tighter">TVS</span>
          </div>
        </div>
      </section>

      {/* Premium Showcase (Cruiser) */}
      <section data-theme="dark" className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDE1FKh3ghhmqYk78R3zlVXwgmYs4oqRa3Fr2vj_SwFBNKayzh6NYmfIy2ZcT6Liai3n8ERwMu5AGEx34vxMJXTFeUQFxlUvtO2x5wPRukVvb895e1s3_z0meKKMRDBLOvBNwdC7MMtIcNfJ9nxG4tKe4xIxXyE1eZlSTc25j2SLHQjruqyLowuf0LROPks0Iusp_MxXUCtgxvP4YLLRJPL8vQM1SGijXxsXklpK9pDypt0Imq7HgN_eLEN4MpTD8PhEuelyxjepLi4')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="relative z-10 px-[80px] max-w-2xl">
          <h2 className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-white mb-6 uppercase">CRUISER CULTURE.<br/>TIMELESS PERFORMANCE.</h2>
          <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] mb-8">Rediscover the joy of the open road with our range of premium cruisers, designed for the long haul and the long looks.</p>
          <button className="bg-[#afc7f8] text-[#163059] px-10 py-4 font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] hover:bg-white hover:text-black transition-all uppercase">VIEW COLLECTION</button>
        </div>
      </section>

      {/* Statistics Section */}
      <section data-theme="dark" className="py-32 bg-[#131313]">
        <div className="max-w-[1440px] mx-auto px-[80px] grid grid-cols-2 md:grid-cols-5 gap-[24px]">
          <div className="text-center border-r border-[#44474e]/20 last:border-0 p-4">
            <div className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-[#afc7f8] mb-2">100+</div>
            <div className="font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#c4c6d0]">MOTORCYCLES</div>
          </div>
          <div className="text-center border-r border-[#44474e]/20 last:border-0 p-4">
            <div className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-[#afc7f8] mb-2">25+</div>
            <div className="font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#c4c6d0]">BRANDS</div>
          </div>
          <div className="text-center border-r border-[#44474e]/20 last:border-0 p-4">
            <div className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-[#afc7f8] mb-2">15+</div>
            <div className="font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#c4c6d0]">YEARS EXP</div>
          </div>
          <div className="text-center border-r border-[#44474e]/20 last:border-0 p-4">
            <div className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-[#afc7f8] mb-2">50K+</div>
            <div className="font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#c4c6d0]">CUSTOMERS</div>
          </div>
          <div className="text-center p-4">
            <div className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-[#afc7f8] mb-2">98%</div>
            <div className="font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] text-[#c4c6d0]">SATISFACTION</div>
          </div>
        </div>
      </section>

      {/* Gallery (Masonry) */}
      <section data-theme="light" className="py-[160px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            <div className="md:col-span-2 md:row-span-2 overflow-hidden relative group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery Image 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1cH2lvLYYLNMdfdvyfmUQPVVVgWGl88gb9zU6JsGdPeWq8ke2ee7uBlBkfQWaf8e0domLRZuE_TIYJpchAFKMTX2cvUQpmhpuLP6H7RFw86dSqy6tS-naAWGIWdjpRGXpNCSHCK9dnSak5RZOTMogf936ZvBcEAHQ1mnth2dzgHJi0Ophngt5Ci2LmNsNomPqL2tnWIzhKyB76n88lf5w7Wp3JCOkKXcUIOp4Ptoy4D5cR4KreLb0tEB17J6OezPHT5PCzfCgte84"/>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>
            <div className="overflow-hidden relative group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery Image 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvSNt0X3iQyl5FZB_KbR9iKImiC2umvVHiwNtdVlFhXJbHYuBLFygqBS3Lsz41gsh6Io8ByGW1bwhOe8J1CAUUcDIFDXtF7K3yPLTcMjujKaWLsCH2HOtN-O6WZ699BGN_a93gT50icFyskZ88uEju6UoQd4nstRE1K5jmdPeyk7UfTqLKS3KBqXPQiIfl2Gv8Clai0ExsDalStxt_e0Nj-XWRUasWFbJ2xCdvjphohRulcXRhmtz1TUkHRggQOr3NbMhTOY9HkRFo"/>
            </div>
            <div className="overflow-hidden relative group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery Image 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfv8uoOh8o9VnkIvLdlK3smGadSWKik-alYVB4ipAsonm5uZ5V-0IsNgmiYOlsF1mjlgChgxMsQIEMXA7UGM92lI0BOqXHCnfBDvrvY1LsgfK-NETDxWWdGULs-h4qSGp4TqGmI0rFF7qvo2n5Pv8eGWhIOHyRfaR91g-DTM0uqScpiojj5KTWUYzfEh93sypZcQZQKo77yCZwM-LbGi4VkxKxyUPE1dQbfVPQa5ag5KXVoQrhJsvjbj4lNA8TduMorRrj22fBXayT"/>
            </div>
            <div className="md:col-span-2 overflow-hidden relative group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gallery Image 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmLKNE_toCEN-iUDd0dxdiZ3g1aKIEmRjfQaCIxbM0M254YComfv_1xUrZvlbycawQ7Ipti2H1Zy5MzhUBRH1IgGXVUE0Ej13QBXy1flsJGCJ--jXSHgitxYO56ZZMsIENewCypOx4XhxcpmiM5XZ0uhyXgQw7n1Rgw_Lvz6rRPtag72e0m3g-gFMuYj_vJDwgMLz6iD99eoTDvw5eYBYAxgY5Xx9sBSKBw92iprSdQnyznZtfSQkVAZ0NtiUNET-AisB9oOjryGBM"/>
            </div>
          </div>
        </div>
      </section>

      {/* Riding Gear Section */}
      <section data-theme="dark" className="py-[160px] bg-[#131313] relative overflow-hidden">
        <div className="absolute font-bold right-0 top-1/2 -translate-y-1/2 text-[#afc7f8] text-[20vw] leading-none opacity-[0.02] pointer-events-none select-none z-0 whitespace-nowrap">RIDING</div>
        <div className="max-w-[1440px] mx-auto px-[80px] grid md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] flex items-center justify-center">
            <img className="max-h-full z-10 relative drop-shadow-[0_20px_50px_rgba(175,199,248,0.3)]" alt="Riding Gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZWXZeHyYKljiWj8y8Jw23uIbCe3uGEPw1bBr6FNRITKNnvoJjiJgNO5DDQbtQ61OCHKV4AiwflZ5okhxJ3LXbsxluONWD6oCceTE3l-g9W1mrLWc94C9NuLghFlr0tZQUsFIDQEvbQuKpKg5nVDjEf8Ci2ZiM0UbTH1sL2ICvtYZ8U1p8uOPBc1rtHSK0xfU13qEwYnDW4ctMEwnsA4_G0DRFKzA-VpbOUDfVNtIotGPgSLf2CKZCoLau3Xilx_BDoK4Lc71wP2ZB"/>
          </div>
          <div>
            <span className="font-['Inter'] font-semibold text-[12px] leading-[16px] text-[#afc7f8] tracking-[0.1em] mb-4 block uppercase">PERFORMANCE APPAREL</span>
            <h2 className="font-['Montserrat'] font-bold text-[48px] leading-[56px] tracking-[-0.01em] text-white mb-8 uppercase">GEAR UP FOR THE UNKNOWN</h2>
            <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] mb-10">Protection shouldn't mean compromise. Our curated range of riding gear blends military-grade safety with Italian sartorial elegance.</p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-['Montserrat'] font-semibold text-[#afc7f8] text-[20px] mb-2 uppercase">IMPACT SHIELD</h4>
                <p className="text-sm text-[#c4c6d0]">Level 2 CE certified armor integrated into every jacket.</p>
              </div>
              <div>
                <h4 className="font-['Montserrat'] font-semibold text-[#afc7f8] text-[20px] mb-2 uppercase">AEROCLASSIC</h4>
                <p className="text-sm text-[#c4c6d0]">Breathable membranes that regulate body temp in any weather.</p>
              </div>
            </div>
            <button className="border-b-2 border-[#afc7f8] text-[#afc7f8] font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] pb-2 hover:text-white hover:border-white transition-all uppercase">BROWSE CATALOGUE</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-theme="dark" className="py-32 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-[80px] text-center">
          <h2 className="font-['Montserrat'] text-[48px] leading-[56px] font-bold text-white mb-10 uppercase tracking-tight">READY FOR YOUR NEXT RIDE?</h2>
          <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] mb-12 max-w-xl mx-auto">Join the SMG inner circle and be the first to know about new model drops, track days, and exclusive owner events.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-lg mx-auto">
            <input className="bg-transparent border-b border-[#44474e]/30 py-4 px-2 w-full focus:outline-none focus:border-white transition-all text-white font-['Inter'] font-semibold text-[12px] tracking-[0.1em]" placeholder="ENTER YOUR EMAIL" type="email"/>
            <button className="bg-white text-black px-10 py-4 font-['Inter'] font-semibold text-[12px] leading-[16px] tracking-[0.1em] hover:bg-[#afc7f8] transition-all shrink-0">JOIN NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
}
