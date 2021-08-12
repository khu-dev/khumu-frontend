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

const ClubsPaging = ({ children }) => <s.Paging>{children}</s.Paging>;

ClubsPaging.Minus = Minus;
ClubsPaging.Current = Current;
ClubsPaging.Plus = Plus;

export default ClubsPaging;
