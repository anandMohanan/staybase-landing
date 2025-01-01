import { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WaitlistBottom from '@/components/WaitlistBottom'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Screenshots from '@/components/Screenshots'

export const metadata: Metadata = {
    title: 'Staybase - Home | AI-Powered Customer Retention',
    description: 'Discover how Staybase can revolutionize your e-commerce customer retention with AI-powered insights and automated campaigns.',
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


