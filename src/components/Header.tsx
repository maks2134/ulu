"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Главная", href: "/" },
    { name: "Наша История", href: "/story" },
    { name: "Галерея", href: "/gallery" },
    { name: "Комплименты", href: "/compliments" },
];

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[#1a1d47]/50 backdrop-blur-sm z-50">
            <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <Link href="/" className="font-serif text-2xl font-bold z-50">
                    Ульяне
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.href} className="relative">
                            <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                                {link.name}
                            </Link>
                            {pathname === link.href && (
                                <motion.div
                                    className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-[#d8b4fe]"
                                    layoutId="underline"
                                />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#1a1d47] flex flex-col justify-center items-center space-y-8"
                        >
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={itemVariants}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href={link.href} className={`text-3xl font-bold ${pathname === link.href ? 'text-[#d8b4fe]' : 'text-white'}`}>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}