import { Club } from '@interface/Club'
import { DataObj } from '@interface/Response'
import { caching } from '@module/cache'
import { webClient } from '@module/webClient'

export const ClubApi = {
  query: (refresh?: boolean) => {
    const url = '/clubs'

    return caching(url, () => webClient.get<DataObj<Club[]>>(url), refresh)
  },
  categories: () => webClient.get<DataObj<string[]>>(`/club-categories`),
}
