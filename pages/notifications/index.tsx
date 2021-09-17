/**
 * @description 제작된 페이지 목록
 */
import React, { useState } from 'react';
import CommonHeader from '@components/Header/Common';
import { color } from '@constants/theme';
import { fetchNotifications } from '@api/api-notifications';
import Notifications, { Setting } from '@views/Notifications';
import { useRouter } from 'next/router';
import { Notification } from '@interface/Notification';

let windowHeight;
const elementHeight = 72;
if (process.browser && typeof window !== undefined) {
  windowHeight = window.innerHeight * 1.5;
}

interface Props {
  notifications: Notification[];
}

export default function NotificationsPage({ notifications }: Props) {
  const router = useRouter();
  const [length, setLength] = useState(Math.floor(windowHeight / elementHeight));

  const infiniteFetch = () => {
    setLength((prev) => prev + length);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <CommonHeader
        title={'알림'}
        handleRouter={goBack}
        className={'header-notifications'}
        color={color.main}
      />
      <Setting />
      <Notifications
        notifications={notifications?.slice(0, length)}
        fetchIndex={length}
        infiniteFetch={infiniteFetch}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await Promise.all([fetchNotifications.select()]);

  return {
    props: {
      notifications: res[0].data?.data || [],
    },
  };
};
