import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Terms of Service" 
        description="SMB Loans terms of service - the rules and guidelines for using our services."
        keywords={['terms of service', 'user agreement', 'SMB loans']}
      />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p>Last updated: [Date]</p>
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SMB Loans website (the "Service") operated by SMB Loans ("us", "we", or "our").</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

          <h2>2. Use of the Service</h2>
          <p>You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
          </ul>

          <h2>3. Loan Terms</h2>
          <p>The terms of any loan, including interest rates, repayment periods, and fees, will be clearly disclosed before you agree to the loan. By accepting a loan, you agree to repay the loan according to the terms provided.</p>

          <h2>4. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of SMB Loans and its licensors.</p>

          <h2>5. Termination</h2>
          <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

          <h2>6. Limitation of Liability</h2>
          <p>In no event shall SMB Loans, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2>7. Changes</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at [contact email].</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}