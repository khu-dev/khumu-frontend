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
import AnnouncementApi from '@api/AnnouncementApi'
import { Announcement as AnnouncementType } from '@interface/Announcement'

const SUCCESS_CODE = 200

interface State {
  announcements?: AnnouncementType[]
  notifications: Notification[]
  schedules: Schedule[]
  hots: HotArticle[]
}

const initialState = {
  announcements: undefined,
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
      AnnouncementApi.query(),
      NotificationApi.query(),
      ScheduleApi.query(),
      ArticleApi.hot(),
    ]).then((res) => {
      if (res[0].status !== SUCCESS_CODE) return

      setData({
        announcements: res[0].data.slice(-2),
        notifications: res[1].data?.data,
        schedules: res[2].data,
        hots: res[3].data?.data,
      })
      handleLoadingEnd?.()
    })
  }, [token, handleLoadingEnd])

  const { announcements, notifications, schedules, hots } = data

  return (
    <>
      <MainHeader
        title="경희대 KHUMU"
        announcementsNum={notifications.filter((item) => !item.is_read).length}
      />
      <Feed schedules={schedules} />
      <Announcement announcements={announcements} />
      <Hot hots={hots} />
      <Advertise />
      <Club />
      <Shortcut />
    </>
  )
}

export default withLoading(MainPage)
