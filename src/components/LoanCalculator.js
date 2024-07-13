import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTerm) * 12;

    if (principal > 0 && rate > 0 && time > 0) {
      const x = Math.pow(1 + rate, time);
      const monthly = (principal * x * rate) / (x - 1);
      setMonthlyPayment(monthly.toFixed(2));

      // Calculate amortization schedule
      let balance = principal;
      const schedule = [];
      for (let i = 1; i <= time; i++) {
        const interest = balance * rate;
        const principalPayment = monthly - interest;
        balance -= principalPayment;
        schedule.push({
          month: i,
          balance: balance.toFixed(2),
          payment: monthly.toFixed(2)
        });
      }
      setAmortizationSchedule(schedule);
    }
  };

  useEffect(() => {
    if (loanAmount && interestRate && loanTerm) {
      calculateLoan();
    }
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Loan Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label htmlFor="loanAmount">Loan Amount ($)</Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="e.g., 50000"
            />
          </div>
          <div>
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g., 5.5"
            />
          </div>
          <div>
            <Label htmlFor="loanTerm">Loan Term (years)</Label>
            <Input
              id="loanTerm"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="e.g., 5"
            />
          </div>
        </div>
        {monthlyPayment && (
          <div className="mt-6">
            <p className="text-lg font-semibold">Estimated Monthly Payment: <span className="text-2xl text-blue-600">${monthlyPayment}</span></p>
          </div>
        )}
        {amortizationSchedule.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Amortization Schedule</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={amortizationSchedule}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                <Line type="monotone" dataKey="payment" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}