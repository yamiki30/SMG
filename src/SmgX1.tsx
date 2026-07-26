import { useEffect, useRef } from 'react';
import Footer from './Footer';

export default function SmgX1() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-['Inter'] selection:bg-[#afc7f8]/30 selection:text-white overflow-x-hidden min-h-screen">

      {/* ── HERO SECTION ── */}
      <header className="relative h-screen w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMg8s4lC97kdUaOf14WO3maFVgRGD44PgwHrVNO2D-mnwxJ5YjozkVOX-SpRt3Tk8sSAknpqPuwOqG2Dhc0h8Tz9G8h42lXn76Pns-lXXCfH7XJUep1GThpPp5kpnUfWjbgux1ocNsH2zSNg0Rml0jpqmXe_5EhBIzY27XHeQ1_2f_n0J382pwfD1KNYB0zahmj-7eLDg1uF4Q-Ywx6UUOhCelUx8Tzs_fuL9YPzaNv-QXqSHkuC-rvMmNyBiK5MYeEnM00S4AKCSN"
            alt="SMG X1 Adventure"
          />
          <div className="absolute inset-0 z-20" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, #131313 100%)' }}></div>
        </div>

        <div className="relative z-30 px-6 md:px-[80px] max-w-4xl pt-20">
          <span className="font-['Inter'] font-semibold text-[12px] tracking-[0.3em] text-[#afc7f8] mb-4 block uppercase">Adventure Redefined</span>
          <h1 className="font-['Montserrat'] text-[32px] md:text-[80px] leading-[40px] md:leading-[90px] font-bold text-white mb-6 tracking-[-0.02em] uppercase">
            SMG X1:<br />Unstoppable Adventure
          </h1>
          <p className="font-['Inter'] text-[18px] leading-[28px] text-[#c4c6d0] mb-10 max-w-xl">
            The ultimate electric adventure tourer. Engineered for the journey, built for the destination. Experience silent power across any terrain.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="bg-[#afc7f8] text-[#163059] font-['Inter'] font-semibold text-[12px] uppercase px-10 py-4 tracking-[0.1em] hover:bg-[#e5e2e1] hover:text-[#131313] transition-all duration-300">
              Explore Inventory
            </button>
            <button className="border border-white/15 bg-transparent text-white font-['Inter'] font-semibold text-[12px] uppercase px-10 py-4 tracking-[0.1em] hover:bg-white/10 transition-all duration-300">
              Book Test Ride
            </button>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="absolute bottom-0 w-full z-40 py-8" style={{ background: 'rgba(14, 14, 14, 0.7)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(192, 192, 192, 0.05)' }}>
          <div className="px-6 md:px-[80px] flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-6">
            <div className="flex flex-col text-center md:text-left">
              <span className="font-['Inter'] font-semibold text-[10px] text-[#c4c6d0] tracking-widest uppercase mb-1">Range</span>
              <span className="font-['Montserrat'] font-semibold text-[24px] text-white">Up to 120 KM*</span>
            </div>
            <div className="hidden md:block h-10 w-px bg-[#44474e]/30"></div>
            <div className="flex flex-col text-center md:text-left">
              <span className="font-['Inter'] font-semibold text-[10px] text-[#c4c6d0] tracking-widest uppercase mb-1">Charging</span>
              <span className="font-['Montserrat'] font-semibold text-[24px] text-white">0-80% in 3 Hours</span>
            </div>
            <div className="hidden md:block h-10 w-px bg-[#44474e]/30"></div>
            <div className="flex flex-col text-center md:text-left">
              <span className="font-['Inter'] font-semibold text-[10px] text-[#c4c6d0] tracking-widest uppercase mb-1">Utility</span>
              <span className="font-['Montserrat'] font-semibold text-[24px] text-white">Smart Safety Tech</span>
            </div>
            <div className="hidden md:block h-10 w-px bg-[#44474e]/30"></div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span className="font-['Inter'] font-semibold text-[12px] text-[#afc7f8] uppercase tracking-[0.1em] group-hover:translate-x-2 transition-transform">Full Specs</span>
              <span className="text-[#afc7f8]">→</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRODUCT SHOWCASE ── */}
      <section ref={(el) => (sectionsRef.current[0] = el)} className="py-[160px] px-6 md:px-[80px] bg-[#131313]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-[#afc7f8]/5 blur-[100px] rounded-full group-hover:bg-[#afc7f8]/10 transition-all duration-1000"></div>
            <img
              className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-[600ms] hover:scale-105"
              src="/motorcycles/SMG X1/x1 white bg.jpeg"
              alt="SMG X1 Studio"
            />
          </div>
          <div className="flex flex-col space-y-8">
            <span className="font-['Inter'] font-semibold text-[12px] text-[#afc7f8] tracking-[0.2em] uppercase">Design Philosophy</span>
            <h2 className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-white uppercase tracking-[-0.01em]">Adventure Ready</h2>
            <p className="font-['Inter'] text-[16px] leading-[24px] text-[#c4c6d0]">
              The X1 is crafted with a lightweight, high-tensile steel trellis frame designed to absorb the rigors of off-road expeditions while maintaining razor-sharp handling on the tarmac. Its olive green rugged styling isn't just aesthetic—it's a statement of capability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border border-[#44474e]/10">
                <span className="text-[#afc7f8] text-3xl mb-4 block">⛰️</span>
                <h4 className="font-['Montserrat'] font-semibold text-lg text-white mb-2">Versatile Chassis</h4>
                <p className="text-xs text-[#c4c6d0] font-['Inter']">Engineered for dynamic weight distribution and superior stability on loose gravel.</p>
              </div>
              <div className="p-6 border border-[#44474e]/10">
                <span className="text-[#afc7f8] text-3xl mb-4 block">💡</span>
                <h4 className="font-['Montserrat'] font-semibold text-lg text-white mb-2">Signature Lighting</h4>
                <p className="text-xs text-[#c4c6d0] font-['Inter']">Adaptive LED matrix headlamps that carve through the darkest forest trails.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING MASTERY ── */}
      <section ref={(el) => (sectionsRef.current[1] = el)} className="py-[160px] bg-[#0e0e0e] overflow-hidden">
        <div className="px-6 md:px-[80px] max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-['Inter'] font-semibold text-[12px] text-[#afc7f8] tracking-[0.2em] uppercase mb-4">The Heart of the Machine</span>
            <h2 className="font-['Montserrat'] font-bold text-[48px] leading-[56px] text-white mb-6 uppercase">Engineering Mastery</h2>
            <div className="w-24 h-[2px] bg-[#afc7f8]"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden group" style={{ border: '1px solid rgba(192, 192, 192, 0.15)' }}>
            <img
              className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
              src="/motorcycles/SMG X1/x1 specifications.jpeg"
              alt="SMG X1 Engineering"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent p-6 md:p-12 flex items-center">
              <div className="max-w-md space-y-6">
                <div className="inline-block px-3 py-1 bg-[#afc7f8]/10 border border-[#afc7f8]/20 rounded text-[#afc7f8] font-['Inter'] font-medium text-[10px] tracking-widest uppercase">
                  Propulsion Unit v4.0
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-[32px] text-white">Silent Precision. Raw Torque.</h3>
                <p className="font-['Inter'] text-[16px] text-[#c4c6d0]">
                  Our electric drivetrain eliminates the vibration and heat of ICE engines, allowing you to stay focused on the rhythm of the trail. Minimal moving parts mean maximum reliability in the harshest conditions on Earth.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#afc7f8]">✓</span>
                    <span className="font-['Inter'] font-medium text-[14px] text-white">98% Energy Efficiency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#afc7f8]">✓</span>
                    <span className="font-['Inter'] font-medium text-[14px] text-white">Zero Maintenance Intervals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#afc7f8]">✓</span>
                    <span className="font-['Inter'] font-medium text-[14px] text-white">IP67 Waterproof Rating</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVENTURE BANNER ── */}
      <section ref={(el) => (sectionsRef.current[2] = el)} className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida/AP1WRLt1MRcKju9XFfp8f-sqODkszp6M_ChxN3egxdjAd26Rg3uYkKfQS3xH2kWt8QHeMTKOJ4xOutGwwDTdz5BxmYl6mJkq5N-qvcFUsNfzzAEedD_ktYymD9n6SLMR0vkiDQt_TqcAkgpxbVUXIqTDTUKmKxfqaTk5Wxori_gJ4i1wuGasUDBd5hUSVo4Z8Kxh1Q-ASBxy-wGDi10pc7RXcjEvqRzINYIBsLWssyk0sn7Cdv02Qj4TiCnjs8hS"
          alt="Chase the Horizon"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="font-['Montserrat'] font-bold text-[48px] md:text-[72px] text-white tracking-tighter mb-8 uppercase">Chase the Horizon</h2>
          <button className="bg-white text-[#131313] font-['Inter'] font-semibold text-[12px] uppercase px-12 py-5 tracking-[0.1em] hover:bg-[#afc7f8] hover:text-white transition-all duration-300">
            Plan Your Journey
          </button>
        </div>
      </section>

      {/* ── ACCESSORIES BENTO GRID ── */}
      <section ref={(el) => (sectionsRef.current[3] = el)} className="py-[160px] px-6 md:px-[80px] bg-[#131313]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="font-['Inter'] font-semibold text-[12px] text-[#afc7f8] tracking-[0.2em] uppercase mb-2 block">Equipment</span>
              <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[48px] text-white uppercase">Beyond the Bike</h2>
            </div>
            <a className="text-[#afc7f8] font-['Inter'] font-semibold text-[12px] uppercase tracking-[0.1em] border-b border-[#afc7f8]/30 pb-1 hover:border-[#afc7f8] transition-all" href="#">View All Accessories</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg h-[600px]" style={{ border: '1px solid rgba(192, 192, 192, 0.15)' }}>
              <img
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-[600ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBluQ6eSCKSBK40WMibGJblcCWag5fTvNYh-Epbv3zMcvye9eGzFvnlLKRxn18IItO1kN2Lk4haC08hBVUwzlP3gjMUBPKwiuysLt9kR5ZHXCvPlUa3EPI70F7ENSLHBWxc1nVgwfpiK9DAAKf_wibIhhGU8ALmCLidVbFiS9CbPXvSZc3-mMa5y_XpLkB1Hoon0T7PnYfLt08aMScEIwWceTNZinolPxiqairbJ5vg3GPzNjpevT9APEeppKaEfQfjGkqdNnNnhI5v"
                alt="Apex Carbon Helmet"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
                <h4 className="font-['Montserrat'] font-semibold text-2xl text-white mb-2">Apex Carbon Helmet</h4>
                <p className="text-[#c4c6d0] font-['Inter'] text-sm mb-6">Designed for maximum aerodynamics and safety in high-speed ADV touring.</p>
                <button className="w-fit bg-white/10 backdrop-blur-md text-white font-['Inter'] font-semibold text-[12px] uppercase px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all tracking-[0.1em]">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Small Grid Card 1 */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-lg h-[288px]" style={{ border: '1px solid rgba(192, 192, 192, 0.15)' }}>
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-[600ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2QuQpeUkrO2tMBHeNQ5XwQy14dAy5Wa_TdM02OuhD9cAI1t4x3K5kkNf5A75gYUBR-GVUbg5us6qVy-xCOStGbjqrV8uObKnTzwe6CLcZbOCk3UsAFkFna0-hJhNZ_gNXnZggC1RmlSCXnS9pR6S7_qrD0Wz1qMjKGXZTX_WBqJ930N-aA7k_FNvJLk_PjOS6p4tMmMatI8XGJKvM-bEsgh6s8Avw9b6mK6R58qtc4t0-HdyTqOiHlfwEei48nJtJfQD1GNeTS4J"
                alt="X-Pannier System"
              />
              <div className="absolute inset-0 flex items-center justify-end p-8 z-10">
                <div className="text-right">
                  <h4 className="font-['Montserrat'] font-semibold text-xl text-white mb-1">X-Pannier System</h4>
                  <p className="text-[#afc7f8] font-['Inter'] font-medium text-[14px]">Aluminum Hard Luggage</p>
                </div>
              </div>
            </div>

            {/* Small Grid Card 2 */}
            <div className="group relative overflow-hidden rounded-lg h-[288px]" style={{ border: '1px solid rgba(192, 192, 192, 0.15)' }}>
              <img
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-[600ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdYmED9ykMn9yRnZDAF_T1xUus-DoMvrTNLVEUe0uIcZ8sc0si3AbLY6PjY0Kg-MThrPg2tf-dE90lLw-IYbOqkh9QVDXLNk2LfzV4xTdNF-97TzuvRcXDwv_Eydm4g4PoTtjnTpH4pkTBZ8iw_tRjw7rJ2BH6INLbZjwrCZQnFGCNjgzrL5aPUHnOOB56Gg_fBW5f6NDHjRsPtANrnw3B2O3Yl54DY891LeKNy3vJu7peOXacJCBSgunjg_L-_PcZkzbuSeHK8ta"
                alt="Trail Grip Gloves"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="font-['Montserrat'] font-semibold text-lg text-white">Trail Grip Gloves</h4>
              </div>
            </div>

            {/* Small Grid Card 3 */}
            <div className="group relative overflow-hidden rounded-lg h-[288px]" style={{ border: '1px solid rgba(192, 192, 192, 0.15)' }}>
              <img
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-[600ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2E4qBUNdQSfxD3gc4eVjUg2T2BRXmTDlPyMiZ-U7Pq7_Cxl83MIPt-zrZEZp8c6A37ZBa5IQ__XOBNv3_49PaJs3S89MpiKYBetMJNJPTPhtYPYoLYcuGQW8tMCNdyzdxF4ePxaa0mI6IbegJG35HHrrNdztVoKtySV8DqIKdoQkxspyAdb1DOrvovx3EHfLeI9-nLjPRqltyBwoAdHOg74CuSauzThnyNJ3PSW0UUiDzk5rEZVkahdErcPgtB86WJwk8mNKPbLXB"
                alt="Terra-Form Boots"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="font-['Montserrat'] font-semibold text-lg text-white">Terra-Form Boots</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section ref={(el) => (sectionsRef.current[4] = el)} className="py-[160px] px-6 md:px-[80px] bg-[#1f3861] text-[#8ba2d1] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="font-['Montserrat'] font-bold text-[32px] md:text-[64px] text-white leading-tight mb-8 uppercase">Ready for your next expedition?</h2>
          <p className="font-['Inter'] text-[18px] leading-[28px] text-[#afc7f8] max-w-2xl mb-12">
            Join the silent revolution. Configure your SMG X1 today and be the first to experience the future of adventure touring.
          </p>
          <button className="bg-white text-[#163059] font-['Inter'] font-semibold text-[12px] uppercase px-16 py-6 tracking-[0.1em] hover:bg-[#e2e2e2] hover:scale-105 transition-all duration-300 shadow-2xl">
            Configure Your X1
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
