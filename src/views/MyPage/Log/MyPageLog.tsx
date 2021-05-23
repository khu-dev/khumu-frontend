import { MyBox, MyRow, MyTitle } from '../Shared';

export default function MyPageLog() {
  return (
    <MyBox>
      <MyTitle title={'활동 기록'} />
      <MyRow>{'내가 작성한 게시글'}</MyRow>
      <MyRow>{'내가 댓글단 게시글'}</MyRow>
      <MyRow>{'북마크'}</MyRow>
    </MyBox>
  );
}
