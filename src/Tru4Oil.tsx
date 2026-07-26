import { Shield, Zap, Droplet } from 'lucide-react';

export default function Tru4Oil() {
  return (
    <div data-theme="light" className="min-h-screen bg-[#f8f9fa] text-[#1f3861] pt-32 pb-24 font-sans selection:bg-[#1f3861] selection:text-white">
      
      {/* Select Your Grade Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f3861] tracking-tight">Select Your Grade</h2>
          <div className="w-16 h-1 bg-[#1f3861]/20 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Synthetic Card */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-[#1f3861]/10 hover:border-[#1f3861]/30 transition-all duration-500 shadow-[0_0_40px_rgba(31,56,97,0.05)] hover:shadow-[0_20px_60px_rgba(31,56,97,0.1)] flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 right-8 bg-[#1f3861] text-white text-[10px] font-bold px-4 py-1.5 rounded-b-xl tracking-widest z-10 shadow-md">ULTIMATE</div>
            <div className="aspect-square bg-[#f4f6f8] rounded-2xl overflow-hidden mb-8 relative flex items-center justify-center p-4">
              <img src="/tru4oil/tru4_synthetic.png" alt="TRU4 Synthetic" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 shadow-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6f8] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-[#1f3861] mb-2">TRU4 SYNTHETIC 10W30</h3>
              <p className="text-[11px] text-[#1f3861]/70 font-bold tracking-[0.15em] uppercase mb-8">Born Two-Wheeler Engine Oil</p>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center border-b border-[#1f3861]/10 pb-4">
                  <span className="text-sm font-medium text-[#1f3861]/70">1.2 Litre Pack</span>
                  <span className="font-bold text-lg text-[#1f3861]">₹899</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-sm font-medium text-[#1f3861]/70">1 Litre Pack</span>
                  <span className="font-bold text-lg text-[#1f3861]">₹799</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skuuta Card */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-[#1f3861]/10 hover:border-[#1f3861]/30 transition-all duration-500 shadow-[0_0_40px_rgba(31,56,97,0.05)] hover:shadow-[0_20px_60px_rgba(31,56,97,0.1)] flex flex-col group relative overflow-hidden">
            <div className="aspect-square bg-[#f4f6f8] rounded-2xl overflow-hidden mb-8 relative flex items-center justify-center p-4">
              <img src="/tru4oil/tru4_skuuta.png" alt="TRU4 Skuuta" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 shadow-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6f8] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-[#1f3861] mb-2">TRU4 SKUUTA 10W30</h3>
              <p className="text-[11px] text-[#1f3861]/70 font-bold tracking-[0.15em] uppercase mb-8">Frictionless Commute</p>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center border-b border-[#1f3861]/10 pb-4">
                  <span className="text-sm font-medium text-[#1f3861]/70">1 Litre Pack</span>
                  <span className="font-bold text-lg text-[#1f3861]">₹490</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-sm font-medium text-[#1f3861]/70">900 ML Pack</span>
                  <span className="font-bold text-lg text-[#1f3861]">₹475</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Card */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-[#1f3861]/10 hover:border-[#1f3861]/30 transition-all duration-500 shadow-[0_0_40px_rgba(31,56,97,0.05)] hover:shadow-[0_20px_60px_rgba(31,56,97,0.1)] flex flex-col group relative overflow-hidden">
            <div className="aspect-square bg-[#f4f6f8] rounded-2xl overflow-hidden mb-8 relative flex items-center justify-center p-4">
              <img src="/tru4oil/tru4_premium.png" alt="TRU4 Premium" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 shadow-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6f8] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-[#1f3861] mb-2">TRU4 PREMIUM 10W30</h3>
              <p className="text-[11px] text-[#1f3861]/70 font-bold tracking-[0.15em] uppercase mb-8">High Endurance Performance</p>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center border-b border-[#1f3861]/10 pb-4">
                  <span className="text-sm font-medium text-[#1f3861]/70">1 Litre Pack</span>
                  <span className="font-bold text-lg text-[#1f3861]">₹455</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-sm font-medium text-[#1f3861]/70">900 ML Pack</span>
                  <span className="font-bold text-lg text-[#1f3861]">₹429</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Performance Engineering Section */}
      <section className="max-w-[1000px] mx-auto px-6 text-center mb-32">
        <div className="inline-block border border-[#1f3861]/20 bg-white shadow-sm rounded-full px-6 py-2 mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f3861]/80">Performance Engineering</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-[#1f3861] leading-tight mb-8">
          TRU4: <span className="text-blue-600 italic font-medium">Engineered</span> for<br />
          Unmatched Excellence
        </h2>
        
        <p className="text-xl text-[#1f3861]/70 max-w-3xl mx-auto leading-relaxed mb-16">
          The high-performance synthetic foundation for modern 2-wheelers. Optimized for BS6 engines, delivering peak molecular stability under extreme thermal stress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#1f3861]/10 rounded-[2.5rem] py-12 px-6 shadow-[0_0_40px_rgba(31,56,97,0.03)] hover:shadow-[0_10px_40px_rgba(31,56,97,0.08)] transition-all group">
            <h3 className="text-4xl font-bold text-[#1f3861] mb-4">6000km*</h3>
            <p className="text-[11px] font-bold tracking-[0.15em] text-[#1f3861]/60 uppercase">Drainage Period</p>
          </div>
          <div className="bg-white border border-[#1f3861]/10 rounded-[2.5rem] py-12 px-6 shadow-[0_0_40px_rgba(31,56,97,0.03)] hover:shadow-[0_10px_40px_rgba(31,56,97,0.08)] transition-all group">
            <h3 className="text-4xl font-bold text-[#1f3861] mb-4">14p/km</h3>
            <p className="text-[11px] font-bold tracking-[0.15em] text-[#1f3861]/60 uppercase">Cost Efficiency</p>
          </div>
          <div className="bg-white border border-[#1f3861]/10 rounded-[2.5rem] py-12 px-6 shadow-[0_0_40px_rgba(31,56,97,0.03)] hover:shadow-[0_10px_40px_rgba(31,56,97,0.08)] transition-all group">
            <h3 className="text-4xl font-bold text-[#1f3861] mb-4">100%</h3>
            <p className="text-[11px] font-bold tracking-[0.15em] text-[#1f3861]/60 uppercase">Fully Synthetic</p>
          </div>
        </div>
      </section>

      {/* Molecular Precision Section */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f3861] mb-6">Molecular Precision.</h2>
            <p className="text-xl text-[#1f3861]/70 leading-relaxed">
              Designing the ultimate barrier between metal and heat. Our synthetic base oil is enriched with proprietary ion-bonding technology.
            </p>
          </div>
          <button className="text-[12px] font-bold tracking-[0.15em] text-blue-600 uppercase flex items-center gap-2 hover:opacity-80 transition-opacity bg-blue-50 px-6 py-3 rounded-full">
            View Technical White Paper 
            <span className="text-lg leading-none">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#1f3861]/10 shadow-sm hover:shadow-[0_20px_60px_rgba(31,56,97,0.08)] transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 border border-blue-100">
              <Shield className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-[#1f3861] mb-6 leading-tight">Sulfo<br/>Protection</h3>
            <p className="text-base text-[#1f3861]/70 leading-relaxed mb-10">
              Our advanced sulphur additives create a sacrificial layer on engine components, drastically reducing friction and wear during extreme pressure cycles and cold starts.
            </p>
            <div className="border-t border-[#1f3861]/10 pt-6 mt-auto">
              <p className="text-[11px] text-[#1f3861]/50 font-bold uppercase tracking-[0.15em]">Stress Test: Pass / 400°C</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#1f3861]/10 shadow-sm hover:shadow-[0_20px_60px_rgba(31,56,97,0.08)] transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 border border-orange-100">
              <Zap className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold text-[#1f3861] mb-6 leading-tight">Fast Metal<br/>Ions</h3>
            <p className="text-[11px] text-orange-600 font-bold tracking-[0.15em] uppercase mb-4">Active Bond Tech</p>
            <p className="text-base text-[#1f3861]/70 leading-relaxed mb-10">
              Utilizing polarized ion clusters that accelerate to critical friction points instantly. This rapid response reduces internal drag and maximizes effective power output.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#1f3861]/10 shadow-sm hover:shadow-[0_20px_60px_rgba(31,56,97,0.08)] transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 border border-cyan-100">
              <Droplet className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-3xl font-bold text-[#1f3861] mb-6 leading-tight">Perfect<br/>Viscosity</h3>
            <p className="text-base text-[#1f3861]/70 leading-relaxed mb-10">
              Engineered 10W30 stability ensures fluid movement in low temperatures and high-integrity film strength at peak RPMs. Higher mileage through reduced pump loss.
            </p>
            <div className="border-t border-[#1f3861]/10 pt-6 mt-auto">
              <p className="text-[11px] text-[#1f3861]/50 font-bold uppercase tracking-[0.15em]">Standard: JASO MA2 / API SN</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
