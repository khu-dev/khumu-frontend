/**
 * @description main일 때의 헤더 내용물
 *                1) QRcode 링크
 *                2) 알림 링크
 */

import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
import { css } from '@emotion/react';

import { theme } from '@constants/theme';
import { Header } from '../Header';
import LinkIcon from '../Link';

export default function MainHeaderContent(): JSX.Element {
  return (
    <Header
      css={css`
        justify-content: flex-end;
        background-color: ${theme.color.main};
        color: ${theme.color.white};
      `}
    >
      <LinkIcon pathname={'/qrcode'}>
        <AiOutlineQrcode
          size={theme.icon.fontSize}
          css={css`
            color: ${theme.color.white};
            margin-right: 12px;
          `}
        />
      </LinkIcon>
      <LinkIcon pathname={'/notice'}>
        <AiOutlineBell
          size={theme.icon.fontSize}
          css={css`
            color: ${theme.color.white};
          `}
        />
      </LinkIcon>
    </Header>
  );
}
