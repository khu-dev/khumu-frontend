import { ReactNode } from 'react'
import styled from '@emotion/styled'

import { useIntersect } from '@hooks/userIntersect'
import { color } from '@constants/theme'

import Icon from './Icon'
import Title from './Title'
import Kind from './Kind'
import Description from './Description'
import Day from './Day'
import Content from './Content'

interface Props {
  index: number
  children: ReactNode
  fetchIndex: number
  infiniteFetch(): void
}

const NotiItem = ({ index, children, fetchIndex, infiniteFetch }: Props) => {
  const { ref } = useIntersect({ callback: infiniteFetch })

  return index === fetchIndex - 3 ? (
    <NotiContainer ref={ref}>{children}</NotiContainer>
  ) : (
    <NotiContainer>{children}</NotiContainer>
  )
}

NotiItem.Icon = Icon
NotiItem.Title = Title
NotiItem.Kind = Kind
NotiItem.Description = Description
NotiItem.Day = Day
NotiItem.Contents = Content

export default NotiItem

const NotiContainer = styled.div`
  width: 100%;
  height: 71.5px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 1px solid ${color.gray6};
`
