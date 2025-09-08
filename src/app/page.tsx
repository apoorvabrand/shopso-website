"use client";
import { lazy, Suspense, useMemo,useState,useEffect } from "react";
import Hero from "@/components/Home/Hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import DashboardDark from "@/assets/dashboard-dark.webp";
import DashboardLight from "@/assets/dashboard-light.webp";
import { useTheme } from "next-themes";
import CompanySlideshow from "@/components/Home/SlideShow";
// import Lenis from "lenis";
// import Script from "next/script";
import IndustrySlideshow from "@/components/Home/IndustriesSlideshow";
import BackedUpSlider from "@/components/Home/SlideShowBackedUp";
import Testimonials from "@/components/Home/Testimonials";
import DemoSection from "@/components/Home/DemoSection";
import MetricsSection from "@/components/Home/MetricsSection";
import { LocalBusinessSchema } from "@/components/seo/AdvancedSchemas";
import { CriticalRenderingPath, CoreWebVitalsOptimizer, TechnicalSchemaMarkup, MobileFirstOptimizer, AccessibilitySEO } from "@/components/seo/TechnicalSEO";

// const CountdownCard = lazy(() => import("@/components/Home/CountdownCard"));
const Faq = lazy(() => import("@/components/Home/Faq"));
const Benefits = lazy(() => import("@/components/Home/Beniefits"));
const Step1 = lazy(() => import("@/components/Home/Process/Step1"));
const Step2 = lazy(() => import("@/components/Home/Process/Step2"));
const Step3 = lazy(() => import("@/components/Home/Process/Step3"));
const Step4 = lazy(() => import("@/components/Home/Process/Step4"));
const SignUpForm = lazy(() =>
  import("@/components/Home/Form").then((module) => ({
    default: module.SignUpForm,
  }))
);
const Timeline = lazy(() => import("@/components/Home/Timeline"));

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dashboard image depends on resolved theme
  const dashboardSrc = useMemo(
    () => (resolvedTheme === "light" ? DashboardLight : DashboardDark),
    [resolvedTheme]
  );

  {
    /* Lenis smooth scroll after interactive */
  }
  // {<Script
  //   src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"
  //   strategy="afterInteractive"
  //   onLoad={() => {
  //     // Ensure Lenis exists and init safely
  //     const LenisCtor =
  //       (window as typeof window & { Lenis?: new (opts?: { duration?: number; easing?: string; smooth?: boolean }) => { raf: (t: number) => void; destroy?: () => void } }).Lenis;

  //     if (!LenisCtor) return;

  //     const lenis = new LenisCtor();
  //     let rafId = 0;
  //     const raf = (time: number) => {
  //       lenis.raf(time);
  //       rafId = requestAnimationFrame(raf);
  //     };
  //     rafId = requestAnimationFrame(raf);

  //     // Stop the loop when page is hidden/unloaded to avoid leaks
  //     const stop = () => cancelAnimationFrame(rafId);
  //     window.addEventListener("pagehide", stop, { once: true });
  //     document.addEventListener("visibilitychange", () => {
  //       if (document.hidden) cancelAnimationFrame(rafId);
  //       else rafId = requestAnimationFrame(raf);
  //     });
  //   }}
  // /> }
  return (
    <main className="relative overflow-hidden min-h-screen dark:bg-black dark:text-white text-black">
      <div>
        <div>
        <Hero />

        </div>

        {/* <IndustrySlideshow /> */}

        {/* Dashboard showcase */}
        {/* <div className="px-4 sm:px-6 pb-0 flex justify-center relative mt-24">
          <div
            className="w-full sm:w-[90%] md:w-[80%] mb-16 h-full relative rounded-lg overflow-hidden"
            style={{
              boxShadow: "0 0 40px rgba(128, 0, 128, 0.25)",
            }}
          >
            <div className="relative w-full h-full">
              {mounted && (
                <Image
                  key={resolvedTheme}
                  src={dashboardSrc}
                  alt="ShopSo dashboard"
                  className="w-full h-full object-cover select-none rounded-t-lg shadow-lg"
                  placeholder="blur"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              )}
              <div className="absolute bottom-0 left-0 w-full h-[37%] sm:h-[15%] pointer-events-none bg-gradient-to-t from-white via-white/90 via-white/70 via-white/40 to-transparent dark:from-black dark:via-black/90 dark:via-black/70 dark:via-black/40 dark:to-transparent rounded-t-lg" />
            </div>
          </div>
        </div> */}
        {/* <div className="px-4 py-0 sm:py-0 md:py-8"> */}
        {/* <Suspense fallback={<div className="h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>}> */}
        {/* <CountdownCard /> */}
        {/* </Suspense> */}
        {/* </div> */}

        {/* <div className="text-center max-w-3xl mx-auto px-4 space-y-4 mb-4 mt-32">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Why ShopSo?</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Stop guessing. Start growing.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Get the complete picture of your Shopify business performance.
            Track what matters, optimize what works, and scale what converts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">+35%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average ROAS improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">4hrs</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Real-time data sync</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Shopify stores trust us</div>
            </div>
          </div>
        </div> */}

        <MetricsSection />
        
        <DemoSection />
        
        <div>
          {/* <Suspense fallback={<div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>}> */}
          <Timeline />
          {/* </Suspense> */}
        </div>

        <div className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Process</span>
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            Connect, Analyze, and Optimize Your Shopify Business
          </h2>
          <p className="mt-2 max-w-2xl mx-auto">
            <strong>ShopSo</strong> unifies your <a href="/products/shopify-analytics" className="text-[#7c3aed] hover:underline">Shopify store</a> with <a href="/products/meta-ads" className="text-[#7c3aed] hover:underline">Meta Ads</a>, <a href="/products/google-ads" className="text-[#7c3aed] hover:underline">Google Ads</a>, and <a href="/products/klaviyo" className="text-[#7c3aed] hover:underline">Klaviyo</a> data. 
            Track <abbr title="Return on Advertising Spend">ROAS</abbr>, monitor customer lifetime value, and receive <a href="/products/automated-reports" className="text-[#7c3aed] hover:underline">automated daily reports</a> 
            that help you make profitable decisions faster.
          </p>
        </div>

        <div className="mt-6 px-8 flex flex-col items-center lg:px-4 space-y-4 sm:space-y-6  lg:ml-0">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl items-center justify-center">
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step1 />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step2 />
            </Suspense>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center items-center">
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step3 />
            </Suspense>
            <Suspense
              fallback={
                <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex-1"></div>
              }
            >
              <Step4 />
            </Suspense>
          </div>
        </div>




        <div className="mt-6 sm:mt-8 md:mt-8">
          {/* <Suspense fallback={<div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>}> */}
          <Benefits />
          {/* </Suspense> */}
        </div>

        


        {/* <div className="relative mt-8 sm:mt-12 md:mt-12 text-center">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Our Clients</span>
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            Trusted by Growing Shopify Merchants
          </h1>
          <p className="mt-2 max-w-xl mx-auto">
            Join hundreds of Shopify store owners who use ShopSo to understand their
            customers, optimize marketing spend, and grow their business profitably.
          </p>
          <CompanySlideshow />
        </div> */}

        {/* <Testimonials /> */}
        
        <div className="mt-6 sm:mt-8 md:mt-8">
          {/* <Suspense fallback={<div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>}> */}
          <Faq />
          {/* </Suspense> */}
        </div>
        <div className="p-4 md:p-8">
          <TextHoverEffect text="shopso" />
        </div>
        <div>
          {/* <Suspense fallback={<div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg mx-4"></div>}>
        <SignUpForm />
          </Suspense> */}
          <SignUpForm />
        </div>
      </div>
      
      {/* Advanced SEO Components */}
      <LocalBusinessSchema />
      <TechnicalSchemaMarkup />
      <CriticalRenderingPath />
      <CoreWebVitalsOptimizer />
      <MobileFirstOptimizer />
      <AccessibilitySEO />
    </main>
  );
}
