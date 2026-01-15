import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
    const categories = [
        {
            name: "Starters",
            items: [
                { name: "Scallops Carpaccio", price: "$28", desc: "Citrus segments, chili, and herb oil infusion" },
                { name: "Foie Gras Terrine", price: "$34", desc: "Fig jam, toasted brioche, and balsamic reduction" },
                { name: "Heirloom Tomato Tart", price: "$24", desc: "Goat cheese mousse and fresh basil pesto" }
            ]
        },
        {
            name: "Main Courses",
            items: [
                { name: "Roasted Venison", price: "$52", desc: "Juniper berry jus, parsnip puree, and wild mushrooms" },
                { name: "Cod à la Meunière", price: "$48", desc: "Brown butter, capers, lemon, and wilted spinach" },
                { name: "Wild Mushroom Risotto", price: "$42", desc: "Black truffle shavings and 24-month aged parmesan" }
            ]
        },
        {
            name: "Desserts",
            items: [
                { name: "Grand Marnier Soufflé", price: "$18", desc: "Vanilla bean crème anglaise" },
                { name: "Dark Chocolate Fondant", price: "$20", desc: "Salted caramel core and raspberry sorbet" }
            ]
        }
    ];

    return (
        <div className="menu-page bg-bg-dark pt-40 pb-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary uppercase tracking-[0.4em] font-bold mb-4 block">Seasonal Menu</span>
                    <h1 className="text-6xl md:text-8xl">Culinary Creations</h1>
                </motion.div>

                <div className="grid gap-24">
                    {categories.map((cat, idx) => (
                        <div key={cat.name} className="reveal active">
                            <h2 className="text-3xl text-secondary uppercase tracking-widest mb-12 flex items-center gap-6">
                                {cat.name}
                                <div className="flex-1 h-[1px] bg-secondary/20"></div>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                                {cat.items.map((item) => (
                                    <div key={item.name} className="group cursor-pointer">
                                        <div className="flex justify-between items-end mb-2 border-b border-glass-border pb-2">
                                            <h3 className="text-xl font-serif group-hover:text-secondary transition-colors">{item.name}</h3>
                                            <span className="text-secondary font-bold">{item.price}</span>
                                        </div>
                                        <p className="text-gray-500 italic text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .menu-page { min-height: 100vh; }
        .pt-40 { padding-top: 10rem; }
        .pb-20 { padding-bottom: 5rem; }
        .text-center { text-align: center; }
        .mb-20 { margin-bottom: 5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .text-3xl { font-size: 1.875rem; }
        .gap-24 { gap: 6rem; }
        .flex-1 { flex: 1 1 0%; }
        .h-\\[1px\\] { height: 1px; }
        .bg-secondary\\/20 { background-color: rgba(201, 168, 106, 0.2); }
        .gap-x-20 { column-gap: 5rem; }
        .gap-y-12 { row-gap: 3rem; }
        .border-b { border-bottom: 1px solid; }
        .pb-2 { padding-bottom: 0.5rem; }
      `}} />
        </div>
    );
};

export default Menu;
