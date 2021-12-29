import { ChangeEventHandler, FC } from 'react'

import * as s from './styled'

interface Props {
  nickname: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Nickname: FC<Props> = ({ nickname, onChange }) => (
  <s.Form>
    <s.FormTitle>닉네임</s.FormTitle>
    <s.Input placeholder={nickname} onChange={onChange} name={'nickname'} />
  </s.Form>
)

export default Nickname
