import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ChatRoomService from "./Services/ChatRoomService"
import ChatRoomList from "./Views/ChatRoomList";
import ChatView from "./Views/ChatView";
import { Message } from "./Models/MessageModel";


export default function ChatRoomContainer() 
{
  const chatRoomService = new ChatRoomService();
  const rooms = chatRoomService.getRooms();
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);


  const handleRoomClick = (roomId: string) => {
    setSelectedRoomId(prevRoomId => {
      if (roomId !== prevRoomId) 
      {
        setMessages(chatRoomService.getMessages(roomId));
      }
      return roomId;
    });
  };

  useEffect(() => {
    if (selectedRoomId) 
    {
      setMessages(chatRoomService.getMessages(selectedRoomId));
    }
  }, [selectedRoomId]);

  return (
    <Box className="chat-room-container"
        sx={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            margin: "auto",
            display: "grid",
            gridGap: "0px",
        }}>
      <Box className="list-rooms"
          sx={{
              gridColumn: "1/1",
              backgroundColor: "#fff",
              border: "solid 1px #d9d9d9",
              padding: "10px",
              borderRadius: "10px",
          }}>
        <ChatRoomList rooms={rooms} onRoomClick={handleRoomClick} />
      </Box>

      <Box className="chat-zone"
          sx={{ 
              gridColumn: "2/12",
              backgroundColor: "#fff",
              border: "solid 1px #d9d9d9",
              borderRadius: "10px",
              ml: 1
          }}>
          <Routes>
            {rooms.map((room) => (
              <Route key={room.id} 
                path={`/chat/room/${room.id}`} 
                element=
                  {
                    <ChatView key={room.id} 
                      roomId={room.id} 
                      roomMessages={messages}/>
                  } />
            ))}
          </Routes>
      </Box>
    </Box>
  );
}