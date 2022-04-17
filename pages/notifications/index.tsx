import React, { useEffect, useState } from 'react'

import { Notification } from '@interface/Notification'

import { NotificationApi } from '@api/NotificationApi'
import { color } from '@constants/theme'
import { useLoading } from '@context/Loading'
import { useToken } from '@context/Token'

import Skeleton from '@components/Common/Skeleton'
import { SkeletonNotifications } from '@components/Common/Skeleton'
import { CommonHeader } from '@components/Common/Header'
import Notifications, { Setting } from '@components/Notifications'
import withLoading from '@hoc/withLoading'

let WINDOW_HEIGHT: number
const ELEMENT_HEIGHT = 72
if (process.browser && typeof window !== undefined) {
  WINDOW_HEIGHT = window.innerHeight * 1.5
}

const NotificationsPage = () => {
  const { token } = useToken()
  const { isLoading, handleLoadingEnd } = useLoading()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [length, setLength] = useState(
    Math.floor(WINDOW_HEIGHT / ELEMENT_HEIGHT),
  )

  const infiniteFetch = () => {
    setLength((prev) => prev + length)
  }

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await NotificationApi.query(true)

      if (res.status === 200) {
        setNotifications(res.data?.data)
        handleLoadingEnd?.()
      }
    }

    fetchData()
  }, [token, handleLoadingEnd])

  return (
    <>
      <CommonHeader
        center="알림"
        color={color.main}
        backgroundColor={color.white}
      />
      <Setting />
      <Skeleton
        isLoading={isLoading}
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

export default withLoading(NotificationsPage)
