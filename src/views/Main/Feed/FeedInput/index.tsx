//@ts-nocheck

import React, { useEffect } from 'react'
import { css } from '@emotion/react'

import { useFeedInput } from '@context/Feed/Input'
import { color } from '@constants/theme'
import { Title03 } from '@components/Title'
import * as s from './SearchArea.styled'
import { FeedbackButton } from 'src/enum/FeedbackButton'
import { AndroidToast } from '@utils/android'

const Title = ({ title }) => (
  <Title03
    css={css`
      margin-top: 4px;
      margin-bottom: 12px;
      color: ${color.white};
    `}
  >
    {title}
  </Title03>
)

const TextArea = ({ placeholder }) => {
  const contentRef = React.useRef<HTMLTextAreaElement>(null)
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
  }, [])

  return (
    <>
      <s.SearchLabel className={'main-feed-title-container'} focus={focus}>
        <s.SearchForm>
          {focus || <s.DecorationSpan />}
          {focus ? (
            <s.TextArea
              id={'main-search-input'}
              name={'search'}
              placeholder={placeholder}
              onFocus={() => handler.handleFocus()}
              ref={contentRef}
            />
          ) : (
            <s.TextInput
              id={'main-search-input'}
              type={'text'}
              name={'search'}
              placeholder={placeholder}
              onFocus={() => handler.handleFocus()}
            />
          )}
        </s.SearchForm>
      </s.SearchLabel>
      {focus && (
        <label htmlFor={'main-search-input'}>
          <s.FButton
            type={FeedbackButton.SUBMIT}
            onClick={() => {
              if (contentRef.current.value.length === 0)
                return AndroidToast('내용을 적어주세요')
              handler.handleSubmit(contentRef.current.value)
            }}
          >
            {'전송'}
          </s.FButton>
          <s.FButton
            type={FeedbackButton.CANCEL}
            onClick={() => handler.handleBlur()}
          >
            {'취소'}
          </s.FButton>
        </label>
      )}
    </>
  )
}

const FeedInput = ({ children }) => {
  const { focus } = useFeedInput()

  return <s.OuterContainer focus={focus}>{children}</s.OuterContainer>
}

FeedInput.Title = Title
FeedInput.TextArea = TextArea

export default FeedInput
