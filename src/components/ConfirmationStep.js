export default function ConfirmationStep({ formData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
      <p className="mb-4">Please review your information:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Business Name:</strong> {formData.businessName}</li>
        <li><strong>Loan Amount:</strong> ${formData.loanAmount}</li>
      </ul>
      <p className="mt-4">If everything looks correct, click "Submit" to complete your application.</p>
    </div>
  );
}