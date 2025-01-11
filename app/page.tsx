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
        <div className="min-h-screen bg-zinc-950 text-zinc-400">
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMCAwaDJ2MkgweiIvPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
            
            {/* Main Content */}
            <div className="relative">
                {/* Header Section - Full Width */}
                <div className="border-b border-zinc-800">
                    <div className="max-w-[1400px] mx-auto">
                        <Header />
                    </div>
                </div>

                {/* Hero Section - Wide Container */}
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24">
                        <Hero />
                    </div>
                </div>

                {/* Features Section - Full Width Background */}
                <div className="bg-green-900/10 border-y border-zinc-800">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="grid grid-cols-1 gap-12">
                            <Features />
                        </div>
                    </div>
                </div>

                {/* Screenshots Section - Wide Container */}
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 gap-12">
                        <Screenshots />
                    </div>
                </div>

                {/* Waitlist Section - Full Width Background */}
                <div className="bg-green-900/10 border-y border-zinc-800">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="grid grid-cols-1 gap-12">
                            <WaitlistBottom />
                        </div>
                    </div>
                </div>

                {/* Footer Section - Full Width */}
                <div className="border-t border-zinc-800">
                    <div className="max-w-[1400px] mx-auto">
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Structured Data */}
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


