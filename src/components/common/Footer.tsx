"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import SuccessModal from "./SuccessModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");
  const [modalType, setModalType] = React.useState<"success" | "error">("success");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    fetch("/api/newsletter/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(() => {
        setModalMessage("Successfully subscribed to newsletter!");
        setModalType("success");
        setModalOpen(true);
      })
      .catch((err) => {
        console.error("Subscription error:", err);
        setModalMessage("Subscription failed. Please try again.");
        setModalType("error");
        setModalOpen(true);
      });
  }

  return (
    <footer className="w-full bg-white dark:bg-black text-white dark:text-white relative overflow-hidden border-t border-black/10 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.08, scale: 1.3 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-24 sm:h-32 md:h-48 bg-gradient-to-b from-[#7c3aed]/20 to-transparent pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mb-8">
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ShopSo Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-[#7c3aed]">
                ShopSo
              </span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Get the latest <strong>Shopify analytics insights</strong> and <em>e-commerce optimization tips</em> delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="hidden sm:flex items-center space-x-2">
              <Input
                type="email"
                name="email"
                placeholder="name@shopso.com"
                className="bg-black/10 max-w-[30%] dark:bg-white/10 border border-black/20 dark:border-white/20 text-white dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 text-sm"
                required
              />
              <Button type="submit" className="bg-[#7c3aed] hover:bg-[#d4e9e2] hover:text-[#7c3aed] text-white px-3 py-2 whitespace-nowrap">
                <Mail className="w-4 h-4 mr-1" /> Register
              </Button>
            </form>

            <form onSubmit={handleSubmit} className="sm:hidden space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="name@shopso.com"
                className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-white dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 text-sm w-full"
                required
              />
              <Button className="bg-[#7c3aed] hover:bg-[#d4e9e2] hover:text-[#7c3aed] text-white w-full">
                <Mail className="w-4 h-4 mr-2" /> Register
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">Services</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 sm:space-y-1.5">
                {[
                  { href: "/services/shopify-analytics", label: "Shopify Analytics", title: "Advanced Shopify store analytics and reporting" },
                  { href: "/services/platform-integrations", label: "Platform Integrations", title: "Connect Meta Ads, Google Ads, and Klaviyo" },
                  { href: "/contact", label: "Customer Success", title: "Expert support for e-commerce analytics" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href} 
                      className="hover:text-[#7c3aed] block transition-colors duration-200" 
                      title={link.title}
                      aria-label={link.title}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">Features</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 sm:space-y-1.5">
                {[
                  { href: "/products/shopify-analytics", label: "Shopify Integration", title: "Seamless Shopify store integration for analytics" },
                  { href: "/products/marketing-integrations", label: "Marketing Integrations", title: "Connect Meta Ads, Google Ads, Klaviyo integrations" },
                  { href: "/products/analytics-dashboard", label: "Analytics Dashboard", title: "Real-time e-commerce analytics dashboard" },
                  { href: "/products/automated-reports", label: "Automated Reports", title: "Automated ROAS and performance reporting" },
                  { href: "/products/data-security", label: "Data Security", title: "Enterprise-grade data security for e-commerce" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      href={link.href} 
                      className="hover:text-[#7c3aed] block transition-colors duration-200" 
                      title={link.title}
                      aria-label={link.title}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">Company</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 sm:space-y-1.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/aboutus", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-[#7c3aed] block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-sm sm:text-base">Legal</h4>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 sm:space-y-1.5">
                {[
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms-of-service", label: "Terms of Service" },
                  { href: "/contact", label: "Support" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-[#7c3aed] block">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-500 py-2 px-4">
        <p>© ShopSo Pvt. Ltd. 2025. All rights reserved.</p>
      </div>

      <SuccessModal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </footer>
  );
}