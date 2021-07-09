/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import Swipe from '@components/Swipe';
import CommonHeader from '@components/Header/Common';
import { color } from '@constants/theme';

export default function NotificationsPage() {
  return (
    <>
      <CommonHeader
        title={'알림'}
        pathname={'/'}
        className={'header-notifications'}
        color={color.main}
      />
      <Swipe handleDelete={() => console.log('delete')}>hi</Swipe>
    </>
  );
}
