import React, { useEffect, useState } from 'react'

import { SettingResponse } from '@interface/Notification'
import { SettingKind } from '@enum/Notification'

import { NotificationApi } from '@api/NotificationApi'
import { useToken } from '@context/Token'
import { kindToLabel } from '@module/Notification'
import { AndroidToast } from '@utils/android'

import List from '@components/MyPage/Setting'
import CommonHeader from '@components/Header/Common'

const MySetNotiPage = () => {
  const { token } = useToken()
  const [options, setOptions] = useState<SettingResponse | null>(null)

  const updateSetting = (id: number, status: boolean, setActive: Function) => {
    NotificationApi.update({ id, status: !status }).then(() => {
      AndroidToast('수정되었습니다')
      setActive(!status)
    })
  }

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await NotificationApi.options(true)

      if (res.status === 200) {
        setOptions(res.data.data)
      }
    }

    fetchData()
  }, [token])

  return (
    <>
      <CommonHeader
        center="알림설정"
        color="#6C6C6C"
        backgroundColor="#e4e4e4"
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
