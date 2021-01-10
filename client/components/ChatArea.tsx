import styled from '@emotion/styled'
import { useState } from 'react'
import { Card, Typography } from 'antd'
import { TypeSocket } from '../types'

interface IProps {
  socket: TypeSocket
}
interface IChatItem {
  message: string
  user: string
  type: string
  dateTime: string
}

const ChatAreaWrapStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
  margin-bottom: 10px;
`
const ChatItemStyled = styled(Card)`
  margin: 10px 0;
  max-width: 80%;
  min-width: 60%;
  align-self: flex-start;
`

const ChatArea: React.FC<IProps> = (props) => {
  const [chatList, setChatList] = useState<IChatItem[]>([])

  props.socket.on('chat message', (user: string, message: string, type: string, dateTime: string) => {
    setChatList([
      ...chatList,
      { user, message, type, dateTime }
    ])
    console.log(user, message, type)
  })

  return (
    <ChatAreaWrapStyled>
      {
        chatList.map((item: IChatItem, index: number) => (
          <ChatItemStyled key={index} bordered={false}>
            <Typography.Title level={5}>{item.user}</Typography.Title>
            <Card.Meta title={item.message} description={item.dateTime} />
          </ChatItemStyled>
        ))
      }
    </ChatAreaWrapStyled>
  )
}

export default ChatArea
