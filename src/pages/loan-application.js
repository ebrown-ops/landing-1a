import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import PersonalInfoStep from '@/components/PersonalInfoStep';
import BusinessInfoStep from '@/components/BusinessInfoStep';
import LoanDetailsStep from '@/components/LoanDetailsStep';
import ConfirmationStep from '@/components/ConfirmationStep';

const steps = [
  { id: 'personal', title: 'Personal Info' },
  { id: 'business', title: 'Business Info' },
  { id: 'loan', title: 'Loan Details' },
  { id: 'confirm', title: 'Confirmation' },
];

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep updateFormData={updateFormData} formData={formData} />;
      case 1:
        return <BusinessInfoStep updateFormData={updateFormData} formData={formData} />;
      case 2:
        return <LoanDetailsStep updateFormData={updateFormData} formData={formData} />;
      case 3:
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto pt-16 px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">SMB Loan Application</h1>
        
        <div className="bg-white shadow-xl rounded-lg p-8">
          <div className="mb-8">
            <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />
          </div>

          <nav className="mb-8">
            <ol className="flex items-center justify-between">
              {steps.map((step, index) => (
                <li key={step.id} className={`flex items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    {index + 1}
                  </span>
                  <span className="ml-2 text-sm font-medium">{step.title}</span>
                  {index < steps.length - 1 && (
                    <span className="mx-2 text-gray-300">&gt;</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {renderStep()}

          <div className="mt-8 flex justify-between">
            <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
              Previous
            </Button>
            <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>Trusted by over 10,000 small businesses</p>
          <p className="mt-2">🔒 Your information is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
}