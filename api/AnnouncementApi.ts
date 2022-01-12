import axios from 'axios'
import { Announcement } from '@interface/Announcement'
import { getToken } from '@utils/token'
import { caching, saveCache } from '@module/cache'

const AnnouncementApi = {
  query: (refresh?: boolean) => {
    const token = getToken()
    const url =
      'https://khumu-notice-batch-spring.du.r.appspot.com/api/announcements/all'

    axios.interceptors.response.use((res) => saveCache(res))

    return caching(
      url,
      () =>
        axios.get<Announcement[]>(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      refresh,
    )
  },
}

export default AnnouncementApi
