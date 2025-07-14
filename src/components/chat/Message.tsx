export default function Message({ text, isUser }: { text: string; isUser: boolean }) {
  return (
    <div className={`px-4 py-3 ${isUser ? 'bg-gray-900' : 'bg-black'}`}>
      <div className={`max-w-3xl mx-auto ${isUser ? 'text-gray-100' : 'text-gray-300'}`}>
        {text}
      </div>
    </div>
  );
}