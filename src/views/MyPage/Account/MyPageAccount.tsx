import { MyBox, MyRow, MyTitle } from '../Shared';

export default function MyPageAccount() {
  return (
    <MyBox>
      <MyTitle title={'계정'} />
      <MyRow>{'아이디 변경'}</MyRow>
      <MyRow>{'비밀번호 변경'}</MyRow>
    </MyBox>
  );
}
