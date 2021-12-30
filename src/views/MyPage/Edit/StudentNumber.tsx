import { useUser } from '@context/User'
import { AndroidToast } from '@utils/android'

import * as s from './styled'

const StudentNumber = () => {
  const {
    user: { student_number },
  } = useUser()

  return (
    <s.Form>
      <s.FormTitle>학번</s.FormTitle>
      <s.Input
        name="studentNumber"
        onClick={() => {
          AndroidToast('학번은 변경할 수 없습니다')
        }}
        placeholder={student_number}
        disabled
      />
    </s.Form>
  )
}

export default StudentNumber
