import React from 'react';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';

import { theme } from '@constants/theme';
import LinkIcon from '../LinkIcon';

export default function MainHeaderContent(): JSX.Element {
  return (
    <>
      <LinkIcon pathname={'/qrcode'}>
        <AiOutlineQrcode
          size={theme.icon.fontSize}
          style={{ color: theme.color.white, marginRight: '12px' }}
        />
      </LinkIcon>
      <LinkIcon pathname={'/notice'}>
        <AiOutlineBell
          size={theme.icon.fontSize}
          style={{ color: theme.color.white }}
        />
      </LinkIcon>
    </>
  );
}
