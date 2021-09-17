/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { CustomTitle } from '@components/Title';
import { title as titleStyle, color } from '@constants/theme';
import { css } from '@emotion/react';
import { IoTimeOutline } from 'react-icons/io5';
import styled from '@emotion/styled';

const ScheduleTitle = ({ title, isMore }) => (
  <Container isMore={isMore}>
    <Icon>
      <IoTimeOutline css={iconStyle} />
    </Icon>
    <CustomTitle size={titleStyle.L}>{title}</CustomTitle>
  </Container>
);

export default ScheduleTitle;

const Container = styled.div<{ isMore: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;

  ${({ isMore }) =>
    isMore &&
    css`
      margin-top: 7px;
    `}
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const iconStyle = css`
  font-size: 20px;
  color: ${color.main};
  margin-right: 7px;
`;
