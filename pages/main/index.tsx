import React, { useEffect, useState } from 'react'

import { HotArticle } from '@interface/HotArticle'
import { Notification } from '@interface/Notification'
import { Schedule } from '@interface/Schedule'

import { ArticleApi } from '@api/ArticleApi'
import { NotificationApi } from '@api/NotificationApi'
import { ScheduleApi } from '@api/ScheduleApi'
import { useLoading } from '@context/Loading'
import { useToken } from '@context/Token'

import { MainHeader } from '@components/Header'
import { Feed, Hot, Club, Announcement, Shortcut, Advertise } from '@views/Main'
import withLoading from '@hoc/withLoading'
// import AnnouncementApi from '@api/AnnouncementApi'
// import { Announcement as AnnouncementType } from '@interface/Announcement'

const SUCCESS_CODE = 200

interface State {
  // announcements: AnnouncementType[]
  notifications: Notification[]
  schedules: Schedule[]
  hots: HotArticle[]
}

const initialState = {
  // announcements: [],
  notifications: [],
  schedules: [],
  hots: [],
}

const MainPage = () => {
  const { token } = useToken()
  const { handleLoadingEnd } = useLoading()
  const [data, setData] = useState<State>(initialState)

  useEffect(() => {
    if (!token) return

    Promise.all([
      NotificationApi.query(),
      ScheduleApi.query(),
      ArticleApi.hot(),
      // AnnouncementApi.query(),
    ]).then((res) => {
      if (res[0].status !== SUCCESS_CODE) return

      setData({
        notifications: res[0].data?.data,
        schedules: res[1].data,
        hots: res[2].data?.data,
        // announcements: res[3].data.slice(-2),
      })
      handleLoadingEnd?.()
    })
  }, [token, handleLoadingEnd])

  const { notifications, schedules, hots } = data

  return (
    <>
      <MainHeader
        title="경희대 KHUMU"
        announcementsNum={notifications.filter((item) => !item.is_read).length}
      />
      <Feed schedules={schedules} />
      <Announcement />
      <Hot hots={hots} />
      <Advertise />
      <Club />
      <Shortcut />
    </>
  )
}

export default withLoading(MainPage)
