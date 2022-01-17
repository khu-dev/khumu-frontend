import { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { IoTimeOutline } from 'react-icons/io5'
import { CustomTitle } from '@components/Common/Title'

import { title as titleStyle, color } from '@constants/theme'
import { useLoading } from '@context/Loading'

interface Props {
  title: string
}

const ScheduleTitle: FC<Props> = ({ title }) => {
  const { isLoading } = useLoading()

  return (
    <Container>
      <Icon>
        <IoTimeOutline
          css={css`
            ${iconStyle};
            ${isLoading
              ? css`
                  color: ${color.transparency};
                `
              : undefined};
          `}
        />
      </Icon>
      <CustomTitle size={titleStyle.L} isLoading={isLoading}>
        {title}
      </CustomTitle>
    </Container>
  )
}

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
