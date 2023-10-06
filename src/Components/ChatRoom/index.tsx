import React from "react";
import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ChatRoomList from "./RoomList";
import Conversation from "../Conversation";

export default function ChatRoom() {
  const [params] = useSearchParams();
  const username = params.get('u') as string
  
  return (
    <Box
      className="chat-room-container"
      sx={{
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        marginTop: "40px",
        display: "grid",
        gridGap: "0px",
      }}
    >
      <Box
        className="list-rooms"
        sx={{
          gridColumn: "1/1",
          backgroundColor: "#fff",
          border: "solid 1px #d9d9d9",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ChatRoomList />
      </Box>

      <Box
        className="chat-zone"
        sx={{
          gridColumn: "2/7",
          backgroundColor: "#fff",
          border: "solid 1px #d9d9d9",
          borderRadius: "10px",
          ml: 1
        }}
      >
        <Conversation
          conversationId={'1dat.ngo'}
          user={{
            id: username,
            username,
            email: `${username}@sts.com`,
            name: username,
            avatar: 'https://i.pravatar.cc/150?u='+username
          }}
        />
      </Box>
    </Box>
  );
}
