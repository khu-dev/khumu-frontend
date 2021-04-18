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
    width: 80px;
    height: 20px;
    background-color: white;
    content: ' ';
    position: absolute;
    left: 14px;
    top: -21px;
    border-top-left-radius : ${theme.borderRadius};
    border-top-right-radius : ${theme.borderRadius};
    border: 1px solid white;
    ${
      props.selected !== 'lecture'
        ? `
    border-bottom : none;
    background-color : ${theme.color.main};
  `
        : null
    }
  }

  & > span {
    &::before {
      width: 80px;
      height: 20px;
      background-color: white;
      content: ' ';
      position: absolute;
      left: 99px;
      top: -21px;
      border-top-left-radius : ${theme.borderRadius};
      border-top-right-radius : ${theme.borderRadius};
      border : 1px solid white;
      ${
        props.selected !== 'calender'
          ? `
      border-bottom : none;
      background-color : ${theme.color.main};
    `
          : null
      }
  }
  `
      : null};
`;
