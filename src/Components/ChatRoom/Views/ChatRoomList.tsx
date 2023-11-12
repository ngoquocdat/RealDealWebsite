import { Box, Typography } from "@mui/material";
import React from "react";
import { Room } from "../../datas";
import { Link } from "react-router-dom";

interface ChatRoomListProps {
    rooms: Room[];
    onRoomClick: (roomId: string) => void;
}

export default function ChatRoomList( { rooms, onRoomClick }: ChatRoomListProps) {
  return (
    <Box className="chatroom-list" 
        sx={{ 
            gridColumn: "1/2",
        }}>
        <Typography sx={{ fontWeight: 600 }}>
            PINNED ROOMS
        </Typography>
        {rooms.map((room) => (
        <Link key={room.id} 
            to={`/chat/room/${room.id}`} 
            className="room-container" 
            style={{ 
                textDecoration: 'none', color: 'inherit' 
            }}>
            <Box>
                <Box className="room-container" 
                    sx={{ 
                        display: "grid",
                        gap: "10px",
                        margin: "10px 10px",
                        border: "solid 1px #d9d9d9",
                        borderRadius: "10px",
                        textAlign: "left",
                        justifyContent: "left",
                        alignItems: "center",
                    }}
                    onClick={() => onRoomClick(room.id)}>
                    <Box sx={{ gridColumn: "2/3" }}>
                        <Typography sx={{ fontWeight: 600 }}>
                            Dự án căn hộ chung cư {room.room}
                        </Typography>
                        <Typography>
                            {room.lastMessage}
                        </Typography>
                    </Box>
                    <Box sx={{ gridColumn: "3/5" }}>{room.lastTimeChat}</Box>
                </Box>
            </Box>
        </Link>
        ))}
    </Box>
  );
}
