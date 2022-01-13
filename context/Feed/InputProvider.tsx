import { ReactNode, useState } from 'react'

import { FeedbackApi } from '@api/FeedbackApi'
import { AndroidToast } from '@utils/android'

import { InputContext } from './InputContext'

interface Props {
  children: ReactNode
}

const InputProvider = ({ children }: Props) => {
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  const handleSubmit = (content: string) => {
    FeedbackApi.create(content).then(() => {
      AndroidToast('제출되었습니다')
      handleBlur()
    })
  }

  return (
    <InputContext.Provider
      value={{
        focus,
        handler: {
          handleFocus,
          handleBlur,
          handleSubmit,
        },
      }}
    >
      {children}
    </InputContext.Provider>
  )
}

export default InputProvider
