import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

const initialMessages = [
  { text: "Hello! How can I assist you today?", sender: 'bot' },
];

// Simple NLP function to detect intent
const detectIntent = (message) => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes('loan') && lowerMessage.includes('apply')) {
    return 'apply_loan';
  } else if (lowerMessage.includes('interest') && lowerMessage.includes('rate')) {
    return 'interest_rate';
  } else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
    return 'contact_support';
  }
  return 'unknown';
};

// Function to generate bot response based on intent
const generateBotResponse = (intent) => {
  switch (intent) {
    case 'apply_loan':
      return "To apply for a loan, please click the 'Apply Now' button at the top of the page. It will guide you through our simple application process.";
    case 'interest_rate':
      return "Our interest rates are competitive and vary based on your business profile and loan terms. For a personalized rate, please complete our loan application.";
    case 'contact_support':
      return "You can reach our support team at support@smbloans.com or call us at 1-800-SMB-LOAN during business hours.";
    default:
      return "I'm not sure I understand. Could you please rephrase your question?";
  }
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      
      // Detect intent and generate response
      const intent = detectIntent(input);
      const botResponse = generateBotResponse(intent);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 500);
      
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="w-80 h-96 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Chat Support</CardTitle>
            <Button variant="ghost" size="sm" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </CardContent>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </Card>
      )}
      {!isOpen && (
        <Button className="rounded-full p-4" onClick={toggleChat}>
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}