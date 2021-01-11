import '@emotion/react'
import { Socket } from 'socket.io-client'

export type TypeSocket = typeof Socket

export interface IThemeSet {
  primary: string
  gray: string
  white: string
}

export interface ITheme {
  theme: IThemeSet
}

declare module '@emotion/react' {
  export interface Theme extends IThemeSet {}
}
