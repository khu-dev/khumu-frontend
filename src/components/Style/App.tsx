import { header } from '@constants/theme';
import React from 'react';

export default function AppStyleTag() {
  return (
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        text-decoration: none;
      }

      html,
      body,
      #__next {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: scroll;
        overflow-x: hidden;
      }

      #__next {
        overflow-y: scroll;
      }

      .app-outer-container {
        width: 100%;
        min-height: ${header.exceptHeight}; // header height: ;

        margin-top: ${header.height};

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;

        overflow-y: scroll;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }

      ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
    `}</style>
  );
}
