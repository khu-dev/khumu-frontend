import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CommonHeader from '@components/Header/Common';
import SetNoti from '@views/MyPage/Setting';
import { fetchNotifications } from '@api/api-notifications';
import { NotificationsOptions } from '@interface/response-notifications';
import { AndroidToast } from '@utils/android';

const MySetNotiPage = () => {
  const router = useRouter();
  const [data, setData] = useState<{
    [key: string]: NotificationsOptions;
  }>({});

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNotifications.options();

      console.log(result);
      if (result.status === 200) {
        setData(result.data.data);
      }
    };

    fetchData();
  }, []);

  const updateSetting = async (id, status, setActive) => {
    const result = await fetchNotifications.update({ id, status: !status });

    console.log(result);

    AndroidToast('푸시알림 설정 수정');
    setActive(!status);
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
          { subject: '핫 게시글 알림', key: 'new_hot_article' },
          {
            subject: '팔로우 작성 알림',
            key: 'new_announcement_of_following_author',
          },
          { subject: '쿠뮤 공지 알림', key: 'khumu_service_notification' },
          { subject: '학교 소식 알림', key: 'khumu_notification' },
        ]}
        data={data}
        updateSetting={updateSetting}
      />
    </>
  );
};

export default MySetNotiPage;
