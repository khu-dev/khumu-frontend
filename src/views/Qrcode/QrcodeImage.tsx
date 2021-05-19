import { theme } from '@constants/theme';
import { css } from '@emotion/react';

export default function QrcodeImage() {
  const csses = useStyles();
  return <div css={csses.qrcode}>qrcode</div>;
}

const useStyles = () => ({
  qrcode: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 230px;
    border-radius: 20px;
    background-color: ${theme.color.white};
  `,
});
