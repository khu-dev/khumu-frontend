import React from 'react';

// import Skeleton from '@components/Skeleton';
// import SkeletonMainItem from '@components/Skeleton/Main/Item';
import MainHeader from '@components/Header/Main';
import Feed from '@views/Main/Feed';
import Hot from '@views/Main/Hot';
import Club from '@views/Main/Club';
import Notice from '@views/Main/Notice';
// import Advertise from '@views/Main/Advertise';
import Shortcut from '@views/Main/Shortcut';
import { fetchNotifications } from '@api/api-notifications';
import { Notification } from '@interface/Notification';
import { fetchSchedule } from '@api/api-schedules';
import { Schedule } from '@interface/Schedule';

interface Results {
  notifications: Notification[];
  schedules: Schedule[];
}

interface Props {
  data: Results;
}

const MainPage = ({ data: { notifications, schedules } }: Props) => {
  return (
    <>
      <MainHeader title={'경희대 KHUMU'} notifications={notifications} />
      <Feed schedules={schedules} />
      {/* <Skeleton
        isLoading={isLoading}
        repeat={6}
        Skeleton={SkeletonMainItem}
        render={() => (
          <>
            <Notice />
            <Hot />
            <Advertise />
            <Club />
            <Shortcut />
          </>
        )}
      /> */}
      <Notice />
      <Hot />
      {/* <Advertise /> */}
      <Club />
      <Shortcut />
    </>
  );
};

export default MainPage;

export const getServerSideProps = async () => {
  const res = await Promise.all([
    fetchNotifications.select(),
    fetchSchedule.select(),
  ]);

  return {
    props: {
      data: {
        notifications: res[0].data?.data,
        schedules: res[1].data,
      },
    },
  };
};
