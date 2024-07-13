import { Card, CardContent } from "@/components/ui/card"

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
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}