import moment from 'moment';
import styled, { css, keyframes } from 'styled-components';
import { convertDate } from '../convert.date';
import { theme } from './theme';
import { StyleType } from '@interfaces/style';

const tab = (props: StyleType, type: string) => css`
  width: 80px;
  height: 25px;
  background-color: white;
  content: '${type === 'lecture' ? '오늘의 강의' : '학사 일정'}';
  font-size: 14px;
  font-weight: 700;
  color: ${props.selected === type ? theme.color.main : 'white'};
  text-align: center;
  line-height: 28px;
  position: absolute;
  left: ${type === 'lecture' ? '12px' : '97px'};
  top: -26px;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
  border: 1px solid white;
  ${props.selected !== type
    ? `
  border-bottom : none;
  background-color : ${theme.color.main};
`
    : null}
`;

const scrollAnimation = keyframes`
from {
  opacity: 0;
  transform: translateY(80px);
}
to {
  opacity: 1;
  transform: none;
}
`;

const contentDate =
  '[ ' +
  moment(new Date()).format('M/DD') +
  ' ' +
  convertDate[moment(new Date()).format('ddd')] +
  ' ]';

export const OuterContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-width: 305px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ScrollItemContainer = styled.div`
  width: ${theme.margin.width};
  min-height: ${(props: StyleType) => props.minHeight || null};
  height: ${(props: StyleType) => props.height || '25vh'};
  margin: ${theme.margin.base};
  background-color: ${(props: StyleType) => props.backgroundColor || 'white'};
  border-radius: ${theme.borderRadius};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;

  ${(props: StyleType) =>
    !props.show
      ? css`
          opacity: 1;
          animation: ${scrollAnimation} 0.8s linear;
        `
      : css``};

  ${(props: StyleType) =>
    props.init
      ? css`
          opacity: 1;
          animation: ${scrollAnimation} 0.8s linear;
        `
      : css``};
`;

export const ItemContainer = styled.div`
  width: ${theme.margin.width};
  min-height: ${(props: StyleType) => props.minHeight || null};
  height: ${(props: StyleType) => props.height || '25vh'};
  margin: ${theme.margin.base};
  background-color: ${(props: StyleType) => props.backgroundColor || 'white'};
  border-radius: ${theme.borderRadius};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${(props: StyleType) =>
    props.isMain
      ? css`
    & > #lecture {
      &::before {
        ${tab(props, 'lecture')}
      }
    }

  & > #date {
    &::before {
      position: absolute;
      top: -20px;
      right: 12px;
      color: white;
      font-size: 14px;
      font-weight: 500;
      content: '${contentDate}';
    }
  }

  & > #calender {
    &::before {
      ${tab(props, 'calender')}
  }`
      : ''};
`;
