import { theme } from '@constants/theme';
import { css } from '@emotion/react';
import { IoRefreshOutline } from 'react-icons/io5';

export default function QrcodeRefresh() {
  const csses = useStyles();
  return (
    <div css={csses.refresh}>
      <IoRefreshOutline css={csses.refreshIcon} />
    </div>
  );
}

const useStyles = () => ({
  refresh: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 52px;
    border-radius: 26px;
    background-color: ${theme.color.white};
    color: ${theme.color.main};
  `,
  refreshIcon: css`
    transform: rotate(180deg);
    font-size: 30px;
  `,
});
