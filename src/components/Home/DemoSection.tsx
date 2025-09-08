"use client";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

export default function DemoSection() {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Try ShopSo</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See ShopSo in action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with ShopSo today and see how we can transform your Shopify analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* Mock Dashboard Header */}
              <div className="bg-gradient-to-r from-[#7c3aed] to-[#d4e9e2] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">ShopSo Dashboard</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Revenue (30d)</div>
                    <div className="text-2xl font-bold text-[#7c3aed]">$24,580</div>
                    <div className="text-sm text-green-600">+12.5% vs last month</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">ROAS</div>
                    <div className="text-2xl font-bold text-[#7c3aed]">4.2x</div>
                    <div className="text-sm text-green-600">+0.8x improvement</div>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="bg-gray-50 dark:bg-gray-800 h-32 rounded-lg flex items-end justify-center p-4">
                  <div className="flex items-end space-x-2 h-full">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-[#7c3aed] to-[#d4e9e2] rounded-t"
                        style={{ height: `${height}%`, width: '12px' }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white dark:bg-gray-900 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200">
                <Play className="w-8 h-8 text-[#7c3aed] ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get started in minutes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Connect your Shopify store</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Secure OAuth connection in under 2 minutes
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Add marketing integrations</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Meta Ads, Google Ads, Klaviyo, and GA4
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Get automated insights</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Daily reports to Slack and email
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-[#7c3aed] to-[#d4e9e2] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#9932cc] hover:to-[#7c3aed] transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Install Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
