import { color } from '@constants/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const contentMarginLeft = '24px'
const textOverflowHiddenStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const colorBlack = css`
  color: ${color.black};
`

export const HotItem = styled.div`
  height: 66px;
  width: 100%;
  padding: 6px 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: ${color.gray5};
  margin-bottom: 16px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`

export const Author = styled.p`
  font-size: 9px;
  font-weight: 200;
  margin-left: ${contentMarginLeft};

  ${textOverflowHiddenStyle};
`

export const TimeAgo = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: 300;
  top: 6px;
  right: 6px;
`

export const Title = styled.h3`
  height: 18px;
  margin: 0;
  margin-left: ${contentMarginLeft};
  font-size: 15px;
  font-weight: 400;

  ${textOverflowHiddenStyle};
`

export const Content = styled.p`
  height: 16px;
  width: calc(100% - 88px);
  margin: 0;
  margin-left: ${contentMarginLeft};
  font-size: 13px;
  font-weight: 300;

  ${textOverflowHiddenStyle};
`

export const BoardName = styled.span`
  position: absolute;
  right: 6px;
  bottom: 12px;
  font-size: 4px;
  font-weight: 300;
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
