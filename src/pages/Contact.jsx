import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', guests: '2', date: '', note: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Real implementation would send data to API
    };

    return (
        <div className="contact-page bg-bg-dark pt-40 pb-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary uppercase tracking-[0.4em] font-bold mb-4 block">Reservations</span>
                    <h1 className="text-6xl md:text-8xl">Join Our Table</h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-20 items-stretch">
                    <div className="reveal active flex flex-col justify-between">
                        <div className="glass-effect p-12 h-full">
                            <h2 className="text-3xl mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <MapPin className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold mb-1">Our Location</h4>
                                        <p className="text-gray-400">123 Culinary Avenue, Skyline Heights<br />New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <Phone className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-400">(+1) 234 567 890</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <Mail className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400">reservations@lumiere.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <Clock className="text-secondary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold mb-1">Kitchen Hours</h4>
                                        <p className="text-gray-400">Tue - Fri: 5:00 PM - 11:00 PM<br />Sat - Sun: 12:00 PM - 12:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal active">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="glass-effect p-12 space-y-6">
                                <h2 className="text-3xl mb-8">Reservations</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-secondary font-bold">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 focus:border-secondary transition-colors outline-none"
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-secondary font-bold">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 focus:border-secondary transition-colors outline-none"
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-secondary font-bold">Number of Guests</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 p-4 focus:border-secondary transition-colors outline-none appearance-none"
                                            onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                                        >
                                            <option className="bg-bg-dark">2 People</option>
                                            <option className="bg-bg-dark">3 People</option>
                                            <option className="bg-bg-dark">4 People</option>
                                            <option className="bg-bg-dark">5+ People</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-secondary font-bold">Date</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 focus:border-secondary transition-colors outline-none [color-scheme:dark]"
                                            onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-secondary font-bold">Special Requests</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-secondary transition-colors outline-none resize-none"
                                        onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary w-full mt-4">Book Now</button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-effect p-12 text-center h-full flex flex-col justify-center items-center"
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-secondary flex items-center justify-center text-secondary mb-8">
                                    <span className="text-4xl">✓</span>
                                </div>
                                <h2 className="text-4xl mb-4">Request Received</h2>
                                <p className="text-gray-400">We will confirm your reservation via email shortly. Thank you for choosing Lumière.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-12 text-secondary font-bold hover:underline">Make Another Reservation</button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .contact-page { min-height: 100vh; }
        .space-y-8 > * + * { margin-top: 2rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .shrink-0 { flex-shrink: 0; }
        .items-stretch { align-items: stretch; }
        .h-full { height: 100%; }
        .p-12 { padding: 3rem; }
        .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05); }
        .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
        .focus\\:border-secondary:focus { border-color: var(--secondary); }
        .outline-none { outline: 2px solid transparent; outline-offset: 2px; }
        .resize-none { resize: none; }
        .appearance-none { appearance: none; }
        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }
        .mt-12 { margin-top: 3rem; }
      `}} />
        </div>
    );
};

export default Contact;
