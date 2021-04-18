import { StyleType } from '@interfaces/style';
import styled from 'styled-components';
import { theme } from './theme';

export const OuterContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const tab = (props: StyleType, type: string) => `
  width: 90px;
  height: 28px;
  background-color: white;
  content: '${type === 'lecture' ? '오늘의 강의' : '학사 일정'}';
  font-size: 16px;
  color: ${props.selected === type ? theme.color.main : 'white'};
  text-align: center;
  line-height: 32px;
  position: absolute;
  left: ${type === 'lecture' ? '14px' : '109px'};
  top: -29px;
  border-top-left-radius : ${theme.borderRadius};
  border-top-right-radius : ${theme.borderRadius};
  border: 1px solid white;
  ${
    props.selected !== type
      ? `
  border-bottom : none;
  background-color : ${theme.color.main};
`
      : null
  }
`;

export const ItemContainer = styled.div`
  width: ${theme.margin.width};
  height: ${(props: StyleType) => props.height || '25vh'};
  margin: ${theme.margin.base};
  background-color: ${(props: StyleType) => props.backgroundColor || 'white'};
  border-radius: ${theme.borderRadius};
  position: relative;

  ${(props: StyleType) =>
    props.isMain
      ? `
  &::before {
    ${tab(props, 'lecture')}
  }

  & > span {
    &::before {
      ${tab(props, 'calender')}
  }
  `
      : null};
`;
