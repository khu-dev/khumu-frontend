import { FC } from 'react'
import { IoRefreshOutline } from 'react-icons/io5'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { color } from '@constants/theme'

interface Props {
  onRefresh(): void
}

const Refresh: FC<Props> = ({ onRefresh }) => (
  <Container onClick={onRefresh}>
    <IoRefreshOutline css={iconStyle} />
  </Container>
)

export default Refresh

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;
  border-radius: 18px;
  background-color: ${color.white};
  color: ${color.main};
  margin: 0 auto;
`

const iconStyle = css`
  transform: rotate(180deg);
  font-size: 20px;
`
