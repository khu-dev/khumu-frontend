import styled from '@emotion/styled'

import { color } from '@constants/theme'

import { Schedule as ScheduleType } from '@interface/Schedule'

import Tab from './Tab'
import Feedback from './Feedback'
import Schedule from './Schedule'

interface Props {
  schedules: ScheduleType[]
}

const Feed = ({ schedules }: Props) => {
  return (
    <Container>
      <Feedback />
      <Tab />
      <Schedule schedules={schedules} />
    </Container>
  )
}

export default Feed

const Container = styled.div`
  width: 100%;
  min-height: 180px;
  height: auto;

  position: relative;

  background-color: ${color.main};

  transition: height 0.5s;
`
