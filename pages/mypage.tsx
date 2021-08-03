import React, { useEffect } from 'react';

import CommonHeader from '@components/Header/Common';
import * as Page from '@views/MyPage';
import { fetchUsers } from '@api/api-users';
import { useToken } from '@context/Token';

export default function MyPagePage() {
  const { token } = useToken();

  useEffect(() => {
    const fetchData = async () => {
      console.log('start');

      const result = await fetchUsers.select();

      console.log(result);
    };

    token && fetchData();
  }, [token]);

  return (
    <>
      <CommonHeader
        title={'마이 페이지'}
        pathname={'/'}
        className={'header-mypage'}
        color={'#6C6C6C'}
      />
      <div className={'mypage-container'}>
        <Page.MyProfile
          name={'가나다'}
          department={'가나다라다공학과'}
          studentNumber={'2021102938'}
        />
        <Page.MyLog />
        <Page.MyAccount />
        <Page.MySetFeed />
        <Page.MyGuide />
        <Page.MySetApp />
        <Page.MyEtc />
      </div>
    </>
  );
}
