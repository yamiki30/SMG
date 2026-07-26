import ChromaGrid from './ChromaGrid';

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

export default function Shop() {
  const items = categories.map(cat => ({
    image: cat.image,
    title: cat.name,
    subtitle: "Genuine Part",
    borderColor: "rgba(31,56,97,0.3)",
    gradient: "linear-gradient(145deg, #ffffff, #f8f9fa)",
    url: `/shop/${cat.name.toLowerCase().replace(/\\s+/g, '-')}`
  }));

  return (
    <div data-theme="light" className="min-h-screen bg-[#f8f9fa] text-[#1f3861] pt-32 pb-24 font-sans selection:bg-[#1f3861] selection:text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1f3861] mb-6 tracking-tight">
          Explore All Products
        </h1>
        <p className="text-xl text-[#1f3861]/70 max-w-2xl mx-auto leading-relaxed">
          Discover our comprehensive range of genuine accessories, performance upgrades, and riding gear engineered for your SMG motorcycle.
        </p>
      </div>

      <div style={{ height: '700px', position: 'relative' }} className="max-w-[1400px] mx-auto">
        <ChromaGrid 
          items={items}
          radius={350}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          columns={4}
          rows={2}
        />
      </div>
    </div>
  );
}
