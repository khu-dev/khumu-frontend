/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { CustomTitle } from '@components/Title';
import { title, color } from '@constants/theme';
import { css } from '@emotion/react';
import { IoTimeOutline } from 'react-icons/io5';
import styled from '@emotion/styled';

interface LectureNameProps {
  name: string;
}

const LectureName = ({ name }: LectureNameProps) => (
  <Name>
    <IoTimeOutline css={iconStyle} />
    <CustomTitle size={title.L}>{name}</CustomTitle>
  </Name>
);

export default LectureName;

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const iconStyle = css`
  font-size: 24px;
  color: ${color.main};
  margin-right: 7px;
`;
