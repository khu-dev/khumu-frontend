import React from 'react';

import CommonHeader from '@components/Header/Common';
import * as Page from '@views/MyPage';
import { useUser } from '@context/User';
import styled from '@emotion/styled';
import { box } from '@constants/theme';

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
      <Container>
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
      </Container>
    </>
  );
}

const Container = styled.div`
  width: ${box.paddingWidth};
  flex-grow: 1;

  padding: ${box.padding};

  background-color: #e4e4e4;
`;
