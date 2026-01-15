import React from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-section bg-dark py-20 border-t border-glass-border">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <UtensilsCrossed className="text-secondary" size={24} />
                            <span className="text-xl font-bold font-serif uppercase text-secondary">Lumière Dining</span>
                        </div>
                        <p className="text-gray-400 max-w-md mb-8">
                            Experience the pinnacle of fine dining where culinary artistry meets architectural elegance.
                            Located in the heart of the city, we craft memories that linger long after the last course.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-secondary uppercase tracking-widest text-sm font-bold mb-6">Explore</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="/" className="hover:text-secondary text-gray-400">Home</a></li>
                            <li><a href="/menu" className="hover:text-secondary text-gray-400">Our Menu</a></li>
                            <li><a href="/contact" className="hover:text-secondary text-gray-400">Reservations</a></li>
                            <li><a href="#" className="hover:text-secondary text-gray-400">Private Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-secondary uppercase tracking-widest text-sm font-bold mb-6">Visit Us</h4>
                        <p className="text-gray-400 mb-2">123 Culinary Avenue</p>
                        <p className="text-gray-400 mb-6">Skyline Heights, NY 10001</p>
                        <p className="text-gray-400">Mon - Fri: 5pm - 11pm</p>
                        <p className="text-gray-400">Sat - Sun: 12pm - 12am</p>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 Lumière Dining. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-secondary">Privacy Policy</a>
                        <a href="#" className="hover:text-secondary">Terms of Service</a>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .footer-section { background: #050a09; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .border-t { border-top: 1px solid; }
        .border-glass-border { border-color: rgba(255, 255, 255, 0.1); }
        .grid { display: grid; }
        .gap-4 { gap: 1rem; }
        .gap-8 { gap: 2rem; }
        .gap-12 { gap: 3rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mt-20 { margin-top: 5rem; }
        .pt-8 { padding-top: 2rem; }
        .max-w-md { max-width: 28rem; }
        .text-gray-400 { color: #9ca3af; }
        .text-gray-500 { color: #6b7280; }
        .tracking-widest { letter-spacing: 0.2em; }
        .text-sm { font-size: 0.875rem; }
        .rounded-full { border-radius: 9999px; }
        .w-10 { width: 2.5rem; }
        .h-10 { height: 2.5rem; }
        @media (min-width: 768px) { 
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
          .md\\:flex-row { flex-direction: row; }
        }
      `}} />
        </footer>
    );
};

export default Footer;
