/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import Swipe from '@components/Swipe';

export default function NotificationsPage() {
  return (
    <>
      <Swipe handleDelete={() => console.log('delete')}>hi</Swipe>
    </>
  );
}
