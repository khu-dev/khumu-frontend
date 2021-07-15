import React, { useState } from 'react';
import { fetchNotifications } from '@api/api-notifications';
import Swipe from '@components/Swipe';
import { NotiItem } from './NotiItem';

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
  };

  const handleRead = async (notiId: number | 'all' = 'all') => {
    const { data } = await fetchNotifications.read({ notiId });
    if (!isRead) setRead(true);
    console.log('read noti', data);
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
          <NotiItem.Content content={item.content} />
        </NotiItem.Contents>
        <NotiItem.Day day={item.created_at} />
      </NotiItem>
    </Swipe>
  );
};

export default Notifications;
