import styled from '@emotion/styled';
import { color } from '@constants/theme';

const Button = styled.button`
  width: 76px;
  height: 28px;
  align-self: flex-end;
  border-radius: 20px;
  border: none;
  background-color: #00a08a;
  font-size: 14px;
  font-weight: 400;
  color: ${color.white};
`;

export default function ReleaseButton({
  title,
  handleRelease,
}: {
  title: string;
  handleRelease: () => void;
}) {
  return <Button onClick={handleRelease}>{title}</Button>;
}
