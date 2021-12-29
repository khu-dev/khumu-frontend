import styled from '@emotion/styled'
import { box, color } from '@constants/theme'
import { css } from '@emotion/react'

const textOverflowHiddenStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const NoticeItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 18px;
`

export const NoticeThumbnail = styled.div`
  display: inline-block;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${color.main};
  margin-right: 6px;
`

export const NoticeBody = styled.div`
  display: inline-block;
  flex-grow: 1;
  height: 40px;
  border: 1px solid ${color.main};
  border-radius: ${box.borderRadius};
  border-top-left-radius: 0;
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
`

export const Content = styled.p`
  font-weight: 400;
  font-size: 13px;
  width: calc(100% - 32px);
  ${textOverflowHiddenStyle};
`

export const More = styled.span`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
