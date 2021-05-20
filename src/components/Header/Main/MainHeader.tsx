/**
 * @description main일 때의 헤더 내용물
 *                1) QRcode 링크
 *                2) 알림 링크
 */

import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
import { css } from '@emotion/react';

import { color, font } from '@constants/theme';
import LinkIcon from '@components/Link';

export default function MainHeader(): JSX.Element {
  const csses = useStyles();

  return (
    <div className={'header header-main'}>
      <LinkIcon pathname={'/qrcode'}>
        <AiOutlineQrcode size={font.iconSize} css={csses.qrcode} />
      </LinkIcon>
      <LinkIcon pathname={'/notice'}>
        <AiOutlineBell size={font.iconSize} css={csses.bell} />
      </LinkIcon>
    </div>
  );
}

function useStyles() {
  return {
    qrcode: css`
      color: ${color.white};
      margin-right: 12px;
    `,
    bell: css`
      color: ${color.white};
    `,
  };
}
