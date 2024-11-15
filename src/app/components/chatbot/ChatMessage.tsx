import React from "react";
import Image from "next/image";

interface ChatMessageProps {
  sender: "user" | "bot";
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => {
  return (
    <div
      className={`flex mb-4 ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {sender === "bot" && (
        <div className="flex-shrink-0 mr-2">
          <Image
            src="/assets/Icons/avatar-user.png"
            alt="Bot"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}
      <div>
        <div
          className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
            sender === "user"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {text}
        </div>
      </div>
      {sender === "user" && (
        <div className="flex-shrink-0 ml-2">
          <Image
            src="/assets/Icons/avatar-user.png"
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
