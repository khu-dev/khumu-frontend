//@ts-nocheck

import { color } from '@constants/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const elementHeight = '72px'

export const Swiper = styled.div<{
  isDelete: boolean
  isEvent: boolean
}>`
  width: 100vw;
  height: ${elementHeight};

  position: absolute;
  top: 0;
  left: 0;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  z-index: 2;

  ${({ isEvent }) =>
    isEvent
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
`

export const DeleteButton = styled.span<{
  isDelete?: boolean
  isEvent: boolean
  isMoving: boolean
}>`
  width: 72px;
  height: ${elementHeight};
  line-height: ${elementHeight};
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;

  background-color: ${color.main};
  color: ${color.white};
  text-align: center;

  ${({ isDelete }) =>
    isDelete
      ? css`
          overflow: hidden;
          width: 100vw;
          transform: translateX(-100%);
          transition: width 0.8s, transform 0.4s;
        `
      : css``}
`
