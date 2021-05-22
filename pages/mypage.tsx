import React from 'react';

import CommonHeader from '@components/Header/Common';

import MyPageProfile from '@views/MyPage/Profile';
import MyPageLog from '@views/MyPage/MyPageLog';
import MyPageAccount from '@views/MyPage/MyPageAccount';
import MyPageSetFeed from '@views/MyPage/MyPageSetFeed';
import MyPageGuide from '@views/MyPage/MyPageGuide';
import MyPageSetApp from '@views/MyPage/MyPageSetApp';
import MyPageEtc from '@views/MyPage/MyPageEtc';

export default function MyPagePage() {
  return (
    <>
      <StyleTag />
      <CommonHeader
        title={'마이 페이지'}
        pathname={'/'}
        className={'header-mypage'}
        color={'#6C6C6C'}
      />
      <div className={'mypage-container'}>
        <MyPageProfile />
        <MyPageLog />
        <MyPageAccount />
        <MyPageSetFeed />
        <MyPageGuide />
        <MyPageSetApp />
        <MyPageEtc />
      </div>
    </>
  );
}

const StyleTag = () => (
  <style jsx>{`
    width: $padding-width;
    flex-grow: 1;

    padding: $padding-base;

    background-color: #e4e4e4;
  `}</style>
);
