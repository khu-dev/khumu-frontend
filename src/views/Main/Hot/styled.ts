import { style } from '@components/Skeleton/Main'
import { box, color, shadow } from '@constants/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface LoadingProps {
  isLoading?: boolean
}

const contentMarginLeft = '12px'
const textOverflowHiddenStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const colorBlack = css`
  color: ${color.black};
`

export const HotItem = styled.div<LoadingProps>`
  height: 66px;
  width: 100%;
  padding: 6px 0;
  border-top-left-radius: ${box.borderRadius};
  border-bottom-left-radius: ${box.borderRadius};
  background-color: ${color.white};
  box-shadow: ${shadow.light};
  margin-bottom: 16px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;

  ${({ isLoading }) => (isLoading ? style.hotItem : '')};
`

export const Author = styled.p<LoadingProps>`
  font-size: 9px;
  font-weight: 200;
  margin-left: ${contentMarginLeft};

  ${textOverflowHiddenStyle};

  ${({ isLoading }) => (isLoading ? style.hotAuthor : '')};
`

export const TimeAgo = styled.span<LoadingProps>`
  position: absolute;
  font-size: 11px;
  font-weight: 300;
  top: 6px;
  right: 6px;

  ${({ isLoading }) => (isLoading ? style.hotTime : '')};
`

export const Title = styled.h3<LoadingProps>`
  height: 18px;
  margin: 0;
  margin-left: ${contentMarginLeft};
  font-size: 15px;
  font-weight: 400;

  ${textOverflowHiddenStyle};
  ${({ isLoading }) => (isLoading ? style.hotTitle : '')};
`

export const Content = styled.p<LoadingProps>`
  height: 16px;
  width: calc(100% - 88px);
  margin: 0;
  margin-left: ${contentMarginLeft};
  font-size: 13px;
  font-weight: 300;

  ${textOverflowHiddenStyle};
  ${({ isLoading }) => (isLoading ? style.hotContent : '')};
`

export const BoardName = styled.span<LoadingProps>`
  position: absolute;
  right: 6px;
  bottom: 12px;
  font-size: 10px;
  font-weight: 300;

  ${({ isLoading }) => (isLoading ? style.hotBoardName : '')};
`

export const Summary = styled.div`
  width: 72px;
  height: 18px;
  background-color: ${color.main};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  right: 0;
  bottom: -9px;

  border-radius: 9px;
  border-top-right-radius: 0;
`

export const SummaryItem = styled.span`
  font-size: 10px;
  color: ${color.white};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const iconStyle = css`
  color: ${color.white};
  font-size: 9px;
  margin-right: 4px;
`
