import moment from 'moment';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { StyleType } from '@interfaces/style';
import { theme } from 'src/constants/theme';
import { convertDate } from '@components/utils/convert.date';

export const FeedContents = styled.div`
  display: flex;
  flex-direction: column;
  width: ${theme.margin.width};
  height: 100%;
  margin: 20px 32px;
  justify-content: space-evenly;
`;

export const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const LectureName = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
`;

const tab = (props: StyleType, type: string) => css`
  width: 80px;
  height: 25px;
  background-color: ${theme.color.white};
  content: '${type === 'lecture' ? '오늘의 강의' : '학사 일정'}';
  font-size: 14px;
  font-weight: 700;
  color: ${props.selected === type ? theme.color.main : theme.color.white};
  text-align: center;
  line-height: 28px;
  position: absolute;
  left: ${type === 'lecture' ? '12px' : '97px'};
  top: -26px;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
  border: 1px solid ${theme.color.white};
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

export const ScrollItemContainer = styled.div`
  width: ${(props: StyleType) =>
    props.isAdvertise ? `100%` : theme.margin.width};
  min-height: ${(props: StyleType) => props.minHeight || null};
  height: ${(props: StyleType) => props.height || '25vh'};
  margin: ${(props: StyleType) =>
    props.isAdvertise ? `${theme.margin.base} 0%` : theme.margin.base};
  background-color: ${(props: StyleType) =>
    props.backgroundColor || theme.color.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0;

  ${(props: StyleType) =>
    props.show || props.init
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
  background-color: ${(props: StyleType) =>
    props.backgroundColor || theme.color.white};
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
      color: ${theme.color.white};
      font-size: 14px;
      font-weight: 500;
      content: '${contentDate}';

      @media only screen and (min-width:280px) {
        opacity:0;
      }
    }
  }

  & > #calender {
    &::before {
      ${tab(props, 'calender')}
    }`
      : ''};
`;
