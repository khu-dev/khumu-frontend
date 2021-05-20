import React from 'react';
import MainSkeletonStyleTag from './style';

export default function SkeletonMainItem() {
  return (
    <>
      <MainSkeletonStyleTag />
      <div className={'main-skeleton-container'}>
        <div className={'skeleton-middle-container skeleton-container'}>
          <div className={'skeleton skeleton-title-02'} />
          <div className={'skeleton skeleton-description-01'} />
          <div className={'skeleton skeleton-description-01'} />
        </div>
      </div>
    </>
  );
}
