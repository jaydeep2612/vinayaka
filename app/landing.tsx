"use client";

import React, { useEffect, useState } from 'react';

export default function VinayakVentureWebsite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#28A745] selection:text-white">
      {/* 1. NAVBAR */}
    <nav className="fixed top-0 w-full z-50 bg-[#1B2B3A] border-b border-white/10 px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* NAVBAR LOGO */}
          <div className="flex items-center gap-3 overflow-hidden">
            <img 
              src="logo.png" 
              alt="Vinayak Venture Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/80">
            <a href="#home" className="text-[#28A745] border-b border-[#28A745]">Home</a>
            <a href="#products" className="hover:text-[#28A745] transition">Products</a>
            <a href="#about" className="hover:text-[#28A745] transition">About Us</a>
            <a href="#specs" className="hover:text-[#28A745] transition">Technical Specs</a>
            <a href="#contact" className="hover:text-[#28A745] transition">Contact</a>
          </div>

          
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 p-8 md:p-12 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-[#28A745] text-white text-[10px] px-3 py-1 rounded-full font-bold mb-6 tracking-widest uppercase">
              Professional Packaging Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1B2B3A] leading-[1.1] mb-6 tracking-tight">
              PROTECTION IN <br />
              <span className="text-[#28A745] uppercase">EVERY LAYER.</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-md leading-relaxed mb-8">
              Industrial-grade stretch film solutions designed for secure wrapping, load stability, and dependable protection during transit and storage.
            </p>
            <div className="flex gap-4">
               <a href="#products" className="bg-[#1B2B3A] text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-[#28A745] transition-colors">Explore Range</a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[600px]">
            <div className="absolute inset-0 bg-[#1B2B3A] overflow-hidden" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
                alt="Stretch Film Industrial" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US / CORE STRENGTHS */}
      <section id="about" className="py-24 bg-[#F8F9FA] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-[#28A745] uppercase tracking-[0.3em] mb-4">Who We Are</h2>
              <h3 className="text-4xl font-black text-[#1B2B3A] mb-6 uppercase">About Vinayak Venture</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Vinayak Venture is a professional supplier of Industrial Stretch Film Packaging Solutions, supporting businesses with products built for strength, consistency, and efficiency. 
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our focus is on dependable sourcing and performance-driven materials that help protect goods during handling, storage, and transportation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#28A745] pl-4">
                  <div className="text-2xl font-black text-[#1B2B3A]">Pan-India</div>
                  <div className="text-xs uppercase font-bold text-slate-400">Supply Network</div>
                </div>
                <div className="border-l-4 border-[#28A745] pl-4">
                  <div className="text-2xl font-black text-[#1B2B3A]">24/7</div>
                  <div className="text-xs uppercase font-bold text-slate-400">Timely Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1587293855926-d5a2d0fdfbc8?auto=format&fit=crop&q=80" alt="Warehouse Operation" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-sm italic font-medium text-slate-600">"Trusted by businesses across India for consistent quality and reliable packaging performance."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT RANGE */}
      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-[#28A745] uppercase tracking-[0.3em] mb-4">Our Product Range</h2>
            <h3 className="text-4xl font-black text-[#1B2B3A] uppercase">Engineered for Reliability</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Machine Stretch Films",
                desc: "Standard transparent films suitable for heavy-duty machine wrapping.",
                image: "product/1.png"
              },
              {
                title: "Colored Stretch Films",
                desc: "Robust colored films for specific product identification and security.",
                image: "product/2.png"
              },
              {
                title: "Hand Stretch Films",
                desc: "High-performance transparent films designed for secure manual wrapping.",
                image: "product/3.png"
              },
              {
                title: "Pre-Stretched Film",
                desc: "Lightweight films designed for efficiency and reduced material usage.",
                image: "product/4.png"
              },
              {
                title: "Vented Stretch Film",
                desc: "Ideal for products needing airflow, such as fruits and vegetables.",
                image: "product/5.png"
              },
            //   {
            //     title: "Industrial Stabilization",
            //     desc: "High-strength films for demanding industrial load stabilization.",
            //     image: "product/6.png"
            //   }
            ].map((prod, i) => (
              <div key={i} className="group p-6 rounded-xl border border-slate-100 bg-[#F8F9FA] hover:bg-[#1B2B3A] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                <div className="w-full aspect-square mb-6 bg-white rounded-lg flex items-center justify-center p-4 shadow-inner overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <h4 className="text-xl font-black text-[#1B2B3A] group-hover:text-white mb-4 uppercase tracking-tight">
                  {prod.title}
                </h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed">
                  {prod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS TABLE */}
      <section id="specs" className="py-24 bg-[#1B2B3A] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[#28A745] font-black uppercase tracking-[0.2em] text-sm mb-2">Technical Specifications</h2>
            <h3 className="text-3xl font-black uppercase">Industrial-Grade Performance</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/5"><td className="p-4 font-bold text-[#28A745] uppercase">Material</td><td className="p-4">LLDPE (Linear Low-Density Polyethylene)</td></tr>
                  <tr><td className="p-4 font-bold text-[#28A745] uppercase">Thickness (Gauge)</td><td className="p-4">60 / 80 / 90 / 100 (15-25 microns)</td></tr>
                  <tr className="bg-white/5"><td className="p-4 font-bold text-[#28A745] uppercase">Width Options</td><td className="p-4">6" | 12" | 18" | 20"</td></tr>
                  <tr><td className="p-4 font-bold text-[#28A745] uppercase">Stretch Capacity</td><td className="p-4">Up to 200% - 300%</td></tr>
                  <tr className="bg-white/5"><td className="p-4 font-bold text-[#28A745] uppercase">Load Capacity</td><td className="p-4">Up to 2600 lbs</td></tr>
                  <tr><td className="p-4 font-bold text-[#28A745] uppercase">Core Size</td><td className="p-4">2" (Manual) / 3" (Machine)</td></tr>
                </tbody>
              </table>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h4 className="font-black text-[#28A745] mb-4 uppercase tracking-widest">Roll Lengths</h4>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-black">300-600m</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Manual Grade</div>
                  </div>
                  <div className="h-12 w-px bg-white/10 mx-6"></div>
                  <div>
                    <div className="text-3xl font-black">1500-3000m</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Machine Grade</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#28A745] p-6 rounded-xl">
                  <div className="text-xs uppercase font-black mb-2">Cling Type</div>
                  <div className="font-bold">Single / Double Side Cling</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="text-xs uppercase font-black mb-2 text-[#28A745]">Standard Size</div>
                  <div className="font-bold text-sm">Premium 90 Gauge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-[#28A745] uppercase tracking-[0.3em] mb-4">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-8">
              {["Manufacturing", "Logistics & Warehousing", "FMCG", "Pharmaceuticals", "Electronics", "Export & Shipping"].map((item, i) => (
                <span key={i} className="text-[#1B2B3A] font-black uppercase text-xs md:text-sm border-b-2 border-[#28A745]/20 pb-1">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT FOOTER */}
      <footer id="contact" className="bg-[#1B2B3A] text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            {/* FOOTER LOGO */}
            <div className="flex items-center gap-3">
              <img 
                src="logo.png" 
                alt="Vinayak Venture Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest font-bold">
              Total Solutions in Stretch Film Packaging
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-sm text-[#28A745]">Contact Us</h4>
            <div className="text-sm space-y-3">
              <p className="flex gap-3"><span className="text-[#28A745]">📍</span> 491-C/19, Chandan Complex, Opp. Himalaya Factory, G.I.D.C., Makarpura, Vadodara-390010</p>
              <p className="flex gap-3"><span className="text-[#28A745]">📞</span> +91 6354 768985</p>
              <p className="flex gap-3"><span className="text-[#28A745]">✉️</span> info.vinayakventure@gmail.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-sm text-[#28A745]">Quick Inquiry</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 p-3 rounded text-xs w-full focus:outline-none focus:border-[#28A745]" />
              <button className="bg-[#28A745] px-6 py-2 rounded text-[10px] font-black uppercase hover:bg-[#1E7D34] transition">Submit</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          © 2026 Vinayak Venture - Total Solutions in Stretch Film Packaging
        </div>
      </footer>
    </div>
  );
}