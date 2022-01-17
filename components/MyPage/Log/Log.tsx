import React from 'react'
import { MyBox, MyRow, MyTitle } from '../Shared'

const Log = () => (
  <>
    <MyTitle title="활동 기록" />
    <MyBox>
      <MyRow>내가 작성한 게시글</MyRow>
      <MyRow>내가 댓글단 게시글</MyRow>
      <MyRow>북마크</MyRow>
    </MyBox>
  </>
)

export default Log
