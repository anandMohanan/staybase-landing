"use client"

import { useState } from "react"
import { FilloutEmbed } from "./FilloutEmbed";
import { Space_Mono } from "next/font/google";


const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
})

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="min-h-[100dvh] flex items-center justify-center bg-green-900/10" id="home">
            <div className="container mx-auto px-4 py-20">
                <div className="ascii-art mb-8 text-zinc-500 text-xs  leading-none text-center">
                    <pre className="inline-block text-center">
                        {`
   _____ _             _                    
  / ____| |           | |                   
 | (___ | |_ __ _ _   _| |__   __ _ ___  ___ 
  \\___ \\| __/ _\` | | | | '_ \\ / _\` / __|/ _ \\
  ____) | || (_| | |_| | |_) | (_| \\__ \\  __/
 |_____/ \\__\\__,_|\\__, |_.__/ \\__,_|___/\\___|
                   __/ |                     
                  |___/                      
            `}
                    </pre>
                </div>
                <h1 className="text-xl md:text-4xl text-zinc-300 mb-6 md:text-center text-left">
                    {'> RETAIN_CUSTOMERS.exe'}
                </h1>
                <p className="text-sm md:text-base text-zinc-500 mb-8 max-w-2xl mx-auto md:text-center text-left">
                    AI-powered customer retention platform for e-commerce.
                    Monitor. Analyze. Improve. Execute.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <button onClick={() => setIsOpen(true)} className="bg-zinc-800 text-zinc-300 px-6 py-2 hover:bg-zinc-700 transition-colors">
                        {'> JOIN_WAITLIST'}
                    </button>
                    {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
                </div>
            </div>
        </section>
    )
}


