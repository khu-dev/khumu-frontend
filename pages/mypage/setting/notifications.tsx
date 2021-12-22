//@ts-nocheck

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CommonHeader from '@components/Header/Common'
import SetNoti from '@views/MyPage/Setting'
import { NotificationApi } from '@src/api/NotificationApi'
import { NotificationOptions } from '@interface/Notification'
import { AndroidToast } from '@utils/android'
import { useToken } from '@src/context/Token'

// interface Props {
//   options: NotificationOptions;
// }

const MySetNotiPage = () =>
  // { options }: Props
  {
    const router = useRouter()
    const { token } = useToken()
    const [options, setOptions] = useState<NotificationOptions[]>([])

    const goBack = () => {
      router.back()
    }

    const updateSetting = async (id, status, setActive) => {
      const result = await NotificationApi.update({ id, status: !status })

      console.log(result)

      AndroidToast('푸시알림 설정 수정')
      setActive(!status)
    }

    useEffect(() => {
      if (!token) return

      const fetchData = async () => {
        const res = await NotificationApi.options()

        if (res.status === 200) {
          setOptions(res.data?.data)
        }
      }

      fetchData()
    }, [token])

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
          data={options}
          updateSetting={updateSetting}
        />
      </>
    )
  }

export default MySetNotiPage

// export const getServerSideProps = async () => {
//   const res = await Promise.all([NotificationApi.options()]);

//   return {
//     props: {
//       options: res[0].data?.data,
//     },
//   };
// };
