import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Card, Form, Input, Button } from 'antd'

const MainWrapStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CardStyled = styled(Card)`
  width: 300px;
`
const Login: React.FC = () => {
  const router = useRouter()
  const onFinish = (values: { name: string }) => {
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24)

    document.cookie = `freevue-rps-name=${values.name}; expires=${expires}`

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>가위바위보 | 메인 페이지</title>
      </Head>
      <MainWrapStyled>
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
              rules={[
                { required: true, message: '이름을 입력해주세요.' },
                { max: 10, message: '최대 10자까지 입력이 가능합니다.' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">로그인</Button>
            </Form.Item>
          </Form>
        </CardStyled>
      </MainWrapStyled>
    </>
  )
}

export default Login
