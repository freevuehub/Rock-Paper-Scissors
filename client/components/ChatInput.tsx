import { Button, Input  } from 'antd'
import styled from '@emotion/styled'
import { ChangeEvent, useState } from 'react'

interface IProps {
  onChat: Function
}

const ChatInputWrapStyled = styled.div`
  display: flex;
  width: 100%;
`
const InputStyled = styled(Input.TextArea)`
  flex: 1;
`
const ButtonStyled = styled(Button)`
  height: 100%;
`

const ChatInput: React.FC<IProps> = (props) => {
  const [message, setMessage] = useState<string>('')
  const [shift, setShift] = useState<boolean>(false)
  const onClick = () => {
    props.onChat(message)
    setMessage('')
  }
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }
  const onInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Shift') {
      setShift(true)
    }

    if (shift && event.key === 'Enter') {
      event.preventDefault()
      props.onChat(message)
      setMessage('')
    }

    if (shift) {
      setShift(false)
    }
  }

  return (
    <ChatInputWrapStyled>
      <InputStyled
        onChange={onChange}
        onKeyDown={onInputKeyDown}
        autoSize={{ minRows: 2, maxRows: 2 }}
        value={message}
      />
      <ButtonStyled onClick={onClick}>전송</ButtonStyled>
    </ChatInputWrapStyled>
  )
}

export default ChatInput
