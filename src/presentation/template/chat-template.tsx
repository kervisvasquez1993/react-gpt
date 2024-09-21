import { useState } from "react";
import { GptMessage } from "../components/chat-bobble/GptMessage";
import { MyMessage } from "../components/chat-bobble/MyMessage";
import { TextMessageBox } from "../components/chat-inputs-boxes/TextMessageBox";
import { TypingLoader } from "../components/loader/TypingLoader";
interface Message {
  text: string;
  isGPT: boolean;
}
export const ChatTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const headlesPost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text, isGPT: false }]);
    setIsLoading(false);
  };
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {isLoading && (
            <div className="col-start-1 col-end-12 fade-id">
              <TypingLoader />
            </div>
          )}

          {messages.map((message, index) =>
            message.isGPT ? (
              <GptMessage key={index} texto={message.text} />
            ) : (
              <MyMessage key={index} texto={message.text} />
            )
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={headlesPost}
        placeholder="Escribe lo que desees"
        disableCorrections
      />
    </div>
  );
};
