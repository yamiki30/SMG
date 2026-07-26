import { useState, useEffect } from 'react';
import { ChevronRight, Calendar, MessageCircle, Wrench, Shield, ShieldCheck, MapPin, Download, Phone, Settings, Activity, FileText, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';

const serviceTabs = {
  booking: {
    id: 'booking',
    title: "Book a Service",
    text: "Say goodbye to service booking woes. Enjoy the convenience of booking a service from anywhere through WhatsApp and get live status updates on-the-go.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop",
    points: ["Service workshop open all 7 days", "Live status updates of your service", "Service pick up & drop facility"],
    btnText: "Book Service"
  },
  amc: {
    id: 'amc',
    title: "Annual Maintenance Contract (AMC)",
    text: "Enjoy discounts on labor and parts during your service journey with our AMC. Choose peace of mind by choosing a package that suits your needs.",
    img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2080&auto=format&fit=crop",
    points: ["1-year unconditional AMC Warranty", "Upto 15% discount on labour & spares", "Genuine parts guaranteed"],
    btnText: "Learn About AMC"
  },
  rsa: {
    id: 'rsa',
    title: "Road Side Assistance (RSA)",
    text: "Love to ride but worried about breakdown? Simply dial our 24X7 toll-free number and help will be on its way within minutes.",
    img: "https://images.unsplash.com/photo-1574044536246-14660ef76879?q=80&w=2070&auto=format&fit=crop",
    points: ["Water & refreshment services", "On-demand taxi assistance", "Medical & hotel coordination"],
    btnText: "Get RSA Plan"
  },
  parts: {
    id: 'parts',
    title: "Genuine Parts & Oil",
    text: "TVS Genuine Parts & TRU4 Oil ensure longer product lifespans, perfect compatibility, and higher resistance to wear and tear.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",
    points: ["100% original SMG parts", "Engineered for durability", "Advanced TRU4 lubrication"],
    btnText: "Shop Genuine Parts"
  },
  proactive: {
    id: 'proactive',
    title: "Proactive Inspection",
    text: "Prevent issues before they arise. This approach ensures optimal performance, enhances safety, and extends the lifespan of your vehicles.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    points: ["Early fault detection", "Comprehensive safety check", "Diagnostic performance report"],
    btnText: "Check My Vehicle"
  }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('booking');

  const activeTabData = serviceTabs[activeTab as keyof typeof serviceTabs];

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-hanken text-[#191c1e]">

      <main>
        {/* Hero Section */}
        <section data-theme="dark" className="relative bg-[#2d3133] pt-24 md:pt-28 pb-24 md:pb-32 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 85% 92%, 75% 100%, 65% 94%, 50% 100%, 35% 92%, 25% 100%, 15% 95%, 0 100%)' }}>
          <div className="absolute inset-0 opacity-40">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover scale-105"
            >
              <source src="/engine/Engine_exploding_technical_layout_202606152100 - REVERSE - Videobolt.net (1).mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 text-white">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="font-label-caps text-[12px] font-bold text-[#cfe5ff] uppercase tracking-[0.1em] mb-4 block hero-anim hero-reveal" style={{ animationDelay: '0.1s' }}>
                Our Commitment
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight hero-anim hero-reveal" style={{ animationDelay: '0.3s' }}>
                The SMG CARE Advantages
              </h1>
              <p className="text-lg md:text-xl text-[#e0e3e5]/80 max-w-xl hero-anim hero-reveal" style={{ animationDelay: '0.5s' }}>
                Experience unparalleled peace of mind with India's most trusted automotive care network. Built on three decades of engineering excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="transition-all duration-500 hover:-translate-y-2 group hero-anim hero-reveal" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#cfe5ff] mb-1 group-hover:text-white transition-colors">6000+</div>
                <div className="text-xs sm:text-sm text-[#e0e3e5]/70">Authorised Service Centres</div>
              </div>
              <div className="transition-all duration-500 hover:-translate-y-2 group hero-anim hero-reveal" style={{ animationDelay: '0.7s' }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#cfe5ff] mb-1 group-hover:text-white transition-colors">3800+</div>
                <div className="text-xs sm:text-sm text-[#e0e3e5]/70">Cities Nationwide Connected</div>
              </div>
              <div className="transition-all duration-500 hover:-translate-y-2 group hero-anim hero-reveal" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#cfe5ff] mb-1 group-hover:text-white transition-colors">10000+</div>
                <div className="text-xs sm:text-sm text-[#e0e3e5]/70">Certified Technicians</div>
              </div>
              <div className="transition-all duration-500 hover:-translate-y-2 group hero-anim hero-reveal" style={{ animationDelay: '0.9s' }}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#cfe5ff] mb-1 group-hover:text-white transition-colors">30yrs</div>
                <div className="text-xs sm:text-sm text-[#e0e3e5]/70">Of Customer Care Expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tabbed Section */}
        <section data-theme="light" className="py-16 md:py-24 bg-[#f7f9fb]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="text-center mb-12 md:mb-16 hero-anim hero-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover All Services</h2>
              <div className="w-20 h-1 bg-[#006099] mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-10 pb-4 border-b border-[#bfc7d3]/30 scrollbar-hide hero-anim hero-reveal" style={{ animationDelay: '0.2s' }}>
              {[
                { id: 'booking', label: 'Book a Service' },
                { id: 'amc', label: 'AMC' },
                { id: 'rsa', label: 'RSA' },
                { id: 'parts', label: 'Genuine Parts' },
                { id: 'proactive', label: 'Proactive Inspection' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 text-[16px] md:text-[18px] font-semibold rounded-lg transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-[#006099] text-white shadow-md' : 'text-[#3f4851] hover:bg-[#f2f4f6]'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              <div key={activeTab} className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 animate-[fadeIn_0.5s_ease-out_forwards]">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-[32px] font-bold mb-4 md:mb-6">{activeTabData.title}</h3>
                  <p className="text-[16px] text-[#3f4851] mb-8 leading-relaxed">{activeTabData.text}</p>
                  <ul className="space-y-4 mb-10">
                    {activeTabData.points.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#006099]">check_circle</span> 
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#006099] text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-[#0079c0] transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined">calendar_today</span> {activeTabData.btnText}
                    </button>
                    {activeTab === 'booking' && (
                      <button className="border border-[#006099] text-[#006099] px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-[#006099]/5 transition-all text-center">
                        Via WhatsApp
                      </button>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-[250px] sm:h-[350px] md:h-[400px]">
                  <img src={activeTabData.img} alt={activeTabData.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customised Care Grid */}
        <section data-theme="light" className="py-16 md:py-24 bg-[#f2f4f6]" style={{ clipPath: 'polygon(0 8%, 15% 0, 25% 6%, 35% 0, 50% 8%, 65% 2%, 75% 8%, 85% 0, 95% 6%, 100% 0, 100% 100%, 0 100%)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 md:pt-20">
            <div className="text-center mb-12 md:mb-16 hero-anim hero-reveal">
              <h2 className="text-3xl md:text-[40px] font-bold mb-4">Customised Care For All Your Needs</h2>
              <p className="text-[16px] text-[#3f4851]">Tailored solutions for every rider, every journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Wrench className="w-8 h-8" />, title: 'Service Workshop', desc: 'Open all 7 days for your convenience. Professional care when you need it most.' },
                { icon: <MapPin className="w-8 h-8" />, title: 'Pick Up & Drop', desc: 'Seamless vehicle transport from your doorstep to our workshop and back.' },
                { icon: <ShieldCheck className="w-8 h-8" />, title: 'Genuine Parts & Oil', desc: 'Uncompromising quality with SMG Genuine parts and premium TRU4 oil.' },
                { icon: <FileText className="w-8 h-8" />, title: 'AMC Coverage', desc: 'Annual Maintenance Contracts offering up to 15% discount on labor and spares.' },
                { icon: <Shield className="w-8 h-8" />, title: '5 Years Warranty', desc: 'Comprehensive standard warranty for long-term peace of mind and protection.' },
                { icon: <Phone className="w-8 h-8" />, title: '24x7 RSA', desc: 'Round-the-clock roadside assistance with taxi and medical coordination.' }
              ].map((card, idx) => (
                <div key={idx} className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#bfc7d3]/20 hero-anim hero-reveal" style={{ animationDelay: `${0.1 * idx}s` }}>
                  <div className="w-14 h-14 bg-[#006099]/10 rounded-xl flex items-center justify-center text-[#006099] mb-6 transition-all group-hover:scale-110 group-hover:-translate-y-1">
                    {card.icon}
                  </div>
                  <h4 className="text-[18px] font-semibold mb-2">{card.title}</h4>
                  <p className="text-[14px] text-[#3f4851]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Manual & CTA */}
        <section data-theme="dark" className="py-16 md:py-24 bg-[#006099] overflow-hidden relative">
          <div className="hidden md:flex absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none items-center justify-end pr-10">
            <BookOpen className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white max-w-2xl hero-anim hero-reveal">
              <h2 className="text-3xl md:text-[40px] font-bold mb-6">Everything you need to know, in one place.</h2>
              <p className="text-[16px] opacity-90 mb-8">Download your vehicle's User Manual for detailed technical specifications, warranty terms, and maintenance schedules tailored specifically to your model.</p>
              <button className="bg-white text-[#006099] px-8 py-3 rounded-lg font-bold hover:bg-[#e0e3e5] transition-all flex items-center gap-2">
                <Download className="w-5 h-5" /> Download User Manual
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white hero-anim hero-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="text-[18px] font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="w-6 h-6" /> Need immediate help?
              </div>
              <p className="text-[14px] opacity-80 mb-6">Our experts are available 24/7 for technical assistance and service queries.</p>
              <a href="tel:18002587111" className="text-[32px] font-bold block mb-2">1800 258 7111</a>
              <span className="text-[12px] font-bold tracking-[0.1em] opacity-60">TOLL FREE SUPPORT</span>
            </div>
          </div>
        </section>

        {/* Care Tips */}
        <section data-theme="light" className="py-16 md:py-24 bg-[#f7f9fb]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="w-full md:w-1/2 hero-anim hero-reveal">
                <h3 className="text-2xl md:text-[32px] font-bold mb-6 md:mb-8 flex items-center gap-3">
                  <Wrench className="w-6 h-6 md:w-8 md:h-8 text-[#006099]" /> DIY Maintenance
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj5c03ryFIZWum0TECipWeKSk3TEOeC-e-J6VzCxoCk71a9VJy1sVVhW8Oe81FpGfaFFTcqUg1_Sp-uE15YgXKwHsoS93uSC3-7BBfJ_dD_uwDK6EtO7JEqD3aFCi-8Gj2EisW8kdMx6IoHRNW0uktDZ0aUf6KzvVLZk2lDnNLqAczZEhtvD27Axu8kvzME7LcwnG68pRKzNGhvILOm1cuoOczA6wnmt0zjhif8BcFkL0eYK2OhQyWmhWgj2b1bPlbbbwGoLHgRkE", title: "Drive Chain Lubrication", desc: "Learn the correct way to clean and lube your chain for maximum lifespan." },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC71q-bnkfqUqrRttt963M7JaCyl8i_v47ukiYJg0ycuQ_W6xp9z8Suy17wzI3fwup1L8gPbldizpHUwgR2OPOO49pomHyY2H5rlaM0Ou6OzJSxrnhPFfDPAJB1mxCLOM6u02a5YSgVpS9ts8hEGdyPvDe05VFlsh4bQ5PhEnI9JKRh4SgXAgTMThFdKg31bmb-4dQgzlDzbKHZwl2Kqb123xeM2UzXLqi-7RGK_SOQQXohfl7pqDVmhQQLyia14-UqZoSINS8SRNA", title: "Maintaining Tyre Pressure", desc: "Optimal pressure for better mileage, handling, and safety on the road." }
                  ].map((tip, idx) => (
                    <div key={idx} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 md:p-6 rounded-xl hover:bg-white transition-all hover:shadow-md cursor-pointer border border-transparent hover:border-[#bfc7d3]/20">
                      <div className="w-full sm:w-32 h-40 sm:h-20 md:h-24 rounded-lg overflow-hidden bg-[#e0e3e5] shrink-0">
                        <img src={tip.img} alt={tip.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-[18px] font-semibold mb-1 group-hover:text-[#006099] transition-colors">{tip.title}</h4>
                        <p className="text-[14px] text-[#3f4851]">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 hero-anim hero-reveal" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl md:text-[32px] font-bold mb-6 md:mb-8 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-[#006099]" /> Do You Know?
                </h3>
                <div className="space-y-4">
                  <div className="p-6 bg-[#d3e1f6]/30 rounded-2xl border border-[#d3e1f6]/50 hover:bg-[#d3e1f6]/50 transition-colors cursor-pointer">
                    <h4 className="text-[18px] font-semibold text-[#566475] mb-3">Oil Change Intervals</h4>
                    <p className="text-[14px] text-[#566475]/80">Regularly changing your engine oil with SMG TRU4 can improve engine life by up to 25% and ensure peak performance throughout the year.</p>
                  </div>
                  <div className="p-6 bg-[#ffdcc3]/30 rounded-2xl border border-[#ffdcc3]/50 hover:bg-[#ffdcc3]/50 transition-colors cursor-pointer">
                    <h4 className="text-[18px] font-semibold text-[#6e3900] mb-3">Early Detection Benefits</h4>
                    <p className="text-[14px] text-[#6e3900]/80">Our Proactive Inspection can identify 90% of potential mechanical failures before they happen, saving you time and expensive repair costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}