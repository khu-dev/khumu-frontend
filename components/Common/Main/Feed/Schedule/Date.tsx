import { FC } from 'react'
import { css } from '@emotion/react'
import { CustomTitle } from '@components/Common/Title'
import { title as titleStyle, color } from '@constants/theme'
import { toMDdddd } from '@utils/day'
import { useLoading } from '@context/Loading'

interface Props {
  isValid: boolean
  isMore: boolean
  start: string
  end: string
}

const ScheduleDate: FC<Props> = ({ isValid, isMore, start, end }) => {
  const { isLoading } = useLoading()
  const startDate = toMDdddd.ko(start)
  const endDate = toMDdddd.ko(end)

  return (
    <CustomTitle
      size={titleStyle.M}
      isLoading={isLoading}
      css={css`
        margin-left: 24px;
        font-size: 14px;
        font-weight: 600;
        width: calc(100% - 25px);
        color: ${color.main};

        ${isMore &&
        css`
          margin-bottom: 7px;
        `};

        ${isLoading &&
        css`
          width: 180px;
          height: 14px;
        `}
      `}
    >
      {isValid ? `${startDate} ~ ${endDate}까지` : ''}
    </CustomTitle>
  )
}

export default ScheduleDate
