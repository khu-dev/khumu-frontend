import { css } from '@emotion/react'
import { color } from '@constants/theme'

const skeletonColor = `${color.gray5} !important;`

const skeleton = css`
  border-radius: 2px;
  color: ${color.transparency};
  background-color: ${skeletonColor};
`

const style = {
  title: css`
    span {
      height: 12px;
      min-width: 80px;
      ${skeleton};
    }

    svg {
      height: 12px;
      width: 12px;
      ${skeleton};
    }
  `,
  hotItem: css`
    background-color: ${color.transparency} !important;
    box-shadow: none;

    * {
      /* color: ${color.transparency} !important; */
      background-color: ${color.transparency} !important;
    }
  `,
  hotAuthor: css`
    height: 10px;
    width: 54px;
    ${skeleton};
  `,
  hotTime: css`
    height: 12px;
    width: 24px;
    ${skeleton};
  `,
  hotTitle: css`
    height: 17px;
    width: 70%;
    ${skeleton};
  `,
  hotContent: css`
    height: 15px;
    width: 48%;
    ${skeleton};
  `,
  hotBoardName: css`
    ${skeleton};
  `,
}

export default style