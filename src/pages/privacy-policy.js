import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Privacy Policy" 
        description="SMB Loans privacy policy - how we collect, use, and protect your information."
        keywords={['privacy policy', 'data protection', 'SMB loans']}
      />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: [Date]</p>
          <p>At SMB Loans, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you apply for a loan, create an account, or contact us for support. This may include:</p>
          <ul>
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Business information</li>
            <li>Financial information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your loan application</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

          <h2>Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at [contact email].</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}