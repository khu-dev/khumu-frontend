/**
 * @description main일 때의 헤더 내용물
 *                1) QRcode 링크
 *                2) 알림 링크
 */

import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { css } from '@emotion/react';

import { color } from '@constants/theme';
import LinkIcon from '@components/Link';
import { Title02 } from '@components/Title';

export default function QrcodeHeader({ title }: { title: string }) {
  const csses = useStyles();

  return (
    <div className={'header header-align-center'}>
      <LinkIcon pathname={'/'}>
        <IoChevronBackOutline css={csses.icon} />
      </LinkIcon>
      <Title02 css={csses.title}>{title}</Title02>
    </div>
  );
}

function useStyles() {
  return {
    icon: css`
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: ${color.gray4};
      font-size: 28px;
    `,
    title: css`
      color: ${color.main};
    `,
  };
}
