import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-400 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl text-zinc-300 mb-8">{`> PRIVACY_POLICY.md`}</h1>
        <div className="space-y-6 text-sm">
          <p>{`// Last updated: ${new Date().toISOString().split('T')[0]}`}</p>
          <p>{`/* 
            Staybase ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how your information is collected, used, and disclosed by Staybase.
          */`}</p>
          <h2 className="text-xl text-zinc-300">{`1. INFORMATION_COLLECTION`}</h2>
          <p>{`We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us.`}</p>
          <h2 className="text-xl text-zinc-300">{`2. USE_OF_INFORMATION`}</h2>
          <p>{`We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Staybase and our users.`}</p>
          <h2 className="text-xl text-zinc-300">{`3. SHARING_OF_INFORMATION`}</h2>
          <p>{`We may share information about you in limited circumstances, including with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.`}</p>
          <h2 className="text-xl text-zinc-300">{`4. DATA_RETENTION`}</h2>
          <p>{`We retain information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.`}</p>
          <h2 className="text-xl text-zinc-300">{`5. SECURITY`}</h2>
          <p>{`We use reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.`}</p>
          <h2 className="text-xl text-zinc-300">{`6. CONTACT_US`}</h2>
          <p>{`If you have any questions about this Privacy Policy, please contact us at: privacy@staybase.io`}</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-green-500 hover:text-green-400">{`< RETURN_TO_HOME`}</Link>
        </div>
      </div>
    </div>
  )
}


