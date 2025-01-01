import { Terminal } from 'lucide-react'

export default function Header() {
  return (
    <header className="py-8 mb-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-zinc-500">
            <Terminal className="w-5 h-5" />
            <span className="text-sm tracking-wider">[staybase]</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {['HOME', 'FEATURES', 'ABOUT', 'CONTACT'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="text-zinc-500 hover:text-zinc-300 text-xs tracking-wider">
            {'> JOIN_WAITLIST'}
          </button>
        </div>
      </div>
    </header>
  )
}


