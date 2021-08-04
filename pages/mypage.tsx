import React from 'react';

import CommonHeader from '@components/Header/Common';
import * as Page from '@views/MyPage';
import { useUser } from '@context/User';

export default function MyPagePage() {
  const { username, department, student_number } = useUser();

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
          name={username}
          department={department}
          studentNumber={student_number}
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
