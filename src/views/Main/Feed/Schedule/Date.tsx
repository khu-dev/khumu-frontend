import { FC } from 'react'
import { css } from '@emotion/react'
import { CustomTitle } from '@components/Title'
import { title as titleStyle, color } from '@constants/theme'
import { toMDdddd } from '@utils/day'

interface Props {
  isValid: boolean
  isMore: boolean
  start: string
  end: string
}

const ScheduleDate: FC<Props> = ({ isValid, isMore, start, end }) => {
  const startDate = toMDdddd.ko(start)
  const endDate = toMDdddd.ko(end)

  return (
    <CustomTitle
      size={titleStyle.M}
      css={css`
        margin-left: 25px;
        font-size: 14px;
        font-weight: 600;
        width: calc(100% - 25px);
        color: ${color.main};

        ${isMore &&
        css`
          margin-bottom: 7px;
        `}
      `}
    >
      {isValid ? `${startDate} ~ ${endDate}까지` : ''}
    </CustomTitle>
  )
}

export default ScheduleDate
