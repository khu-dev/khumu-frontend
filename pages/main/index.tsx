import React from 'react';

import { mainItemList } from '@constants/mainItemList';

import Feed from '@views/Main/Feed';
import Skeleton from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';

const MainPage = () => (
  <>
    <Feed />
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
