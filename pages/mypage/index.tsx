import React from 'react'

import CommonHeader from '@components/Header/Common'
import * as Page from '@views/MyPage'
import { useUser } from '@context/User'
import styled from '@emotion/styled'
import { box } from '@constants/theme'

export default function MyPagePage() {
  const {
    info: { nickname, department, student_number, profile_image },
  } = useUser()

  return (
    <>
      <CommonHeader
        title={'마이 페이지'}
        className={'header-mypage'}
        color={'#6C6C6C'}
        hasIcon={false}
      />
      <Container>
        <Page.MyProfile
          name={nickname || '닉네임'}
          department={department}
          studentNumber={student_number}
          profileImage={profile_image}
        />
        <Page.MyCommunity />
        {/* <Page.MyStudy /> */}
        <Page.MyGuide />
        <Page.MyEtc />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: ${box.paddingWidth};
  flex-grow: 1;

  padding: ${box.padding};

  background-color: #e4e4e4;
`
