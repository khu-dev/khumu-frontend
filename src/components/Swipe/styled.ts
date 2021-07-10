import { color } from '@constants/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const elementHeight = '64px';
let innerWidth;
if (typeof window !== 'undefined') {
  // detect window screen width function
  innerWidth = window.innerWidth;
  console.log(innerWidth);
}

export const Swiper = styled.div<{
  isMoving: boolean;
  isDelete: boolean;
  isEvent: boolean;
  gap: number;
}>`
  min-width: ${innerWidth ? `${innerWidth}px` : `100vw`};
  height: ${elementHeight};

  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};

  ${({ isMoving, isEvent, gap }) =>
    isMoving
      ? css`
          transform: translate(-${gap}px);
          ${gap <= 0
            ? css`
                transform: none;
                transition: all 0.5s;
              `
            : ``}
        `
      : isEvent
      ? css`
          transform: translateX(-72px);
          transition: all 0.5s;
        `
      : css`
          transform: translateX(0);
          transition: all 0.5s;
        `}

  ${({ isDelete }) =>
    isDelete
      ? css`
          overflow: hidden;
          transform: translate(-130%);
          transition: transform 0.8s;
        `
      : css``}
`;

export const DeleteButton = styled.span<{
  isMoving: boolean;
  isDelete: boolean;
  isEvent: boolean;
  gap: number;
}>`
  height: ${elementHeight};
  line-height: ${elementHeight};
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${color.main};
  color: ${color.white};
  text-align: center;

  ${({ isMoving, isEvent, gap }) => {
    console.log('hi', isMoving, isEvent, gap);

    return isMoving
      ? gap > 0
        ? css`
            transform: none;
            width: ${gap}px;
          `
        : !isEvent
        ? css`
            transform: translateX(72px);
            width: 72px;
            transition: all 0.5s;
          `
        : css``
      : isEvent
      ? css`
          transform: none;
          width: 72px;
          transition: all 0.5s;
        `
      : css`
          transform: translateX(72px);
          width: 72px;
          transition: all 0.5s;
        `;
  }};
`;
