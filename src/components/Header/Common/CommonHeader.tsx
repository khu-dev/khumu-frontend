/**
 * @description main일 때의 헤더 내용물
 *                1) QRcode 링크
 *                2) 알림 링크
 */

import React from 'react';
import { IconType } from 'react-icons';
import { IoChevronBackOutline } from 'react-icons/io5';
import { css } from '@emotion/react';

import { color as theme } from '@constants/theme';
import LinkIcon from '@components/Link';
import { Title02 } from '@components/Title';

interface CommonHeaderProps {
  title: string;
  pathname: string;
  className?: string;
  Icon?: IconType; // default is back button icon
  backgroundColor?: string;
  color?: string;
}

export default function CommonHeader({
  title,
  pathname,
  className = '',
  Icon = IoChevronBackOutline,
  color = theme.main,
}: CommonHeaderProps) {
  const csses = useStyles();

  return (
    <div className={`header header-align-center ${className}`}>
      <LinkIcon pathname={pathname}>
        <Icon css={csses.icon} style={{ color }} />
      </LinkIcon>
      <Title02 css={csses.title} style={{ color }}>
        {title}
      </Title02>
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
      color: ${theme.gray4};
      font-size: 28px;
    `,
    title: css`
      color: ${theme.main};
    `,
  };
}
