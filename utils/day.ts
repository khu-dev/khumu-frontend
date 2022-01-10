import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

export const toMDdddd = {
  slash: (date: string | number) => {
    return dayjs(date).format('M/D dddd')
  },
  ko: (date: string | number) => {
    return dayjs(date).format('M월 D일 dddd')
  },
}

export const getDiff = ({ day1, day2, type }: any) =>
  Math.abs(
    dayjs(dayjs(day1).format('YYYY-MM-DD')).diff(
      dayjs(day2).format('YYYY-MM-DD'),
      type,
    ),
  )

export const calculateDayDiff = ({ day1, day2 }: any) => {
  const result = ''

  const monthDiff = getDiff({ day1, day2, type: 'month' })
  if (monthDiff > 0) return `${monthDiff}달 전`

  const weekDiff = getDiff({ day1, day2, type: 'week' })
  if (weekDiff > 0) return `${weekDiff}주 전`

  const dayDiff = getDiff({ day1, day2, type: 'day' })
  if (dayDiff > 0) return dayDiff > 1 ? `${dayDiff}일 전` : `하루 전`

  const hourDiff = getDiff({ day1, day2, type: 'hour' })
  if (hourDiff > 0) return `${hourDiff}시간 전`

  const minuteDiff = getDiff({ day1, day2, type: 'minute' })
  if (minuteDiff >= 0) return minuteDiff > 0 ? `${minuteDiff}분 전` : `방금 전`

  return result
}
