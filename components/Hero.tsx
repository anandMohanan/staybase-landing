"use client"

import { useState } from "react"
import Image from 'next/image'
import { FilloutEmbed } from "./FilloutEmbed"

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Content Container */}
            <div className="flex flex-col justify-center lg:col-span-1 px-4 sm:px-6 lg:px-0">
                {/* ASCII Art - Hidden on smallest screens */}
                <div className="relative hidden sm:block">
                    <div className="absolute -top-4 left-0">
                        <div className="text-xs text-green-500/80">{'> welcome_to'}</div>
                    </div>
                    <pre className="text-[0.6rem] leading-none text-green-500 font-mono mb-8 max-w-[300px] overflow-x-auto">
                        {`   _____ _             _                    
  / ____| |           | |                   
 | (___ | |_ __ _ _   _| |__   __ _ ___  ___ 
  \\___ \\| __/ _\` | | | | '_ \\ / _\` / __|/ _ \\
  ____) | || (_| | |_| | |_) | (_| \\__ \\  __/
 |_____/ \\__\\__,_|\\__, |_.__/ \\__,_|___/\\___|
                   __/ |                     
                  |___/                      `}</pre>
                </div>

                {/* Main Content */}
                <div className="space-y-6 mt-16 sm:mt-0">
                    <h1 className="md:text-3xl text-cl lg:text-5xl font-bold tracking-tight text-zinc-200">
                        {'> RETAIN_CUSTOMERS.exe'}
                    </h1>

                    <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
                        AI-powered customer retention platform for e-commerce.
                        <span className="block mt-2 font-mono text-green-500/80">Monitor. Analyze. Improve. Execute.</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="group relative overflow-hidden rounded bg-zinc-900 px-6 sm:px-8 py-3 text-zinc-200 w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-green-500/20 transition-opacity group-hover:opacity-0"></div>
                            <span className="relative font-mono text-sm sm:text-base">{'> JOIN_WAITLIST'}</span>
                        </button>
                        <a
                            href="#features"
                            className="group relative overflow-hidden rounded border border-zinc-700 px-6 sm:px-8 py-3 text-zinc-400 hover:text-zinc-200 transition-colors w-full sm:w-auto text-center"
                        >
                            <span className="relative font-mono text-sm sm:text-base">{'> LEARN_MORE'}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div className="lg:col-span-1 mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent mix-blend-multiply z-10"></div>
                    <Image
                        src="/oilpainting.jpg"
                        alt="An oil painting representing customer retention and growth"
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-700"
                        priority
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-zinc-700/20"></div>
                </div>
            </div>

            {/* Waitlist Modal */}
            {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
        </>
    )
}
