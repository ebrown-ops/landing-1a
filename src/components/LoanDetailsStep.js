import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function LoanDetailsStep({ updateFormData, formData }) {
  const [loanAmount, setLoanAmount] = useState(formData.loanAmount || '');
  const [loanPurpose, setLoanPurpose] = useState(formData.loanPurpose || '');
  const [loanTerm, setLoanTerm] = useState(formData.loanTerm || '');

  const handleChange = (field, value) => {
    const updatedData = { [field]: value };
    updateFormData(updatedData);
    switch (field) {
      case 'loanAmount':
        setLoanAmount(value);
        break;
      case 'loanPurpose':
        setLoanPurpose(value);
        break;
      case 'loanTerm':
        setLoanTerm(value);
        break;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Loan Details</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="loanAmount">Desired Loan Amount ($)</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="50000"
                  value={loanAmount}
                  onChange={(e) => handleChange('loanAmount', e.target.value)}
                  className="mt-1"
                  required
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enter the amount you'd like to borrow. We offer loans from $5,000 to $500,000.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Label htmlFor="loanPurpose">Loan Purpose</Label>
          <Select onValueChange={(value) => handleChange('loanPurpose', value)} value={loanPurpose}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select loan purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="working_capital">Working Capital</SelectItem>
              <SelectItem value="equipment_purchase">Equipment Purchase</SelectItem>
              <SelectItem value="expansion">Business Expansion</SelectItem>
              <SelectItem value="refinancing">Debt Refinancing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="loanTerm">Desired Loan Term (months)</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="loanTerm"
                  type="number"
                  placeholder="24"
                  value={loanTerm}
                  onChange={(e) => handleChange('loanTerm', e.target.value)}
                  className="mt-1"
                  required
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enter your preferred repayment period in months. We offer terms from 3 to 60 months.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}