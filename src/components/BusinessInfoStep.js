import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function BusinessInfoStep({ updateFormData, formData }) {
  const [businessName, setBusinessName] = useState(formData.businessName || '');
  const [businessType, setBusinessType] = useState(formData.businessType || '');
  const [yearsInBusiness, setYearsInBusiness] = useState(formData.yearsInBusiness || '');
  const [annualRevenue, setAnnualRevenue] = useState(formData.annualRevenue || '');

  const handleChange = (field, value) => {
    const updatedData = { [field]: value };
    updateFormData(updatedData);
    switch (field) {
      case 'businessName':
        setBusinessName(value);
        break;
      case 'businessType':
        setBusinessType(value);
        break;
      case 'yearsInBusiness':
        setYearsInBusiness(value);
        break;
      case 'annualRevenue':
        setAnnualRevenue(value);
        break;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Business Information</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            type="text"
            placeholder="Acme Inc."
            value={businessName}
            onChange={(e) => handleChange('businessName', e.target.value)}
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="businessType">Business Type</Label>
          <Select onValueChange={(value) => handleChange('businessType', value)} value={businessType}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="llc">LLC</SelectItem>
              <SelectItem value="corporation">Corporation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="yearsInBusiness">Years in Business</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="yearsInBusiness"
                  type="number"
                  placeholder="5"
                  value={yearsInBusiness}
                  onChange={(e) => handleChange('yearsInBusiness', e.target.value)}
                  className="mt-1"
                  required
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enter the number of years your business has been operating.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Label htmlFor="annualRevenue">Annual Revenue ($)</Label>
          <Input
            id="annualRevenue"
            type="number"
            placeholder="500000"
            value={annualRevenue}
            onChange={(e) => handleChange('annualRevenue', e.target.value)}
            className="mt-1"
            required
          />
        </div>
      </div>
    </div>
  );
}