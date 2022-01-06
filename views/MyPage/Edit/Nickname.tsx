import { FC } from 'react'

import * as s from './styled'

interface Props {
  value: string
  onChange(name: string, value: string): void
}

const Nickname: FC<Props> = ({ value, onChange }) => (
  <s.Form>
    <s.FormTitle>닉네임</s.FormTitle>
    <s.Input
      placeholder={value}
      name="nickname"
      onChange={(e) => {
        const { name, value } = e.target
        onChange(name, value)
      }}
    />
  </s.Form>
)

export default Nickname
