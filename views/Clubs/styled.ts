import { box, color } from '@constants/theme'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const tagStyle = css`
  width: auto;
  max-width: 60px;
  height: 29px;
  border-radius: 15px;
  padding: 1px 12px;
  margin: 4px auto;
  margin-bottom: 8px;
  text-align: center;
  line-height: 29px;
  font-size: 14px;
  font-weight: 500;
  color: ${color.white};
  background-color: ${color.main};
  position: relative;
`

export const Filters = styled.div`
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: auto;
  text-align: center;
  padding: 12px;
  background-color: ${color.gray4};

  z-index: 999;

  border: 1px solid ${color.main};
  border-radius: ${box.borderRadius};
`

export const FilterItem = styled.div<{ isActive: boolean }>`
  ${tagStyle};
  display: inline-block;
  margin: 4px;
  border: 1px solid ${color.gray2};
  white-space: nowrap;

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${color.main};
          color: ${color.white};
        `
      : css`
          background-color: ${color.white};
          color: ${color.gray1};
        `}
`

export const Nothing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${color.gray4};
`

export const ClubsCard = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  width: 100vw;
  position: relative;

  & > .carousel-root {
    height: calc(100vh - 150px);
  }
  & > .carousel-slider {
    height: calc(100vh - 150px);
  }
`

export const ClubsSwiper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
`

export const Paging = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const buttonStyle = css`
  font-size: 18px;
`

export const disabledStyle = css`
  ${buttonStyle};
  color: ${color.gray4};
`

export const enabledStyle = css`
  ${buttonStyle};
  color: ${color.main};
`
