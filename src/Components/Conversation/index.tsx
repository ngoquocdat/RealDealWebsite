import { FC, useCallback, useMemo } from "react";
import "react-chat-elements/dist/main.css";

import { Box } from "@mui/material";

import { User } from "@dto/user";

import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { useMessages } from "./hooks";
import { addNewMessage } from "./service";
import { MessageType } from "./type";

interface IProps {
  conversationId: string;
  user: User;
  userForMentions?: User[];
  onSubmitNewMessage?: (message: MessageType) => void;
}

const Conversation: FC<IProps> = ({
  conversationId,
  user,
  onSubmitNewMessage,
  userForMentions
}) => {
  const [messages = [], loading] = useMessages(conversationId);

  const handleAddNewMessage = useCallback(
    async ({
      text: messageText,
    }: {
      text: string;
    }) => {
      if (!messageText) {
        return;
      }

      const newMessage = {
        text: messageText,
        title: user.name || user.username,
        date: +new Date(),
        avatar: user.avatar,
      } as MessageType;

      await addNewMessage({ message: newMessage, conversationId, userId: user.id });
      onSubmitNewMessage?.(newMessage);
    },
    [conversationId, onSubmitNewMessage, user.avatar, user.id, user.name, user.username]
  );

  const dataMessage = useMemo(() => {
    return messages.map((message) => ({
      ...message,
      position: user.id === message.userId ? "right" : "left"
    }));
  }, [messages, user.id]) as MessageType[];

  return (
    <Box display="flex" flexDirection={"column"} flex={1} height={"100%"}>
      <Box flex={1} height={"100%"} className="test" overflow={"auto"}>
        <MessageList loading={loading} data={dataMessage} />
      </Box>
      <MessageInput onSubmit={handleAddNewMessage} userForMentions={userForMentions} />
    </Box>
  );
};

export default Conversation;
