import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BusinessInfoStep({ updateFormData, formData }) {
  const [businessName, setBusinessName] = useState(formData.businessName || '');

  const handleChange = (e) => {
    setBusinessName(e.target.value);
    updateFormData({ businessName: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Business Information</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">What is your business name?</Label>
          <Input
            id="businessName"
            type="text"
            placeholder="Acme Inc."
            value={businessName}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}