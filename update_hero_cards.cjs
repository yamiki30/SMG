const fs = require('fs');

let heroContent = fs.readFileSync('src/Hero.tsx', 'utf-8');

const productGridStart = heroContent.indexOf('{/* Product Grid */}');
const productGridEnd = heroContent.indexOf('</section>', productGridStart);

const newProductGrid = `{/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SMG X1 */}
          <div 
            ref={x1Ref}
            className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-500 hero-anim hero-reveal h-[400px] md:h-[700px]"
          >
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
              displayOverlayContent={true}
              overlayContent={
                <div className="w-full h-full relative pointer-events-none rounded-[2.5rem] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col items-start">
                    <VariableProximity
                      label="SMG X1"
                      fromFontVariationSettings="'wght' 400, 'opsz' 9"
                      toFontVariationSettings="'wght' 1000, 'opsz' 40"
                      containerRef={x1Ref}
                      radius={100}
                      falloff='linear'
                      style={{ color: 'white', fontSize: '3.5rem', fontWeight: 'bold', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                    />
                  </div>
                </div>
              }
            />
          </div>

          <div className="md:col-span-5 flex flex-col gap-8 h-full">
            {/* SMG R3 */}
            <div 
              ref={r3Ref}
              className="group relative overflow-hidden rounded-[2.5rem] bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 hero-anim hero-reveal h-[334px]" 
              style={{ animationDelay: '0.2s' }}
            >
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
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full relative pointer-events-none rounded-[2.5rem] overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col items-start">
                      <VariableProximity
                        label="SMG R3"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={r3Ref}
                        radius={100}
                        falloff='linear'
                        style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                      />
                    </div>
                  </div>
                }
              />
            </div>

            {/* SMG X2 */}
            <div 
              ref={x2Ref}
              className="group relative overflow-hidden rounded-[2.5rem] bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 hero-anim hero-reveal h-[334px]" 
              style={{ animationDelay: '0.4s' }}
            >
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
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full relative pointer-events-none rounded-[2.5rem] overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col items-start">
                      <VariableProximity
                        label="SMG X2"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={x2Ref}
                        radius={100}
                        falloff='linear'
                        style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                      />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      `;

heroContent = heroContent.substring(0, productGridStart) + newProductGrid + heroContent.substring(productGridEnd);
fs.writeFileSync('src/Hero.tsx', heroContent, 'utf-8');
