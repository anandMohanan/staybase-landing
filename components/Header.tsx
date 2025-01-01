"use client"

import { Terminal } from 'lucide-react'
import { useState } from 'react';
import { FilloutEmbed } from './FilloutEmbed';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const href = (item: string) => {
        if (item === 'CONTACT') {
            return `mailto:ananthkvmohanan@gmail.com`;
        }
        return `#${item.toLowerCase()}`;
    };
    return (
        <header className="py-8 mb-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-zinc-500">
                        <Terminal className="w-5 h-5" />
                        <span className="text-sm tracking-wider">[staybase]</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {['HOME', 'FEATURES', 'PREVIEW', 'CONTACT'].map((item) => (
                            <a
                                key={item}
                                href={href(item)}
                                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors tracking-wider"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <button className="text-zinc-500 hover:text-zinc-300 text-xs tracking-wider" onClick={() => setIsOpen(true)}>
                        {'> JOIN_WAITLIST'}
                    </button>
                    {isOpen && <FilloutEmbed onClose={() => setIsOpen(false)} />}
                </div>
            </div>
        </header>
    )
}


