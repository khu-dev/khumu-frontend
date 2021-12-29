import { FC } from 'react'

import { AndroidToast } from '@src/utils/android'

import * as s from './styled'

interface Props {
  studentNumber: string
}

const StudentNumber: FC<Props> = ({ studentNumber }) => (
  <s.Form>
    <s.FormTitle>학번</s.FormTitle>
    <s.Input
      name="studentNumber"
      onClick={() => {
        AndroidToast('학번은 변경할 수 없습니다')
      }}
      placeholder={studentNumber}
      disabled
    />
  </s.Form>
)

export default StudentNumber
