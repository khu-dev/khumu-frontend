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

export default function NotificationsPage() {
  const { token } = useToken();
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);

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
            {list?.map((item) => (
              <Notifications key={item.id} item={item} {...props} />
            ))}
          </>
        )}
      />
    </>
  );
}
