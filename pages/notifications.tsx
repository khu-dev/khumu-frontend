/**
 * @description 제작된 페이지 목록
 */
import React, { useState, useEffect } from 'react';
import CommonHeader from '@components/Header/Common';
import { color } from '@constants/theme';
import { fetchNotifications } from '@api/api-notifications';
import Notifications from '@views/Notifications';

const userId = 'wonk138';

export default function NotificationsPage() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const {
      data: { data },
    } = await fetchNotifications.select({
      userId,
    });

    if (data.length > 0) {
      setList(data);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <CommonHeader
        title={'알림'}
        pathname={'/'}
        className={'header-notifications'}
        color={color.main}
      />
      <Notifications list={list} />
    </>
  );
}
