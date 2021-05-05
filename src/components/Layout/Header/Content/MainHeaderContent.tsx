import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';
import { css } from '@emotion/react';

import { theme } from '@constants/theme';
import LinkIcon from '../LinkIcon';

export default function MainHeaderContent(): JSX.Element {
  return (
    <>
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
    </>
  );
}
