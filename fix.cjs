const fs = require('fs');
let content = fs.readFileSync('d:/Projects/SMG/src/Services.tsx', 'utf-8');
if (content.startsWith('"') && content.endsWith('"')) {
    // The content is a JSON string of a string.
    try {
        content = JSON.parse(content);
        fs.writeFileSync('d:/Projects/SMG/src/Services.tsx', content, 'utf-8');
    } catch (e) {
        console.error(e);
    }
}
