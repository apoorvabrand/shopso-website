import React from 'react';
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-black px-4 text-center space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge
                    className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#7c3aed]/30 transition
"
                >
                    <span className="text-sm font-semibold">FAQ&apos;s</span>
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-900 dark:text-white text-3xl lg:text-5xl font-bold max-w-2xl font-geist"
            >
                We&apos;ve Got the Answers You&apos;re Looking For
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-gray-600 dark:text-white/60 max-w-xl"
            >
                Quick answers to your Shopify analytics and integration questions.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative w-full max-w-2xl space-y-3 p-6 rounded-xl z-10 overflow-hidden bg-gray-100/20 dark:bg-black/20 backdrop-blur-md border border-gray-200/20 dark:border-white/10 mt-25"
            >
                <motion.div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-transparent opacity-20 blur-3xl animate-pulse"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.2, 0.15],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />


                <Accordion type="single" collapsible className="space-y-2 relative z-10">
                    <AccordionItem value="item-1" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            How does ShpSo connect to my Shopify store?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            ShpSo uses secure OAuth authentication to connect to your Shopify store. Simply authorize the connection 
                            and we'll automatically import 30 days of historical data, then sync new data every 4 hours with real-time updates.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            What marketing platforms can I integrate with ShpSo?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            ShpSo integrates with Meta Ads (Facebook/Instagram), Google Ads, Google Analytics 4, and Klaviyo. 
                            This gives you a unified view of your marketing performance, ROAS, and customer acquisition costs across all channels.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            How do I get started with ShpSo?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            Getting started is simple! Just sign up for an account, connect your Shopify store using secure OAuth authentication, 
                            and optionally integrate your marketing channels. You'll have access to your analytics dashboard within minutes.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            What kind of reports does ShpSo provide?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            ShpSo provides automated daily and weekly reports via Slack or email, including sales summaries, ROAS analysis, 
                            top products, customer retention metrics, and email campaign performance. All reports are customizable and actionable.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            Is my data secure with ShpSo?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            Yes, we use enterprise-grade security with encrypted data storage, secure OAuth authentication, 
                            and GDPR compliance. You maintain full control over your data with transparent handling practices.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="rounded-xl border border-gray-200/20 dark:border-white/10 shadow-inner overflow-hidden bg-gray-100/30 dark:bg-black/30">
                        <AccordionTrigger className="text-gray-900 dark:text-white px-6 py-4 text-left font-medium text-base hover:no-underline">
                            Do I need technical expertise to use ShpSo?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-white/70 text-sm">
                            Not at all! ShpSo is designed for busy store owners who want insights without complexity. 
                            Our intuitive dashboard and automated reports mean you don't need to be a data analyst to understand your business performance.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.div>

        </div>
    );
};

export default Faq;