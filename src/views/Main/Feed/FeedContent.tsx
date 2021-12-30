import styled from '@emotion/styled'

import { box, color } from '@src/constants/theme'

import FeedTab from './FeedTab'
import ScheduleTitle from './Schedule/Title'
import ScheduleDate from './Schedule/Date'
import ScheduleShortCut from './Schedule/ShortCut'

const Schedule = ({ children, isMore }: any) => (
  <ScheduleContainer className={isMore ? 'more' : undefined}>
    {children}
  </ScheduleContainer>
)

const FeedContent = ({ children, isMore }: any) => (
  <ContentContainer className={isMore ? 'more' : undefined}>
    {children}
  </ContentContainer>
)

FeedContent.Tab = FeedTab
FeedContent.Schedule = Schedule
FeedContent.Title = ScheduleTitle
FeedContent.Date = ScheduleDate
FeedContent.Link = ScheduleShortCut

export default FeedContent

const ScheduleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: ${box.marginWidth};
  height: 100%;
  margin: 0px 32px;
  justify-content: center;
  background-color: ${color.white};

  &.more {
    height: 220px;
  }
`

const ContentContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: ${box.margin};

  width: ${box.marginWidth};
  height: 90px;

  border-radius: ${box.borderRadius};

  background-color: ${color.white};

  &.more {
    height: 220px;
    margin-top: 36px;
  }
`
