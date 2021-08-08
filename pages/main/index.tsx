import React from 'react';

import Feed from '@views/Main/Feed';
import Skeleton from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';
import Hot from '@views/Main/Hot';
import Club from '@views/Main/Club';
import Notice from '@views/Main/Notice';
import Advertise from '@views/Main/Advertise';
import Shortcut from '@views/Main/Shortcut';

const MainPage = () => {
  return (
    <>
      <Feed />
      <Skeleton
        isLoading={false}
        repeat={6}
        Skeleton={SkeletonMainItem}
        render={() => (
          <>
            <Notice />
            <Club />
            <Advertise />
            <Hot />
            <Shortcut />
          </>
        )}
      />
    </>
  );
};

export default MainPage;
