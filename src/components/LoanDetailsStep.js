import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoanDetailsStep({ updateFormData, formData }) {
  const [loanAmount, setLoanAmount] = useState(formData.loanAmount || '');

  const handleChange = (e) => {
    setLoanAmount(e.target.value);
    updateFormData({ loanAmount: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Loan Details</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="loanAmount">How much do you want to borrow? ($)</Label>
          <Input
            id="loanAmount"
            type="number"
            placeholder="50000"
            value={loanAmount}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}