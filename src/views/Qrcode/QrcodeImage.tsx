import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';

import { color } from '@constants/theme';
import { exampleData } from '@constants/data';
import QRCode from 'qrcode';

export default function QrcodeImage() {
  const canvasRef = useRef(null);
  const csses = useStyles();

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, exampleData, (error) => {
      if (error) console.error(error);
    });
  }, []);

  return (
    <div css={csses.qrcode}>
      <canvas css={csses.canvas} ref={canvasRef} />
    </div>
  );
}

const useStyles = () => ({
  qrcode: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 230px;
    border-radius: 20px;
    background-color: ${color.white};
    overflow: hidden;
  `,
  canvas: css`
    width: 100%;
    height: 100%;
    transform: scale(1.8);
  `,
});
