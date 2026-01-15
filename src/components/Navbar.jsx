import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Reservations', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-effect' : 'py-8'}`}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <UtensilsCrossed className="text-secondary group-hover:rotate-12 transition-transform" size={28} />
                    <span className="text-2xl font-bold tracking-tighter font-serif uppercase text-secondary">Lumière</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-12">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-sm font-semibold uppercase letter-spacing-2 relative group ${location.pathname === link.path ? 'text-secondary' : 'text-light'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-2 left-0 h-[1px] bg-secondary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button className="md:hidden text-secondary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-effect p-8 md:hidden"
                    >
                        <ul className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-xl font-serif uppercase text-light hover:text-secondary">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <style dangerouslySetInnerHTML={{
                __html: `
        .fixed { position: fixed; }
        .w-full { width: 100%; }
        .z-50 { z-index: 50; }
        .transition-all { transition-property: all; }
        .duration-500 { transition-duration: 500ms; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-12 { gap: 3rem; }
        .hidden { display: none; }
        @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:hidden { display: none; } }
        .text-secondary { color: var(--secondary); }
        .text-light { color: var(--text-light); }
        .text-2xl { font-size: 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .letter-spacing-2 { letter-spacing: 0.1em; }
        .relative { position: relative; }
        .group:hover .group-hover\\:w-full { width: 100%; }
        .group-hover\\:rotate-12:hover { transform: rotate(12deg); }
        .absolute { position: absolute; }
        .top-full { top: 100%; }
        .left-0 { left: 0; }
        .p-8 { padding: 2rem; }
        .flex-col { flex-direction: column; }
        .text-center { text-align: center; }
      `}} />
        </nav>
    );
};

export default Navbar;
