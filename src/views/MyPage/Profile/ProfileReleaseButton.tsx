import styled from '@emotion/styled';
import { color } from '@constants/theme';

const Button = styled.button`
  width: 76px;
  height: 23px;
  align-self: flex-end;
  border-radius: 20px;
  border: none;
  background-color: ${color.white};
  font-size: 10px;
  font-weight: 400;
  color: #4d4d4d;
`;

const ReleaseButton = ({
  title,
  handleRelease,
}: {
  title: string;
  handleRelease: () => void;
}) => <Button onClick={handleRelease}>{title}</Button>;

export default ReleaseButton;
