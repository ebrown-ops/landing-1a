import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600">SMB Loans</span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
          <Link href="/loan-application">
            <Button>Apply Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}