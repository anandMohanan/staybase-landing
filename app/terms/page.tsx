import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-400 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl text-zinc-300 mb-8">{`> TERMS_OF_SERVICE.md`}</h1>
        <div className="space-y-6 text-sm">
          <p>{`// Last updated: ${new Date().toISOString().split('T')[0]}`}</p>
          <p>{`/* 
            By using Staybase, you agree to these terms. Please read them carefully.
          */`}</p>
          <h2 className="text-xl text-zinc-300">{`1. ACCEPTANCE_OF_TERMS`}</h2>
          <p>{`By accessing or using Staybase, you agree to be bound by these Terms of Service and all applicable laws and regulations.`}</p>
          <h2 className="text-xl text-zinc-300">{`2. DESCRIPTION_OF_SERVICE`}</h2>
          <p>{`Staybase provides an AI-powered customer retention platform for e-commerce businesses ("the Service").`}</p>
          <h2 className="text-xl text-zinc-300">{`3. USER_OBLIGATIONS`}</h2>
          <p>{`You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.`}</p>
          <h2 className="text-xl text-zinc-300">{`4. INTELLECTUAL_PROPERTY`}</h2>
          <p>{`The Service and its original content, features, and functionality are owned by Staybase and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.`}</p>
          <h2 className="text-xl text-zinc-300">{`5. TERMINATION`}</h2>
          <p>{`We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.`}</p>
          <h2 className="text-xl text-zinc-300">{`6. LIMITATION_OF_LIABILITY`}</h2>
          <p>{`In no event shall Staybase, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.`}</p>
          <h2 className="text-xl text-zinc-300">{`7. CHANGES_TO_TERMS`}</h2>
          <p>{`We reserve the right, at our sole discretion, to modify or replace these Terms at any time.`}</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-green-500 hover:text-green-400">{`< RETURN_TO_HOME`}</Link>
        </div>
      </div>
    </div>
  )
}


