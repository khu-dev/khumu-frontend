import React, { useEffect, useState } from 'react'

import { HotArticle } from '@interface/HotArticle'
import { Notification } from '@interface/Notification'
import { Schedule } from '@interface/Schedule'

import { ArticleApi } from '@api/ArticleApi'
import { NotificationApi } from '@api/NotificationApi'
import { ScheduleApi } from '@api/ScheduleApi'
import { useToken } from '@context/Token'

import Skeleton from '@components/Skeleton'
import SkeletonMainItem from '@components/Skeleton/Main/Item'
import { MainHeader } from '@components/Header'
import { Feed, Hot, Club, Announcement, Shortcut, Advertise } from '@views/Main'

const SUCCESS_CODE = 200

interface State {
  notifications: Notification[]
  schedules: Schedule[]
  hots: HotArticle[]
}

const initialState = {
  notifications: [],
  schedules: [],
  hots: [],
}

const MainPage = () => {
  const { token } = useToken()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<State>(initialState)

  useEffect(() => {
    if (!token) return

    Promise.all([
      NotificationApi.query(),
      ScheduleApi.query(),
      ArticleApi.hot(),
    ]).then((res) => {
      if (res[0].status !== SUCCESS_CODE) return

      setData({
        notifications: res[0].data?.data,
        schedules: res[1].data,
        hots: res[2].data?.data,
      })
      setLoading(false)
    })
  }, [token])

  const { notifications, schedules, hots } = data

  return (
    <>
      <MainHeader
        title="경희대 KHUMU"
        announcementsNum={notifications.filter((item) => !item.is_read).length}
      />
      <Feed schedules={schedules} />
      <Skeleton
        isLoading={loading}
        repeat={6}
        Skeleton={SkeletonMainItem}
        render={() => (
          <>
            <Announcement />
            <Hot hots={hots} />
            <Advertise />
            <Club />
            <Shortcut />
          </>
        )}
      />
    </>
  )
}

export default MainPage
