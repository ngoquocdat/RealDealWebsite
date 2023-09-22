import { Box, Typography } from "@mui/material";
import React from "react";

const rooms = [
  {
    room: "GBPJ",
    timeChat: "12:40",
    desc: "Xin chào, bạn đang tham gia phòng tư vấn ....",
  },
  { room: "GCAD", timeChat: "15:03", desc: "" },
  { room: "CHFJ", timeChat: "18:58", desc: "" },
  { room: "GUSD", timeChat: "7:35", desc: "" },
];

export default function ChatRoomList() {
  return (
    <Box className="chatroom-list" sx={{ gridColumn: "1/2" }}>
      <Box>
        <Typography sx={{ fontWeight: 600 }}>PINNED ROOMS</Typography>
        {rooms.map((room) => {
          return (
            <Box
              className="room-container"
              sx={{
                display: "grid",
                gap: "20px",
                margin: "20px 10px",
                textAlign: "left",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "blue",
                  borderRadius: "10px",
                  width: "36px",
                  height: "36px",
                  gridColumn: "1/1",
                }}
              />
              <Box sx={{ gridColumn: "2/3" }}>
                <Typography sx={{ fontWeight: 600 }}>
                  Dự án căn hộ chung cư {room.room}
                </Typography>
                <Typography>
                  Xin chào, bạn đang tham gia phòng tư vấn ....
                </Typography>
              </Box>
              <Box sx={{ gridColumn: "3/5" }}>{room.timeChat}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
