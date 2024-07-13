import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PersonalInfoStep({ updateFormData, formData }) {
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');

  const handleChange = (field, value) => {
    const updatedData = { [field]: value };
    updateFormData(updatedData);
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-1"
                  required
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>We'll use this email to send you important updates about your application.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="mt-1"
            required
          />
        </div>
      </div>
    </div>
  );
}