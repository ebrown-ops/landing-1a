import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, ShieldCheck, Users } from "lucide-react"
import { motion } from "framer-motion"

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
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">Why Choose SMB Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}