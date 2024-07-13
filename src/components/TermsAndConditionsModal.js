import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TermsAndConditionsModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="link">Terms and Conditions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read our terms and conditions carefully before proceeding with your loan application.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[300px] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">1. Loan Terms</h3>
          <p className="mb-4">
            The terms of the loan, including interest rate, repayment period, and fees, will be determined based on your application and credit assessment.
          </p>
          <h3 className="text-lg font-semibold mb-2">2. Repayment</h3>
          <p className="mb-4">
            You agree to repay the loan according to the agreed-upon schedule. Late payments may result in additional fees and penalties.
          </p>
          <h3 className="text-lg font-semibold mb-2">3. Privacy</h3>
          <p className="mb-4">
            We respect your privacy and will handle your personal information in accordance with our privacy policy and applicable laws.
          </p>
          {/* Add more terms as needed */}
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>I Agree</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}