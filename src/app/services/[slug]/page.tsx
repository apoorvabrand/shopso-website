'use client';

import Link from 'next/link';
import { servicesData } from '../../../data/serviceData';
import { useParams } from 'next/navigation';

export default function ServicesPage() {
    const params = useParams();
    const slug = (params?.slug || 'shopify-analytics') as string;
    
    // Handle legacy URLs and redirects
    const slugMap: Record<string, keyof typeof servicesData> = {
        'analytics': 'shopify-analytics',
        'integrations': 'platform-integrations',
        'support': 'customer-support',
        'shopify-analytics': 'shopify-analytics',
        'platform-integrations': 'platform-integrations',
        'customer-support': 'customer-support'
    };
    
    const mappedSlug = slugMap[slug] || 'shopify-analytics';
    const currentService = servicesData[mappedSlug];

    if (!currentService) {
        return (
            <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-4">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">Service Not Found</h1>
                    <p className="text-lg opacity-80">The service you're looking for doesn't exist.</p>
                    <div className="space-y-2">
                        <p className="text-sm">Available services:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Link href="/services/shopify-analytics" className="px-3 py-1 bg-[#7c3aed] text-white rounded text-sm hover:bg-[#6d28d9]">
                                Shopify Analytics
                            </Link>
                            <Link href="/services/platform-integrations" className="px-3 py-1 bg-[#7c3aed] text-white rounded text-sm hover:bg-[#6d28d9]">
                                Platform Integrations
                            </Link>
                            <Link href="/contact" className="px-3 py-1 bg-[#7c3aed] text-white rounded text-sm hover:bg-[#6d28d9]">
                                Customer Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 lg:px-16 py-10 sm:py-12 lg:py-16">
            <main className="max-w-7xl mx-auto mt-30">

                <section className="text-center mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mt-16 font-bold mb-4 sm:mb-6 leading-tight">
                        {currentService.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                        {currentService.abstract}
                    </p>
                </section>

                <section className="rounded-lg p-4 sm:p-6 mb-10 sm:mb-12 border bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                        {currentService.introduction.title}
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed opacity-90">
                        {currentService.introduction.content}
                    </p>
                </section>

                <section className="mb-10 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Our Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentService.services.map((service) => (
                            <div
                                key={service.id}
                                className="p-4 sm:p-6 rounded-lg border bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
                                    <span className="text-2xl sm:text-3xl">{service.icon}</span>
                                    <div>
                                        <span className="text-xs font-medium block">{service.id}</span>
                                        <h4 className="text-base sm:text-lg font-bold">{service.title}</h4>
                                    </div>
                                </div>
                                <p className="text-sm mb-2 opacity-90">{service.description}</p>
                                <p className="text-sm opacity-80">{service.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-lg p-4 sm:p-6 mb-10 sm:mb-12 border bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                        {currentService.partnership.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {currentService.partnership.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="text-green-500 font-bold">✓</span>
                                <p className="text-sm leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-lg p-4 sm:p-6 border bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">What Next?</h3>
                    <p className="text-base sm:text-lg leading-relaxed opacity-90">
                        {currentService.conclusion}
                    </p>
                </section>

                <section className="text-center mt-10 sm:mt-12">
                    <Link
                        href="/contact"
                        className="inline-block px-6 sm:px-8 py-3 rounded-lg font-medium text-base sm:text-lg bg-black dark:bg-white text-white dark:text-black transition-all"
                    >
                        Contact ShopSo Today
                    </Link>
                </section>
            </main>
        </div>
    );
}
