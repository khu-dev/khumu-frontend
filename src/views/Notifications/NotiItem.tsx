import React from 'react';
import { calculateDayDiff } from 'src/utils/day';
import { Icons } from './Icons';
import * as s from './styled';

const Icon = ({ isRead }) => (
  <s.NotiIcon>
    <Icons type={''} css={s.iconStyle(isRead)} />
  </s.NotiIcon>
);

const Title = ({ title }) => <s.NotiTitle>{title}</s.NotiTitle>;
const Kind = ({ kind }) => <s.NotiKind>{kind}</s.NotiKind>;
const Description = ({ content }) => (
  <s.NotiDescription>{content}</s.NotiDescription>
);

const Day = ({ day }) => (
  <s.NotiDay>{calculateDayDiff({ day1: day, day2: Date.now() })}</s.NotiDay>
);

const Contents = ({ children }) => <s.NotiContent>{children}</s.NotiContent>;

const NotiItem = ({ children }) => <s.NotiContainer>{children}</s.NotiContainer>;

NotiItem.Icon = Icon;
NotiItem.Title = Title;
NotiItem.Kind = Kind;
NotiItem.Description = Description;
NotiItem.Day = Day;
NotiItem.Contents = Contents;

export { NotiItem };
