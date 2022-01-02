import { Schedule } from '@interface/Schedule'
import { webClient } from '@module/webClient'

export const ScheduleApi = {
  query: () => webClient.get<Schedule[]>(`/haksa-schedules`),
}
