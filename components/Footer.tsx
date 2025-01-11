"use client"

import Link from 'next/link'
import { Terminal, Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <div className="relative border-t border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                {/* Left Column - Branding */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-green-500">
                        <Terminal className="w-5 h-5" />
                        <span className="text-sm tracking-wider font-mono">[staybase]</span>
                    </div>
                    <p className="text-xs text-zinc-500">
                        {`> Empowering e-commerce with`}
                        <br />
                        {`AI-driven retention solutions`}
                    </p>
                </div>

                {/* Middle Column - Navigation */}
                <div className="space-y-4">
                    <div className="text-xs text-green-500/80 font-mono mb-4">{`> quick_links`}</div>
                    <nav className="grid grid-cols-2 gap-2 text-xs text-zinc-500">
                        <a href="#features" className="hover:text-green-400 transition-colors">{`> FEATURES`}</a>
                        <a href="#preview" className="hover:text-green-400 transition-colors">{`> PREVIEW`}</a>
                        <a href="mailto:ananthkvmohanan@gmail.com" className="hover:text-green-400 transition-colors">{`> CONTACT`}</a>
                        <a href="#home" className="hover:text-green-400 transition-colors">{`> HOME`}</a>
                    </nav>
                </div>

                {/* Right Column - Status */}
                <div className="space-y-4">
                    <div className="text-xs text-green-500/80 font-mono mb-4">{`> system_status`}</div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs text-zinc-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span>{`> All systems operational`}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-zinc-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            <span>{`> Platform: BETA`}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="md:col-span-3 pt-8 mt-8 border-t border-zinc-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-zinc-600">
                            {`> © ${new Date().getFullYear()} Staybase. All rights reserved.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
