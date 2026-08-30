import React, { useState } from 'react';
import { resumeData } from '../../data/resumeData';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#030014] border-b border-[#2A0E61]/45">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Big typography & social linkages */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-display text-[10px] tracking-[0.25em] text-purple-400 uppercase font-semibold mb-3">
                GET IN TOUCH
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-[1.1] mb-8">
                LET'S BUILD<br/>SOMETHING<br/>INTELLIGENT<span className="text-purple-500">.</span>
              </h2>
              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm mb-12">
                If you are looking to collaborate on machine learning systems, full-stack application development, or research projects, reach out today.
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-[#2A0E61]/40 pt-8">
              <div>
                <span className="font-display text-[9px] tracking-widest text-[#B4B6C3] block mb-1 uppercase font-bold">WRITE EMAIL</span>
                <a 
                  href={`mailto:${resumeData.email}`} 
                  className="font-mono text-xs text-purple-400 hover:text-white transition-colors"
                >
                  {resumeData.email}
                </a>
              </div>
              
              <div className="flex gap-8">
                <div>
                  <span className="font-display text-[9px] tracking-widest text-[#B4B6C3] block mb-1 uppercase font-bold">LINKEDIN</span>
                  <a 
                    href="https://www.linkedin.com/in/anusha-b-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    LINKEDIN.COM/IN/ANUSHA-B-AI
                  </a>
                </div>

                <div>
                  <span className="font-display text-[9px] tracking-widest text-[#B4B6C3] block mb-1 uppercase font-bold">GITHUB</span>
                  <a 
                    href="https://github.com/Anushalatha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    GITHUB.COM/ANUSHALATHA
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inverted Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#09002a]/15 border border-[#2A0E61] p-8 md:p-10 relative rounded-lg shadow-lg backdrop-blur-sm shadow-[0_0_15px_rgba(112,66,248,0.02)]">
              {submitSuccess && (
                <div className="bg-[#7042f88b]/15 border border-[#7042f861]/50 text-purple-305 font-display text-xs p-4 rounded-sm tracking-wide">
                  MESSAGE SECURELY REGISTERED. I WILL CORRESPOND SHORTLY.
                </div>
              )}
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/35 text-red-505 font-display text-xs p-4 rounded-sm tracking-wide">
                  AN ERROR OCCURRED. PLEASE TRY AGAIN.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-display text-[9px] tracking-wider text-[#B4B6C3] uppercase block mb-2 font-semibold">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#030014]/60 border border-[#2A0E61] p-3 font-display text-xs text-white focus:outline-none focus:border-[#7042f88b] transition-colors rounded-lg shadow-sm"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-display text-[9px] tracking-wider text-[#B4B6C3] uppercase block mb-2 font-semibold">YOUR EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#030014]/60 border border-[#2A0E61] p-3 font-display text-xs text-white focus:outline-none focus:border-[#7042f88b] transition-colors rounded-lg shadow-sm"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="font-display text-[9px] tracking-wider text-[#B4B6C3] uppercase block mb-2 font-semibold">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#030014]/60 border border-[#2A0E61] p-3 font-display text-xs text-white focus:outline-none focus:border-[#7042f88b] transition-colors rounded-lg shadow-sm"
                  placeholder="Inquiry subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-display text-[9px] tracking-wider text-[#B4B6C3] uppercase block mb-2 font-semibold">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#030014]/60 border border-[#2A0E61] p-3 font-display text-xs text-white focus:outline-none focus:border-[#7042f88b] transition-colors rounded-lg resize-none shadow-sm"
                  placeholder="Write details of the engagement..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7042f88b]/20 border border-[#7042f861] hover:bg-[#7042f88b]/40 text-white font-display text-xs uppercase tracking-widest font-bold py-3.5 px-6 transition-all duration-300 disabled:opacity-50 rounded-full shadow-[0_0_15px_rgba(112,66,248,0.15)]"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE ↗'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;