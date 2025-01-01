import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script'
import './globals.css'

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
})


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
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
        </html>
    )
}


