import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Brake System', image: '/accessories/clutchplate.jpeg' },
  { name: 'Mirrors & Styling', image: '/accessories/side mirrors.jpeg' },
  { name: 'Electrical Parts', image: '/accessories/headlight.jpeg' },
  { name: 'Seats & Comfort', image: '/accessories/seat.jpeg' },
  { name: 'Maintenance', image: '/accessories/full tank.jpeg' },
  { name: 'Safety Gear', image: '/accessories/tail lamp.jpeg' },
  { name: 'Riding Equipment', image: '/accessories/horn.jpeg' },
  { name: 'Apparel', image: '/accessories/air filter.jpeg' },
];

export default function ShopDropdown({ isVisible, onMouseEnter, onMouseLeave }) {
  useEffect(() => {
    categories.forEach(category => {
      const img = new Image();
      img.src = category.image;
    });
  }, []);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-[100%] left-0 w-full pt-4 pb-8 transition-all duration-300 ease-out origin-top z-50 ${
        isVisible ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'
      }`}
    >
      <div className="mx-4 md:mx-8 bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#1f3861]/10 overflow-hidden font-sans">
        <div className="flex h-[550px]">
          {/* Left Sidebar */}
          <div className="w-[260px] bg-[#f8f9fa] border-r border-[#1f3861]/5 py-8 flex flex-col flex-shrink-0">
            <div className="px-6 pb-6">
              <h3 className="text-xs font-bold text-[#1f3861]/50 uppercase tracking-[0.15em]">Accessories & Merchandise</h3>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar px-4">
              <div className="flex flex-col gap-1">
                <button className="flex items-center justify-between px-4 py-3.5 text-left bg-[#1f3861] text-white rounded-xl font-medium shadow-sm">
                  Genuine Parts
                  <ChevronRight className="w-4 h-4" />
                </button>
                <Link to="/tru4oil" onClick={onMouseLeave} className="group flex items-center justify-between px-4 py-3.5 text-left hover:bg-[#1f3861]/5 rounded-xl transition-colors text-[#1f3861]/80 hover:text-[#1f3861] font-medium">
                  Oils & Fluids
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 p-8 bg-white overflow-y-auto">
            {/* Featured Banner */}
            <div className="flex items-center justify-between bg-gradient-to-br from-[#1f3861] to-[#284d84] rounded-[20px] p-8 mb-10 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2">SMG Genuine Parts</h4>
                <p className="text-white/80 font-medium">Engineered for reliability and peak performance.</p>
              </div>
              <Link to="/shop" onClick={onMouseLeave} className="relative z-10 px-8 py-3.5 bg-white text-[#1f3861] rounded-full text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                Shop Now →
              </Link>
            </div>
            
            {/* Categories Header */}
            <div className="flex justify-between items-center mb-6 px-2">
              <h4 className="text-lg font-bold text-[#1f3861]">Featured Products</h4>
              <Link to="/shop" onClick={onMouseLeave} className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 group">
                Explore All Products <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-start pb-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/shop/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={onMouseLeave}
                  className="group flex flex-col w-full max-w-[180px] h-[220px] bg-white rounded-[20px] border border-[#1f3861]/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(31,56,97,0.12)] mx-auto"
                >
                  <div className="h-[140px] w-full bg-[#f8f9fa] flex items-center justify-center p-4 overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 flex flex-col justify-center flex-1 border-t border-[#1f3861]/5">
                    <span className="text-[14px] font-bold text-[#1f3861] leading-tight truncate">
                      {category.name}
                    </span>
                    <span className="text-xs text-[#1f3861]/60 font-medium mt-1">
                      Genuine Part
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
