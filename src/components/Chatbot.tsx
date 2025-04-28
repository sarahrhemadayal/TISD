// src/components/Chatbot.tsx
'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setChat([...chat, `You: ${input}`]);
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setChat(prev => [...prev, `AI: ${data.reply}`]);
    setInput('');
    setLoading(false);
  };

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-4 py-3 rounded-full cursor-pointer shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close Chat' : 'Talk to AI'}
      </div>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-300 rounded-xl shadow-xl z-50 flex flex-col">
          <div className="p-4 h-60 overflow-y-auto text-sm space-y-2">
            {chat.map((msg, i) => (
              <p key={i} className={msg.startsWith('AI:') ? 'text-gray-800' : 'text-red-600'}>
                {msg}
              </p>
            ))}
            {loading && <p className="text-gray-500 italic">Thinking...</p>}
          </div>
          <div className="flex border-t">
            <input
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
              placeholder="Ask a legal question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="px-4 text-sm bg-red-600 text-white" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
