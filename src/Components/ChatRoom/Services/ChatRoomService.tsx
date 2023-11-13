import { generateRandomDate } from "Components/utils/rdutil";
import { Message } from "../Models/MessageModel";
import { Room } from "../Models/RoomModel";

export default class ChatRoomService {
  getMessages = (roomId: string): Message[] => {
    return Array.from({ length: 30 }, (_, item) => {
      const id = `message${item + 1}`;
      const isAgency = item % 2 === 0;
      const date = new Date().toLocaleDateString();
      const title = `Message Title ${item + 1}`;
      const text = `This is a longer message number ${
        item + 1
      } from ${roomId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`;
      const avatar = `https://th.bing.com/th/id/R.588e9f4570ef5ddee0ef2f0c3eb4d237?rik=VDy%2fh%2ffN3XJm6Q&amp;pid=ImgRaw&amp;r=0`;

      return { id, roomId, isAgency, date, title, text, avatar };
    }).filter((message) => message.roomId === roomId);
  };

  getRooms = (): Room[] => {
    return [
      {
        id: "1",
        room: "Living Room",
        lastTimeChat: new Date(generateRandomDate()).toLocaleDateString(),
        lastMessage: "Hello, how are you?",
      },
      {
        id: "2",
        room: "Kitchen",
        lastTimeChat: new Date(generateRandomDate()).toLocaleDateString(),
        lastMessage: "What's for dinner?",
      },
      {
        id: "3",
        room: "Bedroom",
        lastTimeChat: new Date(generateRandomDate()).toLocaleDateString(),
        lastMessage: "Good night!",
      },
      {
        id: "4",
        room: "Bathroom",
        lastTimeChat: new Date(generateRandomDate()).toLocaleDateString(),
        lastMessage: "Need more toilet paper.",
      },
      {
        id: "5",
        room: "Garage",
        lastTimeChat: new Date(generateRandomDate()).toLocaleDateString(),
        lastMessage: "Car needs an oil change.",
      },
    ];
  };
}
