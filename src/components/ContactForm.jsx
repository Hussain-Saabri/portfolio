import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Note: You'll need to set these in your .env or replace them with your actual IDs
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId === 'your_service_id' || !serviceId) {
            setStatus('error');
            setErrorMessage('EmailJS is not configured. Please add your credentials to the .env file.');
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                setStatus('error');
                setErrorMessage('Oops! Something went wrong. Please try again later.');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="pt-16 pb-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-teal font-bold tracking-[0.3em] uppercase text-xs mb-6 block font-body">
                            The Dialogue
                        </span>
                        <h2 className="text-5xl md:text-6xl font-normal text-brand-navy font-heading leading-tight italic mb-8">
                            Initiate <span className="not-italic">Collaboration</span>
                        </h2>
                        <p className="text-slate-500 font-body text-lg leading-relaxed mb-12 max-w-md">
                            Ready to transform your vision into an elegant digital reality? Let's discuss your next breakthrough.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email", value: "hscreative.contact@gmail.com" },
                                { icon: Phone, label: "Phone", value: "9922841004" },
                                { icon: MapPin, label: "Studio", value: "Goa" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-brand-navy font-bold font-heading text-lg">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-12 bg-brand-light rounded-sm shadow-xl shadow-brand-navy/5 border border-slate-100 relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <CheckCircle2 size={64} className="text-emerald-500 mb-6" />
                                    <h3 className="text-2xl font-bold text-brand-navy font-heading mb-2">Message Sent!</h3>
                                    <p className="text-slate-500">I'll get back to you as soon as possible.</p>
                                </motion.div>
                            ) : (
                                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest pl-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-6 py-5 bg-white border border-slate-200 outline-none text-brand-navy font-body text-sm focus:border-brand-teal transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest pl-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-6 py-5 bg-white border border-slate-200 outline-none text-brand-navy font-body text-sm focus:border-brand-teal transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest pl-1">Message</label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            required
                                            placeholder="Tell me about your project"
                                            className="w-full px-6 py-5 bg-white border border-slate-200 outline-none text-brand-navy font-body text-sm focus:border-brand-teal transition-colors resize-none"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-3 text-red-500 text-sm font-medium p-4 bg-red-50 rounded-lg"
                                        >
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </motion.div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-6 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-brand-teal transition-all group shadow-lg shadow-brand-navy/10 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                Scanning Waves...
                                                <Loader2 size={16} className="animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Dispatch Message
                                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
