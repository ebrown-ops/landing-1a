import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import LoanCalculator from '@/components/LoanCalculator'
import AnimatedStatistics from '@/components/AnimatedStatistics'
import Chatbot from '@/components/Chatbot'
import NewsletterSignup from '@/components/NewsletterSignup'
import FeaturedIn from '@/components/FeaturedIn'
import TestComponent from '@/components/TestComponent'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-8">
                SMB Loan Solutions
              </h1>
              <p className="mt-3 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Get the funding your small business needs to grow and thrive. 
                Quick approvals, competitive rates, and personalized service.
              </p>
              <Link href="/loan-application">
                <Button className="text-lg px-8 py-4">Start Your Application</Button>
              </Link>
            </div>
          </div>
        </div>

        <TestComponent />

        <AnimatedStatistics />

        <WhyChooseUs />

        <FeaturedIn />

        <div className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">Calculate Your Loan</h2>
            <LoanCalculator />
          </div>
        </div>

        <Testimonials />

        <FAQ />

        <NewsletterSignup />

        <div className="bg-blue-50 dark:bg-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8">Ready to grow your business?</h2>
            <Link href="/loan-application">
              <Button className="text-lg px-8 py-4">Apply Now</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}