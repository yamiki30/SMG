import { Calculator, FileText, ShieldCheck, Box, Network, TrendingUp, MapPin, Mail, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dealership() {
  return (
    <main className="w-full bg-white font-sans text-[#191c1e] -mt-20" data-theme="light">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center pt-36 pb-16" data-theme="light">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-right bg-no-repeat animate-[heroPan_30s_linear_infinite_alternate]"
            style={{ backgroundImage: 'url(/bike1.png)', opacity: 0.85 }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-0"></div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-[#1f3861] mb-6 leading-tight font-display-lg uppercase tracking-tight">
              Become an<br/>SMG Partner
            </h1>
            <p className="text-lg text-[#1f3861]/80 font-medium mb-6 leading-relaxed">
              Join one of North India's growing mobility and distribution networks and become an authorized SMG channel partner.
            </p>
            <p className="text-[#1f3861]/70 mb-10 leading-relaxed">
              SMG provides dealers, retailers, contractors, and project suppliers access to premium vehicles, parts, and mobility solutions. With strong supplier relationships, competitive pricing, and dedicated support, SMG helps partners grow faster and serve customers better.
            </p>
            <button 
              className="px-8 py-4 bg-[#1f3861] text-white font-bold rounded-sm hover:bg-[#1f3861]/90 transition-all uppercase tracking-wide"
              onClick={() => {
                document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Partner Resources Section (Diagonal Cut) */}
      <section className="relative bg-[#1f3861] text-white py-32 pb-32 z-0" data-theme="dark" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}>
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-16">Partner Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Calculator className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">Dealer Profit Calculator</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xs">
                Estimate potential revenue, margins, and business growth opportunities as an SMG partner.
              </p>
              <button className="px-6 py-3 bg-white text-[#1f3861] font-bold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm w-full max-w-[200px]">
                Calculate Earnings
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <FileText className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">Partnership Application</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xs">
                Submit your dealership or distribution application and our team will contact you.
              </p>
              <button 
                className="px-6 py-3 bg-white text-[#1f3861] font-bold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm w-full max-w-[200px]"
                onClick={() => {
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Apply Today
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">Get Approved</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xs">
                Understand eligibility requirements, infrastructure needs, and onboarding steps.
              </p>
              <button className="px-6 py-3 bg-white text-[#1f3861] font-bold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm w-full max-w-[200px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-16 mb-16" data-theme="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <Box className="w-12 h-12 text-[#1f3861] mb-6" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-[#1f3861] mb-4">Wide Product Portfolio</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Access a comprehensive range of electric vehicles, parts, accessories, and performance upgrades.
            </p>
            <a href="#" className="text-sm font-bold text-[#1f3861] uppercase tracking-wider flex items-center gap-2 hover:underline">
              View Details <span className="text-lg">→</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center">
            <Network className="w-12 h-12 text-[#1f3861] mb-6" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-[#1f3861] mb-4">Strong Supply Network</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Reliable inventory availability and streamlined procurement from trusted manufacturing facilities.
            </p>
            <a href="#" className="text-sm font-bold text-[#1f3861] uppercase tracking-wider flex items-center gap-2 hover:underline">
              View Details <span className="text-lg">→</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 text-[#1f3861] mb-6" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-[#1f3861] mb-4">Business Growth Support</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Marketing assistance, product training, merchandising guidance, and technical support.
            </p>
            <a href="#" className="text-sm font-bold text-[#1f3861] uppercase tracking-wider flex items-center gap-2 hover:underline">
              View Details <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full max-w-[1000px] mx-auto px-6 md:px-10 mb-32" data-theme="light">
        <div className="bg-[#f7f9fb] border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[#1f3861] mb-4">Ready To Grow Your Business With SMG?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Become an authorized SMG partner and gain access to quality products, competitive pricing, dedicated support, and long-term business opportunities.
            </p>
          </div>
          <button 
            className="px-8 py-4 bg-[#1f3861] text-white font-bold uppercase tracking-wide whitespace-nowrap hover:bg-[#1f3861]/90 transition-colors"
            onClick={() => {
              document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Become a Partner
          </button>
        </div>
      </section>

      {/* Dealership Footer (Matching the design) */}
      <section className="w-full bg-[#1f3861] text-white pt-16 relative z-10" id="application-form" data-theme="dark" style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)', marginTop: '-5%' }}>
        <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row mt-12">
          <div className="w-full md:w-1/2 p-12 md:p-20">
            <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
            <p className="text-xl font-medium mb-12">+91 98765 43210</p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Corporate Office</h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    SMG Building Solutions<br/>
                    Gurunank Market<br/>
                    Lajpat Nagar IV<br/>
                    New Delhi - 110024
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-sm text-white/70">info@smgindia.in</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-sm text-white/70">
                    Mon - Sat : 9:00 AM - 7:00 PM<br/>
                    Sunday : Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-12 md:p-20">
            <h3 className="text-xl font-bold mb-8">Request Partnership Information</h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Name" className="w-full p-3 bg-white text-gray-900 focus:outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-white text-gray-900 focus:outline-none" />
              </div>
              <div className="flex gap-4">
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-white text-gray-900 focus:outline-none" />
                <input type="text" placeholder="Business Location" className="w-full p-3 bg-white text-gray-900 focus:outline-none" />
              </div>
              <div>
                <select className="w-full p-3 bg-white text-gray-900 focus:outline-none appearance-none">
                  <option value="">Current Business</option>
                  <option value="retail">Retail</option>
                  <option value="distribution">Distribution</option>
                  <option value="fleet">Fleet</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Message" rows={4} className="w-full p-3 bg-white text-gray-900 focus:outline-none resize-none"></textarea>
              </div>
              <div className="flex justify-end pt-4">
                <button type="button" className="px-8 py-3 bg-white text-[#1f3861] font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
