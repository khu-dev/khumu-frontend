import { Schedule } from '@interface/Schedule'
import { caching } from '@module/cache'
import { webClient } from '@module/webClient'

export const ScheduleApi = {
  query: (refresh?: boolean) => {
    const url = '/haksa-schedules'

    return caching<Schedule[]>(
      url,
      () => webClient.get<Schedule[]>(url),
      refresh,
    )
  },
}
