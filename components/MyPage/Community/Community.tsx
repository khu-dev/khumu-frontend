import React from 'react'
import { MyTitle } from '../Shared'
import { MyButtonContainer, LinkButton } from '../Shared/MyButton'

const Community = () => (
  <>
    <MyTitle title="커뮤니티" />
    <div>
      <MyButtonContainer>
        <LinkButton pathname="/articles?board=liked">좋아요</LinkButton>
        <LinkButton pathname="/articles?board=bookmarked">북마크</LinkButton>
        <LinkButton pathname="/articles?board=commented">댓글</LinkButton>
      </MyButtonContainer>
      <LinkButton pathname="/articles?board=my" isSingle>
        내가 작성한 게시글
      </LinkButton>
    </div>
  </>
)

export default Community
