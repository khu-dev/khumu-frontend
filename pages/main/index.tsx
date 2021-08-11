import React from 'react';

// import Skeleton from '@components/Skeleton';
// import SkeletonMainItem from '@components/Skeleton/Main/Item';
import Feed from '@views/Main/Feed';
import Hot from '@views/Main/Hot';
import Club from '@views/Main/Club';
import Notice from '@views/Main/Notice';
import Advertise from '@views/Main/Advertise';
import Shortcut from '@views/Main/Shortcut';

const MainPage = () => {
  //   const [ld, setld] = React.useState(true);

  //   setTimeout(() => {
  //     setld(false);
  //   }, 1000);

  //   return (
  //     <>
  //       <Feed />
  //       <Skeleton
  //         isLoading={ld}
  //         repeat={6}
  //         Skeleton={SkeletonMainItem}
  //         render={() => (
  //           <>
  //             <Notice />
  //             <Club />
  //             <Advertise />
  //             <Hot />
  //             <Shortcut />
  //           </>
  //         )}
  //       />
  //     </>
  //   );
  return (
    <>
      <Feed />
      <Notice />
      <Club />
      <Advertise />
      <Hot />
      <Shortcut />
    </>
  );
};

export default MainPage;
