import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    company: "Tech Innovators Inc.",
    quote: "SMB Loans helped us secure the funding we needed to expand our operations. Their process was quick and painless!"
  },
  {
    name: "Sarah Johnson",
    company: "Green Earth Landscaping",
    quote: "Thanks to SMB Loans, we were able to purchase new equipment and take on larger projects. They truly understand small business needs."
  },
  {
    name: "Michael Chen",
    company: "Fusion Eats Restaurant",
    quote: "The team at SMB Loans guided us through every step of the loan process. Their support was invaluable in helping us open our second location."
  },
  {
    name: "Emily Rodriguez",
    company: "Artisan Crafts Co.",
    quote: "SMB Loans provided us with flexible financing options that perfectly suited our seasonal business model. Highly recommended!"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">What Our Clients Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonials[currentIndex].quote}"</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].company}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}