

import React from "react";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex-shrink-0 mr-2">
        {/* Bot Avatar */}
        <img src="/assets/Icons/chat-bot.png" alt="Bot" className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-400"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
