import Head from 'next/head'
import styled from '@emotion/styled'
import { Typography, Card, Button } from 'antd'
import { TypeSocket } from '../types'

interface IProps {
  socket: TypeSocket
}

const MainWrapStyled = styled.div`
  height: 100%;
  display: flex;
  .item {
    width: 50%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
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
        <div className="item">
          <CardStyled title="방 만들기">
            <Button block type="primary" htmlType="submit">만들기</Button>
          </CardStyled>
        </div>
        <div className="item">
          <Typography.Title level={1}>
            Hello World!
          </Typography.Title>
        </div>
      </MainWrapStyled>
    </>
  )
}

export default Home
