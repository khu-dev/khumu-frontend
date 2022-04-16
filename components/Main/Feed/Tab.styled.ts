import styled from '@emotion/styled'

import { box, color } from '@constants/theme'

export const Container = styled.div`
  padding: 0px 24px;
  width: calc(100vw - 48px);
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(8px);
`

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 100%;

  margin-right: 3px;
  padding: 0 10px;
  background-color: ${color.white};

  border: 1px solid ${color.main};

  border-top-left-radius: ${box.borderRadius};
  border-top-right-radius: ${box.borderRadius};
  border-bottom: none;
`

export const TabContent = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${color.main};
`

export const Day = styled.span`
  color: ${color.white};
`
