import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ChatRoomService from "./Services/ChatRoomService"
import ChatRoomList from "./Views/ChatRoomList";
import ChatView from "./Views/ChatView";
import { Message, RealEstates, IRealEstates, Room } from "../datas";


export default function ChatRoomContainer() 
{
  const chatRoomService = new ChatRoomService();
  const [rooms] = useState(chatRoomService.getRooms());
  const realEstates = RealEstates
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [randomRealEstate] = useState(() => realEstates[Math.floor(Math.random() * realEstates.length)]);
  const [roomConfigurationed, setRoomConfigurationed] = useState<Room[]>([]);
  


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

  useEffect(() => {
    setRoomConfigurationed(rooms.map((room) => {
      return {
        ...room,
        RealEstateId: randomRealEstate.id.toString(),
        id: chatRoomService.getRoomId(randomRealEstate.id, randomRealEstate.title, randomRealEstate.location, new Date().toLocaleString()),
        room: chatRoomService.getRoomName(randomRealEstate.title, new Date().toLocaleString())
      };
    }));
  }, [rooms]);

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
        <ChatRoomList rooms={roomConfigurationed} onRoomClick={handleRoomClick} />
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
            {roomConfigurationed.map((room) => (
              <Route key={room.id} 
                path={`/chat/room/${room.id}`} 
                element={
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