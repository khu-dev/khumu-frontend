//@ts-nocheck

import FeedTab from './FeedTab'
import ScheduleTitle from './Schedule/Title'
import ScheduleDate from './Schedule/Date'
import ScheduleShortCut from './Schedule/ShortCut'

const Schedule = ({ children, isMore }) => (
  <div className={'main-feed-content ' + (isMore ? 'more' : '')}>
    {children}
  </div>
)

const FeedContent = ({ children, isMore }) => (
  <div className={'main-feed-content-container ' + (isMore ? 'more' : '')}>
    {children}
  </div>
)

FeedContent.Tab = FeedTab
FeedContent.Schedule = Schedule
FeedContent.Title = ScheduleTitle
FeedContent.Date = ScheduleDate
FeedContent.Link = ScheduleShortCut

export default FeedContent
