import { useRouter } from 'next/router'
import * as s from './Feedback.styled'

const Feedback = () => {
  const router = useRouter()

  return (
    <s.Container>
      <s.Label
        onClick={() => {
          router.push('/feedback')
        }}
      >
        <s.Input>자유로운 피드백 부탁드립니다</s.Input>
      </s.Label>
    </s.Container>
  )
}

export default Feedback
