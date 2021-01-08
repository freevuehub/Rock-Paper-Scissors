import Head from 'next/head'
import styled from '@emotion/styled'
import { Card, Button } from 'antd'
import { TypeSocket } from '../types'

interface IProps {
  socket: TypeSocket
}

const MainWrapStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CardStyled = styled(Card)`
  width: 300px;
`
const Home: React.FC<IProps> = (props) => {
  props.socket.emit('chat message', 'roomId', 'name', 'message', 'type')

  return (
    <>
      <Head>
        <title>가위바위보 | 메인 페이지</title>
      </Head>
      <MainWrapStyled>
        <CardStyled title="방 만들기">
          <Button block type="primary" htmlType="submit">만들기</Button>
        </CardStyled>
      </MainWrapStyled>
    </>
  )
}

export default Home
