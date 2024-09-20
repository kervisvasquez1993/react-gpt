import React from "react";
import Markdown from "react-markdown";
interface Props {
  texto: string;
}
export const GptMessage = ({ texto }: Props) => {
  return (
    <div className="col-start-1 col-end-9 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className=" flex item-center justify-center h-10 w-10 rounded-full bg-green-500 flex-shrink-0 ">
          K
        </div>
        <div className="relative ml-3 text-sm bg-black bg-opacity-25 pt-3 px-4 shadow rounded-xl">
          <Markdown>{texto}</Markdown>
        </div>
      </div>
    </div>
  );
};
