import { useState } from "react";

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sticky bottom-0 bg-black border-t border-gray-800 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe algo interesante..."
            className="w-full bg-gray-900 rounded-full px-5 py-3 text-gray-200 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            →
          </button>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Grok puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </form>
  );
}