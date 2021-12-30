//@ts-nocheck

import { FC } from 'react'
import { CustomTitle } from '@components/Title'
import { title as titleStyle, color } from '@constants/theme'
import { css } from '@emotion/react'
import { IoTimeOutline } from 'react-icons/io5'
import styled from '@emotion/styled'

interface Props {
  title: string
}

const ScheduleTitle: FC<Props> = ({ title }) => (
  <Container>
    <Icon>
      <IoTimeOutline css={iconStyle} />
    </Icon>
    <CustomTitle size={titleStyle.L}>{title}</CustomTitle>
  </Container>
)

export default ScheduleTitle

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const iconStyle = css`
  font-size: 20px;
  color: ${color.main};
  margin-right: 7px;
`
