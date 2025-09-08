'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Animation */}
        <div className="relative">
          <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#7c3aed] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered an incorrect URL.
          </p>
        </div>

        {/* Suggested Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            What you can do:
          </h3>
          <div className="grid gap-3">
            <Link href="/" className="group">
              <Button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            
            <Link href="/contact" className="group">
              <Button variant="outline" className="w-full border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white">
                <Search className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center justify-center w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-[#7c3aed] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Pages
          </h3>
          <div className="grid gap-2 text-sm">
            <Link 
              href="/products/shopify-analytics" 
              className="text-[#7c3aed] hover:underline"
            >
              Shopify Analytics Platform
            </Link>
            <Link 
              href="/aboutus" 
              className="text-[#7c3aed] hover:underline"
            >
              About ShopSo
            </Link>
            <Link 
              href="/blog" 
              className="text-[#7c3aed] hover:underline"
            >
              Blog & Resources
            </Link>
            <Link 
              href="/contact" 
              className="text-[#7c3aed] hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* SEO Hidden Content for Common Searches */}
        <div className="sr-only">
          <p>
            Looking for Shopify analytics? Visit our main analytics platform page. 
            Need help with ROAS tracking, Meta Ads integration, Google Ads tracking, 
            or Klaviyo integration? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
