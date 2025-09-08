import Head from 'next/head';
import { generatePageMetadata } from '@/lib/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  path,
  image,
  imageAlt,
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const metadata = generatePageMetadata({
    title,
    description,
    path,
    image,
    imageAlt,
    noIndex,
  });

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="robots" content={metadata.robots} />
      
      {/* Open Graph */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
      <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
      <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      <meta property="og:locale" content={metadata.openGraph.locale} />
      <meta property="og:type" content={metadata.openGraph.type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />
      <meta name="twitter:site" content={metadata.twitter.site} />
      <meta name="twitter:creator" content={metadata.twitter.creator} />
      
      {/* Canonical */}
      <link rel="canonical" href={metadata.alternates.canonical} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
