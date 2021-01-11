import styled from '@emotion/styled'
import { useState, useRef, useEffect } from 'react'
import { Card, Typography } from 'antd'
import { TypeSocket, ITheme } from '../types'

interface IProps {
  socket: TypeSocket
  user: string
}
interface IChatItem {
  message: string
  user: string
  dateTime?: string
  className: string
}

const ChatAreaWrapStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
  margin-bottom: 10px;
  ${(props: ITheme) => ({ backgroundColor: props.theme.gray })};
`
const ChatUserNameStyled = styled(Typography.Title)`
  ${ (props: ITheme) => ({ color: props.theme.primary })};
`
const ChatItemStyled = styled(Card)`
  margin: 10px 0;
  max-width: 80%;
  min-width: 60%;
  align-self: flex-start;
  &.welcome {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
  &.is-me {
    align-self: flex-end;
    text-align: right;
  }
`

const ChatArea: React.FC<IProps> = (props) => {
  const chatWrap = useRef(null);
  const [chatList, setChatList] = useState<IChatItem[]>([])

  props.socket.on('welcome message', (user: string) => {
    setChatList([
      ...chatList,
      {
        className: 'welcome',
        user,
        message: '님이 들어왔습니다.'
      }
    ])
  })
  props.socket.on(
    'chat message',
    (message: string, user: string, dateTime: string) => {
      setChatList([
        ...chatList,
        { user, message, dateTime, className: user === props.user ? 'is-me' : '' }
      ])
    }
  )

  useEffect(() => {
    const scrollDom: HTMLDivElement | any = chatWrap.current

    if (scrollDom !== null) {
      scrollDom.scrollTo(0, scrollDom.scrollHeight)
    }
  }, [chatList])

  return (
    <ChatAreaWrapStyled ref={chatWrap}>
      {
        chatList.map((item: IChatItem, index: number) => (
          <ChatItemStyled key={index} bordered={false} className={item.className}>
            <ChatUserNameStyled level={5}>{item.user}</ChatUserNameStyled>
            <Card.Meta title={item.message.replace(/\n/g, '/\s/')} description={item.dateTime} />
          </ChatItemStyled>
        ))
      }
    </ChatAreaWrapStyled>
  )
}

export default ChatArea
