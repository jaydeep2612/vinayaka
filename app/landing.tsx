"use client";

import React, { useEffect, useState } from 'react';

export default function VinayakVentureWebsite() {
  const [isVisible, setIsVisible] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Form Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
      setStatus(data.message);
    } catch {
      setStatus("Something went wrong. Please try again.");
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#28A745] selection:text-white">
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#1B2B3A] border-b border-white/10 px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
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

      {/* 3. ABOUT US */}
      <section id="about" className="py-24 bg-[#F8F9FA] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-[#28A745] uppercase tracking-[0.3em] mb-4">Who We Are</h2>
              <h3 className="text-4xl font-black text-[#1B2B3A] mb-6 uppercase">About Vinayak Venture</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Vinayak Venture is a professional supplier of Industrial Stretch Film Packaging Solutions, supporting businesses with products built for strength, consistency, and efficiency. 
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
              { title: "Machine Stretch Films", desc: "Standard transparent films suitable for heavy-duty machine wrapping.", image: "product/1.png" },
              { title: "Colored Stretch Films", desc: "Robust colored films for specific product identification and security.", image: "product/2.png" },
              { title: "Hand Stretch Films", desc: "High-performance transparent films designed for secure manual wrapping.", image: "product/3.png" },
              { title: "Pre-Stretched Film", desc: "Lightweight films designed for efficiency and reduced material usage.", image: "product/4.png" },
              { title: "Vented Stretch Film", desc: "Ideal for products needing airflow, such as fruits and vegetables.", image: "product/5.png" },
            ].map((prod, i) => (
              <div key={i} className="group p-6 rounded-xl border border-slate-100 bg-[#F8F9FA] hover:bg-[#1B2B3A] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                <div className="w-full aspect-square mb-6 bg-white rounded-lg flex items-center justify-center p-4 shadow-inner overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="max-h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <h4 className="text-xl font-black text-[#1B2B3A] group-hover:text-white mb-4 uppercase tracking-tight">{prod.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS */}
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
                  <tr><td className="p-4 font-bold text-[#28A745] uppercase">Thickness</td><td className="p-4">60 / 80 / 90 / 100 (15-25 microns)</td></tr>
                  <tr className="bg-white/5"><td className="p-4 font-bold text-[#28A745] uppercase">Stretch Capacity</td><td className="p-4">Up to 200% - 300%</td></tr>
                  <tr><td className="p-4 font-bold text-[#28A745] uppercase">Load Capacity</td><td className="p-4">Up to 2600 lbs</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-black text-[#28A745]">PREMIUM QUALITY</div>
                <div className="text-xs uppercase tracking-widest mt-2">Guaranteed Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (YOUR SPECIFIC REQUEST) */}
      <section id="contact" className="py-24 bg-slate-50 px-6 md:px-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white shadow-[0_20px_50px_rgba(27,43,58,0.15)] rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Side: Info */}
            <div className="bg-[#1B2B3A] text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A745]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic text-[#28A745]">Get in Touch</h2>
                <p className="text-slate-300 mb-10 font-medium leading-relaxed">
                  Have a question about our industrial stretch films or need a bulk quote? 
                  Our team is ready to provide you with the perfect packaging solution.
                </p>

                <div className="space-y-8 font-bold">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#28A745] transition-colors">📧</div>
                    <p className="text-sm">
                      <a href="mailto:info.vinayakventure@gmail.com?subject=Contact%20Inquiry">
                        info.vinayakventure@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#28A745] transition-colors">📞</div>
                    <p className="text-lg">
                      <a href="tel:+916354768985">
                        +91 63547 68985
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#28A745] transition-colors shrink-0">📍</div>
                    <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
                      <a href="https://maps.google.com/?q=491-C/19,+Chandan+Complex,+Makarpura,+Vadodara" target="_blank" rel="noopener noreferrer">
                        491-C/19, Chandan Complex, <br />
                        Opp. Himalaya Factory, G.I.D.C., <br />
                        Makarpura, Vadodara-390010.
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-12 text-[#28A745] font-black text-xs tracking-[0.4em] uppercase">
                Total Solutions in Packaging
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-12">
              <h3 className="text-2xl font-black text-[#1B2B3A] mb-8 uppercase tracking-tighter italic">Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-[#1B2B3A]"
                    placeholder="Full Name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-[#1B2B3A]"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                    <input
                      type="text" name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-[#1B2B3A]"
                      placeholder="Inquiry for Machine Film"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message" rows={4} value={formData.message} onChange={handleChange} required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-[#1B2B3A] resize-none"
                    placeholder="Enter your requirements here..."
                  />
                </div>

                {status && (
                  <div className={`p-4 rounded-xl text-sm font-bold ${success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {status}
                  </div>
                )}

                <button
                  type="submit" disabled={loading}
                  className="w-full bg-[#1B2B3A] hover:bg-[#28A745] text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#1B2B3A] text-white pt-10 pb-10 px-6">
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          © 2026 Vinayak Venture - Total Solutions in Stretch Film Packaging
        </div>
      </footer>
    </div>
  );
}