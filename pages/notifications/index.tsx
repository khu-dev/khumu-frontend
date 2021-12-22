import React, { useEffect, useState } from 'react'
import CommonHeader from '@components/Header/Common'
import { color } from '@constants/theme'
import { NotificationApi } from '@src/api/NotificationApi'
import Notifications, { Setting } from '@views/Notifications'
import { useRouter } from 'next/router'
import { Notification } from '@interface/Notification'
import { useToken } from '@src/context/Token'
import Skeleton from '@src/components/Skeleton'
import SkeletonNotifications from '@src/components/Skeleton/Notifications'

let windowHeight
const elementHeight = 72
if (process.browser && typeof window !== undefined) {
  windowHeight = window.innerHeight * 1.5
}

export default function NotificationsPage() {
  const router = useRouter()
  const { token } = useToken()
  const [data, setData] = useState<{ notifications: Notification[] }>({
    notifications: [null],
  })
  const [length, setLength] = useState(Math.floor(windowHeight / elementHeight))

  const infiniteFetch = () => {
    setLength((prev) => prev + length)
  }

  const goBack = () => {
    router.back()
  }

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await NotificationApi.query()

      if (res.status === 200) {
        setData({
          notifications: res.data?.data,
        })
      }
    }

    fetchData()
  }, [token])

  const { notifications } = data

  return (
    <>
      <CommonHeader
        title={'알림'}
        handleRouter={goBack}
        className={'header-notifications'}
        color={color.main}
      />
      <Setting />
      <Skeleton
        isLoading={notifications[0] === null}
        repeat={10}
        Skeleton={SkeletonNotifications}
        render={(props) => (
          <Notifications
            notifications={notifications?.slice(0, length)}
            fetchIndex={length}
            infiniteFetch={infiniteFetch}
            {...props}
          />
        )}
      />
    </>
  )
}
