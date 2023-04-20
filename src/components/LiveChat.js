import React, { useEffect, useState } from "react";
import ChatMassage from "./ChatMassage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateProfile,
  generateRandomComment,
  generateRandomName,
} from "./helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    // Api polling
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment(),
          profile: generateProfile(),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="commentWrapper">
      <div className="liveChat">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMassage
              key={i}
              name={c.name}
              message={c.message}
              profile={c.profile}
            />
          ))}
        </div>
      </div>
      <form
        className="commentInput"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vaibhav Patil",
              message: liveChat,
              profile:
                "https://yt4.ggpht.com/ytc/AGIKgqMJCNF0gsbJ_0RWkuiCDFk35JEYZDAk1RWmNQ=s32-c-k-c0x00ffffff-no-rj",
            })
          );
          setLiveChat("");
        }}
      >
        <input
          placeholder="Comment.."
          type="text"
          value={liveChat}
          onChange={(e) => {
            setLiveChat(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            setLiveChat(liveChat);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
