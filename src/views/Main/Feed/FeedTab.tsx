import React from 'react'
import styled from '@emotion/styled'

import { box, color } from '@constants/theme'
import { toMDdddd } from '@utils/day'

export default function FeedTab() {
  const now = Date.now()
  const formatDate = toMDdddd.slash(now)

  return (
    <Container>
      <Tab>
        <TabContent>학사 일정</TabContent>
      </Tab>
      <Day>[ {formatDate} ]</Day>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: -32px;
  padding: 0px 24px;
  width: ${box.paddingWidth};
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Tab = styled.div`
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

const TabContent = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${color.main};
`

const Day = styled.span`
  color: ${color.white};
`
