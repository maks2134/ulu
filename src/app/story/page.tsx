"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const StarryBackground = () => (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            const style = {
                width: `${size}px`, height: `${size}px`, top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 4}s`,
            };
            return <div key={i} className="star" style={style} />;
        })}
    </div>
);

const storyItems = [
    {
        title: "Глобальный позор от меня",
        text: "Обосрался, не потянул, была и есть слишком крутая, и я был мелким додстером, и получилась неприятная ситуация.",
    },
    {
        title: "Возращение",
        text: "Один звонок, и вспомнив твои мысли, голос и повадки, понял какой же фигней страдал год. Осознал, что ты самая крутая и интересная девушка, которую я только знаю.",
    },
    {
        title: "Будущее",
        text: "Дальше только самое лучшее)))",
    },
];

export default function StoryPage() {
    return (
        <PageTransition>
            <div className="relative min-h-screen px-4 sm:px-6 py-24 pt-32 overflow-hidden">
                <StarryBackground />
                <div className="relative z-10 container mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-center mb-24">Наша История</h1>

                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-[#5055b1]/50 md:-translate-x-1/2"></div>

                        {storyItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                                className="relative mb-12"
                            >
                                {/* Кружок на линии */}
                                <div className="absolute left-4 top-2 md:left-1/2 z-20 transform -translate-x-1/2">
                                    <div className="bg-[#d8b4fe] shadow-xl w-8 h-8 rounded-full flex items-center justify-center">
                                        <span className="font-semibold text-lg text-[#1a1d47]">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Контентный блок */}
                                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:ml-auto' : 'md:pl-8 md:mr-auto'}`}>
                                    <div className={`bg-[#5055b1]/50 rounded-lg shadow-xl p-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                                        <p className="text-sm leading-snug tracking-wide text-gray-300">{item.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}