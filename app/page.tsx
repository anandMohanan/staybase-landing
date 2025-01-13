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
            {/* Base Background Pattern */}
            <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBmaWxsPSIjMjIyMjIyIiBkPSJNMCAwaDJ2MkgweiIvPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
            
            {/* Grid Overlay */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Vertical lines */}
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="border-zinc-800/20">
                            <div className="h-full border-l border-zinc-800/20"></div>
                        </div>
                    ))}
                </div>
                
                {/* Horizontal lines */}
                <div className="absolute inset-0 grid grid-rows-[repeat(20,minmax(0,1fr))]">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="border-t border-zinc-800/20"></div>
                    ))}
                </div>
            </div>
            
            {/* Main Content */}
            <div className="relative">
                {/* Header */}
                <Header />

                {/* Main sections with consistent max-width and padding */}
                <div className="pt-24">
                    {/* Hero Section */}
                    <section className="py-16 sm:py-20">
                        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <Hero />
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-16 sm:py-20 bg-green-900/10 border-y border-zinc-800">
                        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                            <Features />
                        </div>
                    </section>

                    {/* Screenshots Section */}
                    <section className="py-16 sm:py-20">
                        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                            <Screenshots />
                        </div>
                    </section>

                    {/* Waitlist Bottom Section */}
                    <section className="py-16 sm:py-20 bg-green-900/10 border-y border-zinc-800">
                        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                            <WaitlistBottom />
                        </div>
                    </section>

                    {/* Footer */}
                    <Footer />
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
