import { FC } from 'react'
import styled from '@emotion/styled'

import { calculateDayDiff } from '@utils/day'
import { box, color } from '@constants/theme'

interface Props {
  day: string
}

const Day: FC<Props> = ({ day }) => (
  <NotiDay>{calculateDayDiff({ day1: day, day2: Date.now() })}</NotiDay>
)
export default Day

const NotiDay = styled.span`
  width: 32px;
  margin-right: ${box.margin};
  margin-bottom: 4px;
  font-size: 9px;
  color: ${color.gray3};

  display: flex;
  justify-content: center;
  align-items: flex-end;
`
