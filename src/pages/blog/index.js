import Link from 'next/link';
import { Card } from "@/components/Card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Securing a Small Business Loan",
    excerpt: "Learn how to increase your chances of getting approved for a small business loan with these expert tips.",
    slug: "5-tips-for-securing-small-business-loan"
  },
  {
    id: 2,
    title: "Understanding Different Types of Business Loans",
    excerpt: "Explore the various types of business loans available and find out which one is right for your company.",
    slug: "understanding-different-types-of-business-loans"
  },
  {
    id: 3,
    title: "How to Create a Winning Business Plan",
    excerpt: "Discover the key elements of a successful business plan that will impress lenders and investors.",
    slug: "how-to-create-winning-business-plan"
  }
];

export default function BlogIndex() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="SMB Loans Blog" 
        description="Read our latest articles on small business loans, financing tips, and more."
        keywords={['SMB loans', 'business financing', 'loan tips']}
      />
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8">SMB Loans Blog</h1>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <Card.Header>
                  <Card.Title>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {post.title}
                    </Link>
                  </Card.Title>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-4 inline-block">
                    Read more
                  </Link>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}