import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Here you would typically send the message to a backend API
      // and get a response. For now, we'll just echo the message.
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `You said: ${input}`, sender: 'bot' }]);
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
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
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