import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PersonalInfoStep from '@/components/PersonalInfoStep';
import BusinessInfoStep from '@/components/BusinessInfoStep';
import LoanDetailsStep from '@/components/LoanDetailsStep';
import ConfirmationStep from '@/components/ConfirmationStep';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 'personal', title: 'Personal Info' },
  { id: 'business', title: 'Business Info' },
  { id: 'loan', title: 'Loan Details' },
  { id: 'confirm', title: 'Confirmation' },
];

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('loanApplicationData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setCurrentStep(parseInt(localStorage.getItem('loanApplicationStep') || '0'));
    }
  }, []);

  const updateFormData = (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    localStorage.setItem('loanApplicationData', JSON.stringify(updatedData));
    localStorage.setItem('loanApplicationStep', currentStep.toString());
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => {
        const newStep = prev + 1;
        localStorage.setItem('loanApplicationStep', newStep.toString());
        return newStep;
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => {
        const newStep = prev - 1;
        localStorage.setItem('loanApplicationStep', newStep.toString());
        return newStep;
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep updateFormData={updateFormData} formData={formData} nextStep={nextStep} />;
      case 1:
        return <BusinessInfoStep updateFormData={updateFormData} formData={formData} nextStep={nextStep} />;
      case 2:
        return <LoanDetailsStep updateFormData={updateFormData} formData={formData} nextStep={nextStep} />;
      case 3:
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto pt-16 px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">SMB Loan Application</h1>
          
          <div className="bg-white shadow-xl rounded-lg p-8">
            <div className="mb-8">
              <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />
              <p className="text-center mt-2 text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</p>
            </div>

            <nav className="mb-8">
              <ol className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <TooltipProvider key={step.id}>
                    <Tooltip>
                      <TooltipTrigger>
                        <li className={`flex items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                          <span className={`w-8 h-8 flex items-center justify-center rounded-full ${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                            {index + 1}
                          </span>
                          <span className="ml-2 text-sm font-medium hidden sm:inline">{step.title}</span>
                          {index < steps.length - 1 && (
                            <span className="mx-2 text-gray-300 hidden sm:inline">&gt;</span>
                          )}
                        </li>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{step.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </ol>
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
                Previous
              </Button>
              <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
                {currentStep === steps.length - 1 ? 'Submit Application' : 'Next'}
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-600">
            <p>Trusted by over 10,000 small businesses</p>
            <p className="mt-2">🔒 Your information is secure and encrypted</p>
            <p className="mt-2 text-blue-600 font-semibold">Limited time offer: Get approved today and receive a 0.5% interest rate discount!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}