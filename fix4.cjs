const fs = require('fs');

// BuyVehicle.tsx
let f = fs.readFileSync('src/BuyVehicle.tsx', 'utf8');
f = f.replace(/import \{ useState \} from 'react';/, "import { useState, useEffect } from 'react';");
fs.writeFileSync('src/BuyVehicle.tsx', f);

// Dealership.tsx
f = fs.readFileSync('src/Dealership.tsx', 'utf8');
f = f.replace(/MapPin, Phone, Mail, Clock, Send/, "MapPin, Phone, Mail, Clock");
fs.writeFileSync('src/Dealership.tsx', f);

// ImageContext.tsx
f = fs.readFileSync('src/ImageContext.tsx', 'utf8');
f = f.replace(/import React, \{ createContext, useContext, useState, ReactNode \} from 'react';/, "import { createContext, useContext, useState } from 'react';\nimport type { ReactNode } from 'react';");
fs.writeFileSync('src/ImageContext.tsx', f);

// NavBar.tsx
f = fs.readFileSync('src/NavBar.tsx', 'utf8');
f = f.replace(/, ChevronDown/g, "");
fs.writeFileSync('src/NavBar.tsx', f);

// PillNav.tsx
f = fs.readFileSync('src/PillNav.tsx', 'utf8');
f = f.replace(/<ul className="mobile-menu-list">\s*\{items\.map\(\(item: any, i: any\) => \(/, '<ul className="mobile-menu-list">\n          {items.map((item: any) => (');
fs.writeFileSync('src/PillNav.tsx', f);
