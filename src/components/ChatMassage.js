import React from "react";

const ChatMassage = ({ name, message, profile }) => {
  return (
    <div className="chatflex">
      <img alt="user" src={profile} />
      <span className="span1">{name}</span>
      <span className="span2">{message}</span>
    </div>
  );
};

export default ChatMassage;
