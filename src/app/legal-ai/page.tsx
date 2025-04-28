'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LegalAIPage() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{ from: 'user' | 'ai'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setChat((c) => [...c, { from: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const { reply } = await res.json();
      setChat((c) => [...c, { from: 'ai', text: reply }]);
    } catch (err) {
      setChat((c) => [
        ...c,
        {
          from: 'ai',
          text: 'There was a problem connecting to the legal assistant. Please try again later.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-900 px-4">
      {/* Header */}
      <header className="w-full max-w-screen-sm flex items-center justify-between p-4 border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
          <h1 className="text-xl font-bold text-red-600">Talk to Legal AI</h1>
        </div>
        <p className="text-xs text-gray-500 hidden md:block max-w-sm text-right">
          Indian law only · Max 100 words · “I’m an AI legal assistant and not a licensed lawyer.”
        </p>
      </header>

      {/* Chat Window */}
      <main className="w-full max-w-screen-sm flex-1 overflow-y-auto py-6 space-y-4">
        {chat.length === 0 && (
          <p className="text-gray-500 text-sm text-center mt-10">
            Ask me a question about Indian law to get started.
          </p>
        )}

        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`w-fit px-4 py-2 rounded-lg text-sm whitespace-pre-line max-w-[80%] ${
              msg.from === 'ai'
                ? 'bg-white text-gray-900 self-start shadow border ml-2'
                : 'bg-red-100 text-red-900 self-end mr-2 ml-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 ml-2">
            <Loader2 className="animate-spin" size={16} />
            AI is thinking...
          </div>
        )}

        <div ref={bottomRef} className="pb-24" />
      </main>

      {/* Input */}
      <footer className="w-full max-w-screen-sm border-t p-4 bg-white flex gap-2 sticky bottom-0 z-10">
        <Input
          className="flex-1 text-sm"
          placeholder="Ask a question about Indian law…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button
          onClick={sendMessage}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Send
        </Button>
      </footer>
    </div>
  );
}
