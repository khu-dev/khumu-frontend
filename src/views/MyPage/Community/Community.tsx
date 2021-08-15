import React from 'react';
import { MyTitle } from '../Shared';
import { MyButton, MyButtonContainer } from '../Shared/MyButton';

const Community = () => (
  <>
    <MyTitle title={'커뮤니티'} />
    <div>
      <MyButtonContainer>
        <MyButton>좋아요</MyButton>
        <MyButton>북마크</MyButton>
        <MyButton>댓글</MyButton>
      </MyButtonContainer>
      <MyButton isSingle>내가 작성한 게시글</MyButton>
    </div>
  </>
);

export default Community;
