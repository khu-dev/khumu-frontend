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
      {list.map(
        ({
          kind,
          created_at,
          is_read,
          // recipient, reference,id,
          title,
          content,
        }) => (
          <Swipe handleDelete={handleDelete}>
            <NotiItem>
              <NotiItem.Icon isRead={is_read} />
              <NotiItem.Contents>
                <NotiItem.Title title={title} />
                <NotiItem.Kind kind={kind} />
                <NotiItem.Content content={content} />
              </NotiItem.Contents>
              <NotiItem.Day day={created_at} />
            </NotiItem>
          </Swipe>
        ),
      )}
    </>
  );
};

export default Notifications;
