/**
 * @description 제작된 페이지 목록
 */
import React, { useState, useEffect } from 'react';
import CommonHeader from '@components/Header/Common';
import { color } from '@constants/theme';
import { fetchNotifications } from '@api/api-notifications';
import Skeleton from '@components/Skeleton';
import { useToken } from '@context/Token';
import SkeletonNotifications from '@components/Skeleton/Notifications';
import Notifications, { Setting } from '@views/Notifications';

let windowHeight;
const elementHeight = 72;
if (process.browser) {
  windowHeight = window.innerHeight * 1.5;
}

export default function NotificationsPage() {
  const { token } = useToken();
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [length, setLength] = useState(Math.floor(windowHeight / elementHeight));

  const infiniteFetch = () => {
    setLength((prev) => prev + length);
  };

  useEffect(() => {
    const fetchList = async () => {
      if (!isLoading) setLoading(true);

      const {
        data: { data },
      } = await fetchNotifications.select();

      if (data.length > 0) {
        setList(data);
        setLoading(false);
      }
    };

    token && fetchList();
  }, [token]);

  return (
    <>
      <CommonHeader
        title={'알림'}
        pathname={'/'}
        className={'header-notifications'}
        color={color.main}
      />
      <Setting />
      <Skeleton
        isLoading={isLoading}
        repeat={10}
        Skeleton={SkeletonNotifications}
        render={(props) => (
          <Notifications
            notifications={list?.slice(0, length)}
            fetchIndex={length}
            infiniteFetch={infiniteFetch}
            {...props}
          />
        )}
      />
    </>
  );
}
