import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { SettingResponse } from '@interface/Notification'
import { SettingKind } from '@enum/Notification'

import { NotificationApi } from '@api/NotificationApi'
import { useToken } from '@context/Token'
import { kindToLabel } from '@module/Notification'
import { AndroidToast } from '@utils/android'

import List from '@views/MyPage/Setting'
import CommonHeader from '@components/Header/Common'

const MySetNotiPage = () => {
  const router = useRouter()
  const { token } = useToken()
  const [options, setOptions] = useState<SettingResponse | null>(null)

  const goBack = () => {
    router.back()
  }

  const updateSetting = (id: number, status: boolean, setActive: Function) => {
    NotificationApi.update({ id, status: !status }).then(() => {
      AndroidToast('수정되었습니다')
      setActive(!status)
    })
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
      <List
        list={Object.values(SettingKind).map((key) => ({
          key,
          label: kindToLabel[key],
        }))}
        data={options}
        updateSetting={updateSetting}
      />
    </>
  )
}

export default MySetNotiPage
