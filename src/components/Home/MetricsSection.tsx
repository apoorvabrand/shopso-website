"use client";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Clock, DollarSign, Users, BarChart3 } from "lucide-react";

export default function MetricsSection() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "+35%",
      label: "Average ROAS improvement",
      description: "Merchants see significant return on ad spend improvements within 60 days"
    },
    {
      icon: DollarSign,
      value: "$25K",
      label: "Average ad spend saved",
      description: "Better attribution helps eliminate wasted marketing budget"
    },
    {
      icon: Clock,
      value: "10hrs",
      label: "Saved per week",
      description: "Automated reports eliminate manual data gathering and analysis"
    },
    {
      icon: Target,
      value: "95%",
      label: "Attribution accuracy",
      description: "Know exactly which campaigns and channels drive real revenue"
    },
    {
      icon: Users,
      value: "+25%",
      label: "Customer retention",
      description: "Better customer insights lead to improved retention strategies"
    },
    {
      icon: BarChart3,
      value: "4hrs",
      label: "Real-time sync",
      description: "Always have up-to-date data across all your marketing channels"
    }
  ];

  const goals = [
    {
      title: "Maximize Profit Margins",
      description: "Identify your most profitable products and customers",
      benefit: "Increase profit margins by 20-40%",
      color: "from-[#7c3aed] to-[#d4e9e2]"
    },
    {
      title: "Reduce Acquisition Costs",
      description: "Optimize ad spend across Meta, Google, and other channels",
      benefit: "Cut CAC by 30% on average",
      color: "from-[#9932cc] to-[#7c3aed]"
    },
    {
      title: "Increase Customer LTV",
      description: "Understand customer behavior and improve retention",
      benefit: "Boost LTV by 25% with better insights",
      color: "from-[#7c3aed] to-[#d4e9e2]"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Metrics Grid */}
        <div className="text-center mb-16">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Proven Results</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real impact for growing Shopify stores
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Join hundreds of merchants who've transformed their business with data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-[#7c3aed]/30"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#7c3aed]/10 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-[#7c3aed]" />
                  </div>
                  <div className="text-3xl font-bold text-[#7c3aed]">
                    {metric.value}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Goals Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achieve your e-commerce goals
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you're optimizing for profit, growth, or efficiency, ShopSo provides the insights you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${goal.color}`}></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {goal.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {goal.description}
              </p>
              <div className="bg-[#7c3aed]/10 rounded-lg p-3">
                <div className="text-sm font-semibold text-[#7c3aed]">
                  {goal.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
