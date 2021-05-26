import React from 'react';

import styled from '@emotion/styled';
import { box, color } from '@constants/theme';

const InfoContainer = styled.div`
  height: 18vw;
  flex: 1;
  margin-left: ${box.margin};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  & > div {
    color: ${color.white};
    font-size: 17px;
  }
`;

interface ProfileProps {
  name: string;
  department: string;
  studentNumber: string;
}

export default function ProfileInfo({
  name,
  department,
  studentNumber,
}: ProfileProps) {
  return (
    <InfoContainer>
      <div>{name}</div>
      <div>{department}</div>
      <div>{studentNumber}</div>
    </InfoContainer>
  );
}
