import styled from '@emotion/styled';
import { box, color } from '@constants/theme';
import Link from 'next/link';

export const MyButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 4px 0;
`;

export const MyButton = styled.div<{ isSingle?: boolean }>`
  width: ${({ isSingle }) => (isSingle ? '100%' : '32%')};
  height: ${({ isSingle }) => (isSingle ? '42px' : '68px')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  font-size: 16px;
  background-color: #4d4d4d;
  border-radius: ${box.borderRadius};
  margin-bottom: ${({ isSingle }) => (isSingle ? box.margin : 0)};
`;

export const LinkButton = ({ pathname, children }) => (
  <Link href={pathname}>
    <MyButton>{children}</MyButton>
  </Link>
);
