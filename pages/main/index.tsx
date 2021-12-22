import React, { useEffect, useState } from 'react';

import Skeleton from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';
import { MainHeader } from '@src/components';
import { Feed, Hot, Club, Notice, Shortcut, Advertise } from '@views/Main';
import { ScheduleApi, NotificationApi, ArticleApi } from '@src/api';
import { useToken } from '@context/Token';
import { Notification, Schedule, HotArticle } from '@src/interface';

const MainPage = () => {
  const { token } = useToken();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    notifications: Notification[];
    schedules: Schedule[];
    hots: HotArticle[];
  }>({ notifications: [], schedules: [], hots: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await Promise.all([
        NotificationApi.query(),
        ScheduleApi.select(),
        ArticleApi.hot(),
      ]);

      if (res[0].status === 200) {
        setData({
          notifications: res[0].data?.data,
          schedules: res[1].data,
          hots: res[2].data?.data,
        });
        setLoading(false);
      }
    };

    token && fetchData();
  }, [token]);

  const { notifications, schedules, hots } = data;

  return (
    <>
      <MainHeader title={'경희대 KHUMU'} notifications={notifications} />
      <Feed schedules={schedules} />
      <Skeleton
        isLoading={loading}
        repeat={6}
        Skeleton={SkeletonMainItem}
        render={() => (
          <>
            <Notice />
            <Hot hots={hots} />
            <Advertise />
            <Club />
            <Shortcut />
          </>
        )}
      />
    </>
  );
};

export default MainPage;
