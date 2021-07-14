import { IoRefreshOutline } from 'react-icons/io5';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from '@constants/theme';

const QrcodeRefresh = ({ handleRefresh }) => (
  <Container onClick={handleRefresh}>
    <IoRefreshOutline css={iconStyle} />
  </Container>
);

export default QrcodeRefresh;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 52px;
  border-radius: 26px;
  background-color: ${color.white};
  color: ${color.main};
`;

const iconStyle = css`
  transform: rotate(180deg);
  font-size: 30px;
`;
