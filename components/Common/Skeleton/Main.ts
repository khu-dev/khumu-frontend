import { css } from '@emotion/react'
import { color } from '@constants/theme'
import { skeleton } from './Common'

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
    max-width: 150px;
    ${skeleton};
  `,
  hotContent: css`
    height: 15px;
    width: 88%;
    max-width: 270px;
    ${skeleton};
  `,
  hotBoardName: css`
    ${skeleton};
  `,
  noticeItem: css`
    background-color: ${color.transparency} !important;
    box-shadow: none;

    * {
      color: ${color.transparency} !important;
      background-color: ${color.transparency} !important;
    }
  `,
  noticeTitle: css`
    height: 17px;
    width: 70%;
    max-width: 150px;
    ${skeleton};
  `,
  noticeContent: css`
    height: 15px;
    width: 88%;
    max-width: 270px;
    ${skeleton};
  `,
  club: css`
    width: 22vw;
    max-width: 180px;
    height: 22vw;
    max-height: 180px;
    background-image: none;
    box-shadow: none;
    ${skeleton};
  `,
}

export default style
