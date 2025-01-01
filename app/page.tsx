import { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WaitlistBottom from '@/components/WaitlistBottom'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Screenshots from '@/components/Screenshots'

export const metadata: Metadata = {
    title: 'Staybase - AI-Powered Customer Retention Platform',
    description: 'Staybase helps e-commerce businesses monitor, analyze, and improve customer retention through AI-powered insights and automated campaigns.',
    keywords: ['customer retention', 'e-commerce', 'AI', 'analytics', 'Shopify integration'],
    authors: [{ name: 'Staybase Team' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://staybase.tech',
        siteName: 'Staybase',
        title: 'Staybase - Revolutionize Your Customer Retention',
        description: 'AI-powered customer retention platform for e-commerce businesses. Retain customers, grow revenue.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Staybase - AI-Powered Customer Retention',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Staybase - AI-Powered Customer Retention',
        description: 'Revolutionize your e-commerce customer retention with AI-powered insights and automated campaigns.',
        images: ['https://staybase.tech/opengraph-image.png'],
        creator: '@staybase',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-site-verification-code',
        yandex: 'your-yandex-verification-code',
    },
}

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 font-mono text-zinc-400">
            <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMCAwaDJ2MkgweiIvPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
            <div className="relative px-6 md:px-8 lg:px-12">
                <Header />
                <Hero />
                <Features />
                <Screenshots />
                <WaitlistBottom />
                <Footer />
            </div>
            <Script id="structured-data" type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Staybase",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered customer retention platform for e-commerce businesses",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1024"
            }
          }
        `}
            </Script>
        </div>
    )
}


