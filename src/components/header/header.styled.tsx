import { theme } from '@components/utils/theme';
import { StyleType } from '@interfaces/style';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: ${theme.padding.width};
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.padding.base};
  background-color: ${(props: StyleType) =>
    props.isMain ? theme.color.main : 'white'};
  color: ${(props: StyleType) =>
    props.isMain ? theme.color.white : theme.color.black};
`;