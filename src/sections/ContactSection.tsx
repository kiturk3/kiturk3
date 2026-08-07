import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { SectionWrapper } from '../components/layout/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Formspree / Web3Forms or Mailto fallback
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        data.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;

      window.open(mailtoUrl, '_blank');

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#3B82F6', '#22D3EE', '#10B981'],
      });

      toast.success('Thank you! Your message client has been opened.');
      reset();
    } catch (err) {
      toast.error('Failed to submit form. Please try emailing directly!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <SectionWrapper
      id="contact"
      badge="Let's Connect"
      title="Get In Touch"
      subtitle="Interested in lead Android roles, POS hardware architecture consulting, or AI engineering? Send me a message!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        {/* Left Column: Quick Direct Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900">
              Direct Contact Details
            </h3>
            <p className="text-xs text-slate-400">
              Feel free to reach out directly via email, phone, or LinkedIn.
            </p>
          </div>

          {/* Email Card */}
          <Card className="p-5 flex items-center justify-between border border-slate-800 hover:border-blue-500/40">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Email Address</div>
                <a href={`mailto:${profileData.email}`} className="text-sm font-bold text-slate-100 hover:text-blue-400 transition-colors">
                  {profileData.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </Card>

          {/* Phone Card */}
          <Card className="p-5 flex items-center justify-between border border-slate-800 hover:border-blue-500/40">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                <a href={`tel:${profileData.phone}`} className="text-sm font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                  {profileData.phone}
                </a>
              </div>
            </div>
          </Card>

          {/* Location Card */}
          <Card className="p-5 flex items-center justify-between border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="text-sm font-bold text-slate-100">
                  {profileData.location}
                </div>
              </div>
            </div>
          </Card>

          {/* Social Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold text-xs transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <Card className="p-6 sm:p-8 space-y-6 border border-slate-800">
            <h3 className="text-xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Your Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.name && (
                  <span className="text-[11px] text-rose-400">{errors.name.message}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Your Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                  })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                {errors.email && (
                  <span className="text-[11px] text-rose-400">{errors.email.message}</span>
                )}
              </div>

              {/* Subject Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  {...register('subject')}
                  placeholder="e.g. Lead Android Role Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-400">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
                icon={<Send className="w-4 h-4" />}
              >
                {isSubmitting ? 'Opening Message...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
