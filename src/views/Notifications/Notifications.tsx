import React from 'react';
import { fetchNotifications } from '@api/api-notifications';
import Swipe from '@components/Swipe';
import { NotiItem } from './NotiItem';

const Notifications = ({ list }) => {
  const handleDelete = async (docId) => {
    const { data } = await fetchNotifications.delete({
      docId,
    });

    if (data) {
      // fail
      alert(data?.message);
    }
  };

  return (
    <>
      {list.map((notiItem) => (
        <Swipe handleDelete={handleDelete}>
          <NotiItem>
            <NotiItem.Icon />
            <NotiItem.Contents>
              <NotiItem.Title title={notiItem.title} />
              <NotiItem.Kind kind={notiItem.kind} />
              <NotiItem.Content content={notiItem.content} />;
            </NotiItem.Contents>
            <NotiItem.Date date={notiItem.date} />
          </NotiItem>
        </Swipe>
      ))}
    </>
  );
};

export default Notifications;
