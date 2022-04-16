import styled from '@emotion/styled'
import { box, color, shadow } from '@constants/theme'
import { css } from '@emotion/react'
import { mainStyle as style } from '@components/Skeleton'

interface LoadingProps {
  isLoading?: boolean
}

const textOverflowHiddenStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Announcement = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 18px;

  * {
    color: ${color.black} !important;
  }
`

export const Body = styled.div<LoadingProps>`
  display: inline-block;
  flex-grow: 1;
  max-width: calc(100% - 24px);
  width: 100%;
  height: 42px;
  border-radius: ${box.borderRadius};
  border-top-left-radius: 0;
  position: relative;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: ${shadow.light};
  background-color: ${color.white};

  ${({ isLoading }) => (isLoading ? style.noticeItem : '')};
`

export const Title = styled.h3<LoadingProps>`
  font-weight: 600;
  font-size: 16px;

  ${({ isLoading }) => (isLoading ? style.noticeTitle : '')};
`

export const Content = styled.p<LoadingProps>`
  font-weight: 400;
  font-size: 13px;
  /* width: calc(100% - 32px); */
  width: 100%;
  ${textOverflowHiddenStyle};

  ${({ isLoading }) => (isLoading ? style.noticeContent : '')};
`

export const More = styled.span`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
