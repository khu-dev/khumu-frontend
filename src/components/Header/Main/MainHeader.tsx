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
import styled from '@emotion/styled';
import { Title02 } from '@components/Title';

export default function MainHeader({ title, unreads }): JSX.Element {
  const unreadsLength = unreads.length;

  return (
    <div className={'header header-main'}>
      <Title02
        css={css`
          position: absolute;
          left: 0;
        `}
      >
        {title}
      </Title02>
      <LinkIcon pathname={'/qrcode'}>
        <AiOutlineQrcode
          size={font.iconSize}
          css={css`
            color: ${color.white};
            margin-right: 12px;
          `}
        />
      </LinkIcon>
      <LinkIcon pathname={'/notifications'} style={{ position: 'relative' }}>
        {unreadsLength > 0 && <Unreads>{unreads.length}</Unreads>}
        <AiOutlineBell
          size={font.iconSize}
          css={css`
            color: ${color.white};
          `}
        />
      </LinkIcon>
    </div>
  );
}

const Unreads = styled.span`
  position: absolute;
  top: -2px;
  right: -3px;
  color: ${color.main};
  font-size: 7px;
  background-color: ${color.white};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
`;
