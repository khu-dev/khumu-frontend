import { theme } from '@constants/theme';
import { css } from '@emotion/react';

import QrcodeImage from './QrcodeImage';
import QrcodeProfile from './QrcodeProfile';
import QrcodeRefresh from './QrcodeRefresh';

export default function Qrcode() {
  const csses = useStyles();
  return (
    <div css={csses.container}>
      <QrcodeImage />
      <QrcodeRefresh />
      <QrcodeProfile />
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
    width: 100%;
    background-color: ${theme.color.main};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    color: ${theme.color.white};
  `,
});
