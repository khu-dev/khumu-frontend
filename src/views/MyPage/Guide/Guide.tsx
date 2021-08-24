import { color } from '@constants/theme';
import { css } from '@emotion/react';
import { MyBox, MyRow, MyTitle, LinkRow } from '../Shared';

const Guide = () => (
  <MyBox>
    <MyTitle title={'이용 안내'} />
    <MyRow
      css={css`
        margin-top: 0;
      `}
    >
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
    <LinkRow pathname={'/announcements'}>{'공지사항'}</LinkRow>
    <MyRow>{'서비스 이용약관'}</MyRow>
    <MyRow>{'개인정보 처리방침'}</MyRow>
    <MyRow>{'오픈소스 라이선스'}</MyRow>
  </MyBox>
);

export default Guide;