import { create } from 'zustand';

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

type ChatState = {
  messages: Message[];
  addMessage: (text: string, isUser: boolean) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (text, isUser) => 
    set((state) => ({ 
      messages: [...state.messages, { id: Date.now().toString(), text, isUser }] 
    })),
}));