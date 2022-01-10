import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

import { NotificationApi } from '@api/NotificationApi'
import { color } from '@constants/theme'
import NotificationSwiper from '@components/Swipe'
import { AndroidToast } from '@utils/android'
import NotiItem from './Item'
import { Empty } from './Empty'
import {
  Notification as NotificationType,
  ReadRequest,
} from '@interface/Notification'

interface Props {
  item: NotificationType
  index: number
  fetchIndex: number
  infiniteFetch(): void
}

const Notification: FC<Props> = ({
  item,
  index,
  fetchIndex,
  infiniteFetch,
}) => {
  const [isRead, setRead] = useState(item.is_read)

  const handleDelete = async (notiId: number) => {
    const { data } = await NotificationApi.delete(notiId)

    if (data) {
      alert(data?.message)
    }

    AndroidToast('삭제되었습니다')
  }

  const handleRead = async (notiId: ReadRequest = 'all') => {
    if (!isRead) {
      const { data } = await NotificationApi.read(notiId)
      setRead(true)
      console.log('read noti', data)
    }
  }

  return (
    <NotificationSwiper
      handleClick={() => handleRead(item.id)}
      handleDelete={() => handleDelete(item.id)}
    >
      <Link href={item.link || ''} passHref>
        <a
          target={item.link ? '_blank' : undefined}
          rel={'noreferrer'}
          css={css`
            width: 100%;
            color: ${color.black};
          `}
        >
          <NotiItem
            index={index}
            fetchIndex={fetchIndex}
            infiniteFetch={infiniteFetch}
          >
            <NotiItem.Icon isRead={isRead} />
            <NotiItem.Contents>
              <NotiItem.Title title={item.title} />
              <NotiItem.Kind kind={item.kind} />
              <NotiItem.Description content={item.content} />
            </NotiItem.Contents>
            <NotiItem.Day day={item.created_at} />
          </NotiItem>
        </a>
      </Link>
    </NotificationSwiper>
  )
}

const Notifications = ({
  notifications,
  ...rest
}: {
  notifications: NotificationType[]
  fetchIndex: number
  infiniteFetch(): void
}) => {
  useEffect(() => {
    NotificationApi.read('all')
  }, [])

  return (
    <>
      {notifications?.length > 0 ? (
        notifications.map((item, index) => (
          <Notification key={item.id} item={item} index={index} {...rest} />
        ))
      ) : (
        <Empty text={'현재 알림이 없습니다.'} />
      )}
    </>
  )
}

export default Notifications
