import { useState } from 'react';
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Progress } from "@/components/ui/progress";

// This is a mock function to simulate fetching application status
const fetchApplicationStatus = () => {
  return {
    status: "In Review",
    submittedDate: "2023-05-15",
    loanAmount: 50000,
    estimatedDecisionDate: "2023-05-22",
    progressPercentage: 60
  };
};

export default function Dashboard() {
  const [applicationStatus, setApplicationStatus] = useState(fetchApplicationStatus());

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Loan Application Dashboard" 
        description="Track your SMB loan application status and next steps."
        keywords={['loan application', 'dashboard', 'status tracking']}
      />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8">Loan Application Dashboard</h1>
        
        <Card className="mb-8">
          <Card.Header>
            <Card.Title>Application Status</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="mb-4">
              <Progress value={applicationStatus.progressPercentage} className="w-full" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Application Progress: {applicationStatus.progressPercentage}%</p>
            </div>
            <p><strong>Status:</strong> {applicationStatus.status}</p>
            <p><strong>Submitted Date:</strong> {applicationStatus.submittedDate}</p>
            <p><strong>Loan Amount:</strong> ${applicationStatus.loanAmount.toLocaleString()}</p>
            <p><strong>Estimated Decision Date:</strong> {applicationStatus.estimatedDecisionDate}</p>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Next Steps</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="mb-4">Our team is currently reviewing your application. We'll contact you if we need any additional information.</p>
            <Button>Contact Support</Button>
          </Card.Content>
        </Card>
      </main>
      <Footer />
    </div>
  );
}