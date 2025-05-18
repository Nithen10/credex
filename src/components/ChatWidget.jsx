import { useState } from 'react';
import axios from 'axios';

const EXAMPLE_QUESTIONS = [
  'How do I sell my license?',
  'Is it free to list software?',
  'What types of software can I sell?',
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! How can I help you today?' },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Mock responses for some questions
    const mockResponse = {
      'How do I sell my license?': 'Just click on "Sell" and follow the instructions.',
      'Is it free to list software?': 'Yes, listing is free. We take a small commission on sales.',
      'What types of software can I sell?': 'You can sell any legal unused licenses or subscriptions.',
    };

    const trimmedInput = input.trim();

    if (mockResponse[trimmedInput]) {
      // Send mock response immediately
      setMessages([...newMessages, { role: 'bot', content: mockResponse[trimmedInput] }]);
      return;
    }

    // Call OpenAI API if no mock response matches
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for a software selling site.' },
            ...newMessages.map(m => ({ role: m.role, content: m.content })),
          ],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your real API key
            'Content-Type': 'application/json',
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: 'bot', content: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'bot', content: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          💬
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="p-3 font-semibold bg-blue-600 text-white">AI Support</div>
          <div className="p-3 h-60 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.role === 'user'
                    ? 'bg-blue-100 dark:bg-blue-900 text-right'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 p-2 text-sm border rounded mr-2 dark:bg-gray-700 dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-3 rounded text-sm"
            >
              Send
            </button>
          </div>
          <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 border-t">
            Try: {EXAMPLE_QUESTIONS.join(', ')}
          </div>
        </div>
      )}
    </>
  );
}
