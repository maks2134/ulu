"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/photo1.jpeg", "/images/photo2.jpeg", "/images/photo3.jpeg"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

export default function GalleryPage() {
    return (
        <PageTransition>
            <div className="container mx-auto min-h-screen px-6 py-24 pt-32">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-16">Наши Моменты</h1>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-2xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image src={src} alt={`Moment ${index + 1}`} width={500} height={500} className="w-full h-full object-cover"/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </PageTransition>
    );
}

export {}