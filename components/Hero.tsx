"use client"

import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function Hero() {
    const [email, setEmail] = useState("")
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Submitted email:", email)
        toast({
            title: "> ACCESS_GRANTED",
            description: "You've been added to the waitlist. Standby for further instructions.",
        })
        setEmail("")
    }

    return (
        <section className="min-h-[100dvh] flex items-center justify-center bg-green-900/10">
            <div className="container mx-auto px-4 py-20">
                <div className="ascii-art mb-8 text-zinc-500 text-xs leading-none md:text-center text-left">
                    <pre className="inline-block md:text-center text-left">
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
                <h1 className="text-2xl md:text-4xl text-zinc-300 mb-6 md:text-center text-left">
                    {'> RETAIN_CUSTOMERS.exe'}
                </h1>
                <p className="text-sm md:text-base text-zinc-500 mb-8 max-w-2xl mx-auto">
                    Staybase: AI-powered customer retention platform for e-commerce.
                    Monitor. Analyze. Improve. Execute.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="enter_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-zinc-900 text-zinc-300 border border-zinc-700 px-4 py-2 focus:outline-none focus:border-zinc-500"
                        aria-label="Email address"
                    />
                    <button type="submit" className="bg-zinc-800 text-zinc-300 px-6 py-2 hover:bg-zinc-700 transition-colors">
                        {'> SUBMIT'}
                    </button>
                </form>
            </div>
        </section>
    )
}


