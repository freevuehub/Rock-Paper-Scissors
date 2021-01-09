import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Card, Button } from 'antd'
import api, { AxiosResponse } from '../API'

interface IRoomAPIRespose {
  status: number
  result: {
    roomId: string
  }
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
const Home: React.FC = () => {
  const router = useRouter()

  const onMakeRoomButton = async () => {
    try {
      const { data }: AxiosResponse<IRoomAPIRespose> = await api.post('/room')

      router.push(`/room/${data.result.roomId}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Head>
        <title>가위바위보 | 메인 페이지</title>
      </Head>
      <MainWrapStyled>
        <CardStyled title="방 만들기">
          <Button block type="primary" onClick={onMakeRoomButton}>만들기</Button>
        </CardStyled>
      </MainWrapStyled>
    </>
  )
}

export default Home
