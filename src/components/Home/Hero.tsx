"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { WavyBackground } from "../ui/wavy-background";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        let animationFrameId: number;
        const handleMouseMove = (e: MouseEvent) => {
            // Throttle mouse move events using requestAnimationFrame
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100,
                });
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.2, delay },
    });

    return (
        <WavyBackground containerClassName="relative">
            <section
                ref={ref}
                className="relative flex flex-col min-h-[100dvh] items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-47 lg:pb-20"
            >
                {/* Enhanced Background Effects */}
                <motion.div
                    className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,117,74,0.15), transparent 60%)`,
                    }}
                />
                
                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                    <motion.div
                        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#7c3aed]/20 to-[#d4e9e2]/20 rounded-full blur-xl"
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#d4e9e2]/30 to-[#7c3aed]/20 rounded-full blur-xl"
                        animate={{
                            y: [20, -20, 20],
                            x: [10, -10, 10],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                    <motion.div
                        className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-[#7c3aed]/10 to-[#d4e9e2]/30 rounded-full blur-xl"
                        animate={{
                            y: [-15, 15, -15],
                            x: [15, -15, 15],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>

                <div className="relative z-20 w-full max-w-7xl flex flex-col items-center justify-center text-center mx-auto px-4">

                    {/* Enhanced Badge with Icon */}
                    {/* <motion.div {...fadeUp(0)} className="mb-6 sm:mb-8">
                        <motion.span
                            className="inline-flex items-center overflow-hidden rounded-full border border-[#7c3aed]/20 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-[#7c3aed]/20 transition-all duration-300 group cursor-pointer bg-white/80 dark:bg-black/60 dark:border-white/20"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#d4e9e2] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-lg flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" />
                                New
                            </span>
                            <span className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold text-gray-800 group-hover:text-[#7c3aed] transition-colors duration-300 dark:text-white/90 dark:group-hover:text-[#7c3aed]">
                                Trusted by 500+ Shopify merchants
                            </span>
                        </motion.span>
                    </motion.div> */}

                    {/* Enhanced Main Headline */}
                    <motion.div
                        className="text-center mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-black leading-[0.9] tracking-tight mb-4">
                            <span className="py-12  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-gray-200">
                                Grow profitable
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-gray-200">
                                Shopify stores
                            </span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 mt-6">
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#7c3aed]/10 rounded-full">
                                <TrendingUp className="w-5 h-5 text-[#7c3aed]" />
                                <span className="text-sm font-semibold text-[#7c3aed]">Data-driven insights</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-[#d4e9e2]/50 rounded-full">
                                <Zap className="w-5 h-5 text-[#7c3aed]" />
                                <span className="text-sm font-semibold text-[#7c3aed]">Real-time analytics</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Subtitle */}
                    <motion.div 
                        {...fadeUp(0.3)} 
                        className="mt-8 mb-8" 
                        style={{ willChange: 'transform' }}
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            The all-in-one analytics platform that connects
                            <span className="text-[#7c3aed] font-bold"> Shopify, Meta Ads, Google Ads, and Klaviyo </span>
                            in one beautiful dashboard
                        </h2>
                    </motion.div>

                    {/* Enhanced Description */}
                    {/* <motion.p
                        {...fadeUp(0.4)}
                        className="mt-6 mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-medium"
                    >
                        Track ROAS, optimize ad spend, and grow revenue with automated insights and reports.
                        <span className="block mt-2 text-base sm:text-lg text-gray-500 dark:text-gray-500">
                            Join 500+ merchants who've increased their ROAS by 35% on average
                        </span>
                    </motion.p> */}

                    {/* Enhanced CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.button
                            className="relative overflow-hidden px-8 py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#7c3aed]/30 transition-all duration-300 flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Install Now
                            </span>
                        </motion.button>
                        <motion.button
                            className="relative overflow-hidden px-8 py-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-[#7c3aed]/20 hover:border-[#7c3aed]/40 text-[#7c3aed] hover:text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#7c3aed]/20 transition-all duration-300 flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute inset-0 bg-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                View Live Demo
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Enhanced Trust Indicators */}
                    {/* <motion.div
                        {...fadeUp(0.6)}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-gray-600 dark:text-gray-400"
                    >
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-full border border-[#7c3aed]/10">
                            <div className="w-3 h-3 bg-gradient-to-r from-[#7c3aed] to-[#d4e9e2] rounded-full animate-pulse" />
                            <span className="font-semibold">500+ stores trust ShopSo</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-full border border-[#7c3aed]/10">
                            <div className="w-3 h-3 bg-gradient-to-r from-[#d4e9e2] to-[#7c3aed] rounded-full animate-pulse" />
                            <span className="font-semibold">Get started today • No setup fees</span>
                        </div>
                    </motion.div>
                     */}
                    {/* Stats Row */}
                    {/* <motion.div
                        {...fadeUp(0.8)}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-[#7c3aed] mb-2">+35%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Average ROAS improvement</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-[#7c3aed] mb-2">4hrs</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Real-time data sync</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-[#7c3aed] mb-2">500+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Happy merchants</div>
                        </div>
                    </motion.div> */}
                </div>
            </section>
        </WavyBackground>
    );
}