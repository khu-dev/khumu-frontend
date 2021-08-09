import { box, color } from '@constants/theme';
import styled from '@emotion/styled';
import { BsPlayFill } from 'react-icons/bs';

export const MainSection = styled.div`
  width: ${box.marginWidth};
  margin: ${box.margin};
`;

const STitle = styled.p`
  color: ${color.main};
  font-weight: 600;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

export const Title = ({ title }) => (
  <STitle>
    {title}
    <BsPlayFill size={18} />
  </STitle>
);
