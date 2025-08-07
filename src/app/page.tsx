"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 pt-20" style={{ background: "radial-gradient(circle, #5055b1 0%, #1a1d47 70%)" }}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="font-serif text-5xl sm:text-6xl md:text-8xl font-extrabold"
                    style={{ textShadow: "0 0 20px rgba(216, 180, 254, 0.5)" }}
                >
                    Привет, Ульяна
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
                >
                    Это знак извинений, за проебы:)
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="mt-12"
                >
                    <Link href="/story" className="px-6 py-3 sm:px-8 text-sm sm:text-base bg-white text-[#5055b1] font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                        Начать путешествие
                    </Link>
                </motion.div>
            </div>
        </PageTransition>
    );
}