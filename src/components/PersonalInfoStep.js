import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalInfoStep({ updateFormData, formData }) {
  const [name, setName] = useState(formData.name || '');

  const handleChange = (e) => {
    setName(e.target.value);
    updateFormData({ name: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">What is your full name?</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}