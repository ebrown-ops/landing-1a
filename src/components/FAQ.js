import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

const faqData = [
  {
    question: "What types of loans do you offer?",
    answer: "We offer a variety of loans tailored to small and medium-sized businesses, including term loans, lines of credit, equipment financing, and working capital loans."
  },
  {
    question: "How long does the application process take?",
    answer: "Our streamlined application process typically takes less than 10 minutes to complete. Once submitted, you can receive a decision in as little as 24 hours."
  },
  {
    question: "What are the eligibility requirements?",
    answer: "Eligibility varies depending on the loan type, but generally, we look for businesses that have been operating for at least 6 months and have a minimum annual revenue of $50,000."
  },
  {
    question: "How much can I borrow?",
    answer: "Loan amounts range from $5,000 to $500,000, depending on your business's qualifications and needs."
  },
  {
    question: "What documents do I need to apply?",
    answer: "You'll typically need to provide business bank statements, tax returns, and financial statements. The specific requirements may vary based on the loan type and amount."
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Frequently Asked Questions</h2>
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6"
        />
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFAQs.length === 0 && (
          <p className="text-center text-gray-600 mt-4">No matching FAQs found. Please try a different search term.</p>
        )}
      </div>
    </div>
  );
}