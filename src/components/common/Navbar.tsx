"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Sun, Moon } from "lucide-react";
import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import DemoModal from "./DemoModal";

type Dropdown = {
  title: string;
  links: { href: string; label: string }[];
};
type NavItemType = {
  name: string;
  link: string;
  dropdown?: Dropdown;
  isModal?: boolean;
};

export function MyNavbar() {
    const navItems = [
        {
            name: "Services",
            link: "/services/analytics",
            dropdown: {
                title: "Services",
                links: [
                    { href: "/services/analytics", label: "Shopify Analytics" },
                    { href: "/services/integrations", label: "Platform Integrations" },
                    { href: "/services/support", label: "Customer Success" },
                ],
            }
        },
        {
            name: "Features",
            link: "/products/shopify-integration",
            dropdown: {
                title: "Features",
                links: [
                    { href: "/products/shopify-integration", label: "Shopify Integration" },
                    { href: "/products/marketing-integrations", label: "Marketing Integrations" },
                    { href: "/products/analytics-dashboard", label: "Analytics Dashboard" },
                    { href: "/products/automated-reporting", label: "Automated Reports" },
                    { href: "/products/data-security", label: "Data Security" }
                ],
            }
        },
        { name: "Contact Us", link: "/contact" },
     
        { name: "Schedule Demo", link: "#", isModal: true },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const ThemeToggleButton = ({ className = "" }: { className?: string }) => {
        const toggleTheme = useCallback(() => {
            const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");
            
            if (!document.startViewTransition) {
                switchTheme();
                return;
            }
            
            document.startViewTransition(switchTheme);
        }, [theme, setTheme]);

        // const toggleTheme = useCallback(() => {
        //     const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");
        //     switchTheme();
        // }, [theme, setTheme]);

        return (
            <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                aria-pressed={theme === "dark"}
                className={`
                    cursor-pointer
                    relative h-8 w-16 rounded-full
                    bg-gray-200 dark:bg-gray-700
                    border-2 border-gray-300 dark:border-gray-600
                    flex items-center
                    transition-all duration-300 ease-in-out
                    hover:bg-gray-300 dark:hover:bg-gray-600
                    hover:border-gray-400 dark:hover:border-gray-500
                    focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-black
                    shadow-inner
                    ${className}
                `}
            >
                <div className="absolute inset-0 flex items-center justify-between px-1.5">

                    <Sun
                        size={12}
                        className="text-yellow-500 dark:text-yellow-400 transition-all duration-300 
                                 opacity-100 dark:opacity-40 transform scale-100 dark:scale-90"
                    />

                    <Moon
                        size={12}
                        className="text-gray-400 dark:text-blue-300 transition-all duration-300 
                                 opacity-40 dark:opacity-100 transform scale-90 dark:scale-100"
                    />
                </div>

                <div
                    className={`
                        relative h-6 w-6 rounded-full
                        bg-white dark:bg-gray-800
                        border-2 border-gray-300 dark:border-gray-500
                        shadow-lg dark:shadow-xl
                        transform transition-all duration-300 ease-in-out
                        translate-x-0.5 dark:translate-x-8
                        flex items-center justify-center
                        ring-0 hover:ring-1 hover:ring-blue-300 dark:hover:ring-blue-600
                    `}
                >
                    <div className="relative w-3 h-3 flex items-center justify-center">
                        <Sun
                            size={10}
                            className="text-yellow-500 absolute transition-all duration-300
                                     opacity-100 dark:opacity-0 transform rotate-0 dark:rotate-180 scale-100 dark:scale-75"
                        />
                        <Moon
                            size={10}
                            className="text-blue-400 absolute transition-all duration-300
                                     opacity-0 dark:opacity-100 transform rotate-180 dark:rotate-0 scale-75 dark:scale-100"
                        />
                    </div>
                </div>
            </button>
        );
    };

    return (
        <div className="relative w-full border-b-2 dark:border-gray-700">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems 
                        items={navItems} 
                        onScheduleDemo={() => setIsDemoModalOpen(true)}
                    />
                    <div className="flex items-center gap-2">
                        <ThemeToggleButton />
                    </div>
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <div className="flex items-center gap-2">
                            <ThemeToggleButton className="sm:hidden" />

                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <MobileNavItem
                                key={`mobile-link-${idx}`}
                                item={item}
                                onClose={() => setIsMobileMenuOpen(false)}
                                onScheduleDemo={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsDemoModalOpen(true);
                                }}
                            />
                        ))}

                        <div className="flex w-full flex-col gap-4 mt-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Signup
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <DemoModal 
                isOpen={isDemoModalOpen} 
                onClose={() => setIsDemoModalOpen(false)} 
            />
        </div>
    );
}

const MobileNavItem = ({ item, onClose, onScheduleDemo }: { item: NavItemType; onClose: () => void; onScheduleDemo?: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    if (item.dropdown) {
        return (
            <div className="w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative text-black dark:text-white hover:text-white hover:bg-[#7c3aed] hover:rounded-md hover:px-2 hover:py-1 transition-all duration-200 w-full text-left flex items-center justify-between"
                >
                    <span>{item.name}</span>
                    <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </button>
                {isOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                        {item.dropdown.links.map((link: { href: string; label: string }, idx: number) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                    router.push(link.href);
                                }}
                                className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-white hover:bg-[#7c3aed] hover:rounded-md hover:px-2 hover:py-1 transition-all duration-200 text-sm"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                if (item.isModal && onScheduleDemo) {
                    onScheduleDemo();
                } else {
                    onClose();
                    router.push(item.link);
                }
            }}
            className="relative w-full text-left text-black dark:text-white hover:text-white hover:bg-[#7c3aed] hover:rounded-md hover:px-2 hover:py-1 transition-all duration-200"
        >
            <span>{item.name}</span>
        </button>
    );
};