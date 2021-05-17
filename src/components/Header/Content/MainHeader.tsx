/**
 * @description main일 때의 헤더 내용물
 *                1) QRcode 링크
 *                2) 알림 링크
 */

import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
import { css } from '@emotion/react';

import { theme } from '@constants/theme';
import LinkIcon from '../Link';

export default function MainHeaderContent(): JSX.Element {
  const csses = useStyles();
  return (
    <div className={'header header-main'}>
      <LinkIcon pathname={'/qrcode'}>
        <AiOutlineQrcode size={theme.icon.fontSize} css={csses.qrcode} />
      </LinkIcon>
      <LinkIcon pathname={'/notice'}>
        <AiOutlineBell size={theme.icon.fontSize} css={csses.bell} />
      </LinkIcon>
    </div>
  );
}

function useStyles() {
  return {
    qrcode: css`
      color: ${theme.color.white};
      margin-right: 12px;
    `,
    bell: css`
      color: ${theme.color.white};
    `,
  };
}
