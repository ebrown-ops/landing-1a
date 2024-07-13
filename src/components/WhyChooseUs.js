import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, ShieldCheck, Users } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Fast Approvals",
    description: "Get a decision on your loan application within 24 hours."
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "We offer some of the most competitive interest rates in the industry."
  },
  {
    icon: ShieldCheck,
    title: "Secure Process",
    description: "Your data is protected with bank-level security throughout the application process."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team of experts is always ready to assist you with any questions or concerns."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose SMB Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}