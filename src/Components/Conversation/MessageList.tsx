import { Stack, CircularProgress, Box } from '@mui/material'
import { useEffect } from 'react'
import MessageBox from './MessageBox'
import { MessageType } from './type'

type Props = {
  data: MessageType[]
  loading: boolean
}
const MessageList = ({ data, loading }: Props) => {
  useEffect(() => {
    const lastElement = document.querySelector(`.message-list .message-item:last-child`)
    lastElement?.scrollIntoView()
  }, [data])

  if (loading) {
    return (
      <Stack alignItems={'center'}>
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <Box className="message-list">
      {data.map((message) => <MessageBox key={message.id} {...message} />)}
    </Box>
  )
}

export default MessageList