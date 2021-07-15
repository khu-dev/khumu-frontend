import React, { useState } from 'react';
import { fetchNotifications } from '@api/api-notifications';
import Swipe from '@components/Swipe';
import { NotiItem } from './NotiItem';
import { AndroidToast } from 'src/utils/android';

const Notifications = ({ item }) => {
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
    <Swipe
      key={item.id}
      handleClick={() => handleRead(item.id)}
      handleDelete={() => handleDelete(item.id)}
    >
      <NotiItem>
        <NotiItem.Icon isRead={isRead} />
        <NotiItem.Contents>
          <NotiItem.Title title={item.title} />
          <NotiItem.Kind kind={item.kind} />
          <NotiItem.Description content={item.content} />
        </NotiItem.Contents>
        <NotiItem.Day day={item.created_at} />
      </NotiItem>
    </Swipe>
  );
};

export default Notifications;
