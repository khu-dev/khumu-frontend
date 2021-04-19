import { StyleType } from '@interfaces/style';
import moment from 'moment';
import styled from 'styled-components';
import { convertDate } from './convert.date';
import { theme } from './theme';

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

const tab = (props: StyleType, type: string) => `
  width: 80px;
  height: 25px;
  background-color: white;
  content: '${type === 'lecture' ? '오늘의 강의' : '학사 일정'}';
  font-size: 14px;
  color: ${props.selected === type ? theme.color.main : 'white'};
  text-align: center;
  line-height: 28px;
  position: absolute;
  left: ${type === 'lecture' ? '12px' : '97px'};
  top: -26px;
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
      ? `
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
      font-weight: 300;
      content: '${
        '[ ' +
        moment(new Date()).format('M/DD') +
        ' ' +
        convertDate[moment(new Date()).format('ddd')] +
        ' ]'
      }';
    }
  }

  & > #calender {
    &::before {
      ${tab(props, 'calender')}
  }
  
  `
      : null};
`;
