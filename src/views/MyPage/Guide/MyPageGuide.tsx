import { color } from '@constants/theme';
import { css } from '@emotion/react';
import { MyBox, MyRow, MyTitle } from '../Shared';

export default function MyPageGuide() {
  return (
    <MyBox>
      <MyTitle title={'이용 안내'} />
      <MyRow>
        <MyRow>{'앱 버전'}</MyRow>
        <MyRow
          css={css`
            width: auto;
            text-align: right;
            font-size: 12px;
            color: ${color.gray3};
          `}
        >
          {'6.1.4(20210402)'}
        </MyRow>
      </MyRow>
      <MyRow>{'문의하기'}</MyRow>
      <MyRow>{'공지사항'}</MyRow>
      <MyRow>{'서비스 이용약관'}</MyRow>
      <MyRow>{'개인정보 처리방침'}</MyRow>
      <MyRow>{'오픈소스 라이선스'}</MyRow>
    </MyBox>
  );
}
