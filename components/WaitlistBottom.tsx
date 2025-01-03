"use client"

import {  useState } from "react"
import { FilloutEmbed } from "./FilloutEmbed";

export default function WaitlistBottom() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <section className="py-20 border-t border-zinc-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-xl font-bold text-zinc-300 mb-6">{'> JOIN_THE_REVOLUTION'}</h2>
                <p className="text-sm text-zinc-500 mb-8 max-w-2xl mx-auto">
                    Be among the first to access Staybase and revolutionize your customer retention strategy.
                    Enter your email to secure your spot in the waitlist.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <button className="bg-zinc-800 text-zinc-300 px-6 py-2 hover:bg-zinc-700 transition-colors" onClick={() => setIsOpen(true)}>
                        {'> SUBMIT'}
                    </button>
                    {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
                </div>
                <p className="text-sm text-zinc-500 mb-8 max-w-2xl mx-auto mt-8">
                </p>
            </div>
        </section>
    )
}


