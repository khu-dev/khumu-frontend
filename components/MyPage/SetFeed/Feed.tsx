import { color, font } from '@constants/theme'
import { css } from '@emotion/react'
import { BsCaretRightFill } from 'react-icons/bs'
import { MyBox, MyTitle } from '../Shared'

const Feed = () => (
  <MyBox
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  >
    <MyTitle
      title={'피드 설정'}
      css={css`
        color: ${color.white};
      `}
    />
    <BsCaretRightFill style={{ fontSize: font.iconSize, color: color.white }} />
  </MyBox>
)

export default Feed
