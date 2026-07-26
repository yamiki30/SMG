const fs = require('fs');

// Fix SmgX1.tsx & SmgX2.tsx
['src/SmgX1.tsx', 'src/SmgX2.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/ref=\{\(el\) => \(sectionsRef\.current\[(\d+)\] = el\)\}/g, 'ref={(el) => { sectionsRef.current[$1] = el; }}');
  fs.writeFileSync(file, content);
});

// Fix TiltedCard.tsx
let tiltedCard = fs.readFileSync('src/TiltedCard.tsx', 'utf8');
tiltedCard = tiltedCard.replace(/export default function TiltedCard\(\{[\s\S]*?\}\) \{/, `export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  imageInitialScale = 1,
  imageTargetScale = 1,
  imageTransitionDuration = 4
}: any) {`);
tiltedCard = tiltedCard.replace('const rect = ref.current.getBoundingClientRect();', 'const rect = (ref.current as any).getBoundingClientRect();');
fs.writeFileSync('src/TiltedCard.tsx', tiltedCard);

// Fix PillNav.tsx
let pillNav = fs.readFileSync('src/PillNav.tsx', 'utf8');
pillNav = pillNav.replace(/const PillNav = \(\{[\s\S]*?\}\) => \{/, `const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}: any) => {`);
pillNav = pillNav.replace(/const circleRefs = useRef\(\[\]\);/g, 'const circleRefs = useRef<any[]>([]);');
pillNav = pillNav.replace(/const tlRefs = useRef\(\[\]\);/g, 'const tlRefs = useRef<any[]>([]);');
pillNav = pillNav.replace(/const activeTweenRefs = useRef\(\[\]\);/g, 'const activeTweenRefs = useRef<any[]>([]);');
pillNav = pillNav.replace(/useRef\(null\);/g, 'useRef<any>(null);');
pillNav = pillNav.replace(/const isExternalLink = href =>/g, 'const isExternalLink = (href: string) =>');
pillNav = pillNav.replace(/const isRouterLink = href =>/g, 'const isRouterLink = (href: string) =>');
pillNav = pillNav.replace(/const handleEnter = i =>/g, 'const handleEnter = (i: number) =>');
pillNav = pillNav.replace(/const handleLeave = i =>/g, 'const handleLeave = (i: number) =>');
pillNav = pillNav.replace(/const handleLogoEnter = \(\) => \{[\s\S]*?\};/, '');
pillNav = pillNav.replace(/const cssVars = \{/g, 'const cssVars: any = {');
fs.writeFileSync('src/PillNav.tsx', pillNav);
