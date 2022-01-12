import React, { useEffect, useRef, useState } from 'react'

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
const REFRESH_TIME = 1000 * 60 * 10

interface State {
  announcements: AnnouncementType[]
  notifications: Notification[]
  schedules: Schedule[]
  hots: HotArticle[]
}

const initialState = {
  announcements: [],
  notifications: [],
  schedules: [],
  hots: [],
}

const MainPage = () => {
  const initRef = useRef<boolean>(true)
  const { token } = useToken()
  const { handleLoadingEnd } = useLoading()
  const [data, setData] = useState<State>(initialState)

  useEffect(() => {
    if (!token) return

    const fetchData = (refresh: boolean) => {
      Promise.all([
        NotificationApi.query(true),
        ScheduleApi.query(refresh),
        ArticleApi.hot(refresh),
        AnnouncementApi.query(refresh),
      ]).then((res) => {
        initRef.current = false

        if (res[0].status !== SUCCESS_CODE) return

        setData({
          notifications: res[0].data?.data,
          schedules: res[1].data,
          hots: res[2].data?.data,
          announcements: res[3].data.slice(-2),
        })
        handleLoadingEnd?.()
      })
    }

    const timer = setInterval(() => {
      fetchData(true)
    }, REFRESH_TIME)

    initRef.current && fetchData(false)

    return () => {
      clearInterval(timer)
    }
  }, [token, handleLoadingEnd])

  const { announcements, notifications, schedules, hots } = data

  return (
    <>
      <MainHeader
        title="경희대 KHUMU"
        notificationsNum={notifications.filter((item) => !item.is_read).length}
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
