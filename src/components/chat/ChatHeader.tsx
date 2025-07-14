export default function ChatHeader() {
  return (
    <div className="sticky top-0 z-10 bg-black border-b border-gray-800 px-4 py-3">
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
          <h1 className="text-xl font-bold">Grok</h1>
        </div>
      </div>
    </div>
  );
}