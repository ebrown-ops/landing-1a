import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export default function NewsletterSignup() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data) => {
    // Here you would typically send the email to your backend API
    // For now, we'll just show a success message
    toast({
      title: "Success!",
      description: "You've been signed up for our newsletter.",
    });
    form.reset();
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Sign up for our newsletter to receive the latest news and offers.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="max-w-xs"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}