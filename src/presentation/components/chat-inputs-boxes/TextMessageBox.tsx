import React from "react";
interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
}
export const TextMessageBox = ({
  onSendMessage,
  placeholder = "",
  disableCorrections = false,
}: Props) => {
  const handlesSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("heandlesssendMessage");
  };
  return (
    <form
      onSubmit={handlesSubmit}
      className="flex flex-row items-center h-16 rounded-lg bg-white w-full px-4"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Enviar</span>
          <i className="fa-regular fa-paper-plane "></i>
        </button>
      </div>
    </form>
  );
};
