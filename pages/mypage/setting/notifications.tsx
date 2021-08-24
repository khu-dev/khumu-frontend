import React from 'react';
import { useRouter } from 'next/router';
import CommonHeader from '@components/Header/Common';
import SetNoti from '@views/MyPage/Setting';

const MySetNotiPage = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <CommonHeader
        title={'알림설정'}
        handleRouter={goBack}
        className={'header-mypage-edit'}
        color={'#6C6C6C'}
      />
      <SetNoti
        list={[
          { subject: '핫 게시글 알림' },
          { subject: '팔로우 작성 알림' },
          { subject: '쿠뮤 공지 알림' },
          { subject: '학교 소식 알림' },
        ]}
      />
    </>
  );
};

export default MySetNotiPage;
