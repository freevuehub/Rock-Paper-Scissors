import 'antd/dist/antd.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Layout, Typography } from 'antd'
import { ThemeProvider } from '@emotion/react'
import io from 'socket.io-client'
import { CSSProperties, useEffect, useState } from 'react'
import { ThemeSet } from '../utils'

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
const socket = io(`${process.env.API_PROTOCOL}${process.env.API_URL}`)
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const [cookie, setCookies] = useState()

  useEffect(() => {
    const cookieList = document.cookie.split(';')
    const cookies = Object.fromEntries(
      cookieList.map((item: string) => item.trim().split('='))
    )

    setCookies(cookies)

    if (cookies['freevue-rps-name'] === undefined && router.route !== '/login') {
      router.push('/login')
    }
  }, [router])

  return (
    <ThemeProvider theme={ThemeSet}>
      <Layout>
        <Layout.Header style={HeaderStyle}>
          <Typography.Title level={3} className="koreawar">
            안내면 술래
          </Typography.Title>
        </Layout.Header>
        <Layout.Content style={ContentStyle}>
          <Component {...pageProps} socket={socket} cookie={cookie} />
        </Layout.Content>
        <Layout.Footer>
          <b>FreeVue</b> Copyright © 2021
        </Layout.Footer>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
