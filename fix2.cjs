const fs = require('fs');
let c = fs.readFileSync('src/Services.tsx', 'utf-8');
if (c.startsWith('"') && c.endsWith('"')) {
    c = c.substring(1, c.length - 1);
    c = c.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    fs.writeFileSync('src/Services.tsx', c);
}
