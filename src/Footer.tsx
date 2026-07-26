export default function Footer() {
  return (
    <footer className="bg-[#191c1e] text-[#f7f9fb] w-full py-12 border-t border-[#6f7883]/20 z-50 relative">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-6 md:px-10 max-w-[1280px] mx-auto gap-8">
        <div className="max-w-sm">
          <div className="text-[24px] font-bold text-white mb-4">SMG</div>
          <p className="text-[14px] text-[#e0e3e5]/70 mb-6">Setting the standard in high-end automotive care and engineering excellence for over three decades.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#e0e3e5]/30 flex items-center justify-center hover:bg-[#006099] transition-all">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#e0e3e5]/30 flex items-center justify-center hover:bg-[#006099] transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h5 className="text-[18px] font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Service Centers</a></li>
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Global Network</a></li>
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Book Online</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[18px] font-semibold mb-6">Legal</h5>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[18px] font-semibold mb-6">Support</h5>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">WhatsApp Help</a></li>
              <li><a href="#" className="text-[#e0e3e5]/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-[#6f7883]/10 text-center md:text-left">
        <p className="text-[14px] text-[#e0e3e5]/50">© 2024 SMG Automotive Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
