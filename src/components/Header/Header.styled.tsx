//@ts-nocheck
import { theme } from 'src/constants/theme';
import { StyleType } from '@interfaces/style';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: ${theme.padding.width};
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${theme.padding.base};
  background-color: ${theme.color.main};
  color: ${theme.color.white};
`;
