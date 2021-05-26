import React from 'react';

import CommonHeader from '@components/Header/Common';
import * as Page from '@views/MyPage';

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
        <Page.MyProfile />
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

const StyleTag = () => (
  <style jsx>{`
    width: $padding-width;
    flex-grow: 1;

    padding: $padding-base;

    background-color: #e4e4e4;
  `}</style>
);
