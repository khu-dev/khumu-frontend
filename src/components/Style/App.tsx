import { header } from '@constants/theme';
import React from 'react';

export default function AppStyleTag() {
  return (
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        overscroll-behavior: none;
      }

      html,
      body,
      #__next {
        width: 100%;
        height: 100%;
        position: relative;
      }

      html,
      body {
        overflow-x: hidden;
      }

      #__next {
        padding-right: 17px;
      }

      .app-outer-container {
        width: 100%;
        min-height: ${header.exceptHeight}; // header height: ;

        margin-top: ${header.height};

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
      }

      ::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  );
}
