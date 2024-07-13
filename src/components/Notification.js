import { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";

export default function Notification({ title, message, type = "default", duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <Alert variant={type} className="fixed top-4 right-4 w-96 z-50">
      <AlertTitle className="flex justify-between items-center">
        {title}
        <button onClick={() => setIsVisible(false)} className="text-sm">
          <X size={16} />
        </button>
      </AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}