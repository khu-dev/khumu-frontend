import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { FeedbackApi } from '@api/FeedbackApi'
import { AndroidToast } from '@utils/android'

import * as s from './Send.styled'

const ENTER_KEY = 'Enter'

const Send = () => {
  const router = useRouter()
  const textRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    const text = textRef.current?.value.trim() || ''

    if (text.length === 0) {
      return AndroidToast('내용을 적어주세요')
    }

    FeedbackApi.create(text)
      .then(() => {
        AndroidToast('제출되었습니다')
        router.back()
      })
      .catch(() => {
        AndroidToast('제출에 실패하였습니다')
      })
  }

  useEffect(() => {
    if (!textRef.current) return

    textRef.current.focus()
  }, [textRef])

  return (
    <s.Container>
      <s.Textarea
        ref={textRef}
        type="text"
        name="feedback"
        placeholder="피드백을 입력해주세요"
        onKeyDown={(e) => {
          if (e.key === ENTER_KEY) {
            handleSend()
          }
        }}
      />
      <s.Button onClick={handleSend}>전송</s.Button>
    </s.Container>
  )
}

export default Send
