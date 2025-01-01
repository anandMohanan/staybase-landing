import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script'
import './globals.css'
import { CSPostHogProvider } from '@/provider/posthog-provider'

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
})

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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <CSPostHogProvider>
            <body className={`${spaceMono.variable} font-mono`}>
                {children}
                <Toaster />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
                </Script>
            </body>
            </CSPostHogProvider>
        </html>
    )
}


