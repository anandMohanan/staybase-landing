"use client"

import { Terminal, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { FilloutEmbed } from './FilloutEmbed'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigationItems = ['HOME', 'FEATURES', 'PREVIEW', 'CONTACT']

    const href = (item: string) => {
        if (item === 'CONTACT') {
            return `mailto:ananthkvmohanan@gmail.com`
        }
        return `#${item.toLowerCase()}`
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-zinc-800 bg-zinc-950/80">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative py-4">
                    {/* Desktop Navigation */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="relative group">
                            <div className="flex items-center space-x-2 text-green-500">
                                <Terminal className="w-5 h-5" />
                                <span className="text-sm tracking-wider font-mono">[staybase]</span>
                            </div>
                            <div className="absolute -bottom-1 left-0 w-0 h-px bg-green-500 transition-all duration-300 group-hover:w-full"></div>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <a
                                    key={item}
                                    href={href(item)}
                                    className="relative group"
                                >
                                    <span className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors tracking-wider font-mono">
                                        {`> ${item}`}
                                    </span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-green-500 transition-all duration-300 group-hover:w-full"></div>
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="relative overflow-hidden group bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-sm"
                            >
                                <div className="absolute inset-0 bg-green-500/20 transition-opacity group-hover:opacity-0"></div>
                                <span className="relative text-xs text-green-500 group-hover:text-green-400 transition-colors tracking-wider font-mono">
                                    {'> JOIN_WAITLIST'}
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-zinc-400 hover:text-zinc-200 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-sm md:hidden">
                            <nav className="flex flex-col space-y-4 p-6">
                                {navigationItems.map((item) => (
                                    <a
                                        key={item}
                                        href={href(item)}
                                        className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors tracking-wider font-mono"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {`> ${item}`}
                                    </a>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsOpen(true)
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="text-left text-xs text-green-500 hover:text-green-400 transition-colors tracking-wider font-mono"
                                >
                                    {'> JOIN_WAITLIST'}
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </div>

            {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
        </div>
    )
}
