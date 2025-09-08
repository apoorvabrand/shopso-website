"use client";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ShopSo helped us identify our best-performing campaigns and optimize our Meta Ads spend. Our ROAS improved by 40% in just 2 months.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "Fashion Forward",
      rating: 5,
      metric: "+40% ROAS"
    },
    {
      quote: "Finally, all our marketing data in one place. The automated Slack reports save us hours every week and keep our team aligned.",
      author: "Mike Rodriguez",
      role: "E-commerce Manager", 
      company: "Tech Gadgets Pro",
      rating: 5,
      metric: "10hrs saved/week"
    },
    {
      quote: "The customer analytics helped us understand our retention patterns. We increased repeat purchases by 25% with targeted email campaigns.",
      author: "Emma Thompson",
      role: "Founder",
      company: "Wellness Essentials",
      rating: 5,
      metric: "+25% retention"
    },
    {
      quote: "ShopSo's integration with Klaviyo and Meta Ads gave us the attribution clarity we needed. No more guessing which campaigns actually work.",
      author: "David Park",
      role: "Growth Lead",
      company: "Home & Garden Co",
      rating: 5,
      metric: "95% attribution accuracy"
    },
    {
      quote: "ShpSo is perfect for growing stores. The platform scales beautifully with our business needs. The ROI has been incredible.",
      author: "Lisa Wang",
      role: "Store Owner",
      company: "Beauty Boutique",
      rating: 5,
      metric: "300% ROI"
    },
    {
      quote: "Setup took less than 30 minutes. Within a day, we had insights that changed how we allocate our marketing budget.",
      author: "James Miller",
      role: "Marketing Manager",
      company: "Sports Gear Plus",
      rating: 5,
      metric: "30min setup"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Customer Success</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Shopify merchants love ShopSo
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join hundreds of growing stores that use ShopSo to make data-driven decisions and scale profitably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#7c3aed] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Metric Badge */}
              <div className="mb-4">
                <Badge className="bg-[#7c3aed]/10 text-[#7c3aed] border-[#7c3aed]/20">
                  {testimonial.metric}
                </Badge>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">Shopify</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Klaviyo</div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Trusted integrations with all major e-commerce platforms
          </p>
        </div>
      </div>
    </div>
  );
}
