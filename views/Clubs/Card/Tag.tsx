import { FC } from 'react'
import { css } from '@emotion/react'
import * as s from '../styled'
import styled from '@emotion/styled'

interface Props {
  tag: string
}

const Tag: FC<Props> = ({ tag }) => (
  <STag
    css={css`
      margin: 0;
    `}
  >
    {tag}
  </STag>
)

export default Tag

const STag = styled.div`
  ${s.tagStyle};
`
