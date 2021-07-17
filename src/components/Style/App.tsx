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

      #__next {
        height: auto;
      }

      html,
      body {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow-x: hidden;
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
