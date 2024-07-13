import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend API
    // For now, we'll just show a success message
    toast({
      title: "Success!",
      description: "You've been signed up for our newsletter.",
    });
    setEmail('');
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Sign up for our newsletter to receive the latest news and offers.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-xs"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
}