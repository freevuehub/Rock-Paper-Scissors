import Head from 'next/head'
import styled from '@emotion/styled'
import { Card, Button  } from 'antd'
import { TypeSocket } from '../types'
import { ChatInput, ChatArea } from '../components'

interface IProps {
  socket: TypeSocket
}

const MainWrapStyled = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  .item {
    width: 50%;
    display: flex;
    height: 100%;
  }
`
const CardStyled = styled(Card)`
  width: 300px;
`
const ChatStyled = styled(Card)`
  width: 50%;
  .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
const Room: React.FC<IProps> = (props) => {
  const onChat = (message: string) => {
    props.socket.emit('total message', message)
  }

  return (
    <>
      <Head>
        <title>가위바위보 | 메인 페이지</title>
      </Head>
      <MainWrapStyled>
        <div className="item">
          <CardStyled title="방 만들기">
            <Button block type="primary" htmlType="submit">만들기</Button>
          </CardStyled>
        </div>
        <ChatStyled>
          <ChatArea socket={props.socket} />
          <ChatInput onChat={onChat} />
        </ChatStyled>
      </MainWrapStyled>
    </>
  )
}

export default Room
