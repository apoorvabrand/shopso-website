'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { industriesData, IndustrySlug } from '../../../data/industries';

export default function IndustryPage() {
    const params = useParams();
    const rawSlug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
    const slug = (rawSlug || 'fashion-apparel') as IndustrySlug;
    const content = industriesData[slug];

    if (!content) return <p>Not found</p>;

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <div className="w-full h-[65vh] relative aspect-[16/9]">
                <Image
                    src={content.image}
                    alt={content.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw,
           (max-width: 1280px) 90vw,
           1280px"
                />
                <div className="absolute top-0 left-0 w-full h-25 bg-gradient-to-b from-white/100 to-transparent z-10" />
            </div>


            <section className="text-center mb-12 mt-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {content.name}
                </h1>
                <p className="text-lg max-w-3xl mx-auto opacity-80">
                    {content.tagline}
                </p>
            </section>

            <article className="max-w-3xl mx-auto space-y-8 px-4 pb-12">
                <div className="space-y-4 border rounded-lg p-6 bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold">Overview</h2>
                    <p className="leading-relaxed">{content.description}</p>
                </div>

                <div className="space-y-6">
                    <div className="border rounded-lg p-6 bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Key Metrics & Analytics</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.metrics.map((metric, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="leading-relaxed">{metric}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border rounded-lg p-6 bg-gray-50 dark:bg-black/70 border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Platform Integrations</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.integrations.map((integration, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="leading-relaxed">{integration}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium transition"
                    >
                        Contact&nbsp;Us
                    </Link>
                </div>
            </article>
        </main>
    );
}