import { box, color } from '@constants/theme';
import { css } from '@emotion/react';
import React from 'react';
import { calculateDayDiff } from 'src/utils/day';

const Icon = ({ isRead }) => (
  <div
    css={css`
      width: calc(72px - 28px);
      height: ${box.marginWidth};
      margin: ${box.margin};
      margin-right: 0;
      background-color: ${isRead ? color.gray3 : color.main};
    `}
  >
    icon
  </div>
);

const Title = ({ title }) => (
  <p
    css={css`
      font-size: 14px;
    `}
  >
    {title}
  </p>
);
const Kind = ({ kind }) => (
  <p
    css={css`
      font-size: 13px;
      color: ${color.gray4};
    `}
  >
    {kind}
  </p>
);
const Content = ({ content }) => (
  <p
    css={css`
      font-size: 13px;
      font-weight: 200;
    `}
  >
    {content}
  </p>
);

const Day = ({ day }) => (
  <span
    css={css`
      position: absolute;
      right: ${box.margin};
      bottom: 4px;
      font-size: 11px;
      color: ${color.gray3};
    `}
  >
    {calculateDayDiff({ day1: day, day2: Date.now() })}
  </span>
);

const Contents = ({ children }) => (
  <div
    css={css`
      flex-grow: 1;
      height: calc(100% - 8px);
      margin: 4px ${box.margin};
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: stretch;
      position: relative;
    `}
  >
    {children}
  </div>
);

const NotiItem = ({ children }) => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
    `}
  >
    {children}
  </div>
);

NotiItem.Icon = Icon;
NotiItem.Title = Title;
NotiItem.Kind = Kind;
NotiItem.Content = Content;
NotiItem.Day = Day;
NotiItem.Contents = Contents;

export { NotiItem };
