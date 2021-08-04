import React from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import * as s from './styled';

const Minus = ({ handleClick, isEnable }) => (
  <IoChevronBackOutline
    onClick={handleClick}
    css={isEnable ? s.enabledStyle : s.disabledStyle}
  />
);

const Current = ({ page }) => <span>{page}</span>;

const Plus = ({ handleClick, isEnable }) => (
  <IoChevronForwardOutline
    onClick={handleClick}
    css={isEnable ? s.enabledStyle : s.disabledStyle}
  />
);

const ClubPaging = ({ children }) => <s.Paging>{children}</s.Paging>;

ClubPaging.Minus = Minus;
ClubPaging.Current = Current;
ClubPaging.Plus = Plus;

export default ClubPaging;
