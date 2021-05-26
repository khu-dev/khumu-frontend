import { box, color } from '@constants/theme';
import React from 'react';

export default function SkeletonStyleTag() {
  return (
    <style jsx>{`
      @keyframes skeleton_keyframes {
        0% {
          background-color: ${color.gray4};
        }
        50% {
          background-color: ${color.gray5};
        }
        100% {
          background-color: ${color.gray4};
        }
      }

      @keyframes shine {
        to {
          background-position: 130% 0, /* move highlight to right */ 0 0;
        }
      }

      .skeleton {
        background-color: #eaeaea;
        border-radius: 3px;
        animation: skeleton_keyframes 2.5s infinite;
      }

      .skeleton-title-01 {
        width: 70px;
        height: 30px;

        margin-left: ${box.margin};
      }

      .skeleton-title-02 {
        width: 90px;
        height: 26px;

        margin-left: ${box.margin};
      }

      .skeleton-title-03 {
        width: 120px;
        height: 22px;

        margin-left: ${box.margin};
      }

      .skeleton-description-01 {
        width: ${box.marginWidth};
        height: 17px;

        margin-left: ${box.margin};
      }

      .skeleton-description-02 {
        width: ${box.marginWidth};
        height: 14px;

        margin-left: ${box.margin};
      }

      .skeleton-middle-container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        border-radius: ${box.borderRadius};
      }

      .skeleton-container {
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            hsla(0, 0%, 100%, 0.5) 50%,
            rgba(255, 255, 255, 0) 70%
          )
          ${color.gray6};
        background-repeat: repeat-y;
        background-size: 80px 500px;
        background-position: 0 0;
        animation: shine 1.4s infinite;
      }

      .main-skeleton-container {
        width: ${box.paddingWidth};
        height: 142px;

        padding: ${box.padding};

        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  );
}
