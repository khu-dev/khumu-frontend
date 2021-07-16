import dayjs from 'dayjs';

export const convertDate = {
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
  Sun: '일',
};

export const getDiff = ({ day1, day2, type }) =>
  Math.abs(
    dayjs(dayjs(day1).format('YYYY-MM-DD')).diff(
      dayjs(day2).format('YYYY-MM-DD'),
      type,
    ),
  );

export const calculateDayDiff = ({ day1, day2 }) => {
  let result = '';

  const monthDiff = getDiff({ day1, day2, type: 'month' });
  if (monthDiff > 0) return `${monthDiff}달 전`;

  const weekDiff = getDiff({ day1, day2, type: 'week' });
  if (weekDiff > 0) return `${weekDiff}주 전`;

  const dayDiff = getDiff({ day1, day2, type: 'day' });
  if (dayDiff > 0) return dayDiff > 1 ? `${dayDiff}일 전` : `하루 전`;

  const hourDiff = getDiff({ day1, day2, type: 'hour' });
  if (hourDiff > 0) return `${hourDiff}시간 전`;

  const minuteDiff = getDiff({ day1, day2, type: 'minute' });
  if (minuteDiff >= 0) return minuteDiff > 0 ? `${minuteDiff}분 전` : `방금 전`;

  return result;
};

export const formatMonthDayDate = (day) => {
  const MonthDay = dayjs(day).format('M월 DD일');
  const Date = convertDate[dayjs(day).format('ddd')];

  return `${MonthDay}(${Date})`;
};
