export default function RevealLayer({ image, cursorX, cursorY }: { image: string, cursorX: number, cursorY: number }) {
  if (cursorX === -999 && cursorY === -999) return null;

  return (
    <div 
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ 
        WebkitMaskImage: `radial-gradient(circle 195px at ${cursorX}px ${cursorY}px, black 60%, transparent 100%)`,
        maskImage: `radial-gradient(circle 195px at ${cursorX}px ${cursorY}px, black 60%, transparent 100%)`
      }}
    >
      <div 
        className="w-full h-full bg-left-top bg-cover bg-no-repeat hero-zoom"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}
