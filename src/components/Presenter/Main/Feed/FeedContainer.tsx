/**
 * @description main 화면의 상단 피드
 */

import React, { useState } from 'react';

import FeedTitle from './FeedTitle';
import FeedContent from './FeedContent';

export default function Feed() {
  return (
    <div className={'main-feed-container'}>
      <FeedTitle title={'나의 피드'} />
      <FeedContent />
    </div>
  );
}
