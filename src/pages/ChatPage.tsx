import ChatHeader from "../components/chat/chatHeader";
import Message from "../components/chat/Message";
import ChatInput from "../components/chat/ChatInput";
import { useChatStore } from "../stores/chatStore";

export default function ChatPage() {
  const { messages, addMessage } = useChatStore();

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      
      <ChatInput onSend={(text) => addMessage(text, true)} />
    </div>
  );
}