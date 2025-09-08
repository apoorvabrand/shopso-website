'use client';

import React, { useEffect } from 'react';
// import Image from 'next/image';
import NextLink from 'next/link';
import {
    ShoppingBag,
    BarChart3,
    Zap,
    TrendingUp,
    Target,
    Rocket,
    ArrowRight,
} from 'lucide-react';
// import logo from '../../assets/logo.png';
import VennDiagram from './VennDiagram';

const Timeline = () => {
    // const [mounted, setMounted] = useState(false);

    useEffect(() => {
    }, []);

    const steps = [
        {
            title: 'Connect Store',
            icon: ShoppingBag,
            slug: 'connect-store',
            description: 'Link your Shopify store with one-click OAuth integration',
        },
        {
            title: 'Sync Data',
            icon: Zap,
            slug: 'sync-data',
            description: 'Automatically sync orders, products, and customer data in real-time',
        },
        {
            title: 'Add Platforms',
            icon: BarChart3,
            slug: 'add-platforms',
            description: 'Connect Meta Ads, Google Ads, Klaviyo, and GA4 for complete visibility',
        },
        {
            title: 'Track ROAS',
            icon: Target,
            slug: 'track-roas',
            description: 'Monitor return on ad spend across all marketing channels',
        },
        {
            title: 'Get Insights',
            icon: TrendingUp,
            slug: 'get-insights',
            description: 'Receive automated reports and actionable business insights',
        },
        {
            title: 'Scale Revenue',
            icon: Rocket,
            slug: 'scale-revenue',
            description: 'Optimize campaigns and grow your Shopify store profitably',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-black dark:to-black flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        How ShopSo Works
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        From Shopify store connection to profitable growth - our platform simplifies e-commerce analytics in 6 simple steps
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <VennDiagram />
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <NextLink href={`/timeline/${step.slug}`} key={step.slug}>
                                    <div
                                        className={`group relative bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-white/20 dark:hover:bg-black/20`}
                                    >
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#d4e9e2] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Step {index + 1} - {step.description}
                                            </p>
                                        </div>

                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 text-gray-900 dark:text-white" />
                                        </div>

                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#d4e9e2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </NextLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;