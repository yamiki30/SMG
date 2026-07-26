import { useEffect } from 'react';
import { Zap, BatteryFull, Armchair, Bike, Store, Calendar, BadgeCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookTestRide() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] selection:bg-[#1f3861] selection:text-white overflow-x-hidden font-body-md min-h-screen">
      <style>{`
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .hero-gradient {
            background: linear-gradient(to bottom, rgba(19, 19, 19, 0.2), rgba(19, 19, 19, 0.95));
        }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 z-0">
          <img alt="Premium motorcycle at golden hour" className="w-full h-full object-cover" src="/motorcycles/SMG X1/marine drive.png" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl px-6 md:px-[80px] pt-20">
          <h1 className="font-display-lg text-5xl md:text-[80px] leading-tight md:leading-[90px] font-bold text-white mb-6 uppercase tracking-[0.05em]">BOOK YOUR TEST RIDE</h1>
          <p className="font-body-lg text-lg text-[#c4c6d0] mb-12 max-w-2xl mx-auto tracking-wide">
            Experience the future of premium electric mobility. Feel the performance. Ride before you decide.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#booking-form" className="bg-[#1f3861] text-white px-12 py-5 font-headline-md font-semibold text-[16px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#1f3861] transition-all shadow-lg border border-[#1f3861] text-center inline-block">Book Now</a>
            <Link to="/" className="border border-white/30 text-white px-12 py-5 font-headline-md font-semibold text-[16px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#131313] transition-all backdrop-blur-sm bg-white/5 text-center inline-block">Explore Models</Link>
          </div>
        </div>
      </section>

      {/* Section 2: Why Test Ride */}
      <section className="py-24 md:py-[160px] px-6 md:px-[80px] max-w-[1440px] mx-auto" data-theme="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="reveal group flex flex-col items-center text-center">
            <Zap className="text-[#afc7f8] w-16 h-16 mb-8 font-light" strokeWidth={1} />
            <h3 className="font-headline-md font-semibold text-3xl mb-4 uppercase tracking-widest">Instant Torque</h3>
            <p className="font-body-md text-[#a1a1a1] leading-relaxed">Feel the immediate surge of 150Nm torque the moment you twist the throttle. Pure, silent acceleration.</p>
          </div>
          <div className="reveal group flex flex-col items-center text-center">
            <BatteryFull className="text-[#afc7f8] w-16 h-16 mb-8 font-light" strokeWidth={1} />
            <h3 className="font-headline-md font-semibold text-3xl mb-4 uppercase tracking-widest">Long Range</h3>
            <p className="font-body-md text-[#a1a1a1] leading-relaxed">Experience industry-leading battery technology providing up to 280km of range on a single charge.</p>
          </div>
          <div className="reveal group flex flex-col items-center text-center">
            <Armchair className="text-[#afc7f8] w-16 h-16 mb-8 font-light" strokeWidth={1} />
            <h3 className="font-headline-md font-semibold text-3xl mb-4 uppercase tracking-widest">Premium Comfort</h3>
            <p className="font-body-md text-[#a1a1a1] leading-relaxed">Ergonomically designed for performance and long-distance touring without compromise.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Booking Form */}
      <section id="booking-form" className="py-24 md:py-[160px] px-6 md:px-[80px] bg-[#0e0e0e] relative overflow-hidden" data-theme="dark">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#1f3861]/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="reveal">
            <img alt="SMG Premium Motorcycle Studio" className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl brightness-90 contrast-125" src="/dealers/find a dealer.png" />
          </div>
          <div className="reveal glass-panel p-10 md:p-16 rounded-xl shadow-2xl">
            <h2 className="font-headline-lg font-bold text-3xl md:text-5xl mb-2 uppercase tracking-widest">Your Journey Begins</h2>
            <p className="text-[#c4c6d0] mb-10 font-body-md">Complete the form below to schedule your exclusive test ride experience.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Full Name</label>
                <input className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md outline-none" placeholder="Alexander Pierce" type="text" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Email Address</label>
                <input className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md outline-none" placeholder="alex@premium.com" type="email" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Phone Number</label>
                <input className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md outline-none" placeholder="+91 99887 76655" type="tel" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">City</label>
                <input className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md outline-none" placeholder="Enter City" type="text" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Select Dealer</label>
                <select className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md cursor-pointer outline-none">
                  <option className="bg-[#131313] text-white">Select Nearest Dealer</option>
                  <option className="bg-[#131313] text-white">SMG Experience Center - Bengaluru</option>
                  <option className="bg-[#131313] text-white">SMG Experience Center - Mumbai</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Preferred Model</label>
                <select className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md cursor-pointer outline-none">
                  <option className="bg-[#131313] text-white" value="">Select Model</option>
                  <option className="bg-[#131313] text-white" value="x1">SMG X1</option>
                  <option className="bg-[#131313] text-white" value="x2">SMG X2</option>
                  <option className="bg-[#131313] text-white" value="r3">SMG R3</option>
                  <option className="bg-[#131313] text-white" value="e1">SMG E1</option>
                  <option className="bg-[#131313] text-white" value="e2">SMG E2</option>
                  <option className="bg-[#131313] text-white" value="e4">SMG E4</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Preferred Date</label>
                <input className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md cursor-pointer outline-none" type="date" />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Preferred Time</label>
                <input className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md cursor-pointer outline-none" type="time" />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2 relative mt-4">
                <label className="font-label-caps font-semibold uppercase text-[#afc7f8]/80 absolute -top-5 left-0 text-[10px] tracking-widest">Message (Optional)</label>
                <textarea className="bg-transparent border-0 border-b border-white/20 focus:border-[#afc7f8] focus:ring-0 text-white p-2 transition-colors font-body-md resize-none outline-none" placeholder="Tell us about your riding experience..." rows={2}></textarea>
              </div>
              <div className="col-span-1 md:col-span-2 flex items-center gap-4 mt-2">
                <input className="rounded-sm bg-transparent border-white/20 text-[#1f3861] focus:ring-[#1f3861] focus:ring-offset-[#131313] h-5 w-5 cursor-pointer" id="agreement" type="checkbox" />
                <label className="text-body-md text-[#c4c6d0] cursor-pointer text-sm" htmlFor="agreement">I agree to be contacted by SMG specialists and accept the terms of service.</label>
              </div>
              <div className="col-span-1 md:col-span-2 mt-6">
                <button type="button" className="w-full bg-[#1f3861] text-white py-5 font-headline-md font-semibold text-[14px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#1f3861] transition-all duration-300 shadow-lg shadow-[#1f3861]/20">BOOK MY TEST RIDE</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-24 md:py-[160px] px-6 md:px-[80px] max-w-[1440px] mx-auto" data-theme="dark">
        <h2 className="font-headline-lg font-bold text-3xl md:text-5xl text-center mb-16 md:mb-[160px] uppercase tracking-widest">The Experience Protocol</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="reveal relative p-10 border border-white/5 flex flex-col gap-6 hover:border-[#afc7f8]/50 transition-all duration-500 bg-[#1c1b1b]/50 hover:bg-[#1c1b1b] group">
            <span className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#afc7f8]/10 transition-colors">01</span>
            <Bike className="text-[#afc7f8] w-10 h-10 font-light" strokeWidth={1} />
            <h4 className="font-headline-md font-semibold uppercase tracking-wider text-lg">Choose Motorcycle</h4>
            <p className="font-body-md text-[#a1a1a1] text-sm">Select from our elite fleet of electric and performance motorcycles.</p>
          </div>
          <div className="reveal relative p-10 border border-white/5 flex flex-col gap-6 hover:border-[#afc7f8]/50 transition-all duration-500 bg-[#1c1b1b]/50 hover:bg-[#1c1b1b] group">
            <span className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#afc7f8]/10 transition-colors">02</span>
            <Store className="text-[#afc7f8] w-10 h-10 font-light" strokeWidth={1} />
            <h4 className="font-headline-md font-semibold uppercase tracking-wider text-lg">Select Dealer</h4>
            <p className="font-body-md text-[#a1a1a1] text-sm">Find your nearest premium SMG Experience Center.</p>
          </div>
          <div className="reveal relative p-10 border border-white/5 flex flex-col gap-6 hover:border-[#afc7f8]/50 transition-all duration-500 bg-[#1c1b1b]/50 hover:bg-[#1c1b1b] group">
            <span className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#afc7f8]/10 transition-colors">03</span>
            <Calendar className="text-[#afc7f8] w-10 h-10 font-light" strokeWidth={1} />
            <h4 className="font-headline-md font-semibold uppercase tracking-wider text-lg">Pick Date/Time</h4>
            <p className="font-body-md text-[#a1a1a1] text-sm">Choose a slot that fits your premium lifestyle.</p>
          </div>
          <div className="reveal relative p-10 border border-white/5 flex flex-col gap-6 hover:border-[#afc7f8]/50 transition-all duration-500 bg-[#1c1b1b]/50 hover:bg-[#1c1b1b] group">
            <span className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#afc7f8]/10 transition-colors">04</span>
            <BadgeCheck className="text-[#afc7f8] w-10 h-10 font-light" strokeWidth={1} />
            <h4 className="font-headline-md font-semibold uppercase tracking-wider text-lg">Ride With Expert</h4>
            <p className="font-body-md text-[#a1a1a1] text-sm">Guided session with an SMG performance specialist.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose SMG (Dark Navy Section) */}
      <section className="relative bg-[#0e0e0e] py-24 md:py-[160px] px-6 md:px-[80px] overflow-hidden border-y border-white/5" data-theme="dark">
        <div className="absolute inset-0 opacity-10">
          <img className="w-full h-full object-cover mix-blend-luminosity" src="/dealers/become a dealer.png" alt="Engineering Background" />
          <div className="absolute inset-0 bg-[#1f3861]/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg font-bold text-3xl md:text-5xl text-white mb-8 uppercase tracking-widest">Heritage of Excellence</h2>
            <p className="font-body-lg text-lg text-[#c4c6d0] mb-12 leading-relaxed">SMG is more than a manufacturer. We are an engineering powerhouse dedicated to redefining the physics of riding. With global operations and a focus on sustainability, we lead the electric revolution through precision engineering.</p>
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 border-t border-white/10 pt-12">
              <div>
                <div className="text-4xl font-bold text-white mb-3 tracking-tight">₹9,000 Cr+</div>
                <div className="font-label-caps font-semibold text-[#afc7f8] uppercase tracking-[0.2em] text-[10px]">Group Turnover</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-3 tracking-tight">3,500+</div>
                <div className="font-label-caps font-semibold text-[#afc7f8] uppercase tracking-[0.2em] text-[10px]">Global Employees</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-3 tracking-tight">24+</div>
                <div className="font-label-caps font-semibold text-[#afc7f8] uppercase tracking-[0.2em] text-[10px]">Innovation Labs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-3 tracking-tight">120+</div>
                <div className="font-label-caps font-semibold text-[#afc7f8] uppercase tracking-[0.2em] text-[10px]">Global Patents</div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <img alt="SMG Engineering Excellence" className="w-full h-[600px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="/stock/two wheerler ev.jpeg" />
          </div>
        </div>
      </section>

      {/* Section 6: Featured Motorcycles */}
      <section className="py-24 md:py-[160px] px-6 md:px-[80px] bg-[#131313] max-w-[1440px] mx-auto" data-theme="dark">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 border-b border-white/10 pb-8 gap-4">
          <h2 className="font-headline-lg font-bold text-3xl md:text-5xl uppercase tracking-widest">The Fleet</h2>
          <Link to="/" className="text-white hover:text-[#afc7f8] transition-colors font-label-caps font-semibold uppercase tracking-[0.2em] text-sm flex items-center gap-2 group">
            View Full Catalog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="reveal group flex flex-col bg-[#1c1b1b] border border-white/5 hover:border-[#afc7f8]/30 transition-all duration-500">
            <div className="w-full h-[300px] overflow-hidden bg-[#0e0e0e] p-8 flex items-center justify-center">
              <img alt="SMG X1" className="w-full h-full object-contain mix-blend-lighten group-hover:scale-105 transition-transform duration-700" src="/motorcycles/SMG X1/x1 white bg.jpeg" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-label-caps font-semibold text-[#afc7f8] uppercase mb-3 block text-[10px] tracking-[0.2em]">Signature Series</span>
              <h3 className="font-headline-lg font-bold text-2xl mb-4 uppercase tracking-wider">SMG X-Series</h3>
              <p className="font-body-md text-[#a1a1a1] text-sm mb-8 flex-grow">The pinnacle of electric cafe racer design. Lightweight, agile, and aggressively styled for the purist.</p>
              <Link to="/smg-x1" className="w-full text-center border border-white/20 py-4 font-label-caps font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#131313] transition-colors text-xs block">View Details</Link>
            </div>
          </div>
          <div className="reveal group flex flex-col bg-[#1c1b1b] border border-white/5 hover:border-[#afc7f8]/30 transition-all duration-500" style={{ transitionDelay: "100ms" }}>
            <div className="w-full h-[300px] overflow-hidden bg-[#0e0e0e] p-8 flex items-center justify-center">
              <img alt="SMG R3" className="w-full h-full object-contain mix-blend-lighten group-hover:scale-105 transition-transform duration-700" src="/motorcycles/SMG R3/r3 white bg.jpeg" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-label-caps font-semibold text-[#afc7f8] uppercase mb-3 block text-[10px] tracking-[0.2em]">Performance Series</span>
              <h3 className="font-headline-lg font-bold text-2xl mb-4 uppercase tracking-wider">SMG R3</h3>
              <p className="font-body-md text-[#a1a1a1] text-sm mb-8 flex-grow">Engineered for the circuit. Dual motor setup providing 200HP of pure electric, uncompromising power.</p>
              <Link to="/smg-r3" className="w-full text-center border border-white/20 py-4 font-label-caps font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#131313] transition-colors text-xs block">View Details</Link>
            </div>
          </div>
          <div className="reveal group flex flex-col bg-[#1c1b1b] border border-white/5 hover:border-[#afc7f8]/30 transition-all duration-500" style={{ transitionDelay: "200ms" }}>
            <div className="w-full h-[300px] overflow-hidden bg-[#0e0e0e] p-8 flex items-center justify-center">
              <img alt="SMG X2" className="w-full h-full object-contain mix-blend-lighten group-hover:scale-105 transition-transform duration-700" src="/motorcycles/SMG x2/white bg.jpeg" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-label-caps font-semibold text-[#afc7f8] uppercase mb-3 block text-[10px] tracking-[0.2em]">Urban Series</span>
              <h3 className="font-headline-lg font-bold text-2xl mb-4 uppercase tracking-wider">SMG X2</h3>
              <p className="font-body-md text-[#a1a1a1] text-sm mb-8 flex-grow">The future of urban commuting. Versatile, efficient, and connected mobility for the modern metropolis.</p>
              <Link to="/smg-x2" className="w-full text-center border border-white/20 py-4 font-label-caps font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#131313] transition-colors text-xs block">View Details</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
