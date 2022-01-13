import { FC, useState } from 'react'

import { ReadRequest } from '@interface/Notification'

import { NotificationApi } from '@api/NotificationApi'
import { AndroidToast } from '@utils/android'

interface Props {
  is_read: boolean
  children: (
    isRead: boolean,
    handleRead: (notiId?: ReadRequest) => Promise<void>,
    handleDelete: (notiId: number) => Promise<void>,
  ) => JSX.Element
}

const WithRead: FC<Props> = ({ is_read, children }) => {
  const [isRead, setRead] = useState(is_read)

  const handleRead = async (notiId: ReadRequest = 'all') => {
    if (!isRead) {
      await NotificationApi.read(notiId)
      setRead(true)
    }
  }

  const handleDelete = async (notiId: number) => {
    const { data } = await NotificationApi.delete(notiId)

    if (data) {
      alert(data?.message)
    }

    AndroidToast('삭제되었습니다')
  }

  return children(isRead, handleRead, handleDelete)
}

export default WithRead
