import styled from '@emotion/styled';
import { box, color } from '@constants/theme';

const ScheduleShortCut = ({ title }) => {
  const handleShortCut = () => {};

  return <Button onClick={handleShortCut}>{title}</Button>;
};

export default ScheduleShortCut;

const Button = styled.button`
  width: 52px;
  height: 16px;
  position: absolute;
  right: -4px;
  bottom: 8px;
  font-size: 10px;
  font-weight: 400;
  color: ${color.white};
  background-color: ${color.gray4};
  border: none;
  border-radius: ${box.borderRadius02};
`;
