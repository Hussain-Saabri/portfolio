import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
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
                                { icon: Mail, label: "Email", value: "hello@hs-creative.tech" },
                                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                                { icon: MapPin, label: "Studio", value: "San Francisco, CA" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-navy group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
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
                        className="p-12 bg-brand-light rounded-sm shadow-xl shadow-brand-navy/5 border border-slate-100"
                    >
                        <form className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest pl-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-6 py-5 bg-white border border-slate-200 outline-none text-brand-navy font-body text-sm focus:border-brand-teal transition-colors"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest pl-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-6 py-5 bg-white border border-slate-200 outline-none text-brand-navy font-body text-sm focus:border-brand-teal transition-colors"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-brand-navy uppercase tracking-widest pl-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project"
                                    className="w-full px-6 py-5 bg-white border border-slate-200 outline-none text-brand-navy font-body text-sm focus:border-brand-teal transition-colors resize-none"
                                />
                            </div>
                            <button className="w-full py-6 bg-brand-navy text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-brand-teal transition-all group shadow-lg shadow-brand-navy/10">
                                Dispatch Message
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
