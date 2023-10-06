import { Mention, MentionsInput } from "react-mentions";

import { Avatar, Box, Stack, StackTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { MessageType } from "./type";

const styleMap = {
  left: {
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  right: {
    justifyContent: "flex-start",
    flexDirection: "row-reverse"
  }
};

const MessageBox = ({ title, text, position, avatar, ...rest }: MessageType) => {
  const positionStyle: Partial<OverridableComponent<StackTypeMap>> =
    position === "left" ? styleMap.left : styleMap.right;

  return (
    <Stack className="message-item" gap={1} px={2} py={1} {...positionStyle}>
      <Box>
        <Avatar src={avatar}>{title}</Avatar>
      </Box>
      <Stack>
        <Box
          fontSize={"10px"}
          fontWeight="600"
          alignSelf={position === "left" ? "flex-start" : "flex-end"}
        >
          {title}
        </Box>
        {text && (
          <MessageMentionContainer
            p={1}
            bgcolor="common.bellflowerBlue"
            borderRadius={1}
            fontSize={14}
          >
            <MentionsInput disabled value={text}>
              <Mention
                trigger="@"
                data={[]}
                style={{
                  padding: "1px",
                  backgroundColor: "#e2e8f0",
                  position: "relative",
                  zIndex: "1",
                  color: "blue",
                  textShadow:
                    "1px 1px 1px white, 1px -1px 1px white, -1px 1px 1px white, -1px -1px 1px white",
                  cursor: "pointer"
                }}
              />
            </MentionsInput>
          </MessageMentionContainer>
        )}
        <FileContainer gap={1}>
          {rest.fileUrls?.map?.((f) => {
            return (
              <a key={f.url} href={f.url} target="_blank" rel="noreferrer">
                <Box>{f.name}</Box>
              </a>
            );
          })}
        </FileContainer>
        <FileContainer flexDirection={"column"} gap={1}>
          {rest.imageUrls?.map?.((image) => (
            <Image key={image.url} src={image.url} alt={image.name} />
          ))}
        </FileContainer>
      </Stack>
    </Stack>
  );
};

const FileContainer = styled(Stack)`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const Image = styled("img")`
  max-width: 300px;
`;

const MessageMentionContainer = styled(Box)`
  textarea:disabled {
    border: 1px solid transparent;
  }
`;

export default MessageBox;
