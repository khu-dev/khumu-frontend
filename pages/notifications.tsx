/**
 * @description 제작된 페이지 목록
 */
import React, { useState, useEffect } from 'react';
import CommonHeader from '@components/Header/Common';
import { color } from '@constants/theme';
import { fetchNotifications } from '@api/api-notifications';
import Notifications from '@views/Notifications';
import Skeleton from '@components/Skeleton';
import { useToken } from 'src/context/Token';
import SkeletonNotifications from '@components/Skeleton/Notifications';

const userId = 'wonk138';

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

  const fetchList = async () => {
    if (!isLoading) setLoading(true);

    const {
      data: { data },
    } = await fetchNotifications.select({
      userId,
    });

    if (data.length > 0) {
      setList(data);
      setLoading(false);
    }
  };

  const infiniteFetch = () => {
    setLength((prev) => prev + length);
  };

  useEffect(() => {
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
      <Skeleton
        isLoading={isLoading}
        repeat={10}
        Skeleton={SkeletonNotifications}
        render={(props) => (
          <>
            {list?.slice(0, length).map((item, index) => (
              <Notifications
                key={item.id}
                item={item}
                index={index}
                fetchIndex={length}
                infiniteFetch={infiniteFetch}
                {...props}
              />
            ))}
          </>
        )}
      />
    </>
  );
}
