import { MyBox, MyRow, MyTitle } from '../Shared';

export default function MyPageSetApp() {
  return (
    <MyBox>
      <MyTitle title={'앱 설정'} />
      <MyRow>{'알림 설정'}</MyRow>
      <MyRow>{'암호 잠금'}</MyRow>
    </MyBox>
  );
}
