import { GptMessage } from "../components/chat-bobble/GptMessage";
import { MyMessage } from "../components/chat-bobble/MyMessage";
import { TextMessageBox } from "../components/chat-inputs-boxes/TextMessageBox";
import { TypingLoader } from "../components/loader/TypingLoader";

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage texto="Hola, soy un modelo de lenguaje GPT-3. ¿En qué puedo ayudarte?" />
          <MyMessage texto="esto es una prueba" />
          <TypingLoader className="fade-in" />
        </div>
      </div>
      <TextMessageBox onSendMessage={() => console.log("hola")} />
    </div>
  );
};
