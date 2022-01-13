import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { box, color } from '@constants/theme'
import { ResignButton } from '@enum/ResignButton'

export const ResignTitle = styled.h3`
  width: 70vw;
  min-width: 180px;
  max-width: 280px;
  font-size: 18px;
  color: ${color.main};
  margin-bottom: 12px;
`

export const ResignSummary = styled.p`
  font-size: 12px;
  color: ${color.gray1};
  text-align: justify;
  margin-bottom: 4px;
`

export const ResignButtonContainer = styled.div`
  margin-top: ${box.margin};
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`

interface ResignButtonProps {
  type: ResignButton
}

export const Button = styled.a<ResignButtonProps>`
  min-width: 30%;
  float: ${({ type }) => (type === ResignButton.CONFIRM ? 'left' : 'right')};
  border-radius: ${box.borderRadius};
  outline: none;
  border: 1px solid
    ${({ type }) => (type === ResignButton.CONFIRM ? color.gray3 : color.main)};
  background-color: ${({ type }) =>
    type === ResignButton.CONFIRM ? color.white : color.main};
  padding: 5px 8px;

  font-size: 14px;
  color: ${({ type }) =>
    type === ResignButton.CONFIRM ? color.gray3 : color.white};
  text-align: center;

  ${({ type }) =>
    type === ResignButton.CONFIRM
      ? css`
          margin-right: ${box.margin};
        `
      : ''}
`
