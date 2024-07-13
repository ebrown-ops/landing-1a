import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ConfirmationStep({ formData }) {
  return (
    <div>
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Application Submitted Successfully!</h2>
        <p className="text-gray-600">Thank you for applying for an SMB loan. Here's a summary of your application:</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Application Summary</h3>
          <ul className="space-y-2">
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Business Name:</strong> {formData.businessName}</li>
            <li><strong>Loan Amount:</strong> ${formData.loanAmount}</li>
            <li><strong>Loan Purpose:</strong> {formData.loanPurpose}</li>
            <li><strong>Desired Loan Term:</strong> {formData.loanTerm} months</li>
          </ul>
        </CardContent>
      </Card>
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Next Steps</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Our team will review your application within 1 business day.</li>
          <li>You'll receive an email with the decision and any additional requirements.</li>
          <li>If approved, we'll contact you to discuss the loan terms and next steps.</li>
        </ol>
      </div>
      <div className="mt-8 text-center">
        <p className="mb-4">Have questions? Our support team is here to help!</p>
        <Button>Contact Support</Button>
      </div>
    </div>
  );
}