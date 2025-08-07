"use client";

import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const compliments = [
    { short: "Твоя улыбка", long: "Твоя улыбка — это нечто невероятное. Она способна осветить самый мрачный подвал на Дыбенко." },
    { short: "Твои глаза", long: "Твои глаза - красивее сверхновой, 2 самых крассивых изумруда." },
    { short: "Твой ум", long: "Мне нравится, как ты думаешь. Твоя способность видеть мир, твоя проницательность и остроумие восхищают меня. Разговоры с тобой — это отдельное удовольствие." },
    { short: "Твоя честность", long: "Твоя честность это вау, говорить все напрямую это вау." },
    { short: "Твоя сила", long: "Ты способна побить даже голубя)" },
    { short: "Чувство юмора", long: "Твой смех заразителен, а шутки заставляют улетать в конкретный ухахатбл" },
];

export default function ComplimentsPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <PageTransition>
            <div className="container mx-auto min-h-screen px-4 sm:px-6 py-24 pt-32">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-center mb-4">Сокровищница</h1>
                <p className="text-center text-gray-300 mb-16">То, что я ценю в тебе больше всего. Нажми на любую карточку.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {compliments.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            onClick={() => setSelectedId(index)}
                            className="p-4 sm:p-6 bg-[#5055b1]/80 rounded-lg cursor-pointer text-center shadow-lg"
                            whileHover={{ scale: 1.05, backgroundColor: "#5055b1" }}
                        >
                            <motion.h2 className="text-base sm:text-lg font-bold font-serif">{item.short}</motion.h2>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId !== null && (
                        <motion.div
                            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[100]"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white text-gray-800 p-6 sm:p-8 rounded-2xl w-full max-w-lg relative shadow-2xl"
                            >
                                <motion.button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-900"
                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                >
                                    <FiX size={24} />
                                </motion.button>
                                <motion.h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4 text-[#5055b1]">{compliments[selectedId].short}</motion.h2>
                                <motion.p className="text-base sm:text-lg">{compliments[selectedId].long}</motion.p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageTransition>
    );
}

export {};