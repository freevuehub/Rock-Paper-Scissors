import Head from 'next/head'
import styled from '@emotion/styled'
import { Card, Form, Input, Button } from 'antd'
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

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <>
      <Head>
        <title>가위바위보 | 메인 페이지</title>
      </Head>
      <MainWrapStyled>
        <div className="item">
          <CardStyled title="로그인">
            <Form
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 19 }}
              initialValues={{ remember: true }}
              name="login"
              onFinish={onFinish}
            >
              <Form.Item
                label="이름"
                name="name"
                rules={[{ required: true, message: '이름을 입력해주세요.' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button block type="primary" htmlType="submit">로그인</Button>
              </Form.Item>
            </Form>
          </CardStyled>
        </div>
        <div className="item">
          Hello World
        </div>
      </MainWrapStyled>
    </>
  )
}

export default Home
