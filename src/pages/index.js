import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-50 to-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-8">
          SMB Loan Solutions
        </h1>

        <p className="mt-3 text-2xl text-gray-700 max-w-2xl mb-8">
          Get the funding your small business needs to grow and thrive. 
          Quick approvals, competitive rates, and personalized service.
        </p>

        <Link href="/loan-application">
          <Button className="mt-4 text-lg px-8 py-4">Start Your Application</Button>
        </Link>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Fast Approval</h3>
            <p>Get a decision in as little as 24 hours</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
            <p>Loans tailored to your business needs</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p>Dedicated advisors to guide you</p>
          </div>
        </div>

        <div className="mt-16 text-gray-600">
          <p>Trusted by over 10,000 small businesses nationwide</p>
          <p className="mt-2">🔒 Bank-level security | 💯 Transparent fees | 🤝 Fair lending practices</p>
        </div>
      </main>
    </div>
  )
}