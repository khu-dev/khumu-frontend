import { box } from '@constants/theme';
import React from 'react';

export default function MainSkeletonStyleTag() {
  return (
    <style jsx>{`
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
