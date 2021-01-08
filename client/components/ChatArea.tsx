import styled from '@emotion/styled'
import { useState } from 'react'
import { TypeSocket } from '../types'

interface IProps {
  socket: TypeSocket
}

const ChatAreaWrapStyled = styled.div`
  flex: 1;
`

const ChatArea: React.FC<IProps> = (props) => {
  const [chatList, setChatList] = useState<string[]>([])

  props.socket.on('total message', (message: string) => {
    setChatList([...chatList, message])
  })

  return (
    <ChatAreaWrapStyled>
      {
        chatList.map((message: string, index: number) => (
          <p key={index}>{message}</p>
        ))
      }
    </ChatAreaWrapStyled>
  )
}

export default ChatArea
