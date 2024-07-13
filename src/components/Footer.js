import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SMB Loans</h3>
            <p className="text-sm text-gray-600">Empowering small businesses with the funding they need to grow and thrive.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/loan-application" className="text-sm text-gray-600 hover:text-blue-600">Apply for a Loan</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">1234 Finance Street<br />Moneyville, CA 90210</p>
            <p className="text-sm text-gray-600 mt-2">Phone: (555) 123-4567<br />Email: info@smbloans.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 SMB Loans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}