import React from 'react'
import { MyTitle } from '../Shared'
import { MyButton, MyButtonContainer } from '../Shared/MyButton'

const Study = () => (
  <>
    <MyTitle title="스터디" />
    <MyButtonContainer>
      <MyButton>모집글</MyButton>
      <MyButton>북마크</MyButton>
      <MyButton>댓글</MyButton>
    </MyButtonContainer>
  </>
)

export default Study
