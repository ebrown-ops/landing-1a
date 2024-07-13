import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  loanAmount: z.number().min(5000, "Minimum loan amount is $5,000").max(500000, "Maximum loan amount is $500,000"),
  loanPurpose: z.string().min(1, "Please select a loan purpose"),
  loanTerm: z.number().min(3, "Minimum loan term is 3 months").max(60, "Maximum loan term is 60 months")
});

export default function LoanDetailsStep({ updateFormData, formData, nextStep }) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: formData.loanAmount || "",
      loanPurpose: formData.loanPurpose || "",
      loanTerm: formData.loanTerm || ""
    }
  });

  const onSubmit = (data) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="loanAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired Loan Amount ($)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="50000" {...field} onChange={(e) => field.onChange(+e.target.value)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loanPurpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loan Purpose</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan purpose" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="working_capital">Working Capital</SelectItem>
                  <SelectItem value="equipment_purchase">Equipment Purchase</SelectItem>
                  <SelectItem value="expansion">Business Expansion</SelectItem>
                  <SelectItem value="refinancing">Debt Refinancing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loanTerm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired Loan Term (months)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="24" {...field} onChange={(e) => field.onChange(+e.target.value)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}