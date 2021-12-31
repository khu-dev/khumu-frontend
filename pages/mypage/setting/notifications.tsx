import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CommonHeader from '@components/Header/Common'
import List from '@views/MyPage/Setting'
import { NotificationApi } from '@src/api/NotificationApi'
import { SettingResponse } from '@interface/Notification'
import { AndroidToast } from '@utils/android'
import { useToken } from '@src/context/Token'
import { SettingKind } from '@src/enum/Notification'
import { kindToLabel } from '@src/module/Notification'

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
