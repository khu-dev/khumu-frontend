import { Club } from '@interface/Club'
import { DataObj } from '@interface/Response'
import { webClient } from '@module/webClient'

export const ClubApi = {
  query: () => webClient.get<DataObj<Club[]>>(`/clubs`),
  categories: () => webClient.get<DataObj<string[]>>(`/club-categories`),
}
