import axios from 'axios'
import { Announcement } from '@interface/Announcement'
import { getToken } from '@utils/token'

const AnnouncementApi = {
  query: () => {
    const token = getToken()

    return axios.get<Announcement[]>(
      'https://khumu-notice-batch-spring.du.r.appspot.com/api/announcements/all',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
  },
}

export default AnnouncementApi
