import 'antd/dist/antd.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Layout, Typography } from 'antd'
import io from 'socket.io-client'
import { CSSProperties } from 'react'

const HeaderStyle: CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
}
const ContentStyle: CSSProperties = {
  height: 'calc(100vh - 70px)',
  paddingTop: '64px',
}
const socket = io('http://localhost:3544')
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Layout.Header style={HeaderStyle}>
        <Typography.Title level={3} className="koreawar">
          안내면 술래
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={ContentStyle}>
        <Component {...pageProps} socket={socket} />
      </Layout.Content>
      <Layout.Footer>
        <b>FreeVue</b> Copyright © 2021
      </Layout.Footer>
    </Layout>
  )
}

export default MyApp
