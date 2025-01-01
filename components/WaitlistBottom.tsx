"use client"

import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function WaitlistBottom() {
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
        <section className="py-20 border-t border-zinc-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-xl font-bold text-zinc-300 mb-6">{'> JOIN_THE_REVOLUTION'}</h2>
                <p className="text-sm text-zinc-500 mb-8 max-w-2xl mx-auto">
                    Be among the first to access Staybase and revolutionize your customer retention strategy.
                    Enter your email to secure your spot in the waitlist.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="enter_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-zinc-900 text-zinc-300 border border-zinc-700 px-4 py-2 focus:outline-none focus:border-zinc-500 flex-grow"
                        aria-label="Email address"
                    />
                    <button type="submit" className="bg-zinc-800 text-zinc-300 px-6 py-2 hover:bg-zinc-700 transition-colors">
                        {'> SUBMIT'}
                    </button>
                </form>
                <p className="text-xs text-zinc-600 mt-4">Join {Math.floor(Math.random() * 900) + 100} others on the waitlist</p>
            </div>
        </section>
    )
}


