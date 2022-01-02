import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Notification } from '@interface/Notification'

import { NotificationApi } from '@api/NotificationApi'
import { color } from '@constants/theme'
import { useToken } from '@context/Token'

import Skeleton from '@components/Skeleton'
import SkeletonNotifications from '@components/Skeleton/Notifications'
import CommonHeader from '@components/Header/Common'
import Notifications, { Setting } from '@views/Notifications'

let WINDOW_HEIGHT: number
const ELEMENT_HEIGHT = 72
if (process.browser && typeof window !== undefined) {
  WINDOW_HEIGHT = window.innerHeight * 1.5
}

export default function NotificationsPage() {
  const router = useRouter()
  const { token } = useToken()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [length, setLength] = useState(
    Math.floor(WINDOW_HEIGHT / ELEMENT_HEIGHT),
  )

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
        setNotifications(res.data?.data)
      }
    }

    fetchData()
  }, [token])

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
