import { FormEvent, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import Reveal from '../Reveal';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = { name: '', email: '', subject: '', message: '' };

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');
  const updateField = (field: keyof ContactForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setStatus('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');
    const mailto = `mailto:${resumeData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus('Your email app should open with a draft. If it does not, email Anusha directly using the address on the left.');
  };

  return (
    <section id="contact" className="section section-contact">
      <div className="page-width contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">09 — Contact</p>
          <h2>Let's build<br /><span>something useful.</span></h2>
          <p>Have an idea involving AI systems, full-stack engineering, or research? I would be glad to hear about it.</p>
          <a className="contact-email" href={`mailto:${resumeData.email}`}>
            <Mail size={18} /> {resumeData.email} <ArrowUpRight size={16} />
          </a>
          <div className="contact-socials">
            <a href="https://github.com/Anushalatha" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/anusha-b-ai" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="https://medium.com/@anushalathaaa7" target="_blank" rel="noreferrer">Medium <ArrowUpRight size={14} /></a>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span className="mini-label">START A CONVERSATION</span><span>All fields required</span></div>
            <div className="form-row">
              <label>Name<input name="name" value={formData.name} onChange={(event) => updateField('name', event.target.value)} required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} required autoComplete="email" /></label>
            </div>
            <label>Subject<input name="subject" value={formData.subject} onChange={(event) => updateField('subject', event.target.value)} required /></label>
            <label>Message<textarea name="message" rows={5} value={formData.message} onChange={(event) => updateField('message', event.target.value)} required /></label>
            <button type="submit" className="button button-primary">Open email draft <ArrowUpRight size={16} /></button>
            {status && <p className="form-status" role="status">{status}</p>}
            <p className="form-note">This form opens your email app; it does not send data to a server.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
