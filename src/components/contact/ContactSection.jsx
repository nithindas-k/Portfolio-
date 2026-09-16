// ─────────────────────────────────────────────
// ContactSection
// Editorial contact card with form + links
// ─────────────────────────────────────────────

import React, { useState } from 'react';
import { Send, Mail, Code2, Link, AtSign, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../../services/contactService.js';
import { DEVELOPER } from '../../constants/portfolioData.js';
import { SOCIAL_LINKS } from '../../constants/navigation.js';
import Button from '../ui/Button.jsx';
import './ContactSection.css';

const ICON_MAP = { Code2, Link, AtSign };

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const result = await submitContactForm(form);
    if (result.success) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
      setErrors(result.errors || {});
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="section__inner">
        <div className="section__header">
          <div className="section__eyebrow">
            <span className="section__eyebrow-line" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section__title">
            Let&apos;s <span className="text-sage">Collaborate</span>
          </h2>
          <p className="section__sub">
            Have a project in mind? Looking for a skilled developer to join your team? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-section__layout">
          {/* Left: Info */}
          <div className="contact-section__info">
            <div className="contact-section__availability">
              <div className="contact-section__avail-dot" />
              <div>
                <div className="contact-section__avail-title">Available for Work</div>
                <div className="contact-section__avail-sub">Open to full-time, contract, and freelance</div>
              </div>
            </div>

            <div className="contact-section__email-card">
              <Mail size={18} className="contact-section__email-icon" />
              <a href={`mailto:${DEVELOPER.email}`} className="contact-section__email-link">
                {DEVELOPER.email}
              </a>
            </div>

            <div className="contact-section__socials">
              <p className="contact-section__socials-label">Connect with me</p>
              <div className="contact-section__social-links">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = ICON_MAP[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-section__social"
                    >
                      {Icon && <Icon size={18} />}
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-section__form" onSubmit={handleSubmit} noValidate>
            <div className="contact-section__field-row">
              <div className="contact-section__field">
                <label className="contact-section__label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={`contact-section__input ${errors.name ? 'contact-section__input--error' : ''}`}
                />
                {errors.name && <span className="contact-section__error">{errors.name}</span>}
              </div>
              <div className="contact-section__field">
                <label className="contact-section__label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`contact-section__input ${errors.email ? 'contact-section__input--error' : ''}`}
                />
                {errors.email && <span className="contact-section__error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact-section__field">
              <label className="contact-section__label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`contact-section__input contact-section__textarea ${errors.message ? 'contact-section__input--error' : ''}`}
              />
              {errors.message && <span className="contact-section__error">{errors.message}</span>}
            </div>

            {status === 'success' && (
              <div className="contact-section__status contact-section__status--success">
                <CheckCircle size={16} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
