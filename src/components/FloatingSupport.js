import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 mb-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Need Help?</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Our support team is here to assist you. How can we help?</p>
          <Button className="w-full">Start Chat</Button>
        </div>
      )}
      <Button className="rounded-full p-4" onClick={toggleChat}>
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}