import { MyBox, MyRow, MyTitle } from '../Shared';

const Etc = () => (
  <MyBox>
    <MyTitle title={'기타'} />
    <MyRow>{'정보 동의 설정'}</MyRow>
    <MyRow>{'회원 탈퇴'}</MyRow>
    <MyRow>{'로그아웃'}</MyRow>
  </MyBox>
);

export default Etc;
