import Link from 'next/link';
import { Facebook, Twitter, LinkedIn, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">SMB Loans</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Empowering small businesses with the funding they need to grow and thrive.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link href="/loan-application" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Apply for a Loan</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">1234 Finance Street<br />Moneyville, CA 90210</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Phone: (555) 123-4567<br />Email: info@smbloans.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} SMB Loans. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"><LinkedIn size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}