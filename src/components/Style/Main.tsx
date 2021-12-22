import { box, color, title } from '@constants/theme'
import React from 'react'

export default function MainStyleTag() {
  return (
    <style jsx>{`
      .main-feed-container {
        width: 100%;
        height: 240px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        position: relative;

        background-color: ${color.main};
      }

      .main-feed-title-container {
        width: calc(100% - 64px);
        height: 40px;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .main-feed-title {
        font-size: ${title.XL}px;
        color: ${color.white};
      }

      .main-feed-content-container {
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
      }

      .main-feed-content {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: ${box.marginWidth};
        height: 100%;
        margin: 0px 32px;
        justify-content: center;
        background-color: ${color.white};
      }

      .main-item-container {
        width: ${box.paddingWidth};
        height: 200px;

        padding: ${box.padding};
      }

      .main-item-content {
        width: 100%;
        height: 100%;

        border: 1px solid ${color.main};
        border-radius: ${box.borderRadius};
      }
    `}</style>
  )
}
