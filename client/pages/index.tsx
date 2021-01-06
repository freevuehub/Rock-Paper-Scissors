import Head from 'next/head'
import { TypeSocket } from '../types'

interface IProps {
  socket: TypeSocket
}

const Home: React.FC<IProps> = (props) => {
  props.socket.emit('chat message', 'roomId', 'name', 'message', 'type')

  return (
    <>
      <Head>
        <title>가위바위보 | 메인 페이지</title>
      </Head>
      <div>
        Hello World
      </div>
    </>
  )
}

export default Home
