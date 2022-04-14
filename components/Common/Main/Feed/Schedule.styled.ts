import { box, color } from '@constants/theme'
import styled from '@emotion/styled'

export const Container = styled.ul<{ scheduleLength: number }>`
  width: calc(100vw - 48px);
  height: 75px;
  margin: 14px;
  margin-top: 8px;
  padding: 0 10px;
  background-color: ${color.white};
  border-radius: ${box.borderRadius02};
  overflow: hidden;
  position: relative;

  &.more {
    height: ${({ scheduleLength }) => {
      switch (scheduleLength) {
        case 1:
          return '75px'
        case 2:
          return '135px'
        case 3:
          return '204px'
      }
    }};
  }

  transition: height 0.5s;

  &:not(.loading)::before {
    content: 'i';
    border: 2px solid ${color.main};
    border-radius: 50%;
    color: ${color.main};
    display: block;
    width: 14px;
    height: 14px;
    text-align: center;
    line-height: 16px;
    font-size: 10px;
    font-weight: 700;

    position: absolute;
    top: 16px;
    left: 14px;
  }
`

export const Schedule = styled.li`
  margin: 16px 30px;
  list-style: none;

  p {
    font-size: 18px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 4px;

    &.loading {
      background-color: ${color.gray4};
    }
  }

  i {
    font-style: normal;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }
`

export const MoreButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 14px;
  padding: 3px 6px;
  border: none;
  border-radius: ${box.borderRadius02};
  background-color: ${color.gray3};
  font-size: 9px;
  color: ${color.white};
  cursor: pointer;
`
