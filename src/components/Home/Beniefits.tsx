import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import {
    ShoppingBag,
    TrendingUp,
    Clock,
    DollarSign,
    PieChart,
    BarChart3,
} from "lucide-react";

const benefits = [
    {
        icon: <ShoppingBag className="w-6 h-6 text-black dark:text-white" />,
        title: "Unified Shopify Analytics",
        description:
            "Connect your Shopify store with all marketing channels in one dashboard. Track orders, revenue, and customer data in real-time.",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-black dark:text-white" />,
        title: "Marketing Performance Tracking",
        description:
            "Monitor ROAS, ad spend, and conversions across Meta Ads, Google Ads, and email campaigns to optimize your marketing budget.",
    },
    {
        icon: <Clock className="w-6 h-6 text-black dark:text-white" />,
        title: "Automated Daily Reports",
        description:
            "Receive automated daily and weekly analytics reports via Slack or email, so you never miss important business trends.",
    },
    {
        icon: <DollarSign className="w-6 h-6 text-black dark:text-white" />,
        title: "Revenue Optimization",
        description:
            "Track key metrics like AOV, LTV, and CAC to identify opportunities for increasing profitability and customer value.",
    },
    {
        icon: <PieChart className="w-6 h-6 text-black dark:text-white" />,
        title: "Customer Insights",
        description:
            "Analyze customer lifetime value, retention rates, and purchase patterns to make data-driven decisions about your store.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-black dark:text-white" />,
        title: "Simple Setup & Scaling",
        description:
            "Easy OAuth integration with Shopify and marketing tools. Simple setup process that scales seamlessly as your business grows.",
    },
];

const Benefits = () => {
    return (
        <section className="relative bg-white dark:bg-black py-20 px-14 text-gray-900 dark:text-white flex flex-col items-center overflow-hidden">
            {/* Green fog/shadow effect */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7c3aed] rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <Badge
                className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#7c3aed]/30 transition
"
            >
                <span className="text-sm font-semibold">Benefits</span>
            </Badge>
            <h1 className={`font-bold text-2xl mb-8 relative z-10`}>
                The Key Benefits of ShpSo for Your Shopify Store
            </h1>
            <h4 className="relative z-10 mb-6">Discover how ShpSo simplifies Shopify analytics, unifies your marketing data, and drives growth with actionable insights and automated reporting.</h4>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10"
            >
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#7c3aed]/10 transition-all duration-300 ease-in-out"
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed]/60 via-[#7c3aed]/80 to-[#7c3aed]/60" />
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Benefits;