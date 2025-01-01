import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-8 border-t border-zinc-800">
            <div className="container mx-auto px-4 text-center">
                <nav className="mb-4">
                    <ul className="flex justify-center space-x-4 text-xs text-zinc-500">
                        <li><a href="mailto:ananthkvmohanan@gmail.com" className="hover:text-green-400 transition-colors">{`> CONTACT`}</a></li>
                    </ul>
                </nav>
                <p className="text-zinc-500 text-xs">{`> © ${new Date().getFullYear()} Staybase. All rights reserved.`}</p>
                <p className="mt-2 text-zinc-600 text-xs">{`> Empowering e-commerce with AI-driven retention.`}</p>
            </div>
        </footer>
    )
}


