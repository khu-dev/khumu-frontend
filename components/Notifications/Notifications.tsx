import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

import { Notification } from '@interface/Notification'

import { NotificationApi } from '@api/NotificationApi'
import { color } from '@constants/theme'

import NotiItem from './Item'
import { Empty } from './Empty'
import NotificationSwiper from '@components/Notifications/Swipe'
import WithRead from './WithRead'

interface Props {
  notifications: Notification[]
  fetchIndex: number
  infiniteFetch(): void
}

const Notifications: FC<Props> = ({
  notifications,
  fetchIndex,
  infiniteFetch,
}) => {
  useEffect(() => {
    NotificationApi.read('all')
  }, [])

  return (
    <>
      {notifications?.length > 0 ? (
        notifications.map((item, index) => (
          <WithRead key={item.id} is_read={item.is_read}>
            {(isRead, handleRead, handleDelete) => (
              <NotificationSwiper
                handleRead={() => handleRead(item.id)}
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
            )}
          </WithRead>
        ))
      ) : (
        <Empty text={'현재 알림이 없습니다.'} />
      )}
    </>
  )
}

export default Notifications
