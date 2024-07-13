import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This is a mock function to simulate fetching application status
const fetchApplicationStatus = () => {
  return {
    status: "In Review",
    submittedDate: "2023-05-15",
    loanAmount: 50000,
    estimatedDecisionDate: "2023-05-22"
  };
};

export default function Dashboard() {
  const [applicationStatus, setApplicationStatus] = useState(fetchApplicationStatus());

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Loan Application Dashboard</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Status:</strong> {applicationStatus.status}</p>
            <p><strong>Submitted Date:</strong> {applicationStatus.submittedDate}</p>
            <p><strong>Loan Amount:</strong> ${applicationStatus.loanAmount}</p>
            <p><strong>Estimated Decision Date:</strong> {applicationStatus.estimatedDecisionDate}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Our team is currently reviewing your application. We'll contact you if we need any additional information.</p>
            <Button>Contact Support</Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}