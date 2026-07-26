import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 4,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}: any) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<any>(null);
  const setY = useRef<any>(null);
  const pos = useRef({ x: 0, y: 0 });

  const data = items?.length ? items : [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows
      } as React.CSSProperties}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c: any, i: number) => (
        <article
          key={i}
          className="chroma-card bg-white"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            '--card-border': c.borderColor || '#1f3861',
            '--card-gradient': c.gradient || 'linear-gradient(145deg, #ffffff, #f1f5f9)',
            cursor: c.url ? 'pointer' : 'default'
          } as React.CSSProperties}
        >
          <div className="chroma-img-wrapper p-4 bg-white flex items-center justify-center">
            <img src={c.image} alt={c.title} loading="lazy" style={{ objectFit: 'contain', height: '220px' }} />
          </div>
          <footer className="chroma-info border-t border-slate-100 bg-white" style={{ color: '#1f3861' }}>
            <h3 className="name text-lg font-bold">{c.title}</h3>
            {c.handle && <span className="handle text-slate-400 text-sm">{c.handle}</span>}
            <p className="role text-smgNavy font-medium opacity-80">{c.subtitle}</p>
            {c.location && <span className="location text-slate-500 text-xs">{c.location}</span>}
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
