const fs = require('fs');

let heroContent = fs.readFileSync('src/Hero.tsx', 'utf-8');

const sectionStart = heroContent.indexOf('{/* Discover Your Ride Section */}');
const sectionEnd = heroContent.indexOf('</section>', sectionStart) + '</section>'.length;

const oldSection = heroContent.substring(sectionStart, sectionEnd);

let newSection = oldSection.replace(
  '<section className="bg-background text-on-surface pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto font-hanken z-10 relative" data-theme="light">',
  '<section className="bg-background text-on-surface pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto font-hanken z-10 relative" data-theme="light">\n        <div className="bg-white rounded-[3rem] border border-outline-variant/20 p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.03)] relative overflow-hidden">'
);

// We need to add a closing </div> before the </section>
newSection = newSection.replace('</section>', '</div>\n      </section>');

heroContent = heroContent.substring(0, sectionStart) + newSection + heroContent.substring(sectionEnd);
fs.writeFileSync('src/Hero.tsx', heroContent, 'utf-8');
