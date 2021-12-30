import { Schedule } from '@src/interface'
import { webClient } from 'src/module'

export const ScheduleApi = {
  query: () => webClient.get<Schedule[]>(`/haksa-schedules`),
}
