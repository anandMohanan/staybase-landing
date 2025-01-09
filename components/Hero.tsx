"use client"

import { useState } from "react"
import Image from 'next/image'


export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className={`min-h-[100dvh] flex items-center justify-center bg-green-900/10 `} id="home">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col w-full md:w-1/2 lg:w-2/5">
                        <div className="ascii-art text-green-500 text-xs leading-none text-left mb-6">
                            <pre className="inline-block text-left">
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
                        <div className="mb-8">
                            <h1 className="text-xl md:text-4xl text-zinc-300 mb-6 font-bold">
                                {'> RETAIN_CUSTOMERS.exe'}
                            </h1>
                            <p className="text-sm md:text-base text-zinc-500 mb-8 max-w-2xl">
                                AI-powered customer retention platform for e-commerce.
                                Monitor. Analyze. Improve. Execute.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-start gap-4">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="bg-zinc-800 text-zinc-300 px-6 py-2 hover:bg-zinc-700 transition-colors font-semibold"
                                >
                                    {'> JOIN_WAITLIST'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0">
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[16/9] max-w-md md:max-w-none mx-auto">
                            <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply rounded-lg z-10"></div>
                            <Image
                                src="/oilpainting.jpg"
                                alt="An oil painting representing customer retention and growth"
                                fill={true}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


