// import { useState } from 'react';
import { color } from '@constants/theme';
import { css } from '@emotion/react';

import QrcodeImage from './QrcodeImage';
import QrcodeProfile from './QrcodeProfile';
import QrcodeRefresh from './QrcodeRefresh';
import { QRCodeDataProps } from './type';

export default function Qrcode({ qrcode, profile }: QRCodeDataProps) {
  // const [QRCode, setQRCode] = useState(qrcode);

  // const handleRefresh = () => {};

  const csses = useStyles();
  return (
    <div css={csses.container}>
      <QrcodeImage qrcode={qrcode} />
      <QrcodeRefresh />
      <QrcodeProfile profile={profile} />
    </div>
  );
}

const useStyles = () => ({
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    flex-grow: 1;
    height: calc(100vh - 64px);
    width: 100%;
    background-color: ${color.main};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    color: ${color.white};
  `,
});
