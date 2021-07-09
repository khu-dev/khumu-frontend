import { color } from '@constants/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const elementHeight = '64px';

export const SwipeContainer = styled.div<{
  isMoving: boolean;
  isDelete: boolean;
  isEvent: boolean;
  gap: number;
}>`
  position: relative;
  width: 100%;
  height: ${elementHeight};

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isMoving, isEvent, gap }) =>
    isMoving || gap <= 72
      ? css`
          transform: translate(-${gap}px);
          ${gap <= 0
            ? css`
                transition: all 0.4s;
              `
            : gap >= 36 && !isMoving
            ? css`
                transform: translate(-72px);
                transition: all 0.4s;
              `
            : ``}
        `
      : isEvent
      ? css`
          transition: all 0.3s;
          transform: translateX(-72px);
        `
      : css`
          transition: all 0.4s;
          transform: translateX(0);
        `}

  ${({ isDelete }) =>
    isDelete
      ? css`
          overflow: hidden;
          transform: translate(-130%);
          transition: transform 0.5s;
        `
      : ``}

  & > span {
    width: 72px;
    height: ${elementHeight};
    line-height: ${elementHeight};
    background-color: ${color.main};
    color: ${color.white};
    text-align: center;

    position: absolute;
    right: -72px;
    top: 0;
  }
`;
