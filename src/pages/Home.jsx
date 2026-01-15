import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero.png"
                        alt="Luxury Interior"
                        className="w-full h-full object-cover scale-110 motion-safe:animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <span className="text-secondary uppercase tracking-[0.3em] font-bold mb-4 block reveal">Art of Fine Dining</span>
                        <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
                            Where Every Flavor Tells a <span className="text-secondary italic">Story</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-12 max-w-lg reveal">
                            Join us for an unforgettable culinary journey through modern interpretations of classical French cuisine.
                        </p>
                        <div className="flex gap-6 reveal">
                            <Link to="/menu" className="btn-primary">Explore Menu</Link>
                            <Link to="/contact" className="btn-outline">Book Table</Link>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-secondary to-transparent"></div>
                </div>
            </section>

            {/* Featured Dish */}
            <section className="py-32 bg-bg-dark overflow-hidden">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="reveal">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 border border-secondary/30 -z-10"></div>
                                <img src="/dish.png" alt="Signature Dish" className="w-full rounded-sm shadow-2xl transition-transform hover:scale-105 duration-700" />
                                <div className="absolute -bottom-10 -right-10 bg-secondary p-8 text-primary max-w-[240px]">
                                    <p className="font-serif italic text-2xl mb-2">Award Winning</p>
                                    <p className="text-xs uppercase tracking-widest font-bold">Dish of the Year 2025</p>
                                </div>
                            </div>
                        </div>
<br />
                        <div className="reveal">
                            <span className="text-secondary uppercase tracking-widest font-bold mb-4 block">Chef's Special</span>
                            <h2 className="text-5xl mb-8">The Truffle Seared Wagyu</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Indulge in our signature A5 Wagyu beef, perfectly seared and topped with fresh Perigord truffle shavings.
                                Served with a reduction of vintage red wine and butter-poached micro-greens.
                            </p>
                            <ul className="flex flex-col gap-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
                                        <Star size={20} />
                                    </span>
                                    <div>
                                        <h4 className="text-lg">Premium Ingredients</h4>
                                        <p className="text-sm text-gray-500">Sourced from the finest local farmers</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary">
                                        <Clock size={20} />
                                    </span>
                                    <div>
                                        <h4 className="text-lg">Slow Crafted</h4>
                                        <p className="text-sm text-gray-500">Prepared over 48 hours for perfection</p>
                                    </div>
                                </li>
                            </ul>
                            <Link to="/menu" className="flex items-center gap-2 text-secondary font-bold group">
                                SEE THE FULL MENU <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-20 glass-effect border-y border-glass-border">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="reveal">
                            <MapPin className="text-secondary mx-auto mb-4" size={32} />
                            <h3 className="text-xl mb-2 uppercase tracking-widest">Location</h3>
                            <p className="text-gray-400">123 Culinary Ave, NY</p>
                        </div>
                        <div className="reveal">
                            <Clock className="text-secondary mx-auto mb-4" size={32} />
                            <h3 className="text-xl mb-2 uppercase tracking-widest">Kitchen Hours</h3>
                            <p className="text-gray-400">Tue - Sun: 5pm - 11pm</p>
                        </div>
                        <div className="reveal">
                            <Star className="text-secondary mx-auto mb-4" size={32} />
                            <h3 className="text-xl mb-2 uppercase tracking-widest">Reservations</h3>
                            <p className="text-gray-400">(+1) 234 567 890</p>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        .home-page { }
        .h-screen { height: 100vh; }
        .items-center { align-items: center; }
        .overflow-hidden { overflow: hidden; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-0 { z-index: 0; }
        .z-10 { z-index: 10; }
        .object-cover { object-fit: cover; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-black\\/80 { --tw-gradient-from: rgba(0, 0, 0, 0.8) var(--tw-gradient-from-position); --tw-gradient-to: rgba(0, 0, 0, 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-black\\/40 { --tw-gradient-to: rgba(0, 0, 0, 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), rgba(0, 0, 0, 0.4) var(--tw-gradient-via-position), var(--tw-gradient-to); }
        .to-transparent { --tw-gradient-to: transparent var(--tw-gradient-to-position); }
        .max-w-2xl { max-width: 42rem; }
        .max-w-lg { max-width: 32rem; }
        .text-6xl { font-size: 3.75rem; }
        .md\\:text-8xl { font-size: 6rem; }
        .text-gray-300 { color: #d1d5db; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .block { display: block; }
        .gap-6 { gap: 1.5rem; }
        .bottom-12 { bottom: 3rem; }
        .left-1/2 { left: 50%; }
        .-translate-x-1/2 { transform: translateX(-50%); }
        .animate-bounce { animation: bounce 1s infinite; }
        .w-20 { width: 5rem; }
        .h-20 { height: 5rem; }
        .py-32 { padding-top: 8rem; padding-bottom: 8rem; }
        .bg-bg-dark { background-color: var(--bg-dark); }
        .grid { display: grid; }
        .gap-20 { gap: 5rem; }
        .text-5xl { font-size: 3rem; }
        .rounded-sm { border-radius: 0.125rem; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
        </div>
    );
};

export default Home;
