import React from 'react';

import { mainItemList } from '@constants/mainItemList';

import Feed from '@views/Main/Feed';
import Skeleton from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';
import { fetchSchedule } from '@api/api-schedules';

const MainPage = ({ schedules }) => (
  <>
    <Feed schedule={schedules[0]} />
    <Skeleton
      isLoading={true}
      repeat={6}
      Skeleton={SkeletonMainItem}
      render={(props: any) => (
        <>
          {mainItemList.map((_, idx: number) => (
            <div className={'main-item-container'} key={idx}>
              <div className={'main-item-content'} {...props}>
                hi
              </div>
            </div>
          ))}
        </>
      )}
    />
  </>
);

export default MainPage;

export const getServerSideProps = async () => {
  const { data } = await fetchSchedule();
  const initialSchedule = {
    id: 1,
    starts_at: Date.now(),
    ends_at: Date.now(),
    title: '',
  };

  return {
    props: {
      schedules: data || [initialSchedule],
    },
  };
};
