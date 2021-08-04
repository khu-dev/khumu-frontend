import styled from '@emotion/styled';
import { box, color } from '@constants/theme';

const InfoContainer = styled.div`
  height: 67.5px;
  flex: 1;
  margin-left: ${box.margin};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    color: ${color.white};
    font-size: 14px;
  }
`;

interface ProfileProps {
  name: string;
  department: string;
  studentNumber: string;
}

const ProfileInfo = ({ name, department, studentNumber }: ProfileProps) => (
  <InfoContainer>
    <div>{name}</div>
    <div>{department}</div>
    <div>{studentNumber}</div>
  </InfoContainer>
);

export default ProfileInfo;
