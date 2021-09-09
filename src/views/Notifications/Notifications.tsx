import React, { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import { fetchNotifications } from '@api/api-notifications';
import { color } from '@constants/theme';
import NotificationSwiper from '@components/Swipe';
import { AndroidToast } from '@utils/android';
import { NotiItem } from './NotiItem';
import { Empty } from './Empty';

const Notification = ({ item, index, fetchIndex, infiniteFetch }) => {
  const [isRead, setRead] = useState(item.is_read);

  const handleDelete = async (notiId) => {
    const { data } = await fetchNotifications.delete({
      notiId,
    });

    if (data) {
      // fail
      alert(data?.message);
    }

    AndroidToast('삭제되었습니다');
  };

  const handleRead = async (notiId: number | 'all' = 'all') => {
    if (!isRead) {
      const { data } = await fetchNotifications.read({ notiId });
      setRead(true);
      console.log('read noti', data);
    }
  };

  return (
    <NotificationSwiper
      handleClick={() => handleRead(item.id)}
      handleDelete={() => handleDelete(item.id)}
    >
      <Link href={{ pathname: `/${item.reference}` }} passHref>
        <a
          target={'_blank'}
          rel={'noreferrer'}
          css={css`
            width: 100%;
            color: ${color.black};
          `}
        >
          <NotiItem
            index={index}
            fetchIndex={fetchIndex}
            infiniteFetch={infiniteFetch}
          >
            <NotiItem.Icon isRead={isRead} />
            <NotiItem.Contents>
              <NotiItem.Title title={item.title} />
              <NotiItem.Kind kind={item.kind} />
              <NotiItem.Description content={item.content} />
            </NotiItem.Contents>
            <NotiItem.Day day={item.created_at} />
          </NotiItem>
        </a>
      </Link>
    </NotificationSwiper>
  );
};

const Notifications = ({
  notifications,
  ...rest
}: {
  notifications: any[];
  fetchIndex: number;
  infiniteFetch: void;
}) => {
  React.useEffect(() => {
    fetchNotifications.read({ notiId: 'all' });
  }, []);

  return (
    <>
      {notifications.length > 0 ? (
        notifications.map((item, index) => (
          <Notification key={item.id} item={item} index={index} {...rest} />
        ))
      ) : (
        <Empty text={'현재 알림이 없습니다.'} />
      )}
    </>
  );
};

export default Notifications;
