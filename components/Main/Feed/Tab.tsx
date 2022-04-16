import React from 'react'

import { toMDdddd } from '@utils/day'

import * as s from './Tab.styled'

export default function Tab() {
  const now = Date.now()
  const formatDate = toMDdddd.slash(now)

  return (
    <s.Container>
      <s.Tab>
        <s.TabContent>학사 일정</s.TabContent>
      </s.Tab>
      <s.Day>[ {formatDate} ]</s.Day>
    </s.Container>
  )
}
