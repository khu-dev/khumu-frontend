import { useEffect, useRef } from 'react'

import { useFeedInput } from '@context/Feed/Input'
import * as s from './SearchArea.styled'
import { FeedbackButton } from 'src/enum/FeedbackButton'
import { AndroidToast } from '@utils/android'

const TextArea = () => {
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const { focus, handler } = useFeedInput()

  useEffect(() => {
    const basic = window.onpopstate
    const back = (e: PopStateEvent) => {
      e.preventDefault()
      handler.handleBlur()
    }

    window.onpopstate = back

    return () => {
      window.onpopstate = basic
    }
  }, [handler])

  return (
    <s.OuterContainer focus={focus}>
      <s.SearchLabel focus={focus}>
        <s.SearchForm>
          {focus || <s.DecorationSpan />}
          {focus ? (
            <s.TextArea
              id="main-search-input"
              name="search"
              placeholder="자유로운 피드백 부탁드립니다"
              onFocus={() => handler.handleFocus()}
              ref={contentRef}
            />
          ) : (
            <s.TextInput
              id="main-search-input"
              type="text"
              name="search"
              placeholder="자유로운 피드백 부탁드립니다"
              onFocus={() => handler.handleFocus()}
            />
          )}
        </s.SearchForm>
      </s.SearchLabel>
      {focus && (
        <label htmlFor="main-search-input">
          <s.FButton
            type={FeedbackButton.SUBMIT}
            onClick={() => {
              if (contentRef.current!.value.length === 0) {
                return AndroidToast('내용을 적어주세요')
              }

              handler.handleSubmit(contentRef.current!.value)
            }}
          >
            전송
          </s.FButton>
          <s.FButton
            type={FeedbackButton.CANCEL}
            onClick={() => handler.handleBlur()}
          >
            취소
          </s.FButton>
        </label>
      )}
    </s.OuterContainer>
  )
}

export default TextArea
