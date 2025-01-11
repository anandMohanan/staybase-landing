"use client"

import { useState } from "react"
import { FilloutEmbed } from "./FilloutEmbed"
import { Terminal } from "lucide-react"

export default function WaitlistBottom() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <div className="absolute -top-4 left-0">
                <div className="text-xs text-green-500/80">{'> join_waitlist'}</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-zinc-200 font-mono mb-4">
                            {`> JOIN_THE_REVOLUTION`}
                        </h2>
                        <p className="text-sm text-zinc-400">
                            Be among the first to access Staybase and revolutionize your customer retention strategy.
                            Our AI-powered platform is designed to help you retain customers more effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                        <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-lg">
                            <div className="text-green-500 mb-2">{`> EARLY_ACCESS`}</div>
                            <div className="text-zinc-400">Priority onboarding and setup assistance</div>
                        </div>
                        <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-lg">
                            <div className="text-green-500 mb-2">{`> BETA_FEATURES`}</div>
                            <div className="text-zinc-400">Test new features before release</div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center">
                    <div className="border border-zinc-800 bg-zinc-900/50 rounded-lg p-8">
                        <div className="flex items-center space-x-2 mb-6">
                            <Terminal className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-mono text-zinc-400">{`> waitlist_status: OPEN`}</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="text-xs text-zinc-500 font-mono">Limited spots available</div>
                            </div>

                            <button 
                                onClick={() => setIsOpen(true)}
                                className="w-full bg-zinc-800 text-zinc-300 px-6 py-3 hover:bg-zinc-700 transition-colors font-mono text-sm relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-green-500/20 transition-opacity group-hover:opacity-0"></div>
                                <span className="relative">{'> SECURE_YOUR_SPOT'}</span>
                            </button>

                            <div className="text-center">
                                <p className="text-xs text-zinc-500">
                                    {`// No credit card required`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
        </div>
    )
}
