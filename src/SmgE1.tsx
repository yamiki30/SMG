import { Link } from 'react-router-dom';
import { Route, Zap, Smartphone, Lightbulb, Wind, Gauge, Bike, Leaf } from 'lucide-react';

export default function SmgE1() {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-body-md antialiased overflow-x-hidden selection:bg-[#1f3861] selection:text-[#8ba2d1] min-h-screen">
      <style>{`
        .glass-panel {
            background: rgba(18, 18, 18, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(192, 192, 192, 0.15);
        }
        .text-gradient {
            background: linear-gradient(to right, #afc7f8, #e5e2e1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20" data-theme="dark">
        <div className="absolute inset-0 z-0">
          <img alt="SMG E1 Hero" className="w-full h-full object-cover object-center opacity-70" src="/scooters/smg e1/adv e1.jpeg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-[80px] flex flex-col items-start justify-center h-full">
          <span className="font-label-caps text-[12px] font-semibold text-[#afc7f8] uppercase tracking-[0.1em] mb-4">The Future is Here</span>
          <h1 className="font-display-hero text-[80px] leading-[90px] tracking-[-0.02em] font-bold text-[#e5e2e1] mb-6 max-w-3xl">
            SMG E1
          </h1>
          <p className="font-body-lg text-[18px] leading-[28px] text-[#c4c6d0] max-w-xl mb-10">
            The Smart Electric Scooter Built for the Future. Experience unparalleled performance, zero emissions, and cutting-edge design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <Link to="/book-test-ride" className="bg-[#1f3861] text-white px-8 py-4 font-label-caps text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#c6c6c6] hover:text-[#1f3861] transition-colors duration-300 text-center">
              Book A Test Ride
            </Link>
            <button className="border border-[#8e9099] text-[#e5e2e1] px-8 py-4 font-label-caps text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#e5e2e1] hover:text-[#131313] transition-colors duration-300 text-center">
              Explore Specs
            </button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-auto pb-12 w-full">
            <div className="glass-panel p-6 rounded-lg flex flex-col gap-2">
              <Route className="text-[#afc7f8] w-8 h-8" strokeWidth={1.5} />
              <span className="font-headline-md text-[32px] leading-[40px] font-semibold text-[#e5e2e1]">180km</span>
              <span className="font-technical-data text-[14px] leading-[20px] font-medium text-[#c4c6d0]">Certified Range</span>
            </div>
            <div className="glass-panel p-6 rounded-lg flex flex-col gap-2">
              <Zap className="text-[#afc7f8] w-8 h-8" strokeWidth={1.5} />
              <span className="font-headline-md text-[32px] leading-[40px] font-semibold text-[#e5e2e1]">3 Hrs</span>
              <span className="font-technical-data text-[14px] leading-[20px] font-medium text-[#c4c6d0]">Fast Charging</span>
            </div>
            <div className="glass-panel p-6 rounded-lg flex flex-col gap-2 col-span-2 md:col-span-1">
              <Smartphone className="text-[#afc7f8] w-8 h-8" strokeWidth={1.5} />
              <span className="font-headline-md text-[32px] leading-[40px] font-semibold text-[#e5e2e1]">Smart</span>
              <span className="font-technical-data text-[14px] leading-[20px] font-medium text-[#c4c6d0]">App Connectivity</span>
            </div>
          </div>
        </div>
      </header>

      {/* Design Section */}
      <section className="py-[160px] w-full bg-[#0e0e0e]" data-theme="dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#afc7f8]/5 rounded-full blur-3xl"></div>
              <img alt="SMG E1 Profile" className="relative z-10 w-full h-auto drop-shadow-2xl rounded-3xl" src="/scooters/smg e1/white smg e1.jpeg" />
            </div>
            <div className="order-1 lg:order-2 flex flex-col items-start">
              <span className="font-label-caps text-[12px] font-semibold text-[#afc7f8] uppercase tracking-[0.1em] mb-4">Aesthetics</span>
              <h2 className="font-headline-lg text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-[#e5e2e1] mb-8">
                Designed to Turn Heads
              </h2>
              <p className="font-body-lg text-[18px] leading-[28px] text-[#c4c6d0] mb-8">
                Minimal bodywork meets aggressive styling. The SMG E1 features signature LED lighting, a sleek aerodynamic profile, and premium finishes that command attention on every street.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Lightbulb className="text-[#afc7f8] mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-headline-md text-[20px] font-semibold text-[#e5e2e1]">Signature LED Array</h3>
                    <p className="font-body-md text-[16px] leading-[24px] text-[#c4c6d0] mt-1">Ultra-bright illumination with a distinct daytime running light signature.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Wind className="text-[#afc7f8] mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-headline-md text-[20px] font-semibold text-[#e5e2e1]">Aerodynamic Fairings</h3>
                    <p className="font-body-md text-[16px] leading-[24px] text-[#c4c6d0] mt-1">Wind-tunnel tested bodywork for improved efficiency and stability at speed.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-[160px] w-full bg-[#1f3861] relative overflow-hidden" data-theme="dark">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#afc7f8 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[80px] text-center">
          <span className="font-label-caps text-[12px] font-semibold text-[#d7e2ff] uppercase tracking-[0.1em] mb-4 block">Powertrain</span>
          <h2 className="font-headline-lg text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-white mb-16 max-w-3xl mx-auto">
            Silent Power. Instant Torque.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-10 rounded-xl flex flex-col items-center text-center border-white/10 hover:border-[#afc7f8]/50 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Gauge className="text-white w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline-md text-[24px] font-semibold text-white mb-4">Powerful Motor</h3>
              <p className="font-body-md text-[16px] leading-[24px] text-[#afc7f8]">High-efficiency electric motor delivering consistent power delivery across all speeds.</p>
            </div>
            <div className="glass-panel p-10 rounded-xl flex flex-col items-center text-center border-white/10 hover:border-[#afc7f8]/50 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Bike className="text-white w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline-md text-[24px] font-semibold text-white mb-4">Instant Torque</h3>
              <p className="font-body-md text-[16px] leading-[24px] text-[#afc7f8]">100% torque available from zero RPM for thrilling acceleration off the line.</p>
            </div>
            <div className="glass-panel p-10 rounded-xl flex flex-col items-center text-center border-white/10 hover:border-[#afc7f8]/50 transition-colors duration-500">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Leaf className="text-white w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline-md text-[24px] font-semibold text-white mb-4">Regenerative Braking</h3>
              <p className="font-body-md text-[16px] leading-[24px] text-[#afc7f8]">Intelligent energy recovery system feeds power back to the battery when braking.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
