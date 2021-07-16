import { box, color } from '@constants/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NotiContainer = styled.div`
  width: 100%;
  height: 71.5px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 1px solid ${color.gray6};
`;

export const NotiIcon = styled.div`
  width: calc(90px - 28px);
  height: ${box.marginWidth};
  margin: ${box.margin};
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const iconStyle = (isRead) => css`
  color: ${isRead ? color.gray5 : color.main};
  font-size: 32px;
`;

export const NotiContent = styled.div`
  flex-grow: 1;
  height: calc(100% - 16px);
  margin: 8px ${box.margin};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  position: relative;
`;

export const NotiTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const NotiKind = styled.p`
  font-size: 13px;
  color: ${color.gray4};
`;

export const NotiDescription = styled.p`
  font-size: 13px;
  font-weight: 200;
`;

export const NotiDay = styled.span`
  position: absolute;
  right: ${box.margin};
  bottom: 4px;
  font-size: 11px;
  color: ${color.gray3};
`;
