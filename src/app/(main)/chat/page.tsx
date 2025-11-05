import { ChatInterface } from "@/components/chat/chat-interface";
import { MessageSquare } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
        <header className="mb-4">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">Fee AI Assistant</h1>
            <p className="text-muted-foreground">Ask me anything about your fees!</p>
        </header>
        <ChatInterface />
    </div>
  );
}
