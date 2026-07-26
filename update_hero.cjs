const fs = require('fs');
let heroContent = fs.readFileSync('src/Hero.tsx', 'utf-8');

// Remove import BikeOverviewTransition
heroContent = heroContent.replace("import BikeOverviewTransition from './BikeOverviewTransition';\n", "");

const discoverSectionStart = heroContent.indexOf('<BikeOverviewTransition />');
const discoverSectionEnd = heroContent.indexOf('</section>', discoverSectionStart) + '</section>'.length;

const newSection = `      {/* Discover Your Ride Section */}
      <section className="bg-background text-on-surface pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto font-hanken z-10 relative" data-theme="light">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-2 block">Discover your ride</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-display-lg text-display-lg md:text-7xl text-black">Vehicles</h1>
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-all">
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-all">
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Category & Filter Bar */}
        <div className="mb-12 sticky top-24 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-outline-variant/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar w-full md:w-auto">
              <button className="font-title-md text-title-md text-primary font-bold border-b-2 border-primary pb-1 whitespace-nowrap">Motorcycles</button>
              <button className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Scooters</button>
              <button className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Electric</button>
              <button className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Mopeds</button>
              <button className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Three Wheelers</button>
            </div>
            <div className="relative w-full md:w-64">
              <div className="flex items-center justify-between px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>location_on</span>
                  <span className="font-body-lg text-body-lg font-medium text-black">Delhi</span>
                </div>
                <ChevronDown className="w-5 h-5 text-outline" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SMG X1 */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-[2rem] bg-surface-container-low border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500 hero-anim hero-reveal">
            <div className="aspect-[4/3] w-full relative">
              <TiltedCard
                imageSrc="/motorcycles/SMG X1/smg x1- 2.jpeg"
                altText="SMG X1"
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                imageTargetScale={1.3}
                imageTransitionDuration={4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <div className="p-8 absolute bottom-0 left-0 w-full flex justify-between items-end pointer-events-none">
              <div className="text-on-surface">
                <span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-3 py-1 rounded-full mb-3 inline-block">Flagship Model</span>
                <h3 className="font-headline-lg text-headline-lg mb-1 text-white">SMG X1</h3>
                <p className="font-body-lg text-body-lg text-white/80">Adventure & Precision Touring</p>
              </div>
              <button className="bg-white/90 backdrop-blur text-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            {/* SMG R3 */}
            <div className="group overflow-hidden rounded-[2rem] bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500 hero-anim hero-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video w-full relative">
                <TiltedCard
                  imageSrc="/motorcycles/SMG R3/SMG r3.jpeg"
                  altText="SMG R3"
                  captionText=""
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  imageTargetScale={1.3}
                  imageTransitionDuration={4}
                />
              </div>
              <div className="p-6 flex justify-between items-center bg-white">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-1 text-black">SMG R3</h3>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">Super Sport Performance</span>
                </div>
                <div className="text-right">
                  <p className="font-label-caps text-label-caps text-outline mb-1">Starting at</p>
                  <p className="font-title-md text-title-md text-primary font-bold">₹ 3.85 Lakh</p>
                </div>
              </div>
            </div>

            {/* SMG X2 */}
            <div className="group overflow-hidden rounded-[2rem] bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500 hero-anim hero-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-video w-full relative">
                <TiltedCard
                  imageSrc="/motorcycles/SMG x2/smg x2.jpeg"
                  altText="SMG X2"
                  captionText=""
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  imageTargetScale={1.3}
                  imageTransitionDuration={4}
                />
              </div>
              <div className="p-6 flex justify-between items-center bg-white">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-1 text-black">SMG X2</h3>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">Urban Street Naked</span>
                </div>
                <div className="text-right">
                  <p className="font-label-caps text-label-caps text-outline mb-1">Starting at</p>
                  <p className="font-title-md text-title-md text-primary font-bold">₹ 2.40 Lakh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Bento Items */}
          <div className="md:col-span-4 bg-primary text-on-primary rounded-[2rem] p-10 flex flex-col justify-between group cursor-pointer overflow-hidden relative hero-anim hero-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl mb-6">bolt</span>
              <h3 className="font-headline-lg text-headline-lg mb-4 leading-tight text-white">Switch to Electric Experience</h3>
              <p className="font-body-lg text-body-lg text-white/80 mb-8">Join the green revolution with SMG's next-gen electric powertrain technology.</p>
            </div>
            <button className="bg-white text-primary font-bold py-3 px-8 rounded-full self-start hover:bg-secondary-fixed transition-colors">View EV Range</button>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* SMG CityMop */}
            <div className="group bg-surface-container-lowest border border-outline-variant/30 rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all hero-anim hero-reveal" style={{ animationDelay: '0.8s' }}>
              <div className="h-48 overflow-hidden relative">
                <TiltedCard
                  imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBu7vxD3z4IzinDcuyYW_W7TNRisHtBfFK49t_uiS0GD1esVys8NU9mHq3mzHm6nMJMaoO2HXoP0vibYpgCH6tHcWt9tSab_tVkwIo0fdVEtsYOLscKlTZ3jQnVvs44QTklcmRQkSVgQu7w4_AxEwhNuBHx9rq0XL59ba1T5wjOzS5Cf7z0ZKJP7JCD0R6E0EsCMqMQiBjn7ys2OfoCGJ6PNs1u8EO2QlJf8h_3RZxxKU5FlwyX9E50hFkWezXmjf3niszqijQz6b8"
                  altText="SMG CityMop"
                  captionText=""
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  imageTargetScale={1.3}
                  imageTransitionDuration={4}
                />
              </div>
              <div className="p-6 bg-white text-black">
                <h4 className="font-title-md text-title-md mb-2">SMG CityMop</h4>
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="text-sm">Pre-booking open</span>
                </div>
                <button className="w-full py-2 border border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-colors">Book Now</button>
              </div>
            </div>

            {/* SMG E-Trike */}
            <div className="group bg-surface-container-lowest border border-outline-variant/30 rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all hero-anim hero-reveal" style={{ animationDelay: '1s' }}>
              <div className="h-48 overflow-hidden relative">
                <TiltedCard
                  imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAs73W3qFVZB0-8ePnglu-gPRKDs7LR-2nEJjPmFJTyhtYH5iNMgPv6X3Ld5eFw6z5giMTeSaM3UsjElTMtE-GMYluKNspsmWif0iDlIrGTV_Ftb_uHMBL327Qzu3hSCbh7bjmhKxU6rqoXk54QQ1RVnKtl7dpLHyWWbt-btwUJHS47iN5b5K22KDf15kY-tcPHbRUplv_fYvfIGHgfzTAu3cZSbgMhHykMcXoBPbNqqvV9R5ch0GzBj8MHinqr161xCAtKInMjje8"
                  altText="SMG E-Trike"
                  captionText=""
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  imageTargetScale={1.3}
                  imageTransitionDuration={4}
                />
              </div>
              <div className="p-6 bg-white text-black">
                <h4 className="font-title-md text-title-md mb-2">SMG E-Trike</h4>
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="text-sm">Commercial Ready</span>
                </div>
                <button className="w-full py-2 border border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-colors">Inquire Fleet</button>
              </div>
            </div>
          </div>
        </div>
      </section>`;

heroContent = heroContent.substring(0, discoverSectionStart) + newSection + heroContent.substring(discoverSectionEnd);
fs.writeFileSync('src/Hero.tsx', heroContent, 'utf-8');
