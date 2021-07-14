import { box, color, title } from '@constants/theme';
import React from 'react';

export default function MainStyleTag() {
  return (
    <style jsx>{`
      .main-feed-container {
        width: 100%;
        height: 250px;

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
        height: 110px;

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
        justify-content: space-evenly;
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

      .main-feed-tab-menu {
        position: absolute;
        top: -32px;

        padding: 0px 24px;

        width: ${box.paddingWidth};
        height: 33px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${color.white};
      }

      .feed-tab-container {
        display: flex;
        align-items: center;

        height: 100%;
      }

      .feed-tab {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 100%;

        margin-right: 3px;
        padding: 0 10px;

        background-color: ${color.main};
        color: ${color.white};

        border: 1px solid ${color.white};

        -webkit-transition: background-color 0.3s;
        -moz-transition: background-color 0.3s;
        -o-transition: background-color 0.3s;
        transition: background-color 0.3s;

        border-top-left-radius: ${box.borderRadius};
        border-top-right-radius: ${box.borderRadius};
        border-bottom: none;
      }

      .feed-tab-active {
        background-color: ${color.white};
        color: ${color.main};
        border: 1px solid ${color.main};
        border-bottom: none;

        -webkit-transition: background-color 0.3s;
        -moz-transition: background-color 0.3s;
        -o-transition: background-color 0.3s;
        transition: background-color 0.3s;
      }

      .feed-tab-date {
        @media screen and (max-width: 365px) {
          display: none;
        }
      }
    `}</style>
  );
}
