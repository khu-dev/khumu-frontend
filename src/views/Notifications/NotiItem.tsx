import React from 'react';

const Icon = () => <div>icon</div>;

const Title = ({ title }) => <div>{title}</div>;
const Kind = ({ kind }) => <div>{kind}</div>;
const Content = ({ content }) => <div>{content}</div>;

const Date = ({ date }) => <div>{date}</div>;

const Contents = ({ children }) => <div>{children}</div>;

const NotiItem = ({ children }) => <div>{children}</div>;

NotiItem.Icon = Icon;
NotiItem.Title = Title;
NotiItem.Kind = Kind;
NotiItem.Content = Content;
NotiItem.Date = Date;
NotiItem.Contents = Contents;

export { NotiItem };
