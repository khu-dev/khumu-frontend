import React, { useState } from 'react';

// import Skeleton from '@components/Skeleton';
// import SkeletonMainItem from '@components/Skeleton/Main/Item';
import MainHeader from '@components/Header/Main';
import Feed from '@views/Main/Feed';
import Hot from '@views/Main/Hot';
import Club from '@views/Main/Club';
import Notice from '@views/Main/Notice';
import Advertise from '@views/Main/Advertise';
import Shortcut from '@views/Main/Shortcut';
import { useToken } from '@context/Token';
import { fetchNotifications } from '@api/api-notifications';

const MainPage = () => {
  const { token } = useToken();
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
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

  React.useEffect(() => {
    const fetchList = async () => {
      if (!isLoading) setLoading(true);

      const {
        data: { data },
      } = await fetchNotifications.select();

      if (data.length > 0) {
        setList(data);
        setLoading(false);
      }
    };

    token && fetchList();
  }, [token]);

  const unreads = list.filter((item) => !item.is_read);
  console.log(unreads);

  return (
    <>
      <MainHeader unreads={unreads} />
      <Feed />
      <Notice />
      <Hot />
      <Advertise />
      <Club />
      <Shortcut />
    </>
  );
};

export default MainPage;
