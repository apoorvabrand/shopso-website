'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
}

export default function BreadcrumbNavigation({ 
  items, 
  showHome = true 
}: BreadcrumbNavigationProps) {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    if (showHome) {
      breadcrumbs.push({
        label: 'Home',
        href: '/',
        isCurrentPage: pathname === '/'
      });
    }
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: isLast
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();
  
  // Don't show breadcrumbs on homepage unless explicitly provided
  if (pathname === '/' && !items) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://shopso.com${item.href}`
    }))
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb navigation"
        className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 py-2 px-4 bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-200/50 dark:border-gray-700/50"
      >
        <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbItems.map((item, index) => (
            <li 
              key={item.href}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" aria-hidden="true" />
              )}
              
              {item.isCurrentPage ? (
                <span 
                  className="font-medium text-[#7c3aed] flex items-center"
                  aria-current="page"
                  itemProp="name"
                >
                  {index === 0 && showHome && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#7c3aed] transition-colors duration-200 flex items-center"
                  itemProp="item"
                >
                  <span itemProp="name">
                    {index === 0 && showHome && <Home className="w-4 h-4 mr-1" />}
                    {item.label}
                  </span>
                </Link>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// Specialized breadcrumb components for different page types
export function ProductBreadcrumb({ productName }: { productName: string }) {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: productName, href: '#', isCurrentPage: true }
  ];
  
  return <BreadcrumbNavigation items={items} showHome={false} />;
}

export function ServiceBreadcrumb({ serviceName }: { serviceName: string }) {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: serviceName, href: '#', isCurrentPage: true }
  ];
  
  return <BreadcrumbNavigation items={items} showHome={false} />;
}

export function BlogBreadcrumb({ postTitle }: { postTitle?: string }) {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog', isCurrentPage: !postTitle }
  ];
  
  if (postTitle) {
    items.push({ label: postTitle, href: '#', isCurrentPage: true });
  }
  
  return <BreadcrumbNavigation items={items} showHome={false} />;
}
