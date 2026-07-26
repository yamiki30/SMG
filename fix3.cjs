const fs = require('fs');

// BuyVehicle.tsx
let f = fs.readFileSync('src/BuyVehicle.tsx', 'utf8');
f = f.replace(/import React, \{[\s\S]*?\} from 'react';/, "import { useState } from 'react';");
f = f.replace(/import \{ Link \} from 'react-router-dom';\n/, "");
fs.writeFileSync('src/BuyVehicle.tsx', f);

// Dealership.tsx
f = fs.readFileSync('src/Dealership.tsx', 'utf8');
f = f.replace(/MapPin, Phone, Mail, Clock, Send/, 'MapPin, Phone, Mail, Clock');
f = f.replace(/import \{ Link \} from 'react-router-dom';\n/, "");
fs.writeFileSync('src/Dealership.tsx', f);

// ImageContext.tsx
f = fs.readFileSync('src/ImageContext.tsx', 'utf8');
f = f.replace("import React, { createContext, useContext, useState, ReactNode } from 'react';", "import React, { createContext, useContext, useState } from 'react';\nimport type { ReactNode } from 'react';");
fs.writeFileSync('src/ImageContext.tsx', f);

// NavBar.tsx
f = fs.readFileSync('src/NavBar.tsx', 'utf8');
f = f.replace(/Menu, X, ChevronRight, ChevronDown/, 'Menu, X, ChevronRight');
f = f.replace("NodeJS.Timeout", "ReturnType<typeof setTimeout>");
fs.writeFileSync('src/NavBar.tsx', f);

// PillNav.tsx
f = fs.readFileSync('src/PillNav.tsx', 'utf8');
f = f.replace(/  logo,\n  logoAlt = 'Logo',\n/g, "");
f = f.replace(/const logoImgRef = useRef<any>\(null\);\n/g, "");
f = f.replace(/const logoTweenRef = useRef<any>\(null\);\n/g, "");
f = f.replace(/items\.map\(\(item, i\)/g, "items.map((item: any, i: any)");
fs.writeFileSync('src/PillNav.tsx', f);

// SmgX2.tsx
f = fs.readFileSync('src/SmgX2.tsx', 'utf8');
f = f.replace(/ref=\{el => sectionsRef\.current\[(\d+)\] = el\}/g, "ref={(el) => { sectionsRef.current[$1] = el; }}");
fs.writeFileSync('src/SmgX2.tsx', f);

// TiltedCard.tsx
f = fs.readFileSync('src/TiltedCard.tsx', 'utf8');
f = f.replace(/const x = useMotionValue\(\);/g, "const x = useMotionValue(0);");
f = f.replace(/const y = useMotionValue\(\);/g, "const y = useMotionValue(0);");
f = f.replace(/function handleMouse\(e\)/, "function handleMouse(e: any)");
fs.writeFileSync('src/TiltedCard.tsx', f);
