import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you're looking for doesn't exist or has been moved."
        keywords={['404', 'not found', 'error']}
      />
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}