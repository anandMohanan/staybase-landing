"use client"

import { useState } from "react"
import Image from 'next/image'
import { FilloutEmbed } from "./FilloutEmbed"

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col justify-center lg:col-span-1">
                <div className="relative">
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

                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
                        {'> RETAIN_CUSTOMERS.exe'}
                    </h1>

                    <p className="text-base text-zinc-400 max-w-xl">
                        AI-powered customer retention platform for e-commerce.
                        <span className="block mt-2 font-mono text-green-500/80">Monitor. Analyze. Improve. Execute.</span>
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="group relative overflow-hidden rounded bg-zinc-900 px-8 py-3 text-zinc-200"
                        >
                            <div className="absolute inset-0 bg-green-500/20 transition-opacity group-hover:opacity-0"></div>
                            <span className="relative font-mono">{'> JOIN_WAITLIST'}</span>
                        </button>
                        <a
                            href="#features"
                            className="group relative overflow-hidden rounded border border-zinc-700 px-8 py-3 text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            <span className="relative font-mono">{'> LEARN_MORE'}</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1">
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

            {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
        </>
    )
}
