import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Headphones, User, X } from 'lucide-react';
import PillNav from './PillNav';
import ShopDropdown from './ShopDropdown';

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [internalTheme, setInternalTheme] = useState<'dark' | 'light'>('dark');
  const [isShopDropdownVisible, setIsShopDropdownVisible] = useState(false);
  const shopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleShopMouseEnter = () => {
    if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current);
    setIsShopDropdownVisible(true);
  };

  const handleShopMouseLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setIsShopDropdownVisible(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Find all elements with data-theme attribute
      const sections = document.querySelectorAll('[data-theme]');
      let currentTheme = internalTheme;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the section intersects with the navbar (which is around top 24px + height 64px = 88px)
        if (rect.top <= 100 && rect.bottom >= 50) {
          currentTheme = section.getAttribute('data-theme') as 'dark' | 'light';
        }
      });
      
      setInternalTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [internalTheme]);

  // If a prop is passed, it can override or provide default, but scroll logic takes precedence 
  // if data-theme tags are present.
  const activeTheme = internalTheme;
  const isLight = activeTheme === 'light';
  
  const textColor = isLight ? 'text-[#1f3861]' : 'text-white';
  const logoSrc = isLight ? "/SMG%20logo.jpg" : "/SMG%20logo.jpg"; // Use inverted logo if available later

  return (
    <nav className={`fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-[100] flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 border-t-white/40 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-colors duration-300 ${textColor}`}>
      {/* Left: Logo */}
      <div className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 ${!isLight ? 'bg-white/90 px-2 py-1 rounded-sm' : ''}`}>
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="SMG Logo" className="h-8 w-auto object-contain transition-all duration-300" style={isLight ? { mixBlendMode: 'multiply' } : {}} />
        </Link>
      </div>

      {/* Middle: PillNav */}
      <div className="hidden lg:flex items-center justify-center flex-1">
        <PillNav
          items={[
            { label: 'Products', href: '/' },
            { label: 'Services', href: '/services' },
            { 
              label: 'Shop', 
              href: '#',
              onMouseEnter: handleShopMouseEnter,
              onMouseLeave: handleShopMouseLeave
            },
            { label: 'Company', href: '/company' },
            { label: 'Dealership', href: '/dealership' }
          ]}
          activeHref={location.pathname === '/' ? '/' : location.pathname}
          baseColor={isLight ? '#1f3861' : '#ffffff'}
          pillColor="transparent"
          hoveredPillTextColor={isLight ? '#ffffff' : '#1f3861'}
          pillTextColor={isLight ? '#1f3861' : '#ffffff'}
          initialLoadAnimation={false}
          className="scale-90 origin-center navbar-pillnav"
        />
      </div>

      {/* Right: Actions */}
      <div className="hidden lg:flex items-center gap-3 flex-shrink-0 justify-end font-semibold text-[15px]">
        <Link to="/book-test-ride" className="hover:opacity-80 transition-opacity">Book Test Ride</Link>
        <span className="opacity-40 font-light">|</span>
        <Link to="/dealership" className="hover:opacity-80 transition-opacity">Dealers</Link>
      </div>

      {/* Mobile Menu */}
      <button 
        className="lg:hidden p-2 ml-auto"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>
      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-[#1f3861]/10 flex flex-col gap-6 lg:hidden" style={{ zIndex: 100 }}>
          <div className="flex flex-col gap-4 text-[#1f3861] font-semibold text-lg">
            <Link to="/" onClick={() => setIsMobileOpen(false)} className="hover:text-[#1f3861]/70 transition-colors">Products</Link>
            <Link to="/services" onClick={() => setIsMobileOpen(false)} className="hover:text-[#1f3861]/70 transition-colors">Services</Link>
            <Link to="#" onClick={() => setIsMobileOpen(false)} className="hover:text-[#1f3861]/70 transition-colors">Shop</Link>
            <Link to="#" onClick={() => setIsMobileOpen(false)} className="hover:text-[#1f3861]/70 transition-colors">Company</Link>
            <Link to="/dealership" onClick={() => setIsMobileOpen(false)} className="hover:text-[#1f3861]/70 transition-colors">Dealership</Link>
          </div>
          <div className="h-px w-full bg-[#1f3861]/10"></div>
          <div className="flex flex-col gap-4 text-[#1f3861]">
            <Link to="/book-test-ride" onClick={() => setIsMobileOpen(false)} className="flex justify-start hover:opacity-80 transition-opacity font-semibold">Book Test Ride</Link>
            <button className="flex justify-start hover:opacity-80 transition-opacity font-semibold">Dealers</button>
          </div>
          <div className="flex justify-between items-center text-[#1f3861] pt-2">
            <div className="flex items-center gap-1">
              <span className="text-lg">🇮🇳</span>
              <span className="text-[15px] font-medium">India</span>
            </div>
            <div className="flex items-center gap-4">
              <Search onClick={() => { setIsMobileOpen(false); setIsSearchOpen(true); }} className="w-5 h-5 cursor-pointer" />
              <Headphones className="w-5 h-5" />
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}

      {/* Search Dropdown */}
      {isSearchOpen && (
        <div className="absolute top-full right-0 md:right-8 mt-4 w-[calc(100vw-2rem)] md:w-[400px] bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] border border-[#1f3861]/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex items-center gap-3 bg-[#f4f6f8] rounded-xl px-4 py-3 border border-[#1f3861]/10 focus-within:border-[#1f3861]/30 transition-colors">
            <Search className="w-5 h-5 text-[#1f3861]/50" />
            <input 
              type="text" 
              placeholder="Search motorcycles, scooters, dealers..." 
              className="w-full bg-transparent outline-none text-[#1f3861] font-medium placeholder:text-[#1f3861]/40"
              autoFocus
            />
            <X 
              onClick={() => setIsSearchOpen(false)} 
              className="w-5 h-5 text-[#1f3861]/50 cursor-pointer hover:text-[#1f3861] transition-colors" 
            />
          </div>
          <div className="px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f3861]/50 mb-3 block">Popular Searches</span>
            <div className="flex flex-wrap gap-2">
              <Link to="/smg-r3" onClick={() => setIsSearchOpen(false)} className="px-3 py-1 bg-[#1f3861]/5 hover:bg-[#1f3861]/10 cursor-pointer rounded-full text-sm text-[#1f3861] transition-colors">SMG R3</Link>
              <Link to="/smg-x2" onClick={() => setIsSearchOpen(false)} className="px-3 py-1 bg-[#1f3861]/5 hover:bg-[#1f3861]/10 cursor-pointer rounded-full text-sm text-[#1f3861] transition-colors">SMG X2</Link>
              <Link to="/smg-x1" onClick={() => setIsSearchOpen(false)} className="px-3 py-1 bg-[#1f3861]/5 hover:bg-[#1f3861]/10 cursor-pointer rounded-full text-sm text-[#1f3861] transition-colors">SMG X1</Link>
              <span onClick={() => setIsSearchOpen(false)} className="px-3 py-1 bg-[#1f3861]/5 hover:bg-[#1f3861]/10 cursor-pointer rounded-full text-sm text-[#1f3861] transition-colors">Electric Scooters</span>
              <span onClick={() => setIsSearchOpen(false)} className="px-3 py-1 bg-[#1f3861]/5 hover:bg-[#1f3861]/10 cursor-pointer rounded-full text-sm text-[#1f3861] transition-colors">Find Dealer</span>
              <span onClick={() => setIsSearchOpen(false)} className="px-3 py-1 bg-[#1f3861]/5 hover:bg-[#1f3861]/10 cursor-pointer rounded-full text-sm text-[#1f3861] transition-colors">Book Service</span>
            </div>
          </div>
        </div>
      )}
      {/* Shop Dropdown */}
      <ShopDropdown 
        isVisible={isShopDropdownVisible} 
        onMouseEnter={handleShopMouseEnter} 
        onMouseLeave={handleShopMouseLeave} 
      />
    </nav>
  );
}
