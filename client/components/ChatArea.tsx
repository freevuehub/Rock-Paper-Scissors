import styled from '@emotion/styled'
import { useState } from 'react'
import { Card } from 'antd'
import { TypeSocket } from '../types'

interface IProps {
  socket: TypeSocket
}
interface IChatItem {
  message: string
  user: string
  type: string
}

const ChatAreaWrapStyled = styled.div`
  flex: 1;
`

const ChatArea: React.FC<IProps> = (props) => {
  const [chatList, setChatList] = useState<IChatItem[]>([])

  props.socket.on('chat message', (user: string, message: string, type: string) => {
    setChatList([
      ...chatList,
      { user, message, type }
    ])
    console.log(user, message, type)
  })

  return (
    <ChatAreaWrapStyled>
      {
        chatList.map((item: IChatItem, index: number) => (
          <Card key={index}>
            <Card.Meta title={item.message} description={item.user} />
          </Card>
        ))
      }
    </ChatAreaWrapStyled>
  )
}

export default ChatArea
