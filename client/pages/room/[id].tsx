import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Card, Button  } from 'antd'
import { TypeSocket } from '../../types'
import { ChatInput, ChatArea } from '../../components'
import { useEffect, useState } from 'react'

interface IProps {
  socket: TypeSocket
  cookie: any
}

const MainWrapStyled = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  .item {
    width: 50%;
    display: flex;
    height: 100%;

    @media screen and (max-width: 600px) {
      width: 100%;
      height: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const CardStyled = styled(Card)`
  width: 300px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
const ChatStyled = styled(Card)`
  width: 50%;
  .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`
const RoomId: React.FC<IProps> = (props) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const onChat = (message: string) => {
    props.socket.emit('chat message', router.query.id, message, name, '')
  }

  useEffect(() => {
    if (router.query.id) {
      const userName = props.cookie['freevue-rps-name']

      props.socket.emit('join room', router.query.id)

      setTimeout(() => {
        props.socket.emit('welcome message', router.query.id, userName)

        setName(userName)
      }, 1000)
    }
  }, [router.query.id])

  return (
    <>
      <Head>
        <title>가위바위보 | 게임 방</title>
      </Head>
      <MainWrapStyled>
        <div className="item">
          <CardStyled title="방 만들기">
            <Button block type="primary" htmlType="submit">만들기</Button>
          </CardStyled>
        </div>
        <ChatStyled>
          <ChatArea socket={props.socket} user={name} />
          <ChatInput onChat={onChat} />
        </ChatStyled>
      </MainWrapStyled>
    </>
  )
}

export default RoomId
