import { useEffect, useId, useRef, useState } from "react";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { GrFormAttachment } from "react-icons/gr";
import { Mention, MentionsInput, SuggestionDataItem } from "react-mentions";

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  StackProps,
  styled,
  useTheme
} from "@mui/material";

import { User } from "../../dto/user";

import { useViewport } from "../../contexts/ViewportContext";

type Props = {
  onSubmit: ({
    text,
  }: {
    text: string;
  }) => void;
  userForMentions?: User[];
};

const MessageInput = ({ onSubmit, userForMentions }: Props) => {
  const { isMobile } = useViewport();
  const inputRef = useRef(null);

  const [input, setInput] = useState("");
  const theme = useTheme();
  const fileSelectId = useId();
  const imageSelectId = useId();

  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const onImageChange = (event: any) => {
    setSelectedImage(Array.from(event.target.files)?.map((file: any) => file));
  };

  function handleSubmitMessage(
    e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (e.shiftKey && e.key === "Enter") {
      return true;
    }
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  async function handleSubmit() {
    try {
      setLoading(true);

      onSubmit({
        text: input,
      });
    } catch (e) {
      console.log("Send message error", e);
    } finally {
      setTimeout(() => setInput("")); // To clear the enter key
      setSelectedImage([]);
      setSelectedFile([]);
      setLoading(false);
    }
  }

  const mentionData = userForMentions?.map((user) => ({
    id: user.name,
    display: user.name
  }));

  const customSuggestionsContainer = (children: React.ReactNode) => {
    return (
      <Box
        borderRadius={1}
        overflow={"hidden"}
        p={0.5}
        boxShadow={theme.palette.common.mainShadow}
        bgcolor={theme.palette.common.bellflowerBlue}
      >
        {children}
      </Box>
    );
  };

  const renderSuggestion = (suggestion: SuggestionDataItem) => {
    return <Box>{suggestion.display}</Box>;
  };

  useEffect(() => {
    (inputRef.current as any)?.focus();
  });

  return (
    <Container>
      {selectedFile.length ? (
        <FileContainer gap={1} flexDirection="column">
          {selectedFile?.map?.((item: any, index: number) => (
            <Stack key={item.name} flexDirection="row" alignItems={"center"} gap={1}>
              <div>{item.name}</div>
              <AiOutlineClose
                color="red"
                cursor={"pointer"}
                onClick={() =>
                  setSelectedFile(
                    selectedFile?.filter((_: any, i: number) => i !== index)
                  )
                }
              />
            </Stack>
          ))}
        </FileContainer>
      ) : null}

      {selectedImage.length ? (
        <FileContainer gap={1} flexDirection="row">
          {selectedImage?.map?.((item: any, index: number) => (
            <Image
              key={item.name}
              alt="preview"
              src={URL.createObjectURL(item)}
              onClick={() =>
                setSelectedImage(
                  selectedImage?.filter((_: any, i: number) => i !== index)
                )
              }
            />
          ))}
        </FileContainer>
      ) : null}

      <InputContainer isMobile={isMobile}>
        <MainInput isMobile={isMobile}>
          <MentionsInput
            disabled={loading}
            placeholder="Type your message ..."
            className="input"
            value={input}
            onChange={(e, newValue) => setInput(newValue)}
            onSubmit={console.log}
            onKeyDown={handleSubmitMessage}
            forceSuggestionsAboveCursor
            customSuggestionsContainer={customSuggestionsContainer}
            inputRef={inputRef}
          >
            <Mention
              trigger="@"
              data={mentionData ?? []}
              renderSuggestion={renderSuggestion}
              appendSpaceOnAdd
            />
          </MentionsInput>

          <Box className="function-btn">
            <Box
              component="label"
              htmlFor={fileSelectId}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                pr: 0.5
              }}
            >
              <GrFormAttachment style={{ width: 24, height: 24 }} />
              <VisuallyHiddenInput
                disabled={loading}
                onChange={(e: any) => setSelectedFile(Array.from(e.target.files))}
                id={fileSelectId}
                type="file"
                multiple
              />
            </Box>

            <Box
              component="label"
              htmlFor={imageSelectId}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                pl: 0.5
              }}
            >
              <AiOutlineCamera style={{ width: 24, height: 24 }} />
              <VisuallyHiddenInput
                disabled={loading}
                onChange={onImageChange}
                id={imageSelectId}
                type="file"
                multiple
              />
            </Box>
          </Box>
        </MainInput>

        <Button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <CircularProgress size={24} color="primary" />
          ) : (
            <FiSend color="white" size={24} fill="white" />
          )}
        </Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled(Stack)`
  background-color: ${({ theme }) => theme.palette.common.mainBg};
`;

const FileContainer = styled(Stack)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2, 2, 0)};
`;

const Image = styled("img")`
  max-width: 60px;
`;

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const MainInput = styled(Stack)<StackProps & { isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    flex: 1,
    position: "relative",
    justifyContent: "center",
    height: isMobile ? 40 : 48,
    width: isMobile ? 40 : 48,

    ".function-btn": {
      display: "flex",
      position: "absolute",
      right: "8px",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",

      svg: {
        fill: theme.palette.common.black,
        path: {
          stroke: theme.palette.common.black
        },
        cursor: "pointer",
        opacity: 0.3
      },

      ":hover": {
        opacity: 1
      }
    }
  })
);

const InputContainer = styled(Box)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  backgroundColor: theme.palette.common.mainBg,
  padding: isMobile ? theme.spacing(2) : theme.spacing(3, 2),
  justifyContent: "center",
  position: "relative",

  ".input": {
    flex: 1,
    background: "white",
    borderRadius: 4,

    "textarea": {
      border: theme.palette.common.border,
      padding: theme.spacing(1.5, 2)
    },

    ".input__control": {
      padding: theme.spacing(1.5, 2),
      height: isMobile ? 40 : 48,
      fontSize: isMobile ? 12 : 14
    },

    "strong": {
      backgroundColor: 'red',
      borderRadius: 2
    }
  },

  ".submit-btn": {
    height: isMobile ? 40 : 48,
    minWidth: isMobile ? 40 : 48,
    cursor: "pointer",
    display: "flex",
    borderRadius: 4,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1.5),
    background: "red",
    alignItems: "center",
    justifyContent: "center",
    "svg": {
      ".MuiCircularProgress-circle": {
        stroke: "white"
      }
    }
  }
}));

export default MessageInput;
