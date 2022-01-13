import React from 'react'
import styled from '@emotion/styled'

import { box } from '@constants/theme'
import { useUser } from '@context/User'

import CommonHeader from '@components/Header/Common'
import * as Page from '@components/MyPage'

export default function MyPagePage() {
  const {
    user: { nickname, department, student_number, profile_image },
  } = useUser()

  return (
    <>
      <CommonHeader
        left="마이 페이지"
        backgroundColor="#e4e4e4"
        color="#6C6C6C"
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
