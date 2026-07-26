const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('d:/Projects/SMG/public/smg overview.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('d:/Projects/SMG/public/extracted_overview.txt', data.text);
    console.log('Extracted successfully!');
}).catch(function(err) {
    console.error('Error extracting PDF:', err);
});
