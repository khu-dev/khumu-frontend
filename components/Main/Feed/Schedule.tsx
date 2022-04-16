import { FC, useState } from 'react'

import { useLoading } from '@context/Loading'

import { Schedule as ScheduleType } from '@interface/Schedule'

import * as s from './Schedule.styled'
import styles from './Schedule.module.scss'
import classNames from 'classnames'
import { toMDdddd } from '@utils/day'

const initialSchedule = [
  {
    id: 1,
    starts_at: String(Date.now()),
    ends_at: String(Date.now()),
    title: '',
  },
]

interface Props {
  schedules: ScheduleType[]
}

const Schedules: FC<Props> = ({ schedules }) => {
  const { isLoading } = useLoading()
  const [isMore, setMore] = useState<boolean>(false)

  const isInvalid = isLoading || schedules.length === 0
  const _schedules = (isInvalid ? initialSchedule : schedules).slice(0, 3)

  return (
    <s.Container
      className={classNames({
        more: isMore,
        loading: isLoading,
      })}
      scheduleLength={_schedules.length}
    >
      {_schedules.map((schedule) => (
        <li
          key={schedule.id}
          className={classNames(styles.schedule, {
            [styles.loading]: isLoading,
          })}
        >
          <p>{!isInvalid ? schedule.title : '공지사항이 존재하지 않습니다'}</p>
          <i>
            {!isInvalid
              ? `${toMDdddd.ko(schedule.starts_at)}부터 ${toMDdddd.ko(
                  schedule.ends_at,
                )}까지`
              : '공지사항 주제를 팔로우해주세요'}
          </i>
        </li>
      ))}
      {isLoading || (
        <s.MoreButton
          onClick={() => {
            setMore((prev) => !prev)
          }}
        >
          {isMore ? '숨기기' : '더보기'}
        </s.MoreButton>
      )}
    </s.Container>
  )
}

export default Schedules
