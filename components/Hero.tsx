"use client"

import { useState } from "react"
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono',
})

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="min-h-[100dvh] flex items-center justify-center bg-green-900/10" id="home">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <div className="ascii-art  text-zinc-500 text-xs leading-none text-left">
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
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h1 className="text-xl md:text-4xl text-zinc-300 mb-6 md:text-left">
                                {'> RETAIN_CUSTOMERS.exe'}
                            </h1>
                            <p className="text-sm md:text-base text-zinc-500 mb-8 max-w-2xl md:text-left">
                                AI-powered customer retention platform for e-commerce.
                                Monitor. Analyze. Improve. Execute.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-start gap-4">
                                <button onClick={() => setIsOpen(true)} className="bg-zinc-800 text-zinc-300 px-6 py-2 hover:bg-zinc-700 transition-colors">
                                    {'> JOIN_WAITLIST'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 text-zinc-300 leading-none ">
                        <pre className={`inline-block  whitespace-pre text-[0.7rem] sm:text-[0.6rem] md:text-xs lg:text-xl`}>
                            {`
     Customer Retention 📈
     100% |             ,*""*,**"**,"*,,*"***""*"**
          |       "*,,*"              
          |     ,*"       
      75% |   ",*           
          |   "*                
      50% |  ,*
          | ,*,
      25% |*
          |*
       0% +-----+-----+-----+-----+-----+-----+-----+
           Year1 Year2 Year3 Year4 Year5 Year6 Year7

        ___________________________________________
       |Retain More  |  Grow Faster  |  Scale Up   |
       |Customers🤝  |  Revenue💰    |  Business🚀 |
        ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}


