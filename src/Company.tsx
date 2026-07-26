import React from 'react';

export default function Company() {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      // document.head.removeChild(link); // Optional, keep it so it doesn't break other pages if we navigate away
    };
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden pt-32 pb-20" data-theme="light">
      <style>
        {`
          .texture-bg {
            background-image: radial-gradient(circle at 10% 20%, rgba(0, 26, 61, 0.03) 0%, transparent 50%),
                              radial-gradient(circle at 90% 80%, rgba(0, 26, 61, 0.05) 0%, transparent 50%);
          }
          .section-number {
            font-size: 5rem;
            line-height: 1;
            opacity: 0.9;
            color: #001A3D;
          }
          .card-shadow {
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          .ink-splash-1 {
            position: absolute;
            z-index: -1;
            opacity: 0.15;
            filter: grayscale(1);
          }
        `}
      </style>

      {/* BEGIN: MainHeader */}
      <header className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div data-purpose="brand-identity">
            <img alt="SMG Logo" className="h-16 object-contain mix-blend-multiply" src="/SMG logo.jpg"/>
            <p className="text-xs font-bold tracking-widest text-slate-500 mt-2 uppercase">Driven by Innovation. Built for Tomorrow.</p>
          </div>
          <div className="flex flex-wrap gap-4" data-purpose="top-metrics">
            <div className="border border-slate-200 rounded-xl px-6 py-3 text-center min-w-[140px] shadow-sm">
              <div className="text-lg font-bold">₹45 LAKH</div>
              <div className="text-[10px] uppercase text-slate-500 font-semibold">Seed Funding Initiative</div>
            </div>
            <div className="border border-slate-200 rounded-xl px-6 py-3 text-center min-w-[140px] shadow-sm">
              <div className="text-lg font-bold">₹9,000 CRORE+</div>
              <div className="text-[10px] uppercase text-slate-500 font-semibold">Group Turnover</div>
            </div>
            <div className="border border-slate-200 rounded-xl px-6 py-3 text-center min-w-[140px] shadow-sm">
              <div className="text-lg font-bold">3,500+</div>
              <div className="text-[10px] uppercase text-slate-500 font-semibold">Strong Workforce</div>
            </div>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      <main>
        {/* BEGIN: Section01_Mobility */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 min-h-[600px] flex items-center">
          <div className="ink-splash-1 -left-20 top-0 w-96 h-96 bg-slate-400 rounded-full blur-[100px]"></div>
          <div className="grid md:grid-cols-12 items-center w-full relative">
            <div className="md:col-span-5 z-10">
              <div className="flex items-start gap-4">
                <span className="section-number font-serif">01.</span>
                <div className="pt-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">About SMG</h4>
                  <h2 className="text-4xl font-bold text-[#001A3D] mt-1 leading-tight">BUILDING THE FUTURE OF MOBILITY</h2>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 mt-12 md:mt-0 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img alt="Mobility Innovation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgnKUNSebZ2w-QKg9SXJN-SZLRQhIN96P8Sn2FO-KHlnLdIlNDJiimZ5H8DCYpmJn-UVzW6gIlFGDl50lSt3xczRFBeNKQl5oChmQZ7BcdGwaAao916I93SlRCNpyukD0RGiO7FRBrS5fl8NBhoyUQX3KdWVtrsPSGSLIfOCU_CTfHFl-cFnaR0pkTjtF1niFGTF3TKB5FV9HDRi0hOxgMEFUJLhI1tWyTB_geFUYIg8pDt7BNeAhncOTCXjQBKUFIfcdfCg4wbN4s"/>
              </div>
              <div className="md:absolute -right-10 top-1/2 md:-translate-y-1/2 w-full md:w-[380px] mt-8 md:mt-0 glass-card p-8 rounded-2xl shadow-2xl border border-slate-100 z-20">
                <div className="mb-6">
                  <span className="text-3xl font-serif font-bold text-[#001A3D]">02.</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Innovation Ecosystem</span>
                  <h3 className="text-xl font-bold text-[#001A3D] mt-1">SMG CENTRE OF EXCELLENCE</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[#001A3D]"><i className="fas fa-microchip"></i></div>
                    <div>
                      <h5 className="text-xs font-bold uppercase">LPU Pilot Production Line</h5>
                      <p className="text-[10px] text-slate-500">Precision manufacturing ecosystem for advanced EV engineering.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[#001A3D]"><i className="fas fa-flask"></i></div>
                    <div>
                      <h5 className="text-xs font-bold uppercase">CT Group Centre of Excellence</h5>
                      <p className="text-[10px] text-slate-500">AI/ML components for autonomous EV engineering.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[#001A3D]"><i className="fas fa-graduation-cap"></i></div>
                    <div>
                      <h5 className="text-xs font-bold uppercase">Academia Industry Programs</h5>
                      <p className="text-[10px] text-slate-500">Mentorship and advanced robotics focused industry collaborations.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[#001A3D]"><i className="fas fa-vial"></i></div>
                    <div>
                      <h5 className="text-xs font-bold uppercase">IIT Delhi Research Lab</h5>
                      <p className="text-[10px] text-slate-500">IIT Delhi collaborative research for next-gen energy storage.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Section03_Numbers */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-slate-50 rounded-[40px] p-10 md:p-16 border border-slate-100 card-shadow">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-5xl font-serif font-bold text-[#001A3D]">03.</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Impact Metrics</h4>
                <h2 className="text-3xl font-bold text-[#001A3D] uppercase">Numbers That Matter</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl text-center border border-slate-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-rocket text-[#001A3D] text-2xl mb-4"></i>
                <h3 className="text-2xl font-bold">₹45 LAKH</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Startup Funding Initiative</p>
              </div>
              <div className="bg-white p-8 rounded-3xl text-center border border-slate-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-hand-holding-dollar text-[#001A3D] text-2xl mb-4"></i>
                <h3 className="text-2xl font-bold">₹10 CRORE+</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Startup Commitment</p>
              </div>
              <div className="bg-white p-8 rounded-3xl text-center border border-slate-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-users-viewfinder text-[#001A3D] text-2xl mb-4"></i>
                <h3 className="text-2xl font-bold">1200+</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Students Hosted At Plant</p>
              </div>
              <div className="bg-white p-8 rounded-3xl text-center border border-slate-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-user-graduate text-[#001A3D] text-2xl mb-4"></i>
                <h3 className="text-2xl font-bold">1200+</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Students Trained At Plant</p>
              </div>
              <div className="bg-white p-8 rounded-3xl text-center border border-slate-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-briefcase text-[#001A3D] text-2xl mb-4"></i>
                <h3 className="text-2xl font-bold">3500+</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Dedicated Workforce</p>
              </div>
              <div className="bg-white p-8 rounded-3xl text-center border border-slate-100 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                <i className="fas fa-industry text-[#001A3D] text-2xl mb-4"></i>
                <h3 className="text-2xl font-bold">100 UNITS</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Monthly Pilot Capacity</p>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Section04_Visionaries */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-start gap-4 mb-12">
            <span className="text-5xl font-serif font-bold text-[#001A3D]">04.</span>
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Startup Innovation</h4>
              <h2 className="text-3xl font-bold text-[#001A3D] uppercase leading-tight">Accelerating Visionaries</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#001A3D] p-6 rounded-2xl text-white">
                <i className="fas fa-lightbulb mb-4 block text-xl"></i>
                <h5 className="text-xs font-bold uppercase mb-2">EV Ideathon &amp; AI Summit</h5>
                <p className="text-[10px] opacity-70">Focus on smart solutions for electric vehicle infrastructure.</p>
              </div>
              <div className="bg-[#001A3D] p-6 rounded-2xl text-white">
                <i className="fas fa-atom mb-4 block text-xl"></i>
                <h5 className="text-xs font-bold uppercase mb-2">CT Group Center of Excellence</h5>
                <p className="text-[10px] opacity-70">Enabling student-led research and development.</p>
              </div>
              <div className="bg-white border-2 border-[#001A3D] p-6 rounded-2xl">
                <i className="fas fa-book-open mb-4 block text-xl text-[#001A3D]"></i>
                <h5 className="text-xs font-bold uppercase mb-2 text-[#001A3D]">Academia Industry Programs</h5>
                <p className="text-[10px] text-slate-500">Developing cutting-edge industrial laboratries.</p>
              </div>
              <div className="bg-white border-2 border-[#001A3D] p-6 rounded-2xl">
                <i className="fas fa-flask-vial mb-4 block text-xl text-[#001A3D]"></i>
                <h5 className="text-xs font-bold uppercase mb-2 text-[#001A3D]">IIT Delhi Research Lab</h5>
                <p className="text-[10px] text-slate-500">Focusing on applied innovation in EV &amp; sustainability.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#001A3D] h-40 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden group">
                <i className="fas fa-calendar-alt absolute top-6 right-6 opacity-20 text-4xl group-hover:scale-110 transition-transform"></i>
                <h4 className="text-xs font-bold uppercase">EV Ideathon &amp; AI Summit</h4>
              </div>
              <div className="bg-[#001A3D] h-40 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden group">
                <i className="fas fa-building absolute top-6 right-6 opacity-20 text-4xl group-hover:scale-110 transition-transform"></i>
                <h4 className="text-xs font-bold uppercase">Startup Innovation Centre</h4>
              </div>
              <div className="bg-[#001A3D] h-40 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden group">
                <i className="fas fa-coins absolute top-6 right-6 opacity-20 text-4xl group-hover:scale-110 transition-transform"></i>
                <h4 className="text-xs font-bold uppercase">Innovation Grants</h4>
              </div>
              <div className="bg-[#001A3D] h-40 rounded-2xl flex flex-col justify-end p-6 text-white relative overflow-hidden group">
                <i className="fas fa-user-tie absolute top-6 right-6 opacity-20 text-4xl group-hover:scale-110 transition-transform"></i>
                <h4 className="text-xs font-bold uppercase">Mentorship Programs</h4>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Section05_Collaborations */}
        <section className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="ink-splash-1 -right-20 bottom-0 w-80 h-80 bg-slate-200 rounded-full blur-[80px]"></div>
          <div className="flex items-start gap-4 mb-16">
            <span className="text-5xl font-serif font-bold text-[#001A3D]">05.</span>
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Partnerships</h4>
              <h2 className="text-3xl font-bold text-[#001A3D] uppercase leading-tight">Academic Collaborations</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            <div className="flex gap-6 p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <img alt="IIT Delhi" className="w-16 h-16 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYhwktg2v4YU3zEk-wOtv5kXSCY7n7zO7tUvz0L-J6x4BmN8CLzEXjOWRe82YYBbUAjDjb3p13nvak2SjclR7JNoKiP15GWkbHdfKhbdKilnPvXZLflrY2Nuhz8acTCx1I2hH3i4bLG78d8m0koNLy7ZCxa8tUkpKLmx9ACAGX7NtaIYY6yi4TUJt7Lk6lmmDhmOiRlPz6L_2Zbw0tQ57xSnccHgVpULxwM-mXr5LhPlO7p8lZHeiBg8sBZIPdVDM3rbLcDIMcMHqD"/>
              <div>
                <h4 className="font-bold text-sm uppercase">IIT Delhi</h4>
                <p className="text-xs text-slate-500 mt-2">Association for research on advanced EV components, batteries and lightweight material.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <img alt="LPU" className="w-16 h-16 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtN4qhHz9Alezxvm1wKri6g4EHXrFI2-_YmPcziUFEjstLXllf-QkdiEe1I2dxeoXlHvDm0R49ugz2LNtgNfYEIA1xX_Ubfq8cMoo0GYCvZDKng_FGuNTvxvCna1ldaWpPQRcvMsHXRWYDU6c_8grr4B0QAglku-PD8HRJq9LnAwqs-CP819wAQkzm7B0O2wa6TjZLLHdCaDKy5xqEODilDBBJjCkIxA9Tl1iNxcmU8-huovS8LMySuqaPRRCHJa_xcUnHvbZ59Yfd"/>
              <div>
                <h4 className="font-bold text-sm uppercase">Lovely Professional University</h4>
                <p className="text-xs text-slate-500 mt-2">Setting up the advanced EV manufacturing facility for academic and professional training.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <img alt="PEC" className="w-16 h-16 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtMErdfwViux1he5_z5g8_Yq7P0AKLj1tO5uRukDg7Aq86JHZDMqF0-F2iFGlpfpal8y8SfpxLTqGy4ZTnN7d6mfMwB14D7fHzrzGn77of_R6bGFyqu6v7Ib-eLehTHvK9KHKzJsFINOKjs4aQckAqM7jReBXlquAlXpxcE6c8dc5OYLKJ0vOzjwY9vncXueguzq7iq-CNX9Qz29mgbUMpHCiFudNN5Idd4NQId2Yb_ME7eB4HsQjfjlMe68-2V4hr2gXcq1aXXbtC"/>
              <div>
                <h4 className="font-bold text-sm uppercase">PEC Chandigarh</h4>
                <p className="text-xs text-slate-500 mt-2">Collaboration on renewable energy, smart grid and EV technology research.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <img alt="CT Group" className="w-16 h-16 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcJynzix5vU58pNwaA1UXseIspxdrIVqv16NF2wCgYy8DuPnHI2BMaUVcHljtCsyLy6tKfaQG2uz8BcKBXGXF7_vgbBe9xxqBPbOgHqm9X4kdzpNDypasmFDTQ4MHKkau9vhiLKN-mEWPl216LuSUtMnwwtLwpGeOg6p5edlrdaq6bBR5vIpQSNhw7eVJYF3QBAef3hPGSRc1jSwepKpzRsdf_qu9VV-Bs055SZEbHKAGbEpS1o4LgvWk73dYlQsKuKVDBM-BnhR-D"/>
              <div>
                <h4 className="font-bold text-sm uppercase">CT Group of Institutions</h4>
                <p className="text-xs text-slate-500 mt-2">Focused on bridging industry-academia gap for next-gen mobility engineers.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <img alt="PTU" className="w-16 h-16 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZGmCNB1DIXD9cyCR6gyqwSojEaxkucnwkzmOxQITkjN9O6vWnYpty90bNB2GKspoEF6GJfj8-cGml190UFj8pE-yYXVYJA7LRy4ADoubhxaoXE96GDlRrFBY86OcWmGyRC89AYncPLAKlHY8f7OrHn-ECh38R463FBA9iu-KhKVI0YopldX7J7lhp_P8B_9IOSDwnwpr-RAq4jJBv0zX_jKSOdvieybjPtgNUrYiwWoqkmB1-62OAoeYy0qnvP4dXC6ZKkvEJcyL"/>
              <div>
                <h4 className="font-bold text-sm uppercase">PTU</h4>
                <p className="text-xs text-slate-500 mt-2">Academic partnership for skill development and industrial internships in electric mobility.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <img alt="Thapar" className="w-16 h-16 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATJiz8EktFCMy82IquIZnkOU98-cU0WE5CFnmmBscAW7VEeODvgP-CNV1jrIAmXowyOc0vX7PidPqVnLpTAeUH7CzDd2YSnZ7MXkxjav--9X0EaWIjtH3lnxcb4aKkTQtFWnbvFe0tXhY3YSR_ELwLXg56E-0HyHPIQpx0Vgojx0rfvJE26lC_12cJZshfwzpd03ChAsBbfizwMN9dk35emghWcp44mQBtBrowpwrOyijRZP8wFB6l-uva3sJzIJ7azH5bbN6bj_Vt"/>
              <div>
                <h4 className="font-bold text-sm uppercase">Thapar Institute of Engineering &amp; Tech</h4>
                <p className="text-xs text-slate-500 mt-2">Joint initiatives for technical research and entrepreneurship development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Section06_Manufacturing */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-start gap-4 mb-10">
            <span className="text-5xl font-serif font-bold text-[#001A3D]">06.</span>
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Manufacturing Excellence</h4>
              <h2 className="text-3xl font-bold text-[#001A3D] uppercase leading-tight">Hoshiarpur Manufacturing Plant</h2>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
            <img alt="Hoshiarpur Plant" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp5hVucVurhEoisvuSUphnevb6Zvd6ahoYTUYZvDlpIaPL3sP3myPVHD5w8uRqKjl17QxUpdvtt3mjAnLJzp5rZCGh8w9C37z7gWLaslrorKkk8Qb8dlU0jpkulE2qZgq8PzU_O2AUD8m1D2ZfbMl0F2FXhzXAhfpoTLt06ezNsUWkue-3PJmCLMSZ9hiDE1TqI-zdgngnKFHXnuLi0-X4VamiaBneXmLqVn8EB8BXdl0xh1pZIUfsyjoNK6buSjgkoEDrUblm-5e1"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A3D]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-0 right-0 px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border-l-2 border-white/30 pl-4 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">01. Sector</div>
                  <div className="text-sm font-bold mt-1">EV PRODUCTION</div>
                </div>
                <div className="border-l-2 border-white/30 pl-4 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">02. Infrastructure</div>
                  <div className="text-sm font-bold mt-1">BATTERY ASSEMBLY</div>
                </div>
                <div className="border-l-2 border-white/30 pl-4 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">03. Philosophy</div>
                  <div className="text-sm font-bold mt-1">SUSTAINABLE MANUFACTURING</div>
                </div>
                <div className="border-l-2 border-white/30 pl-4 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">04. Tech</div>
                  <div className="text-sm font-bold mt-1">INDUSTRIAL AUTOMATION</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Section07_Workforce */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-start gap-4 mb-16 text-left">
            <span className="text-5xl font-serif font-bold text-[#001A3D]">07.</span>
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Talent Development</h4>
              <h2 className="text-3xl font-bold text-[#001A3D] uppercase leading-tight">Building India's EV Workforce</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#001A3D] text-2xl mb-4 shadow-sm"><i className="fas fa-tools"></i></div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest">Skill Centres</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#001A3D] text-2xl mb-4 shadow-sm"><i className="fas fa-trophy"></i></div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest">Hackathons &amp; Competitions</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#001A3D] text-2xl mb-4 shadow-sm"><i className="fas fa-certificate"></i></div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest">Scholarships &amp; Grants</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#001A3D] text-2xl mb-4 shadow-sm"><i className="fas fa-user-group"></i></div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest">Internship Programs</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[#001A3D] text-2xl mb-4 shadow-sm"><i className="fas fa-compass"></i></div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest">Career Counselling</h5>
            </div>
          </div>
        </section>

        {/* BEGIN: Section08_Awards */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl font-serif font-bold text-[#001A3D]">08.</span>
            <h2 className="text-3xl font-bold text-[#001A3D] uppercase">Awards &amp; Recognition</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl font-bold mb-4 font-serif text-[#001A3D]">Forbes</div>
              <h4 className="text-xs font-bold uppercase mb-2">Best Employer 2025</h4>
              <p className="text-[10px] text-slate-500">Recognized by Forbes as one of the Best Employers 2025.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">ET</span>
                <span className="text-xl font-bold text-[#001A3D]">Auto</span>
              </div>
              <h4 className="text-xs font-bold uppercase mb-2">Soonicorns</h4>
              <p className="text-[10px] text-slate-500">Among India's Top Mobility Startups.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
              <h4 className="text-sm font-bold uppercase mb-4 text-[#001A3D]">Industry Recognition</h4>
              <p className="text-[10px] text-slate-500">Honored by leading industry bodies for innovation and sustainable practices.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
              <h4 className="text-sm font-bold uppercase mb-4 text-[#001A3D]">Leadership Engagements</h4>
              <p className="text-[10px] text-slate-500">Speaking at global forums on EV adoption, sustainable logistics and clean energy.</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
